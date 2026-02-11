import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockMuseum extends Endpoint {
    execute(profileId: string, options?: RequestOptions): Promise<SkyBlockMuseum | RequestData>;
}
export default getSkyBlockMuseum;
//# sourceMappingURL=getSkyBlockMuseum.d.ts.map