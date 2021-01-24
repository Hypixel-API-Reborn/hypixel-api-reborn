/**
 * @param {object} obj
 * @return {object}
 */
const single = (obj) => Object.keys(obj).reduce((pV, cV) => ({ ...pV, [cV.replace(/_[a-z]/gi, (x) => x[1].toUpperCase())]: obj[cV] }), {});
/**
 * @param {object} obj
 * @return {boolean}
 */
function validateJSON (obj) {
  return (typeof obj === 'object') && (JSON.stringify(obj)[0] === '{');
}
/**
 * @param {object} obj
 * @param {boolean} lowerCase
 * @return {object}
 */
function recursive (obj, lowerCase = false) {
  if (!validateJSON(obj)) return obj;
  return Object.keys(obj).reduce((pV, cV) => ({ ...pV, [(lowerCase ? cV : cV.toLowerCase()).replace(/_[a-z]/gi, (x) => x[1].toUpperCase())]: recursive(obj[cV]) }), {});
}
/**
 * @param {string} str
 * @return {string}
 */
function removeSnakeCaseString (str) {
  if (typeof str !== 'string') return null;
  return str.toLowerCase().replace(/_[a-z]/gi, (x) => x[1].toUpperCase());
}
module.exports = {
  single,
  recursive,
  validateJSON,
  removeSnakeCaseString
};
