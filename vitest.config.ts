import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, 'dist/**', 'coverage/**', 'docs/**', '.github/**'],
    setupFiles: ['./vitest.setup.ts'],
    testTimeout: 30000,
    coverage: {
      exclude: [
        ...(configDefaults.coverage.exclude || []),
        'dist/**',
        'coverage/**',
        'docs/**',
        'src/Types/**',
        '.github/**'
      ]
    }
  }
});
