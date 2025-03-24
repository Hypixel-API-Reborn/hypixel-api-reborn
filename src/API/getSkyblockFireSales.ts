import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import FireSale from '../Structures/SkyBlock/FireSale/FireSale.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockFireSales extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<FireSale[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/firesales', options);
    if (res.options.raw) return res;
    return res.data.sales.map((sale: any) => new FireSale(sale));
  }
}

export default getSkyblockFireSales;
