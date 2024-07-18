module.exports = async function (profileId) {
  const SkyblockGarden = require('../../structures/SkyBlock/SkyblockGarden');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest(`/skyblock/garden?profile=${profileId}`);
  if (res.raw) return res;
  return new SkyblockGarden(res);
};
