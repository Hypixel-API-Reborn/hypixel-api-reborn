import { AST_NODE_TYPES, ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator((name) => name);
const typesImportRegex = /^((?:\.\.\/)+Types\/)(?!index\.ts$)[^/]+\.ts$/;

export default createRule({
  name: 'eslint-enforce-type-imports-path',
  defaultOptions: [{ always: true }],
  meta: {
    docs: { description: 'Block importing types from the non index.ts' },
    messages: { usingBadTypeImport: 'Type imports should be imported from the index.ts for consistency' },
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
        const match = typesImportRegex.exec(node.source.value);
        if (!match) return;
        context.report({
          node,
          messageId: 'usingBadTypeImport',
          fix: (fixer) => fixer.replaceText(node.source, `'${match[1]}index.ts'`)
        });
      }
    };
  }
});
