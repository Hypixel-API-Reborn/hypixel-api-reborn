const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
module.exports = async function (query, options = { guild: false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Player = require('../structures/Player');

  query = await toUuid(query);

  const res = await this._makeRequest(`/player?uuid=${query}`);

  if (options.guild) {
    const guildRes = await this._makeRequest(`/guild?player=${query}`);
    if (!guildRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, guildRes.cause));
    }
    res.player.guild = guildRes.guild;
  }
  return new Player(res.player);
};
