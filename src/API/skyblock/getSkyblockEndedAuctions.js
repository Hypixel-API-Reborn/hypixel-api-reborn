const PartialAuction = require('../../structures/SkyBlock/Auctions/PartialAuction');
module.exports = async function (includeItemBytes = false) {
  const res = await this._makeRequest('/skyblock/auctions_ended');
  return {
    lastUpdatedTimestamp: res.lastUpdated,
    lastUpdatedAt: new Date(res.lastUpdated),
    auctions: res.auctions.length ? res.auctions.map(a => new PartialAuction(a, includeItemBytes)) : []
  };
};
