/**
 * WatchdogStats class
 */
class WatchdogStats {
  /**
   * @param {object} data Watchdog data
   */
  constructor (data) {
    /**
     * Total watchdog's bans
     * @type {number}
     */
    this.byWatchdogTotal = data.watchdog_total || 0;
    /**
     * Watchdog's bans in the last minute
     * @type {number}
     */
    this.byWatchdogLastMinute = data.watchdog_lastMinute || 0;
    /**
     * Watchdog's bans in the last day ( resets at 5 am UTC ).
     * @type {number}
     */
    this.byWatchdogRollingDay = data.watchdog_rollingDaily || 0;
    /**
     * Total staff bans
     * @type {number}
     */
    this.byStaffTotal = data.staff_total || 0;
    /**
     * Staff bans in the last day ( resets at 5 am UTC ).
     * @type {number}
     */
    this.byStaffRollingDay = data.staff_rollingDaily || 0;
  }
}
module.exports = WatchdogStats;
