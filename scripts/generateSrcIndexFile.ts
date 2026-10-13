import { readdir } from 'node:fs/promises';
import { saveFile } from './utils.ts';

(async () => {
  const structures = await readdir('src/Structures/', { recursive: true, encoding: 'utf-8' }).then((files) =>
    files
      .filter((file) => file.endsWith('.ts') && !file.endsWith('.test.ts'))
      .map((file) => [file.split('/').at(-1)!.replace(/\.ts$/, ''), `./Structures/${file}`])
      .sort(([a], [b]) => a.localeCompare(b))
  );

  const exports = ['Client', 'Errors', 'HypixelAPIRebornError', ...structures.map(([name]) => name)].map(
    (name) => `${name},`
  );

  const lines = [
    '/* eslint-disable import/no-anonymous-default-export */',
    '/* eslint-disable sort-imports/sort-imports */',
    '/* eslint-disable @stylistic/max-len */',
    '/* v8 ignore next 10000 */',
    '',
    "import Client from './Client.ts';",
    "import Errors from './Errors.ts';",
    "import HypixelAPIRebornError from './Private/HypixelAPIRebornError.ts';",
    '',
    ...structures.map(([name, path]) => `import ${name} from '${path}';`),
    '',
    "export * from './Types/index.ts';",
    "export * from './Utils/index.ts';",
    '',
    'export {',
    ...exports,
    '};',
    '',
    'export default {',
    ...exports,
    '};',
    ''
  ];

  await saveFile('./src/index.ts', lines.join('\n'));
})();
