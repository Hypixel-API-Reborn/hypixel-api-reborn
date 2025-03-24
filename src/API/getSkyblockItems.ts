import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockItem from '../Structures/SkyBlock/SkyblockItem.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockItems extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockItem[] | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    if (res.options.raw) return res;
    return res.data.items.map((item: Record<string, any>) => new SkyblockItem(item));
  }
}

export default getSkyblockItems;
