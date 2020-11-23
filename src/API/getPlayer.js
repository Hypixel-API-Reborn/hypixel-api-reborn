const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const getGuild = require('./getGuild');
module.exports = async function (query, options = { guild: false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Player = require('../structures/Player');

  query = await toUuid(query);

  const res = await this._makeRequest(`/player?uuid=${query}`);

  res.player.guild = options.guild ? await getGuild.call(this, 'player', query) : null;
  return new Player(res.player, this);
};
