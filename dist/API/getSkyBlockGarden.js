import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
class getSkyBlockGarden extends Endpoint {
    async execute(profileId, options) {
        if (!profileId)
            throw new Error(Errors.NO_UUID);
        const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
        if (res.options.raw)
            return res;
        return new SkyBlockGarden(res.data.garden);
    }
}
export default getSkyBlockGarden;
//# sourceMappingURL=getSkyBlockGarden.js.map