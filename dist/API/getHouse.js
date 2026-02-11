import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
class getHouse extends Endpoint {
    async execute(query, options) {
        if (!query)
            throw new Error(Errors.NO_UUID);
        const res = await this.client.requestHandler.request(`/housing/house?house=${query}`, options);
        if (res.options.raw)
            return res;
        return new House(res.data);
    }
}
export default getHouse;
//# sourceMappingURL=getHouse.js.map