const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const isGuildID = require('../utils/isGuildID');
module.exports = async function (searchParameter, query) {
  if (!query) throw new Error(Errors.NO_GUILD_QUERY);
  const Guild = require('../structures/Guild/Guild');
  if (searchParameter === 'id' && !isGuildID(query)) throw new Error(Errors.INVALID_GUILD_ID);
  if (searchParameter === 'player') query = await toUuid(query);
  if (!['id', 'name', 'player'].includes(searchParameter)) throw new Error(Errors.INVALID_GUILD_SEARCH_PARAMETER);
  const res = await this._makeRequest(`/guild?${searchParameter}=${encodeURI(query)}`); ;
  if (!res.guild && searchParameter !== 'player') {
    throw new Error(Errors.GUILD_DOES_NOT_EXIST);
  }

  return res.guild ? new Guild(res.guild) : null;
};
