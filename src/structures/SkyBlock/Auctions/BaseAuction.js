const ItemBytes = require('../../ItemBytes');
class BaseAuction {
  constructor (data, includeItemBytes) {
    this.auctionId = data.uuid || data.auction_id || null;
    this.auctioneerUuid = data.auctioneer || data.seller || null;
    this.auctioneerProfile = data.profile_id || data.seller_profile || null;
    this.bin = data.bin || false;
    this.itemBytes = includeItemBytes ? (new ItemBytes(data.item_bytes) || null) : null;
  }
}
module.exports = BaseAuction;
