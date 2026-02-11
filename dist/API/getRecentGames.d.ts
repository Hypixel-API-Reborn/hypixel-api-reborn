import Endpoint from '../Private/Endpoint.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getRecentGames extends Endpoint {
    execute(query: string, options?: RequestOptions): Promise<WithRaw<RecentGame[]> | RequestData>;
}
export default getRecentGames;
//# sourceMappingURL=getRecentGames.d.ts.map