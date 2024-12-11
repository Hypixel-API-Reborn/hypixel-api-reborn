import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import GovernmentData from '../Structures/SkyBlock/Static/Government.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockGovernment extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GovernmentData | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/election', options);
    if (res.options.raw) return res;
    return new GovernmentData(res.data);
  }
}

export default getSkyblockGovernment;
