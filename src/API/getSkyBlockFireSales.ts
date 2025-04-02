import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockSkyBlockFireSales extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockFireSale[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/firesales', options);
    if (res.options.raw) return res;
    return res.data.sales.map((sale: any) => new SkyBlockFireSale(sale));
  }
}

export default getSkyBlockSkyBlockFireSales;
