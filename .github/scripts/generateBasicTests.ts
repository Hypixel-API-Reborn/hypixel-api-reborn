import {
  ClassDeclaration,
  Declaration,
  ImportDeclaration,
  LeftHandSideExpression,
  MethodDeclaration,
  ModifierFlags,
  Node,
  ParameterDeclaration,
  PropertyDeclaration,
  ScriptTarget,
  SourceFile,
  SyntaxKind,
  createProgram,
  createSourceFile,
  forEachChild,
  getCombinedModifierFlags,
  isClassDeclaration,
  isEnumDeclaration,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isInterfaceDeclaration,
  isMethodDeclaration,
  isNamedImports,
  isPropertyDeclaration,
  isQualifiedName,
  isReturnStatement,
  isTypeAliasDeclaration,
  isVariableStatement
} from 'typescript';
import { format } from 'prettier';
import { readFileSync, writeFileSync } from 'node:fs';
import { scanDirectory } from './Utils';

const prettierConfig = JSON.parse(readFileSync('.prettierrc').toString('utf-8'));
const primitiveTypes = new Set(['string', 'number', 'boolean', 'any', 'unknown', 'void']);

interface ParsedProperty {
  name: string;
  type: string;
  kind: 'primitive' | 'class';
}

interface ParsedImport {
  module: string;
  named?: string[];
  default?: string;
}

interface ParsedMethod {
  name: string;
  returnType: string;
  parameters: ParsedProperty[];
  body?: string;
}

interface ParsedClass {
  className: string;
  properties: ParsedProperty[];
  methods: ParsedMethod[];
  imports: ParsedImport[];
  extending: string;
}

