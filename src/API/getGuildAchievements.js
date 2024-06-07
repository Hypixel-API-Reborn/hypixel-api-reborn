module.exports = async function () {
  const GuildAchievements = require('../structures/Static/GuildAchievements');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/guilds/achievements');
  if (res.raw) return res;
  return new GuildAchievements(res);
};
