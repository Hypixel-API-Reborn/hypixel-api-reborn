class WatchdogStats {
  byWatchdogTotal: number;
  byWatchdogLastMinute: number;
  byWatchdogRollingDay: number;
  byStaffTotal: number;
  byStaffRollingDay: number;
  constructor(data: Record<string, any>) {
    this.byWatchdogTotal = data?.watchdog_total || 0;
    this.byWatchdogLastMinute = data?.watchdog_lastMinute || 0;
    this.byWatchdogRollingDay = data?.watchdog_rollingDaily || 0;
    this.byStaffTotal = data?.staff_total || 0;
    this.byStaffRollingDay = data?.staff_rollingDaily || 0;
  }
}

export default WatchdogStats;
