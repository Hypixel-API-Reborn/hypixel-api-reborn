import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'dist/*', 'coverage/*'],
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 30000
  }
});
