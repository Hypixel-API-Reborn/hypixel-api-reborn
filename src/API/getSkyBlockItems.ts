import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockItems extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockItem[] | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    if (res.options.raw) return res;
    return res.data.items.map((item: Record<string, any>) => new SkyBlockItem(item));
  }
}

export default getSkyBlockItems;
