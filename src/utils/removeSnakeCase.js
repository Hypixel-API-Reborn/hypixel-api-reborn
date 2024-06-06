const single = (obj) => {
  Object.keys(obj).reduce((pV, cV) => ({ ...pV, [cV.replace(/_[a-z]/gi, (x) => x[1].toUpperCase())]: obj[cV] }), {});
};

// eslint-disable-next-line jsdoc/require-jsdoc
function validateJSON(obj) {
  return 'object' === typeof obj && '{' === JSON.stringify(obj)[0];
}

// eslint-disable-next-line jsdoc/require-jsdoc
function recursive(obj, lowerCase = false) {
  if (!validateJSON(obj)) return obj;
  return Object.keys(obj).reduce(
    (pV, cV) => ({
      ...pV,
      [(lowerCase ? cV : cV.toLowerCase()).replace(/_[a-z]/gi, (x) => x[1].toUpperCase())]: recursive(obj[cV])
    }),
    {}
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
function removeSnakeCaseString(str) {
  if ('string' !== typeof str) return null;
  return str.toLowerCase().replace(/_[a-z]/gi, (x) => x[1].toUpperCase());
}

module.exports = {
  single,
  recursive,
  validateJSON,
  removeSnakeCaseString
};
