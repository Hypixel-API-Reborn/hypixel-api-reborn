const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const isGuildID = require('../utils/isGuildID');
module.exports = async function (searchParameter, query) {
  if (!query) throw new Error(Errors.NO_GUILD_QUERY);
  const Guild = require('../structures/Guild/Guild');
  if ('id' === searchParameter && !isGuildID(query)) throw new Error(Errors.INVALID_GUILD_ID);
  const isPlayerQuery = 'player' === searchParameter;
  if (isPlayerQuery) query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  if (!['id', 'name', 'player'].includes(searchParameter)) throw new Error(Errors.INVALID_GUILD_SEARCH_PARAMETER);
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/guild?${searchParameter}=${encodeURI(query)}`);
  if (res.raw) return res;
  if (!res.guild && 'player' !== searchParameter) {
    throw new Error(Errors.GUILD_DOES_NOT_EXIST);
  }

  return res.guild ? new Guild(res.guild, isPlayerQuery ? query : null) : null;
};
