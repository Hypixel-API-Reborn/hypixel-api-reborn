const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
const getGuild = require('./getGuild');
const getRecentGames = require('./getRecentGames');
const getRankedSkyWars = require('./getRankedSkyWars');
module.exports = async function (query, options = { guild: false, recentGames: false, currentRankedSW: false }) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Player = require('../structures/Player');
  query = await toUuid(query);
  const res = await this._makeRequest(`/player?uuid=${query}`);
  if (res.raw) return res;
  if (query && !res.player) throw new Error(Errors.PLAYER_HAS_NEVER_LOGGED);
  let guild = null;
  let recentGames = null;
  let rankedSW = null;
  if (options.guild) {
    guild = getGuild.call(this, 'player', query);
  }
  if (options.recentGames) {
    recentGames = getRecentGames.call(this, query);
  }
  if (options.currentRankedSW) {
    rankedSW = getRankedSkyWars.call(this, query);
  }
  [guild, recentGames, rankedSW] = await Promise.all([guild, recentGames, rankedSW]);
  return new Player(res.player, { guild, recentGames, rankedSW });
};
