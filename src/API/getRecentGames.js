const toUuid = require('../utils/toUuid');
const Errors = require('../Errors');
module.exports = async function (query) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const RecentGame = require('../structures/RecentGame');
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/recentgames?uuid=${query}`);
  if (res.raw) return res;
  if (0 === res.games.length) {
    return [];
  }
  return res.games.map((x) => new RecentGame(x));
};
