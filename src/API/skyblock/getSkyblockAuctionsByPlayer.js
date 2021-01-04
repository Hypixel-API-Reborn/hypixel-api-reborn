const Errors = require('../../Errors');
const toUuid = require('../../utils/toUuid');
module.exports = async function (query, includeItemBytes = false) {
  if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');
  query = await toUuid(query);
  const res = await this._makeRequest(`/skyblock/auction?player=${query}`);

  return res.auctions.length ? res.auctions.map(a => new Auction(a, includeItemBytes)) : [];
};
