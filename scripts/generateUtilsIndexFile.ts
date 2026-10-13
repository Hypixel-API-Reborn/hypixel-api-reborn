import { readdir } from 'node:fs/promises';
import { saveFile } from './utils.ts';

(async () => {
  const lines = await readdir('src/Utils/', { recursive: true, encoding: 'utf-8' }).then((files) =>
    files
      .filter((file) => file.endsWith('.ts') && !file.endsWith('.test.ts'))
      .filter((file) => file !== 'index.ts')
      .map((name) => `export * from './${name}';`)
      .sort((a, b) => a.localeCompare(b))
  );

  await saveFile('./src/Utils/index.ts', lines.join('\n'));
})();
