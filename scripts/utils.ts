import { format } from 'prettier';
import { join } from 'node:path';
import { readFile, readdir, writeFile } from 'node:fs/promises';

export interface ReadDirOptions {
  includeTests?: boolean;
  recursive?: boolean;
  fullPath?: boolean;
}

export async function readDir(path: string, rawOptions?: ReadDirOptions): Promise<string[]> {
  const options: Required<ReadDirOptions> = {
    includeTests: rawOptions?.includeTests ?? false,
    recursive: rawOptions?.recursive ?? true,
    fullPath: rawOptions?.fullPath ?? true
  };

  const files = await readdir(path, { recursive: options.recursive, encoding: 'utf-8' });
  return files
    .filter((file) => file.endsWith('.ts'))
    .filter((file) => options.includeTests || !file.endsWith('.test.ts'))
    .map((file) => (options.fullPath ? join(path, file) : file));
}

export async function saveFile(path: string, data: string) {
  const prettierFile = await readFile('./.prettierrc', 'utf-8');
  const prettierConfig = JSON.parse(prettierFile);
  const formatted = await format(data, { ...prettierConfig, filepath: path });
  await writeFile(path, formatted, 'utf-8');
  console.log(`File Saved - ${path}`);
}
