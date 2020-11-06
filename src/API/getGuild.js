const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const isGuildID = require('../utils/isGuildID');
module.exports = async function (searchParameter, query) {
  if (!query) throw new Error(Errors.NO_GUILD_QUERY);
  const Guild = require('../structures/Guild/Guild');
  var res;
  switch (searchParameter) {
    case 'id': {
      if (!isGuildID(query)) {
        throw new Error(Errors.INVALID_GUILD_ID);
      }
      res = await this._makeRequest(`/guild?id=${query}`);
      break;
    }
    case 'name': {
      res = await this._makeRequest(`/guild?name=${encodeURI(query)}`);
      break;
    }
    case 'player': {
      query = await toUuid(query);
      res = await this._makeRequest(`/guild?player=${query}`);
      break;
    }
    default: {
      throw new Error(Errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
  }

  if (!res.guild) {
    throw new Error(Errors.GUILD_DOES_NOT_EXIST);
  }

  return new Guild(res.guild);
};
