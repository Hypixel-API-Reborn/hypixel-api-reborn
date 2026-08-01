import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockCollections from '../Structures/SkyBlock/Collections/SkyBlockCollections.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockCollections extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockCollections>> {
    const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
    return new RequestData<SkyBlockCollections>(new SkyBlockCollections(res.rawData), res);
  }
}

export default getSkyBlockCollections;
