import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockSkyBlockFireSales extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockFireSale[]>> {
    const res = await this.client.requestHandler.request('/skyblock/firesales', options);
    return new RequestData<SkyBlockFireSale[]>(
      res.rawData.sales.map((sale: Record<string, any>) => new SkyBlockFireSale(sale)),
      res
    );
  }
}

export default getSkyBlockSkyBlockFireSales;
