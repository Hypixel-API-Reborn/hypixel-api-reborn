const Auction = require('../../structures/SkyBlock/Auctions/Auction');
const AuctionInfo = require('../../structures/SkyBlock/Auctions/AuctionInfo');
const Errors = require('../../Errors');
let _makeRequest;
async function getPage (page = 0, options = {}) {
  const content = await _makeRequest(`/skyblock/auctions?page=${page}`, false);
  const result = {};
  if (!options.noInfo) result.info = new AuctionInfo(content);
  if (options.raw) result.auctions = content.auctions;
  else if (options.noAuctions) result.auctions = [];
  else result.auctions = content.auctions.map(x => new Auction(x, options.includeItemBytes));
  return result;
}
async function noReject (promise, args = [], retries = 3, cooldown = 100) {
  try {
    const result = await promise.apply(null, args);
    return result;
  } catch (e) {
    if (retries) {
      await new Promise(resolve => setTimeout(resolve, cooldown));
      return await noReject(promise, args, retries - 1, cooldown);
    } else return null;
  }
}
module.exports = async function (range, options = {}) {
  _makeRequest = this._makeRequest;
  options.retries = options.retries || 3;
  options.cooldown = options.cooldown || 100;
  if (!range || range === '*') range = [0, (await getPage(0, { noAuctions: true })).info.totalPages];
  if (!Array.isArray(range)) range = [parseInt(range), parseInt(range)];
  if (isNaN(range[0])) throw new Error(Errors.PAGE_INDEX_ERROR);
  if (parseInt(options.retries) !== options.retries || options.retries > 10 || options.retries < 0) throw new Error(Errors.INVALID_OPTION_VALUE);
  if (parseInt(options.cooldown) !== options.cooldown || options.cooldown > 3000 || options.cooldown < 0) throw new Error(Errors.INVALID_OPTION_VALUE);
  range = range.sort();
  const result = { auctions: [] };
  const fetches = [];
  const failedPages = [];
  if (options.noAuctions) return { info: options.noInfo ? null : (await getPage(range[1], { noAuctions: true })).info };
  for (let i = range[0]; i <= range[1]; i++) {
    if (options.race) {
      fetches.push(noReject(getPage, [i, options], options.retries, options.cooldown));
    } else {
      const resp = await noReject(getPage, [i, options], options.retries, options.cooldown);
      if (resp) {
        result.auctions = result.auctions.concat(resp.auctions);
        if (resp.info) result.info = resp.info;
      } else failedPages.push(i);
    }
  }
  if (fetches.length) {
    result.auctions = (await Promise.all(fetches)).reduce((pV, cV, _, index) => {
      if (!cV) {
        failedPages.push(index + range[0]);
        return pV;
      };
      if (cV.info) result.info = cV.info;
      if (cV.auctions.length) return pV.concat(cV.auctions);
      return pV;
    }, []);
  }
  result.info = result.info ? result.info._extend('failedPages', failedPages) : { failedPages };
  return result;
};
