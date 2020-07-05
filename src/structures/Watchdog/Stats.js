class WatchdogStats {
  constructor (data) {
    this.ByWatchdogTotal = data.watchdog_total || 0;
    this.ByWatchDogLastMinute = data.watchdog_lastMinute || 0;
    this.ByWatchdogRollingDay = data.watchdog_rollingDaily || 0;

    this.ByStaffTotal = data.staff_total || 0;
    this.ByStaffRollingDay = data.staff_rollingDaily || 0;
  }
}
module.exports = WatchdogStats;
