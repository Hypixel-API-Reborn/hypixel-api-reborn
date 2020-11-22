const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, options = { includePlayerApi: false }) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return new Map();
  }

  let playerData;
  if (options.includePlayerApi) {
    const playerRes = await this._makeRequest(`/player?uuid=${query}`);
    if (!playerRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, playerRes.cause));
    }
    playerData = {
      ign: playerRes.player.displayname,
      achievements: playerRes.player.achievements
    };
  }

  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    if (options.includePlayerApi) Object.assign(profile.members[query], playerData);
    memberByProfileName.set(profile.cute_name, new SkyblockMember({
      uuid: query,
      profileName: profile.cute_name,
      gameMode: profile.gameMode || null,
      m: profile.members[query]
    }));
  }
  return memberByProfileName;
};
