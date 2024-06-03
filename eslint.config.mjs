import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: ['docs/**', 'tests/**', 'node_modules/*'],
    plugins: { jsdoc: jsdoc },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        ...globals.commonjs,
        ...globals.es2021,
        ...globals.node
      }
    },
    rules: {
      'jsdoc/require-jsdoc': 'error',
      'jsdoc/check-values': 'error',
      'jsdoc/valid-types': 'error',
      // 'jsdoc/require-description': 'warn',
      // 'jsdoc/no-undefined-types': 'warn',
      // 'jsdoc/require-example': 'warn',
      'max-len': ['error', { code: 120, ignoreUrls: true, ignoreComments: true }],
      'no-constant-condition': ['error', { checkLoops: false }],
      'prefer-const': ['warn', { destructuring: 'all' }],
      'no-unused-vars': ['error', { args: 'none' }],
      curly: ['warn', 'multi-line', 'consistent'],
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'no-throw-literal': 'error',
      'no-extra-semi': 'error',
      'no-console': 'error',
      semi: 'error'
    }
  }
];
