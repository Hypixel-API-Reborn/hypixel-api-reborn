import SkyBlockMemberPlayerStatsAuctionsStats from './SkyBlockMemberPlayerStatsAuctionsStats.js';

class SkyBlockMemberPlayerStatsAuctions {
  bids: number;
  highestBid: number;
  won: number;
  goldSpent: number;
  created: number;
  fees: number;
  completed: number;
  goldEarned: number;
  noBids: number;
  auctionsSold: SkyBlockMemberPlayerStatsAuctionsStats;
  auctionsBought: SkyBlockMemberPlayerStatsAuctionsStats;
  constructor(data: Record<string, any>) {
    this.bids = data?.bids || 0;
    this.highestBid = data?.highest_bid || 0;
    this.won = data?.won || 0;
    this.goldSpent = data?.gold_spent || 0;
    this.created = data?.created || 0;
    this.fees = data?.fees || 0;
    this.completed = data?.completed || 0;
    this.goldEarned = data?.gold_earned || 0;
    this.noBids = data?.no_bids || 0;
    this.auctionsSold = new SkyBlockMemberPlayerStatsAuctionsStats(data?.total_sold || {});
    this.auctionsBought = new SkyBlockMemberPlayerStatsAuctionsStats(data?.total_bought || {});
  }
}

export default SkyBlockMemberPlayerStatsAuctions;
