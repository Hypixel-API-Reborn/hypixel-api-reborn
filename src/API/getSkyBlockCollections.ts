import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockCollections from '../Structures/SkyBlock/Collections/SkyBlockCollections.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockCollections extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockCollections | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    if (res.options.raw) return res;
    return new SkyBlockCollections(res.data);
  }
}

export default getSkyBlockCollections;
