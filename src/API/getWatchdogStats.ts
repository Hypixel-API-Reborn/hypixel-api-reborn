import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import WatchdogStats from '../Structures/WatchdogStats.js';
import type { RequestOptions } from '../Types/Requests.js';

class getWatchdogStats extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<WatchdogStats | RequestData> {
    const res = await this.client.requestHandler.request('/punishmentstats', options);
    if (res.options.raw) return res;
    return new WatchdogStats(res.data);
  }
}

export default getWatchdogStats;
