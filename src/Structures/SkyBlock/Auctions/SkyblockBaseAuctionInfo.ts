class SkyblockBaseAucitonInfo {
  lastUpdatedTimestamp: number;
  lastUpdatedAt: Date;
  constructor(data: Record<string, any>) {
    this.lastUpdatedTimestamp = data?.lastUpdated || 0;
    this.lastUpdatedAt = new Date(this.lastUpdatedTimestamp);
  }
}

export default SkyblockBaseAucitonInfo;
