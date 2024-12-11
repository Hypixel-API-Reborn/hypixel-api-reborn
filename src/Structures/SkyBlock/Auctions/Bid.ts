class Bid {
  auctionId: string;
  profileId: string;
  amount: number;
  timestamp: number;
  at: Date;
  bidder: string;
  constructor(data: Record<string, any>) {
    this.auctionId = data.auction_id;
    this.profileId = data.profile_id;
    this.amount = data.amount;
    this.timestamp = data.timestamp;
    this.at = new Date(this.timestamp);
    this.bidder = data.bidder;
  }

  toString(): string {
    return `${this.bidder} bid ${this.amount} coins`;
  }
}

export default Bid;
