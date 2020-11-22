const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, options = { achievements: false }) {
  const SkyblockProfile = require('../../structures/SkyBlock/SkyblockProfile');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return [];
  }

  const achievementMap = new Map();
  if (options.achievements) {
    const uniqueUuidsArray = [...new Set((res.profiles.map(profile => Object.keys(profile.members)).flat()))];
    for (const uuid of uniqueUuidsArray) {
      const achievementsRes = await this._makeRequest(`/player?uuid=${uuid}`);
      if (!achievementsRes.success) {
        throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, achievementsRes.cause));
      }
      achievementMap.set(uuid, achievementsRes.player.achievements);
    }
  }

  const profiles = [];
  for (let i = 0; i < res.profiles.length; i++) {
    if (options.achievements) {
      for (const memberUuid of Object.keys(res.profiles[i].members)) {
        res.profiles[i].members[memberUuid].achievements = achievementMap.get(memberUuid);
      }
    }

    profiles.push({
      profile_id: res.profiles[i].profile_id,
      profile_name: res.profiles[i].cute_name,
      game_mode: res.profiles[i].game_mode,
      members: res.profiles[i].members,
      me: query
    });
  }

  return profiles.map(p => new SkyblockProfile(p));
};
