module.exports = async function (profileId) {
  const SkyblockGarden = require('../../structures/SkyBlock/SkyblockGarden');
  let res;
  // eslint-disable-next-line no-underscore-dangle
  try {
      res = await this._makeRequest(`/skyblock/garden?profile=${profileId}`);
  } catch(e) {}
  if (res?.raw) return res;
  return new SkyblockGarden(res);
};
