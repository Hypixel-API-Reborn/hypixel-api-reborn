/* eslint-disable import/no-anonymous-default-export */
import enforceTypeImportsPath from './rules/enforceTypeImportsPath.js';
import enforceUtilsImportsPath from './rules/enforceUtilsImportsPath.js';

export default {
  rules: { 'enforce-type-imports-path': enforceTypeImportsPath, 'enforce-utils-imports-path': enforceUtilsImportsPath }
};
