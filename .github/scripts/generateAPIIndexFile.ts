import { format } from 'prettier';
import { readFileSync, writeFileSync } from 'fs';
import { scanDirectory } from './Utils';

const prettierConfig = JSON.parse(readFileSync('.prettierrc').toString('utf-8'));

(async () => {
  const lines: string[] = ['/* v8 ignore next 10000 */', ''];

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
})();
