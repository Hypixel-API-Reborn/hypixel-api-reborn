const single = (obj) => Object.keys(obj).reduce((pV, cV) => ({ ...pV, [cV.replace(/_[a-z]/gi, x => x[1].toUpperCase())]: obj[cV] }), {});
function validateJSON (obj) {
  return (typeof obj === 'object') && (JSON.stringify(obj)[0] === '{');
}
function recursive (obj) {
  if (!validateJSON(obj)) return obj;
  return Object.keys(obj).reduce((pV, cV) => ({ ...pV, [cV.replace(/_[a-z]/gi, x => x[1].toUpperCase())]: recursive(obj[cV]) }), {});
}
module.exports = {
  single,
  recursive,
  validateJSON
};
