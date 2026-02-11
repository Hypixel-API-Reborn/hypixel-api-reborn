import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockCollections from '../Structures/SkyBlock/Collections/SkyBlockCollections.js';
class getSkyBlockCollections extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
        if (res.options.raw)
            return res;
        return new SkyBlockCollections(res.data);
    }
}
export default getSkyBlockCollections;
//# sourceMappingURL=getSkyBlockCollections.js.map