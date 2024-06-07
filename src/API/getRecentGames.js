const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const day3 = 1000 * 60 * 60 * 24 * 3;
module.exports = async function (query, playerData) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const RecentGame = require('../structures/RecentGame');
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/recentgames?uuid=${query}`);
  if (res.raw) return res;
  if (0 === res.games.length) {
    if (!playerData) throw new Error(Errors.PLAYER_IS_INACTIVE);
    if (Date.now() - playerData.lastLogoutTimestamp < day3) throw new Error(Errors.PLAYER_DISABLED_ENDPOINT);
    throw new Error(Errors.PLAYER_IS_INACTIVE);
  }
  return res.games.map((x) => new RecentGame(x));
};
