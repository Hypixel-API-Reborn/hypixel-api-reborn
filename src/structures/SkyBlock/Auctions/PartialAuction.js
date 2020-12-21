const BaseAuction = require('./BaseAuction');
class PartialAuction extends BaseAuction {
  constructor (data, includeItemBytes) {
    super(data, includeItemBytes);
    this.buyer = data.buyer || null;
    this.price = parseInt(data.price) || 0;
  }
}
module.exports = PartialAuction;
