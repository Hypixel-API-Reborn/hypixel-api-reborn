import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import WatchdogStats from '../Structures/WatchdogStats.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getWatchdogStats extends Endpoint {
    execute(options?: RequestOptions): Promise<WatchdogStats | RequestData>;
}
export default getWatchdogStats;
//# sourceMappingURL=getWatchdogStats.d.ts.map