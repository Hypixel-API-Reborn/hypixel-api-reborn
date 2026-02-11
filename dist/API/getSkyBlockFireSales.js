import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockFireSale from '../Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
class getSkyBlockSkyBlockFireSales extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/skyblock/firesales', options);
        if (res.options.raw)
            return res;
        const fileSales = res.data.sales.map((sale) => new SkyBlockFireSale(sale));
        return Object.assign(fileSales, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getSkyBlockSkyBlockFireSales;
//# sourceMappingURL=getSkyBlockFireSales.js.map