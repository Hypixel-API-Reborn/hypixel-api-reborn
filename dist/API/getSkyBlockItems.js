import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockItem from '../Structures/SkyBlock/SkyBlockItem.js';
class getSkyBlockItems extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/skyblock/items', options);
        if (res.options.raw)
            return res;
        const items = res.data.items.map((item) => new SkyBlockItem(item));
        return Object.assign(items, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getSkyBlockItems;
//# sourceMappingURL=getSkyBlockItems.js.map