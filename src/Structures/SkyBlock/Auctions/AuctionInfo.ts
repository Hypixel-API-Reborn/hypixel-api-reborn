class AuctionInfo {
  page: number;
  totalPages: number;
  totalAuctions: number;
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  constructor(data: Record<string, any>) {
    this.page = parseInt(data.page, 10);
    this.totalPages = parseInt(data.totalPages, 10);
    this.totalAuctions = parseInt(data.totalAuctions, 10);
    this.lastUpdatedTimestamp = data.lastUpdated;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
  }
}

export default AuctionInfo;
