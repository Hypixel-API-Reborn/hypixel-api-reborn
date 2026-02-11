import ItemBytes from '../../ItemBytes.js';
class SkyBlockBaseAuction {
    auctionId;
    auctioneerUuid;
    auctioneerProfile;
    bin;
    itemBytes;
    constructor(data, includeItemBytes) {
        this.auctionId = data.uuid || data.auction_id || 'UNKNOWN';
        this.auctioneerUuid = data.auctioneer || data.seller || 'UNKNOWN';
        this.auctioneerProfile = data.profile_id || data.seller_profile || 'UNKNOWN';
        this.bin = data?.bin || false;
        this.itemBytes = includeItemBytes ? new ItemBytes(data.item_bytes || 'UNKNOWN') : null;
    }
    toString() {
        return this.auctionId;
    }
}
export default SkyBlockBaseAuction;
//# sourceMappingURL=SkyBlockBaseAuction.js.map