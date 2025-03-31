import type { UUID } from '../../../Types/Global.js';

class SkyblockAuctionBid {
  auctionId: UUID | 'UNKNOWN';
  profileId: UUID | 'UNKNOWN';
  amount: number;
  timestamp: number;
  at: Date;
  bidder: string;
  constructor(data: Record<string, any>) {
    this.auctionId = data?.auction_id || 'UNKNOWN';
    this.profileId = data?.profile_id || 'UNKNOWN';
    this.amount = data?.amount || 0;
    this.timestamp = data?.timestamp || 0;
    this.at = new Date(this.timestamp);
    this.bidder = data?.bidder || 'UNKNOWN';
  }

  toString(): number {
    return this.amount;
  }
}

export default SkyblockAuctionBid;
