class Bid {
  constructor (data) {
    this.auctionId = data.auction_id || null;
    this.profileId = data.profile_id || null;
    this.amount = data.amount || 0;
    this.timestamp = data.timestamp || null;
    this.bidder = data.bidder || null;
  }
}
module.exports = Bid;
