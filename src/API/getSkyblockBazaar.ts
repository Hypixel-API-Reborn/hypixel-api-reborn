import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBazzar from '../Structures/SkyBlock/Bazaar/SkyblockBazzar.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockBazaar extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockBazzar | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
    if (res.options.raw) return res;
    return new SkyblockBazzar(res.data);
  }
}

export default getSkyblockBazaar;
