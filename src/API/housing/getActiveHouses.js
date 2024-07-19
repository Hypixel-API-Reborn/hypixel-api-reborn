module.exports = async function () {
  const House = require('../../structures/House');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/housing/active');
  if (res.raw) return res;
  return res.length ? res.map((b) => new House(b)) : [];
};
