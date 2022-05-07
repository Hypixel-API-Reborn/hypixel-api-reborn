const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
const getSkyblockBingo = require('./getSkyblockBingo');
module.exports = async function (query, {fetchBingoData= false}) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const PlayerBingo = require('../../structures/SkyBlock/PlayerBingo');
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/uuid?player=${query}`);
  if (res.raw) return res;
  let bingoData = null;
  if (fetchBingoData) bingoData = await getSkyblockBingo.call(this);

  return new PlayerBingo(data, bingoData);
};
