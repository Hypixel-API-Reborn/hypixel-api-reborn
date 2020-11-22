const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, options = { includePlayerApi: false }) {
  const SkyblockProfile = require('../../structures/SkyBlock/SkyblockProfile');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return [];
  }

  const playerData = new Map();
  if (options.includePlayerApi) {
    const uniqueUuidsArray = [...new Set((res.profiles.map(profile => Object.keys(profile.members)).flat()))];
    for (const uuid of uniqueUuidsArray) {
      const playerRes = await this._makeRequest(`/player?uuid=${uuid}`);
      if (!playerRes.success) {
        throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, playerRes.cause));
      }
      playerData.set(uuid, {
        ign: playerRes.player.displayname,
        achievements: playerRes.player.achievements
      });
    }
  }

  const profiles = [];
  for (let i = 0; i < res.profiles.length; i++) {
    if (options.includePlayerApi) {
      for (const memberUuid of Object.keys(res.profiles[i].members)) {
        Object.assign(res.profiles[i].members[memberUuid], playerData.get(memberUuid));
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
