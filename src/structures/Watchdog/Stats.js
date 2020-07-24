class WatchdogStats {
  constructor (data) {
    this.byWatchdogTotal = data.watchdog_total || 0;
    this.byWatchDogLastMinute = data.watchdog_lastMinute || 0;
    this.byWatchdogRollingDay = data.watchdog_rollingDaily || 0;

    this.byStaffTotal = data.staff_total || 0;
    this.byStaffRollingDay = data.staff_rollingDaily || 0;
  }
}
module.exports = WatchdogStats;
