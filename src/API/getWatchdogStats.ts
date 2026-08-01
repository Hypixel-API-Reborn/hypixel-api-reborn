import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import WatchdogStats from '../Structures/WatchdogStats.js';
import type { RequestOptions } from '../Types/Requests.js';

class getWatchdogStats extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<WatchdogStats>> {
    const res = await this.client.requestHandler.request('/punishmentstats', options);
    return new RequestData<WatchdogStats>(new WatchdogStats(res.rawData), res);
  }
}

export default getWatchdogStats;
