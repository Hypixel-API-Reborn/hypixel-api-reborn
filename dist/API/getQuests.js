import Endpoint from '../Private/Endpoint.js';
import Quests from '../Structures/Static/Quests.js';
import RequestData from '../Private/RequestData.js';
class getQuests extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/quests', options);
        if (res.options.raw)
            return res;
        return new Quests(res.data);
    }
}
export default getQuests;
//# sourceMappingURL=getQuests.js.map