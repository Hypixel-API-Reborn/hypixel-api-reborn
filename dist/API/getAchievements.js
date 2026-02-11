import Achievements from '../Structures/Static/Achievements/Achievements.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
class getAchievements extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/achievements', options);
        if (res.options.raw)
            return res;
        return new Achievements(res.data);
    }
}
export default getAchievements;
//# sourceMappingURL=getAchievements.js.map