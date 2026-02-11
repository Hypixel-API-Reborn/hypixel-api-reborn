import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
class getActiveHouses extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/housing/active', options);
        if (res.options.raw)
            return res;
        const houses = res.data.map((b) => new House(b));
        return Object.assign(houses, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getActiveHouses;
//# sourceMappingURL=getActiveHouses.js.map