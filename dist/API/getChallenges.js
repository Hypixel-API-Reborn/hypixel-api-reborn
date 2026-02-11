import Challenges from '../Structures/Static/Challenges.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
class getChallenges extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/resources/challenges', options);
        if (res.options.raw)
            return res;
        return new Challenges(res.data);
    }
}
export default getChallenges;
//# sourceMappingURL=getChallenges.js.map