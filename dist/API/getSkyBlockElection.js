import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
class getSkyBlockElection extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/skyblock/election', options);
        if (res.options.raw)
            return res;
        return new SkyBlockElectionData(res.data);
    }
}
export default getSkyBlockElection;
//# sourceMappingURL=getSkyBlockElection.js.map