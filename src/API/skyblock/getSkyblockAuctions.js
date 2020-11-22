module.exports = async function (page) {
  const Auction = require('../../structures/SkyBlock/Auctions/Auction');

  const auctions = [];
  if (!page || isNaN(page)) {
    let currentPage = 0;
    let totalPages = 0;
    do {
      const pageByNumber = await this._makeRequest(`/skyblock/auctions?page=${currentPage}`);
      if (!pageByNumber.success) break;
      pageByNumber.auctions.forEach(auction => {
        auctions.push(new Auction(auction));
      });
      currentPage++;
      totalPages = pageByNumber.totalPages;
    } while (currentPage <= totalPages);
  } else {
    page = Math.floor(page);
    const pageBySpecifiedPage = await this._makeRequest(`/skyblock/auctions?page=${page}`);
    if (!pageBySpecifiedPage.success) return [];
    pageBySpecifiedPage.auctions.forEach(auction => {
      auctions.push(new Auction(auction));
    });
  }

  return auctions;
};
