import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBazaar from '../Structures/SkyBlock/Bazaar/SkyblockBazaar.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockBazaar extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockBazaar | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
    if (res.options.raw) return res;
    return new SkyblockBazaar(res.data);
  }
}

export default getSkyblockBazaar;
