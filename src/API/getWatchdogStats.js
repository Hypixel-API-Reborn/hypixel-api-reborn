module.exports = async function () {
  const WatchdogStats = require('../structures/Watchdog/Stats');
  const res = await this._makeRequest('/punishmentstats');
  return new WatchdogStats(res);
};
