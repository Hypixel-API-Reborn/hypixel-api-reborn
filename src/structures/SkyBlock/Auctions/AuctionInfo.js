module.exports = class AuctionInfo {
  constructor (data) {
    this.page = parseInt(data.page);
    this.totalPages = parseInt(data.totalPages);
    this.totalAuctions = parseInt(data.totalAuctions);
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated);
    this.lastUpdatedAt = new Date(data.lastUpdated);
    this.age = parseInt(data._headers.get('age')) || 0;
  }
};
