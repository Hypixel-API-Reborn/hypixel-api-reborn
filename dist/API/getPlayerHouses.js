import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
class getPlayerHouses extends Endpoint {
    async execute(query, options) {
        if (!query)
            throw new Error(Errors.NO_NICKNAME_UUID);
        query = await this.client.requestHandler.toUUID(query);
        const res = await this.client.requestHandler.request(`/housing/houses?player=${query}`, options);
        if (res.options.raw)
            return res;
        const houses = res.data.map((h) => new House(h));
        return Object.assign(houses, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getPlayerHouses;
//# sourceMappingURL=getPlayerHouses.js.map