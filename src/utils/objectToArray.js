/**
 *
 * @param {object} object
 * @returns {Array}
 */
module.exports = (object) => {
  const array = [];

  const objectLength = Object.keys(object).length;
  for (let i = 0; i < objectLength; i++) {
    array.push(Object.keys(object)[i]);
  }
  return array;
};
