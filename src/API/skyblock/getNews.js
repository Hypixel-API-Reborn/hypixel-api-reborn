const SkyblockNews = require('../../structures/SkyBlock/News/SkyblockNews');
module.exports = async function () {
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/skyblock/news');
  if (res.raw) return res;
  return res.items.map((i) => new SkyblockNews(i));
};
