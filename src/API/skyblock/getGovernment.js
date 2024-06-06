module.exports = async function () {
  const GovernmentData = require('../../structures/SkyBlock/Static/Government.js');
  // eslint-disable-next-line no-underscore-dangle
  const res = await this._makeRequest('/resources/skyblock/election');
  if (res.raw) return res;
  return new GovernmentData(res);
};
