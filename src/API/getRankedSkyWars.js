const Errors = require('../Errors');
const toUuid = require('../utils/toUuid');
module.exports = async function (query) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const SkyWarsRanked = require('../structures/MiniGames/SkyWarsRanked');
  query = await toUuid(query);
  const res = await this._makeRequest(`/player/ranked/skywars?uuid=${query}`);
  if (res.raw) return res;
  if (!res.result) return null;
  return new SkyWarsRanked(res.result);
};
