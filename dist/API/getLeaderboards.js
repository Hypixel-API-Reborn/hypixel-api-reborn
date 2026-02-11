import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.js';
class getLeaderboards extends Endpoint {
    async execute(options) {
        const res = await this.client.requestHandler.request('/leaderboards', options);
        if (res.options.raw)
            return res;
        if (!res.data.leaderboards) {
            throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
        }
        const leaderboards = {};
        Object.keys(res.data.leaderboards).forEach((key) => {
            leaderboards[key] = res.data.leaderboards[key].map((l) => new Leaderboard(l));
        });
        return Object.assign(leaderboards, {
            isRaw() {
                return false;
            }
        });
    }
}
export default getLeaderboards;
//# sourceMappingURL=getLeaderboards.js.map