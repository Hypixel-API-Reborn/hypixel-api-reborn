const ItemBytes = require('../../ItemBytes');
/**
 * Base auction class
 * @param {object} data Base auction data
 * @param {boolean} includeItemBytes
 */
class BaseAuction {
  constructor (data, includeItemBytes) {
    /**
     * Auction ID
     * @type {string|null}
     */
    this.auctionId = data.uuid || data.auction_id || null;
    /**
     * Auctioneer UUID
     * @type {string|null}
     */
    this.auctioneerUuid = data.auctioneer || data.seller || null;
    /**
     * Auctioneer's skyblock profile ID
     * @type {string|null}
     */
    this.auctioneerProfile = data.profile_id || data.seller_profile || null;
    /**
     * Bin
     * @type {boolean}
     */
    this.bin = data.bin || false;
    /**
     * Item bytes
     * @type {ItemBytes|null}
     */
    this.itemBytes = includeItemBytes ? (new ItemBytes(data.item_bytes) || null) : null;
  }
}
module.exports = BaseAuction;
