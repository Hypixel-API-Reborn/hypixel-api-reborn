import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getActiveHouses extends Endpoint {
    execute(options?: RequestOptions): Promise<WithRaw<House[]> | RequestData>;
}
export default getActiveHouses;
//# sourceMappingURL=getActiveHouses.d.ts.map