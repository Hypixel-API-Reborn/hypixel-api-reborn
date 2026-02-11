import Endpoint from '../Private/Endpoint.js';
import GameCounts from '../Structures/GameCounts.js';
import RequestData from '../Private/RequestData.js';
class getGameCounts extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/counts', options);
        if (res.options.raw)
            return res;
        return new GameCounts(res.data);
    }
}
export default getGameCounts;
//# sourceMappingURL=getGameCounts.js.map