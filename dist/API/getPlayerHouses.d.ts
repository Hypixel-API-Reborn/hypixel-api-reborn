import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getPlayerHouses extends Endpoint {
    execute(query: string, options?: RequestOptions): Promise<WithRaw<House[]> | RequestData>;
}
export default getPlayerHouses;
//# sourceMappingURL=getPlayerHouses.d.ts.map