const GameCounts = require('../structures/GameCounts');
module.exports = async function () {
  const res = await this._makeRequest('/gameCounts');
  return new GameCounts(res);
};
