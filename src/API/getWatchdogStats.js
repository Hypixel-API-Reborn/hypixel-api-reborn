module.exports = async function () {
  const WatchdogStats = require('../structures/Watchdog/Stats');

  const res = await this._makeRequest('/watchdogstats');

  return new WatchdogStats(res);
};
