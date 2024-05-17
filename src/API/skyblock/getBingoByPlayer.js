const getBingo = require('./getBingo');
const toUuid = require('../../utils/toUuid');
const Errors = require('../../Errors');
module.exports = async function (query, { fetchBingoData = false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const PlayerBingo = require('../../structures/SkyBlock/PlayerBingo');
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  const res = await this._makeRequest(`/skyblock/uuid?player=${query}`);
  if (res.raw) return res;
  let bingoData = null;
  if (fetchBingoData) bingoData = await getBingo.call(this);

  return new PlayerBingo(data, bingoData);
};
