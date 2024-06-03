const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (type, query, includeItemBytes = false) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');
  let filter = '';
  if (type === 'PROFILE') {
    filter = 'profile';
  } else if (type === 'PLAYER') {
    query = await toUuid(query, this.options.mojangCacheTime, this.options.useThirdPartyAPI);
    filter = 'player';
  } else if (type === 'AUCTION') {
    filter = 'uuid';
  } else {
    throw new Error(Errors.BAD_AUCTION_FILTER);
  }
  const res = await this._makeRequest(`/skyblock/auction?${filter}=${query}`);
  if (res.raw) return res;

  return res.auctions.length ? res.auctions.map((a) => new Auction(a, includeItemBytes)) : [];
};
