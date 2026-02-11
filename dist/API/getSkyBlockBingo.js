import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBingo from '../Structures/SkyBlock/Bingo/SkyBlockBingo.js';
class getSkyBlockBingo extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
        if (res.options.raw)
            return res;
        return new SkyBlockBingo(res.data);
    }
}
export default getSkyBlockBingo;
//# sourceMappingURL=getSkyBlockBingo.js.map