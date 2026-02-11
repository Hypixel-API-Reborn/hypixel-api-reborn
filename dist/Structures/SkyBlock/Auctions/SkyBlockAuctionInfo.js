import SkyBlockBaseAuctionInfo from './SkyBlockBaseAuctionInfo.js';
class SkyBlockAuctionInfo extends SkyBlockBaseAuctionInfo {
    page;
    totalPages;
    totalAuctions;
    constructor(data) {
        super(data);
        this.page = data?.page || 0;
        this.totalPages = data?.totalPages || 0;
        this.totalAuctions = data?.totalAuctions || 0;
    }
}
export default SkyBlockAuctionInfo;
//# sourceMappingURL=SkyBlockAuctionInfo.js.map