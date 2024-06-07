module.exports = {
  isStrArray: (input) => Array.isArray(input) || 'string' === typeof input,
  strToArray: (input) => [input].flat()
};
