import ItemBytes from '../../ItemBytes.js';

class BaseAuction {
  auctionId: string | null;
  auctioneerUuid: string | null;
  auctioneerProfile: string | null;
  bin: boolean;
  itemBytes: ItemBytes | null;
  constructor(data: Record<string, any>, includeItemBytes: boolean) {
    this.auctionId = data.uuid || data.auction_id || null;
    this.auctioneerUuid = data.auctioneer || data.seller || null;
    this.auctioneerProfile = data.profile_id || data.seller_profile || null;
    this.bin = data.bin || false;
    this.itemBytes = includeItemBytes ? new ItemBytes(data.item_bytes) : null;
  }

  toString(): string | null {
    return this.auctionId;
  }
}

export default BaseAuction;
