import Endpoint from '../Private/Endpoint.js';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getLeaderboards extends Endpoint {
    execute(options?: RequestOptions): Promise<WithRaw<Record<string, Leaderboard[]>> | RequestData>;
}
export default getLeaderboards;
//# sourceMappingURL=getLeaderboards.d.ts.map