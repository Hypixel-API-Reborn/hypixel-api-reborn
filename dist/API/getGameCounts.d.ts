import Endpoint from '../Private/Endpoint.js';
import GameCounts from '../Structures/GameCounts.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getGameCounts extends Endpoint {
    execute(options?: RequestOptions): Promise<GameCounts | RequestData>;
}
export default getGameCounts;
//# sourceMappingURL=getGameCounts.d.ts.map