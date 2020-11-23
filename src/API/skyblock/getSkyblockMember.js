const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
const getPlayer = require('../getPlayer');
module.exports = async function (query, options = { fetchPlayer: false }) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return new Map();
  }

  const player = options.fetchPlayer ? await getPlayer.call(this, query, options) : null;
  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    profile.members[query].player = player;
    memberByProfileName.set(profile.cute_name, new SkyblockMember({
      uuid: query,
      profileName: profile.cute_name,
      gameMode: profile.game_mode || null,
      m: profile.members[query]
    }));
  }
  return memberByProfileName;
};
