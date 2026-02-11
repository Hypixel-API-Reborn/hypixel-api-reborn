import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
class getSkyBlockMuseum extends Endpoint {
    async execute(profileId, options) {
        if (!profileId)
            throw new Error(Errors.NO_UUID);
        const res = await this.client.requestHandler.request(`/skyblock/museum?profile=${profileId}`, options);
        if (res.options.raw)
            return res;
        return new SkyBlockMuseum(res.data);
    }
}
export default getSkyBlockMuseum;
//# sourceMappingURL=getSkyBlockMuseum.js.map