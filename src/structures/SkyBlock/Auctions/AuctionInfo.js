module.exports = class AuctionInfo {
  constructor (data) {
    this.page = parseInt(data.page) || 0;
    this.totalPages = parseInt(data.totalPages) || 1;
    this.totalAuctions = parseInt(data.totalAuctions) || NaN;
    this.lastUpdatedTimestamp = parseInt(data.lastUpdated) || 0;
    this.lastUpdatedAt = new Date(data.lastUpdated);
    this.age = parseInt(data._headers.get('age')) || 0;
  }
};
