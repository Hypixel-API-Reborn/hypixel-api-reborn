module.exports = async function () {
  const Booster = require('../structures/Boosters/Booster');
  const res = await this._makeRequest('/boosters');
  if (res.raw) return res;
  return res.boosters.length ? res.boosters.map((b) => new Booster(b)).reverse() : [];
};
