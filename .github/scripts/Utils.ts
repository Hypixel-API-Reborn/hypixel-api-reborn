import { readdir } from 'fs/promises';

export interface ScanDirectoryOptions {
  goDeep?: boolean;
  replaceSrc?: boolean;
}

export async function scanDirectory(directoryPath: string, options?: ScanDirectoryOptions): Promise<string[]> {
  const parsedOptions: ScanDirectoryOptions = {
    goDeep: options?.goDeep ?? true,
    replaceSrc: options?.replaceSrc ?? false
  };
  const filePaths: string[] = [];
  const files = await readdir(directoryPath, { withFileTypes: true });

  for (const file of files) {
    const fullPath = directoryPath + file.name;
    if (file.isDirectory() && parsedOptions.goDeep) {
      const paths = await scanDirectory(`${fullPath}/`, parsedOptions);
      paths.forEach((path) => filePaths.push(path));
    } else {
      if (fullPath.endsWith('.test.ts')) continue;
      if (fullPath.endsWith('index.ts')) continue;
      filePaths.push(fullPath.replaceAll('./src/', parsedOptions.replaceSrc ? './' : './src/'));
    }
  }

  return filePaths;
}
