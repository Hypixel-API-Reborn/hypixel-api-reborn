import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';

class getSkyBlockSkyBlockFireSales extends Endpoint {
  override async execute(options?: RequestOptions): Promise<WithRaw<SkyBlockFireSale[]> | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/firesales', options);
    if (res.options.raw) return res;
    const fileSales = res.data.sales.map((sale: any) => new SkyBlockFireSale(sale));
    return Object.assign(fileSales, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getSkyBlockSkyBlockFireSales;
