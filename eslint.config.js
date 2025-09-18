import globals from 'globals';
import prettier from 'eslint-config-prettier';
import sortImports from '@j4cobi/eslint-plugin-sort-imports';
import ts from 'typescript-eslint';

export default [
  ...ts.configs.recommended,
  prettier,
  {
    ignores: ['**/node_modules/', '**/build/', '**/pnpm-lock.yaml'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module', globals: { ...globals.es2022, ...globals.node } },
    plugins: { 'sort-imports': sortImports },
    rules: {
      'sort-imports/sort-imports': [
        'error',
        { ignoreCase: false, ignoreMemberSort: false, memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'] }
      ],
      'max-len': ['error', { code: 120, ignoreUrls: true, ignoreComments: true }],
      '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
      'no-constant-condition': ['error', { checkLoops: false }],
      'prefer-const': ['warn', { destructuring: 'all' }],
      curly: ['warn', 'multi-line', 'consistent'],
      '@typescript-eslint/no-explicit-any': 'off',
      'logical-assignment-operators': 'warn',
      'no-template-curly-in-string': 'error',
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'no-useless-constructor': 'error',
      'no-useless-assignment': 'error',
      'no-inner-declarations': 'error',
      'no-implicit-coercion': 'error',
      'no-use-before-define': 'warn',
      'no-underscore-dangle': 'warn',
      'no-unneeded-ternary': 'error',
      'default-param-last': 'error',
      'one-var': ['warn', 'never'],
      'no-inline-comments': 'warn',
      'no-empty-function': 'error',
      'no-useless-return': 'error',
      'no-useless-rename': 'warn',
      'no-useless-concat': 'warn',
      'no-throw-literal': 'error',
      'no-extend-native': 'error',
      'default-case-last': 'warn',
      'no-self-compare': 'error',
      'no-new-wrappers': 'error',
      'no-lone-blocks': 'error',
      'no-undef-init': 'error',
      'no-else-return': 'warn',
      'no-extra-semi': 'error',
      'require-await': 'warn',
      yoda: ['error', 'always'],
      'default-case': 'error',
      'dot-notation': 'error',
      'no-sequences': 'warn',
      'no-multi-str': 'warn',
      'no-lonely-if': 'warn',
      'no-new-func': 'error',
      'no-console': 'error',
      camelcase: 'warn',
      'no-var': 'warn',
      eqeqeq: 'warn',
      semi: 'error'
    }
  }
];
