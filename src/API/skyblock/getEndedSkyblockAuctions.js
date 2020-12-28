const PartialAuction = require('../../structures/SkyBlock/Auctions/PartialAuction');
const AuctionInfo = require('../../structures/SkyBlock/Auctions/AuctionInfo');
module.exports = async function (includeItemBytes = false) {
  const res = await this._makeRequest('/skyblock/auctions_ended', false);
  return {
    info: new AuctionInfo({ ...res, totalAuctions: res.auctions.length, totalPages: 1 }),
    auctions: res.auctions.length ? res.auctions.map(a => new PartialAuction(a, includeItemBytes)) : []
  };
};
