module.exports = async function (page) {
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');

  const { totalPages, success } = await this._makeRequest('/skyblock/auctions');
  if (!success) return [];

  const auctions = [];
  if (!page || isNaN(page)) {
    for (let i = 0; i < totalPages; i++) {
      const pageByi = await this._makeRequest(`/skyblock/auctions?page=${i}`);
      pageByi.auctions.forEach(auction => {
        auctions.push(new Auction(auction));
      });
    }
  } else {
    page = Math.floor(page);
    if (page > totalPages) return [];
    const pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`);
    pageBySpecifiedPage.auctions.forEach(auction => {
      auctions.push(new Auction(auction));
    });
  }

  return auctions;
};
