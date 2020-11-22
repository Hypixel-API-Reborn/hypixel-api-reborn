const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, options = { achievements: false }) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return new Map();
  }

  let achievements;
  if (options.achievements) {
    const achievementsRes = await this._makeRequest(`/player?uuid=${query}`);
    if (!achievementsRes.success) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, achievementsRes.cause));
    }
    achievements = achievementsRes.player.achievements;
  }

  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    profile.members[query].achievements = achievements;
    memberByProfileName.set(profile.cute_name, new SkyblockMember({ uuid: query, profileName: profile.cute_name, m: profile.members[query] }));
  }
  return memberByProfileName;
};
