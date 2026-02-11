import Booster from '../Structures/Boosters/Booster.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
class getBoosters extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/boosters', options);
        if (res.options.raw)
            return res;
        const boosters = res.data.boosters.map((b) => new Booster(b)).reverse();
        return Object.assign(boosters, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getBoosters;
//# sourceMappingURL=getBoosters.js.map