const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
  const House = require('../../structures/House');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/housing/houses?player=${query}`);
  if (res.raw) return res;
  return res.length ? res.map((b) => new House(b)) : [];
};
