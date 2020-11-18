const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query) {
  const SkyblockProfile = require('../../structures/SkyBlock/SkyblockProfile');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/profiles?uuid=${query}`);

  if (!res.profiles || !res.profiles.length) {
    return [];
  }
  const profiles = [];
  for (let i = 0; i < res.profiles.length; i++) {
    profiles.push({
      profile_name: res.profiles[i].cute_name,
      profile_id: res.profiles[i].profile_id,
      members: res.profiles[i].members,
      me: query
    });
  }

  return profiles.map(p => new SkyblockProfile(p));
};
