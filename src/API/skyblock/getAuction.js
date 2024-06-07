const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (type, query, includeItemBytes = false) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');
  let filter;
  if ('PROFILE' === type) {
    filter = 'profile';
  } else if ('PLAYER' === type) {
    query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
    filter = 'player';
  } else if ('AUCTION' === type) {
    filter = 'uuid';
  } else {
    throw new Error(Errors.BAD_AUCTION_FILTER);
  }
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/auction?${filter}=${query}`);
  if (res.raw) return res;
  return res.auctions.length ? res.auctions.map((a) => new Auction(a, includeItemBytes)) : [];
};
