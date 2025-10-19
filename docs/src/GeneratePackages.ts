import YAML from 'yaml';
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { format } from 'prettier';

async function TypeScript() {
  const dir = './TypeScript';
  const ignoredFolders = ['node_modules', 'src'];
  const packages = [];
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = `${dir}/${file}`.replaceAll('//', '/');
    if (statSync(fullPath).isDirectory()) {
      if (ignoredFolders.includes(file) === false) {
        const deeperFiles = readdirSync(`${dir}/${file}`);
        if (deeperFiles.includes('Code') && statSync(`${dir}/${file}/Code`).isDirectory()) packages.push(file);
      }
    }
  }

  const packageJSONFile = JSON.parse(readFileSync('package.json').toString('utf-8'));
  const currentPackages = packageJSONFile.workspaces.packages.filter((pkg: string) => pkg.startsWith('./JavaScript/'));
  packageJSONFile.workspaces.packages = [
    ...currentPackages,
    ...packages.map((pkg) => `${dir}/${pkg}/Code/*`).filter((pkg) => !currentPackages.includes(pkg))
  ];

  const workspaceConfig = YAML.parse(readFileSync('pnpm-workspace.yaml', 'utf-8'));
  const currentPnpm = workspaceConfig.packages.filter((pkg: string) => pkg.startsWith('./JavaScript/'));
  workspaceConfig.packages = [
    ...currentPnpm,
    ...packages.map((pkg) => `${dir}/${pkg}/Code`).filter((pkg) => !currentPnpm.includes(pkg))
  ];
  writeFileSync('pnpm-workspace.yaml', YAML.stringify(workspaceConfig));

  const prettierConfig = JSON.parse(readFileSync('../.prettierrc').toString('utf-8'));
  const formatted = await format(JSON.stringify(packageJSONFile), { ...prettierConfig, filepath: 'package.json' });
  writeFileSync('package.json', formatted);

  const templatePackage = {
    name: '@hypixel-api-reborn-docs',
    type: 'module',
    scripts: { build: 'pnpm exec tsc --build' },
    dependencies: { 'hypixel-api-reborn': 'catalog:' },
    devDependencies: { tsx: 'catalog:', typescript: 'catalog:' }
  };

  const typeScriptConfig = readFileSync('tsconfig.json').toString('utf-8');
  const gitIgnore = readFileSync('.gitignore').toString('utf-8');

  for (const docPackage of packages) {
    const packageJSON = { ...templatePackage };
    packageJSON.name = `${packageJSON.name}/typescript-${docPackage
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()}`;
    const formattedPackageJSON = await format(JSON.stringify(packageJSON), {
      ...prettierConfig,
      filepath: 'package.json'
    });

    writeFileSync(`${dir}/${docPackage}/Code/package.json`, formattedPackageJSON);
    writeFileSync(`${dir}/${docPackage}/Code/tsconfig.json`, typeScriptConfig);
    writeFileSync(`${dir}/${docPackage}/Code/.gitignore`, gitIgnore);

    if (!existsSync(`${dir}/${docPackage}/Code/src`)) mkdirSync(`${docPackage}/Code/src`, { recursive: true });
    writeFileSync(
      `${dir}/${docPackage}/Code/src/HypixelAPIReborn.ts`,
      [
        "import { Client } from 'hypixel-api-reborn';",
        '',
        "const HypixelAPIReborn = new Client('YOUR API_KEY');",
        '',
        'export default HypixelAPIReborn;',
        ''
      ].join('\n')
    );
  }
}

async function JavaScript() {
  const dir = './JavaScript';
  const ignoredFolders = ['node_modules', 'src'];
  const packages = [];
  const files = readdirSync(dir);
  for (const file of files) {
    const fullPath = `${dir}/${file}`.replaceAll('//', '/');
    if (statSync(fullPath).isDirectory()) {
      if (ignoredFolders.includes(file) === false) {
        const deeperFiles = readdirSync(`${dir}/${file}`);
        if (deeperFiles.includes('Code') && statSync(`${dir}/${file}/Code`).isDirectory()) packages.push(file);
      }
    }
  }

  const packageJSONFile = JSON.parse(readFileSync('package.json').toString('utf-8'));
  const currentPackages = packageJSONFile.workspaces.packages.filter((pkg: string) => pkg.startsWith('./TypeScript/'));
  packageJSONFile.workspaces.packages = [
    ...currentPackages,
    ...packages.map((pkg) => `${dir}/${pkg}/Code/*`).filter((pkg) => !currentPackages.includes(pkg))
  ];

  const workspaceConfig = YAML.parse(readFileSync('pnpm-workspace.yaml', 'utf-8'));
  const currentPnpm = workspaceConfig.packages.filter((pkg: string) => pkg.startsWith('./TypeScript/'));
  workspaceConfig.packages = [
    ...currentPnpm,
    ...packages.map((pkg) => `${dir}/${pkg}/Code`).filter((pkg) => !currentPnpm.includes(pkg))
  ];
  writeFileSync('pnpm-workspace.yaml', YAML.stringify(workspaceConfig));

  const prettierConfig = JSON.parse(readFileSync('../.prettierrc').toString('utf-8'));
  const formatted = await format(JSON.stringify(packageJSONFile), { ...prettierConfig, filepath: 'package.json' });
  writeFileSync('package.json', formatted);

  const templatePackage = {
    name: '@hypixel-api-reborn-docs',
    type: 'module',
    dependencies: { 'hypixel-api-reborn': 'catalog:' }
  };

  const gitIgnore = readFileSync('.gitignore').toString('utf-8');

  for (const docPackage of packages) {
    const packageJSON = { ...templatePackage };
    packageJSON.name = `${packageJSON.name}/javascript-${docPackage
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()}`;
    const formattedPackageJSON = await format(JSON.stringify(packageJSON), {
      ...prettierConfig,
      filepath: 'package.json'
    });

    writeFileSync(`${dir}/${docPackage}/Code/package.json`, formattedPackageJSON);
    writeFileSync(`${dir}/${docPackage}/Code/.gitignore`, gitIgnore);

    if (!existsSync(`${dir}/${docPackage}/Code/src`)) mkdirSync(`${docPackage}/Code/src`, { recursive: true });
    writeFileSync(
      `${dir}/${docPackage}/Code/src/HypixelAPIReborn.js`,
      [
        "import { Client } from 'hypixel-api-reborn';",
        '',
        "const HypixelAPIReborn = new Client('YOUR API_KEY');",
        '',
        'export default HypixelAPIReborn;',
        ''
      ].join('\n')
    );
  }
}

(async () => {
  const packageJSONFile = JSON.parse(readFileSync('package.json').toString('utf-8'));
  packageJSONFile.workspaces.packages = [];

  const workspaceConfig = YAML.parse(readFileSync('pnpm-workspace.yaml', 'utf-8'));
  workspaceConfig.packages = [];
  writeFileSync('pnpm-workspace.yaml', YAML.stringify(workspaceConfig));

  const prettierConfig = JSON.parse(readFileSync('../.prettierrc').toString('utf-8'));
  const formatted = await format(JSON.stringify(packageJSONFile), { ...prettierConfig, filepath: 'package.json' });
  writeFileSync('package.json', formatted);

  await TypeScript();
  await JavaScript();
})();
