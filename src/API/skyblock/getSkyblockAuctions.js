module.exports = async function (page) {
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');
  const AuctionInfo = require('../../structures/SkyBlock/Auctions/AuctionInfo');

  const auctions = [];
  let info;
  if (page !== 0 && (!page || isNaN(page))) {
    let currentPage = 0;
    let totalPages = 0;
    do {
      const pageByNumber = await this._makeRequest(`/skyblock/auctions?page=${currentPage}`, false);
      if (!pageByNumber.success) break;
      pageByNumber.auctions.forEach(auction => {
        auctions.push(new Auction(auction));
      });
      info = info || new AuctionInfo(pageByNumber);
      currentPage++;
      totalPages = pageByNumber.totalPages;
    } while (currentPage <= totalPages);
  } else {
    page = Math.floor(page);
    const pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`, false);
    if (!pageBySpecifiedPage.success) return [];
    pageBySpecifiedPage.auctions.forEach(auction => {
      auctions.push(new Auction(auction));
    });
    info = new AuctionInfo(pageBySpecifiedPage);
  }
  return { info, auctions };
};
