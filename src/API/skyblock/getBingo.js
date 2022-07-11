module.exports = async function () {
  const BingoData = require('../../structures/Skyblock/Static/BingoData.js');

  const res = await this._makeRequest('/resources/skyblock/election');
  if (res.raw) return res;

  return new BingoData(res);
};
