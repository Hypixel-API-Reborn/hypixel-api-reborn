const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (type, query, includeItemBytes = false) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');
  let parameters = '';
  if (type === 'PROFILE') {
    parameters = `profile=${query}`;
  }
  else if (type === 'PLAYER') {
    query = await toUuid(query);
    parameters = `player=${query}`;
  }
  else if (type === 'AUCTION') {
    parameters = `uuid=${query}`;
  }
  else throw new Error(Errors.BAD_AUCTION_FILTER);
  const res = await this._makeRequest(`/skyblock/auction?${parameters}`);
  if (res.raw) return res;

  return res.auctions.length ? res.auctions.map((a) => new Auction(a, includeItemBytes)) : [];
};
