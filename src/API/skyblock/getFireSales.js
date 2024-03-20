module.exports = async function () {
  const FireSale = require('../../structures/SkyBlock/Static/FireSale');
  const res = await this._makeRequest('/skyblock/firesales');
  if (res.raw) return res;

  return res.sales.length ? res.sales.map((a) => new FireSale(a)) : [];
};
