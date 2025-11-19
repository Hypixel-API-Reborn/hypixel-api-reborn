import { format } from 'prettier';
import { readFileSync, writeFileSync } from 'fs';
import { scanDirectory } from './Utils';

const prettierConfig = JSON.parse(readFileSync('.prettierrc').toString('utf-8'));

async function generateBaseIndex() {
  const lines: string[] = [
    '',
    '/* eslint-disable @stylistic/max-len  */',
    '',
    '',
    "import Client from './Client.js';",
    "import Errors from './Errors.js';",
    ''
  ];

  const typesPaths = await scanDirectory('./src/Types/', { replaceSrc: true });
  typesPaths.forEach((path) => {
    const fixedPath = path.replaceAll('.ts', '.js');
    lines.push(`export * from '${fixedPath}';`);
  });

  lines.push('');

  const utilsPaths = await scanDirectory('./src/Utils/', { replaceSrc: true });
  utilsPaths.forEach((path) => {
    const fixedPath = path.replaceAll('.ts', '.js');
    lines.push(`export * from '${fixedPath}';`);
  });

  lines.push('');

  const structuresPaths = await scanDirectory('./src/Structures/', { replaceSrc: true });
  const fixedStructuresPaths: string[] = [];
  const importNames: string[] = [];

  structuresPaths.forEach((path) => {
    const importName = path.split('.ts')[0].split('/')[path.split('.ts')[0].split('/').length - 1];
    importNames.push(importName);
    const fixedPath = path.replaceAll('.ts', '.js');
    fixedStructuresPaths.push(`import ${importName} from '${fixedPath}';`);
  });

  fixedStructuresPaths.sort().forEach((path) => lines.push(path));

  lines.push('');
  lines.push('export {');
  lines.push('Client,');
  lines.push('Errors,');
  importNames.sort().forEach((importName) => lines.push(`${importName},`));
  lines.push('};');

  lines.push('');

  lines.push('export default {');
  lines.push('Client,');
  lines.push('Errors,');
  importNames.sort().forEach((importName) => lines.push(`${importName},`));
  lines.push('};');

  const formatted = await format(lines.join('\n'), { ...prettierConfig, filepath: './src/index.ts' });
  writeFileSync('./src/index.ts', formatted);
}

async function generateAPIIndex() {
  const lines: string[] = ['/* v8 ignore next 400 */', ''];

  const importNames: string[] = [];

  const apiPaths = await scanDirectory('./src/API/', { goDeep: false, replaceSrc: true });
  const fixedAPIPaths: string[] = [];

  apiPaths.forEach((path) => {
    const importName = path.split('.ts')[0].split('/')[path.split('.ts')[0].split('/').length - 1];
    importNames.push(importName);
    const fixedPath = path.replaceAll('.ts', '.js').replaceAll('./API/', './');
    fixedAPIPaths.push(`import ${importName} from '${fixedPath}';`);
  });

  fixedAPIPaths.sort().forEach((path) => lines.push(path));

  lines.push('');
  lines.push('export default {');
  importNames.sort().forEach((importName) => lines.push(`${importName},`));
  lines.push('};');
  lines.push('');

  const formatted = await format(lines.join('\n'), { ...prettierConfig, filepath: './src/API/index.ts' });
  writeFileSync('./src/API/index.ts', formatted);
}

generateBaseIndex();
generateAPIIndex();
