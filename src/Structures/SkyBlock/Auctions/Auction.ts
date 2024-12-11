import BaseAuction from './BaseAuction.js';
import Bid from './Bid.js';
import { Rarity } from '../../../Types/Skyblock.js';

class Auction extends BaseAuction {
  coop: string[];
  auctionStartTimestamp: number;
  auctionStart: Date;
  auctionEndTimestamp: number | null;
  auctionEnd: Date | null;
  item: string;
  itemLore: string;
  itemLoreRaw: string;
  rarity: Rarity;
  startingBid: number;
  highestBid: number;
  bids: Bid[];
  claimed: boolean;
  claimedBidders: string[];
  constructor(data: Record<string, any>, includeItemBytes: boolean = false) {
    super(data, includeItemBytes);
    this.coop = data.coop || [];
    this.auctionStartTimestamp = data.start;
    this.auctionStart = new Date(this.auctionStartTimestamp);
    this.auctionEndTimestamp = data.end || null;
    this.auctionEnd = this.auctionEndTimestamp ? new Date(this.auctionEndTimestamp) : null;
    this.item = data.item_name || null;
    this.itemLore = data.item_lore ? data.item_lore.replace(/§([1-9]|[a-l])|§/gm, '') : null;
    this.itemLoreRaw = data.item_lore || null;
    this.rarity = data.tier || null;
    this.startingBid = data.starting_bid || 0;
    this.highestBid = this.bin ? data.starting_bid : data.highest_bid_amount || 0;
    this.bids = data.bids.length ? data.bids.map((b: any) => new Bid(b)) : [];
    this.claimed = data.claimed || false;
    this.claimedBidders = this.claimed ? data.claimed_bidders : [];
  }

  toString(): string {
    return this.item;
  }
}

export default Auction;
