import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockCollections from '../Structures/SkyBlock/Collections/SkyblockCollections.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockCollections extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockCollections | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    if (res.options.raw) return res;
    return new SkyblockCollections(res.data);
  }
}

export default getSkyblockCollections;
