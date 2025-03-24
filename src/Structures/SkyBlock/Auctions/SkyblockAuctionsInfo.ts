import SkyblockBaseAucitonInfo from './SkyblockBaseAuctionInfo.js';

class SkyblockAuctionInfo extends SkyblockBaseAucitonInfo {
  page: number;
  totalPages: number;
  totalAuctions: number;
  constructor(data: Record<string, any>) {
    super(data);
    this.page = data?.page || 0;
    this.totalPages = data?.totalPages || 0;
    this.totalAuctions = data?.totalAuctions || 0;
  }
}

export default SkyblockAuctionInfo;
