const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, options = { fetchPlayer: false }) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return new Map();
  }

  let player;
  if (options.fetchPlayer) {
    const playerRes = await this._makeRequest(`/player?uuid=${query}`);
    if (!playerRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, playerRes.cause));
    }
    const Player = require('../../structures/Player');
    player = new Player(playerRes.player, this);
  }

  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    profile.members[query].player = player || null;
    memberByProfileName.set(profile.cute_name, new SkyblockMember({
      uuid: query,
      profileName: profile.cute_name,
      gameMode: profile.game_mode || null,
      m: profile.members[query]
    }));
  }
  return memberByProfileName;
};
