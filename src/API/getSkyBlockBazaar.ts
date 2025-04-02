import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockBazaar extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockBazaar | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
    if (res.options.raw) return res;
    return new SkyBlockBazaar(res.data);
  }
}

export default getSkyBlockBazaar;
