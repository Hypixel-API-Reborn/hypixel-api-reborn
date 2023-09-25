module.exports = {
  isStrArray: (input) => Array.isArray(input) || typeof input === 'string',
  strToArray: (input) => [input].flat()
};
