class WatchdogStats {
    byWatchdogTotal;
    byWatchdogLastMinute;
    byWatchdogRollingDay;
    byStaffTotal;
    byStaffRollingDay;
    constructor(data) {
        this.byWatchdogTotal = data?.watchdog_total || 0;
        this.byWatchdogLastMinute = data?.watchdog_lastMinute || 0;
        this.byWatchdogRollingDay = data?.watchdog_rollingDaily || 0;
        this.byStaffTotal = data?.staff_total || 0;
        this.byStaffRollingDay = data?.staff_rollingDaily || 0;
    }
    isRaw() {
        return false;
    }
}
export default WatchdogStats;
//# sourceMappingURL=WatchdogStats.js.map