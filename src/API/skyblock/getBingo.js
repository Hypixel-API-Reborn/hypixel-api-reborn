module.exports = async function () {
  const BingoData = require('../../structures/SkyBlock/Static/BingoData');

  const res = await this._makeRequest('/resources/skyblock/bingo');
  if (res.raw) return res;

  return new BingoData(res);
};
