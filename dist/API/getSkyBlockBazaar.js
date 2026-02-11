import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
class getSkyBlockBazaar extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
        if (res.options.raw)
            return res;
        return new SkyBlockBazaar(res.data);
    }
}
export default getSkyBlockBazaar;
//# sourceMappingURL=getSkyBlockBazaar.js.map