import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.ts';

class getSkyBlockItems extends Endpoint {
  override async execute(options?: RequestOptions): Promise<WithRaw<SkyBlockItem[]> | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    if (res.options.raw) return res;
    const items = res.data.items.map((item: Record<string, any>) => new SkyBlockItem(item));
    return Object.assign(items, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getSkyBlockItems;
