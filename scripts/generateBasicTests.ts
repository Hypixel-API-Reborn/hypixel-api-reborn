import {
  type ClassDeclaration,
  type Declaration,
  type ImportDeclaration,
  type MethodDeclaration,
  ModifierFlags,
  type PropertyDeclaration,
  type PropertyName,
  ScriptTarget,
  type SourceFile,
  SyntaxKind,
  createSourceFile,
  getCombinedModifierFlags,
  isClassDeclaration,
  isComputedPropertyName,
  isEnumDeclaration,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isInterfaceDeclaration,
  isMethodDeclaration,
  isNamedImports,
  isNumericLiteral,
  isPropertyDeclaration,
  isReturnStatement,
  isStringLiteral,
  isTypeAliasDeclaration,
  isVariableStatement
} from 'typescript';
import { basename, dirname, extname, join } from 'node:path';
import { readDir, saveFile } from './utils.ts';
import { readFile } from 'node:fs/promises';

const primitiveTypes = new Set(['string', 'number', 'boolean', 'any', 'unknown', 'void']);
const ignoredImportsFolders = new Set(['Utils', 'Private']);
const allowedMethods = new Set(['toString', 'toHex', 'toCode', 'toInGameCode']);

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
  const module = isStringLiteral(node.moduleSpecifier)
    ? node.moduleSpecifier.text
    : node.moduleSpecifier.getText(sourceFile).replace(/[\'"]/g, '');
  const parsedImport: ParsedImport = { module };
  if (!node.importClause) return parsedImport;
  if (node.importClause.name) parsedImport.default = node.importClause.name.text;
  if (node.importClause.namedBindings && isNamedImports(node.importClause.namedBindings)) {
    parsedImport.named = node.importClause.namedBindings.elements.map((element) => element.name.text);
  }
  return parsedImport;
}

function getPropertyName(name: PropertyName): string | undefined {
  if (isIdentifier(name) || isStringLiteral(name) || isNumericLiteral(name)) return name.text;
  if (!isComputedPropertyName(name)) return undefined;
  if (isStringLiteral(name.expression) || isNumericLiteral(name.expression)) return name.expression.text;
  return undefined;
}

function handlePropertyDeclaration(sourceFile: SourceFile, property: PropertyDeclaration): ParsedProperty | undefined {
  const name = getPropertyName(property.name);
  if (!name) return undefined;

  let type = property.type?.getText(sourceFile) ?? 'any';
  if (property.questionToken) type = `${type} | undefined`;
  return { name, type, kind: primitiveTypes.has(type) ? 'primitive' : 'class' };
}

function extractReturnBody(sourceFile: SourceFile, method: MethodDeclaration): string | undefined {
  const returnStatement = method.body?.statements.find(isReturnStatement);
  return returnStatement?.expression?.getText(sourceFile);
}

function handleMethodDeclaration(sourceFile: SourceFile, method: MethodDeclaration): ParsedMethod {
  const parsedMethod: ParsedMethod = {
    name: method.name.getText(sourceFile),
    returnType: method.type?.getText(sourceFile) ?? 'void'
  };
  if (parsedMethod.name === 'toString') parsedMethod.body = extractReturnBody(sourceFile, method);
  return parsedMethod;
}

function handleClassDeclaration(
  sourceFile: SourceFile,
  node: ClassDeclaration
): Pick<ParsedClass, 'properties' | 'methods' | 'extending'> {
  const extendsClause = node.heritageClauses?.find((clause) => clause.token === SyntaxKind.ExtendsKeyword);
  const extending = extendsClause?.types[0]?.expression.getText(sourceFile).split('.').at(-1) ?? '';
  const properties: ParsedProperty[] = [];
  const methods: ParsedMethod[] = [];

  for (const member of node.members) {
    const modifiers = getCombinedModifierFlags(member);
    if (modifiers & (ModifierFlags.Private | ModifierFlags.Protected | ModifierFlags.Static)) continue;
    if (isPropertyDeclaration(member)) {
      const property = handlePropertyDeclaration(sourceFile, member);
      if (property) properties.push(property);
    } else if (isMethodDeclaration(member)) {
      methods.push(handleMethodDeclaration(sourceFile, member));
    }
  }
  return { properties, methods, extending };
}

async function getTypes(filePath: string): Promise<ParsedClass | undefined> {
  const fileContent = await readFile(filePath, 'utf-8');
  const sourceFile = createSourceFile(filePath, fileContent, ScriptTarget.Latest, true);
  const classDeclaration = sourceFile.statements.find(
    (statement): statement is ClassDeclaration => isClassDeclaration(statement) && statement.name !== undefined
  );
  if (!classDeclaration?.name) return undefined;

  const imports = sourceFile.statements
    .filter(isImportDeclaration)
    .map((node) => handleImportDeclaration(sourceFile, node));
  return { className: classDeclaration.name.text, ...handleClassDeclaration(sourceFile, classDeclaration), imports };
}

function getPropertyAccess(name: string): string {
  if (/^[A-Za-z_$][\w$]*$/.test(name)) return `.${name}`;
  return `[${JSON.stringify(name)}]`;
}

async function getExportedNames(filePath: string): Promise<string[]> {
  const content = await readFile(filePath, 'utf-8');
  const sourceFile = createSourceFile(filePath, content, ScriptTarget.Latest, true);
  const exportedNames: string[] = [];

  for (const node of sourceFile.statements) {
    if ((getCombinedModifierFlags(node as unknown as Declaration) & ModifierFlags.Export) === 0) continue;
    if (
      !isInterfaceDeclaration(node) &&
      !isTypeAliasDeclaration(node) &&
      !isClassDeclaration(node) &&
      !isEnumDeclaration(node) &&
      !isFunctionDeclaration(node) &&
      !isVariableStatement(node)
    ) {
      continue;
    }

    if (isVariableStatement(node)) {
      for (const declaration of node.declarationList.declarations) {
        if (isIdentifier(declaration.name)) exportedNames.push(declaration.name.text);
      }
    } else if (node.name && isIdentifier(node.name)) {
      exportedNames.push(node.name.text);
    }
  }
  return exportedNames;
}

function validTypeIsClass(type: string, ignoredTypes: string[]): boolean {
  return /^[A-Za-z_$][\w$]*$/.test(type) && !ignoredTypes.includes(type);
}

function getImportFolder(modulePath: string): string | undefined {
  return basename(dirname(modulePath));
}

async function parseFile(filePath: string, ignoredTypes: string[]): Promise<void> {
  const types = await getTypes(filePath);
  if (!types) return console.warn(`Skipping ${filePath}: no named class declaration found.`);

  const imports = [`import ${types.className} from './${types.className}.ts';`];
  const typedImports: string[] = [];

  for (const fileImport of types.imports) {
    if (ignoredImportsFolders.has(getImportFolder(fileImport.module) ?? '')) continue;
    if (types.extending && types.extending === fileImport.default) continue;
    if (fileImport.default) imports.push(`import ${fileImport.default} from '${fileImport.module}'`);
    if (fileImport.named?.length) {
      typedImports.push(`import type {${fileImport.named.join(', ')}} from '${fileImport.module}'`);
    }
  }
  imports.push("import { expect, expectTypeOf, test } from 'vitest';");

  const testCode = [
    `test('${types.className}', () => {`,
    `const data = new ${types.className}({ stats: 'meow' });`,
    'expect(data).toBeDefined();',
    `expect(data).toBeInstanceOf(${types.className});`,
    `expectTypeOf(data).toEqualTypeOf<${types.className}>();`
  ];

  for (const property of types.properties) {
    const access = getPropertyAccess(property.name);
    testCode.push(`expect(data${access}).toBeDefined();`);
    if (property.type === 'number') testCode.push(`expect(data${access}).toBeGreaterThanOrEqual(0);`);
    if (property.kind === 'class' && validTypeIsClass(property.type, ignoredTypes)) {
      testCode.push(`expect(data${access}).toBeInstanceOf(${property.type});`);
    }
    testCode.push(`expectTypeOf(data${access}).toEqualTypeOf<${property.type}>();`);
  }

  for (const method of types.methods) {
    if (!allowedMethods.has(method.name)) continue;
    testCode.push(`expect(data.${method.name}).toBeDefined();`);
    testCode.push(`expectTypeOf(data.${method.name}).toEqualTypeOf<() => ${method.returnType}>();`);
    testCode.push(`expect(data.${method.name}()).toBeDefined();`);
    if (method.name === 'toString' && method.body) {
      testCode.push(`expect(data.${method.name}()).toBe(${method.body.replaceAll('this.', 'data.')});`);
    }
    testCode.push(`expectTypeOf(data.${method.name}()).toEqualTypeOf<${method.returnType}>();`);
  }

  testCode.push('});');

  const shouldIncludeMaxLengthDisabler =
    [...imports, ...typedImports].sort((a, b) => b.length - a.length)[0].length >= 120;

  const fixedImports: string[] = [];
  if (shouldIncludeMaxLengthDisabler) fixedImports.push('/* eslint-disable @stylistic/max-len */');
  fixedImports.push(...imports);
  fixedImports.push(...typedImports);
  if (shouldIncludeMaxLengthDisabler) fixedImports.push('/* eslint-enable @stylistic/max-len */');

  const outputPath = join(dirname(filePath), `${basename(filePath, extname(filePath))}.test.ts`);
  await saveFile(outputPath, [...fixedImports, '', ...testCode].join('\n'));
  console.log(`Generated Test for ${outputPath}\n`);
}

async function getIgnoredTypes(): Promise<string[]> {
  const ignoredTypes = new Set<string>();
  const typePaths = await readDir('./src/Types/');
  for (const filePath of typePaths) {
    for (const exportedName of await getExportedNames(filePath)) ignoredTypes.add(exportedName);
  }
  return [...ignoredTypes];
}

(async () => {
  const ignoredTypes = await getIgnoredTypes();
  const structuresPath = process.argv[2] ?? './src/Structures/';
  const structurePaths = await readDir(structuresPath);
  for (const filePath of structurePaths) await parseFile(filePath, ignoredTypes);
})();
