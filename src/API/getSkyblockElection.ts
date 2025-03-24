import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockElectionData from '../Structures/SkyBlock/Election/SkyblockElectionData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockElection extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockElectionData | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/election', options);
    if (res.options.raw) return res;
    return new SkyblockElectionData(res.data);
  }
}

export default getSkyblockElection;
