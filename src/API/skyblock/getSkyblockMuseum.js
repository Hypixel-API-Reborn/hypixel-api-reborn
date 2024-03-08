const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, profileId) {
  const SkyblockMuseum = require('../../structures/SkyBlock/SkyblockMuseum');
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime);
  const res = await this._makeRequest(`/skyblock/museum?uuid=${query}&profile=${profileId}`);
  if (res.raw) return res;
  return new SkyblockMuseum({
    uuid: query,
    m: res,
    profileId: profileId
  });
};