function handleImportDeclaration(sourceFile: SourceFile, node: ImportDeclaration): ParsedImport {
  const importObj: ParsedImport = { module: node.moduleSpecifier.getText(sourceFile).replace(/['"]/g, '') };
  if (!node.importClause) return importObj;
  if (node.importClause.name) importObj.default = node.importClause.name.getText(sourceFile);
  if (!node.importClause.namedBindings) return importObj;
  if (!isNamedImports(node.importClause.namedBindings)) return importObj;
  importObj.named = node.importClause.namedBindings.elements.map((element) => element.name.getText(sourceFile));
  return importObj;
}

function handlePropertyParameterDeclaration(
  sourceFile: SourceFile,
  property: PropertyDeclaration | ParameterDeclaration
): ParsedProperty {
  let type = 'any';
  if (property.type) type = property.type.getText(sourceFile);
  return { name: property.name.getText(sourceFile), type, kind: primitiveTypes.has(type) ? 'primitive' : 'class' };
}

function extractReturnBody(sourceFile: SourceFile, method: MethodDeclaration): string | undefined {
  if (!method.body) return undefined;
  const returnStmt = method.body.statements.find((statements) => isReturnStatement(statements));
  if (!returnStmt) return undefined;
  const expression = returnStmt.expression;
  if (!expression) return undefined;
  return expression.getText(sourceFile);
}

function handleMethodDeclaration(sourceFile: SourceFile, method: MethodDeclaration): ParsedMethod {
  let returnType = 'void';
  if (method.type) returnType = method.type.getText(sourceFile);
  const parameters = method.parameters.map((parameters) => handlePropertyParameterDeclaration(sourceFile, parameters));
  const info: ParsedMethod = { name: method.name.getText(sourceFile), returnType, parameters };
  if (info.name === 'toString') info.body = extractReturnBody(sourceFile, method);
  return info;
}

function getExtendingName(expr: LeftHandSideExpression): string {
  if (isIdentifier(expr)) return expr.text;
  if (isQualifiedName(expr)) return expr.right.text;
  return 'UNKNOWN';
}

function handleClassDeclaration(
  sourceFile: SourceFile,
  node: ClassDeclaration
): { properties: ParsedProperty[]; methods: ParsedMethod[]; extending: string } {
  let extending: string = '';
  if (node.heritageClauses) {
    for (const clause of node.heritageClauses) {
      if (clause.token === SyntaxKind.ExtendsKeyword) {
        const type = clause.types[0];
        if (type) extending = getExtendingName(type.expression);
      }
    }
  }

  const properties: ParsedProperty[] = [];
  const methods: ParsedMethod[] = [];
  for (const member of node.members) {
    if (isPropertyDeclaration(member)) properties.push(handlePropertyParameterDeclaration(sourceFile, member));
    if (isMethodDeclaration(member)) methods.push(handleMethodDeclaration(sourceFile, member));
  }
  return { properties, methods, extending };
}

function getTypes(filePath: string): ParsedClass {
  const imports: ParsedImport[] = [];
  let className = 'UNKNOWN';
  let extending = 'UNKNOWN';
  const properties: ParsedProperty[] = [];
  const methods: ParsedMethod[] = [];

  const fileContent = readFileSync(filePath, 'utf-8');
  const sourceFile = createSourceFile(filePath, fileContent, ScriptTarget.Latest, true);
  function visit(node: Node) {
    if (isClassDeclaration(node) && node.name) className = node.name.text;
    if (isClassDeclaration(node)) {
      const classData = handleClassDeclaration(sourceFile, node);
      extending = classData.extending;
      classData.properties.forEach((property) => properties.push(property));
      classData.methods.forEach((method) => methods.push(method));
    }
    if (isImportDeclaration(node)) imports.push(handleImportDeclaration(sourceFile, node));
    forEachChild(node, visit);
  }

  visit(sourceFile);
  return { className, properties, methods, imports, extending };
}

function getFileName(filePath: string): string {
  return filePath.split('/').pop() || 'UNKNOWN';
}

function getParentDirPath(filePath: string): string {
  return filePath.replaceAll(getFileName(filePath), '');
}

function getParentDirName(filePath: string): string {
  return getParentDirPath(filePath).slice(0, -1).split('/').reverse()[0];
}

const ignoredImportsFolders = ['Utils', 'Private'];
const allowedMethods = ['toString', 'toHex', 'toCode', 'toInGameCode'];

function parseTypeName(name: string): string {
  if (name.includes("'")) return `[${name}]`;
  return `.${name}`;
}

function getExportedNames(filePath: string): string[] {
  const program = createProgram([filePath], {});
  const sourceFile = program.getSourceFile(filePath)!;

  const exportedNames: string[] = [];

  function visit(node: Node) {
    const isExported = (getCombinedModifierFlags(node as Declaration) & ModifierFlags.Export) !== 0;

    if (isExported) {
      if (
        isInterfaceDeclaration(node) ||
        isTypeAliasDeclaration(node) ||
        isClassDeclaration(node) ||
        isEnumDeclaration(node) ||
        isFunctionDeclaration(node) ||
        isVariableStatement(node)
      ) {
        if (isVariableStatement(node)) {
          for (const decl of node.declarationList.declarations) {
            if (isIdentifier(decl.name)) exportedNames.push(decl.name.text);
          }
        } else if (node.name && isIdentifier(node.name)) {
          exportedNames.push(node.name.text);
        }
      }
    }

    forEachChild(node, visit);
  }

  visit(sourceFile);

  return exportedNames;
}

function validTypeIsClass(type: string, ignoredTypes: string[]): boolean {
  if (type.includes('{')) return false;
  if (type.includes('[')) return false;
  if (type.includes('|')) return false;
  if (type.includes("'")) return false;
  if (type.includes('"')) return false;
  if (type.includes('<')) return false;
  if (type.includes(',')) return false;
  if (type.includes(';')) return false;
  if (type.includes(' ')) return false;
  if (ignoredTypes.includes(type)) return false;
  return true;
}

async function parseFile(filePath: string, ignoredTypes: string[]) {
  console.log(`Generating Test for ${filePath}`);
  const types = getTypes(filePath);
  if (types === null) return;
  const imports: string[] = [
    '/* eslint-disable @stylistic/max-len */',
    `import ${types.className} from './${types.className}.js';`
  ];
  const typedImports: string[] = [];
  types.imports.forEach((fileImport) => {
    fileImport.module = fileImport.module.replaceAll('.js', '.ts');
    if (ignoredImportsFolders.includes(getParentDirName(fileImport.module))) return;
    fileImport.module = fileImport.module.replaceAll('.ts', '.js');
    if (types.extending !== '' && types.extending === fileImport.default) return;
    if (fileImport.default) imports.push(`import ${fileImport.default} from '${fileImport.module}'`);
    if (fileImport.named) typedImports.push(`import type {${fileImport.named.join(', ')}} from '${fileImport.module}'`);
  });
  imports.push("import { expect, expectTypeOf, test } from 'vitest';");
  const testCode: string[] = [
    `test('${types.className}', () => {`,
    `const data = new ${types.className}({ stats: 'meow' });`,
    'expect(data).toBeDefined();',
    `expect(data).toBeInstanceOf(${types.className});`,
    `expectTypeOf(data).toEqualTypeOf<${types.className}>();`
  ];
  types.properties.forEach((type) => {
    type.name = parseTypeName(type.name);
    testCode.push(`expect(data${type.name}).toBeDefined();`);
    if (type.type === 'number') testCode.push(`expect(data${type.name}).toBeGreaterThanOrEqual(0);`);
    if (type.kind === 'class' && validTypeIsClass(type.type, ignoredTypes)) {
      testCode.push(`expect(data${type.name}).toBeInstanceOf(${type.type});`);
    }
    testCode.push(`expectTypeOf(data${type.name}).toEqualTypeOf<${type.type}>();`);
  });
  types.methods.forEach((method) => {
    if (!allowedMethods.includes(method.name)) return;
    testCode.push(`expect(data.${method.name}).toBeDefined();`);
    testCode.push(`expectTypeOf(data.${method.name}).toEqualTypeOf<() => ${method.returnType}>();`);
    testCode.push(`expect(data.${method.name}()).toBeDefined();`);
    if (method.name === 'toString' && method.body) {
      testCode.push(`expect(data.${method.name}()).toBe(${method.body.replaceAll('this.', 'data.')});`);
    }
    testCode.push(`expectTypeOf(data.${method.name}()).toEqualTypeOf<${method.returnType}>();`);
  });
  testCode.push('});');

  filePath = filePath.replaceAll('.ts', '.test.ts');
  const joinedString = [...imports, ...typedImports, '/* eslint-enable @stylistic/max-len */', '', ...testCode]
    .join('\n')
    .replaceAll('\n\n\n', '\n');
  const formatted = await format(joinedString, { ...prettierConfig, filepath: filePath });
  writeFileSync(filePath, formatted);
  console.log(`Generated Test for ${filePath}\n`);
}

async function getIgnoredTypes(): Promise<string[]> {
  const ignoredTypes: string[] = [];
  const typesPaths = await scanDirectory('./src/Types/');
  for (const file of typesPaths) {
    getExportedNames(file).forEach((type) => {
      if (!ignoredTypes.includes(type)) ignoredTypes.push(type);
    });
  }

  return ignoredTypes;
}

(async () => {
  const ignoredTypes = await getIgnoredTypes();
  const structuresPaths = await scanDirectory(process.argv[2] ?? './src/Structures/');
  for (const file of structuresPaths) {
    await parseFile(file, ignoredTypes);
  }
})();
