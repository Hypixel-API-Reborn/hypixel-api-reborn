import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator((name) => name);
const utilssImportRegex = /^((?:\.\.\/)+Utils\/)(?!index\.ts$)[^/]+\.ts$/;

export default createRule({
  name: 'eslint-enforce-utils-imports-path',
  defaultOptions: [{ always: true }],
  meta: {
    docs: { description: 'Block importing utils from the non index.ts' },
    messages: { usingBadUtilsImport: 'Utils imports should be imported from the index.ts for consistency' },
    schema: [],
    type: 'problem',
    fixable: 'code'
  },

  create(context) {
    return {
      /**
       * @param {import("@typescript-eslint/utils").TSESTree.ImportDeclaration} node
       */
      ImportDeclaration(node) {
        if (node.source.type !== AST_NODE_TYPES.Literal) return;
        const match = utilssImportRegex.exec(node.source.value);
        if (!match) return;
        context.report({
          node,
          messageId: 'usingBadUtilsImport',
          fix: (fixer) => fixer.replaceText(node.source, `'${match[1]}index.ts'`)
        });
      }
    };
  }
});
