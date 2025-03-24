import SkyblockAuctionBid from './SkyblockAuctionBid.js';
import SkyblockBaseAuction from './SkyblockBaseAuction.js';
import type { Rarity } from '../../../Types/Skyblock.js';
import type { UUID } from '../../../Types/Global.js';

class SkyblockAuction extends SkyblockBaseAuction {
  coop: UUID[];
  auctionStartTimestamp: number;
  auctionStartAt: Date;
  auctionEndTimestamp: number | null;
  auctionEndAt: Date | null;
  item: string;
  itemLore: string;
  rarity: Rarity | 'UNKNOWN';
  startingBid: number;
  highestBid: number;
  bids: SkyblockAuctionBid[];
  claimed: boolean;
  claimedBidders: string[];
  constructor(data: Record<string, any>, includeItemBytes: boolean = false) {
    super(data, includeItemBytes);
    this.coop = data.coop || [];
    this.auctionStartTimestamp = data.start;
    this.auctionStartAt = new Date(this.auctionStartTimestamp);
    this.auctionEndTimestamp = data.end || null;
    this.auctionEndAt = this.auctionEndTimestamp ? new Date(this.auctionEndTimestamp) : null;
    this.item = data?.item_name || 'UNKNOWN';
    this.itemLore = data?.item_lore || 'UNKNOWN';
    this.rarity = data?.tier || 'UNKNOWN';
    this.startingBid = data?.starting_bid || 0;
    this.highestBid = this.bin ? data.starting_bid : data.highest_bid_amount || 0;
    this.bids = data.bids.length ? data.bids.map((b: any) => new SkyblockAuctionBid(b)) : [];
    this.claimed = data.claimed || false;
    this.claimedBidders = this.claimed ? data.claimed_bidders : [];
  }

  override toString(): string {
    return this.item;
  }
}

export default SkyblockAuction;
