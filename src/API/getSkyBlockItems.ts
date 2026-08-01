import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockItems extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockItem[]>> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    return new RequestData<SkyBlockItem[]>(
      res.rawData.items.map((item: Record<string, any>) => new SkyBlockItem(item)),
      res
    );
  }
}

export default getSkyBlockItems;
