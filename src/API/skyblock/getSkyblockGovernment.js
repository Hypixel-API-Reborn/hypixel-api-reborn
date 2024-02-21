module.exports = async function () {
  const GovernmentData = require('../../structures/SkyBlock/Static/Government.js');

  const res = await this._makeRequest('/resources/skyblock/election');
  if (res.raw) return res;

  return new GovernmentData(res);
};
