const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query) {
  const SkyblockMember = require('../../structures/SkyBlock/SkyblockMember');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return new Map();
  }
  const memberByProfileName = new Map();
  for (const profile of res.profiles) {
    memberByProfileName.set(profile.cute_name, new SkyblockMember({ uuid: query, m: profile.members[query] }));
  }
  return memberByProfileName;
};
