const GameCounts = require('../structures/GameCounts');
module.exports = async function () {
  const res = await this._makeRequest('/counts');
  if (res.raw) return res;
  return new GameCounts(res);
};
