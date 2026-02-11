import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import WatchdogStats from '../Structures/WatchdogStats.js';
class getWatchdogStats extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/punishmentstats', options);
        if (res.options.raw)
            return res;
        return new WatchdogStats(res.data);
    }
}
export default getWatchdogStats;
//# sourceMappingURL=getWatchdogStats.js.map