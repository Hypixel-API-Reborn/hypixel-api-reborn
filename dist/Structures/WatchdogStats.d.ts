import type RequestData from '../Private/RequestData.js';
declare class WatchdogStats {
    byWatchdogTotal: number;
    byWatchdogLastMinute: number;
    byWatchdogRollingDay: number;
    byStaffTotal: number;
    byStaffRollingDay: number;
    constructor(data: Record<string, any>);
    isRaw(): this is RequestData;
}
export default WatchdogStats;
//# sourceMappingURL=WatchdogStats.d.ts.map