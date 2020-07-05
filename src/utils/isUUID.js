/**
 *
 * @param {string} uuid
 * @returns {boolean}
 */
module.exports = (uuid) => {
  const f = new RegExp('[0-9a-fA-F]{8}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{4}[0-9a-fA-F]{12}');
  const s = new RegExp('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}');
  const test = f.test(uuid);
  const test1 = s.test(uuid);

  return !(test === false && test1 === false);
};
