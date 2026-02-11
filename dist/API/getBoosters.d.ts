import Booster from '../Structures/Boosters/Booster.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';
declare class getBoosters extends Endpoint {
    execute(options?: RequestOptions): Promise<WithRaw<Booster[]> | RequestData>;
}
export default getBoosters;
//# sourceMappingURL=getBoosters.d.ts.map