import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockBazaar extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockBazaar>> {
    const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
    return new RequestData<SkyBlockBazaar>(new SkyBlockBazaar(res.rawData), res);
  }
}

export default getSkyBlockBazaar;
