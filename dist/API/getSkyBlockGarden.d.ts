import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockGarden extends Endpoint {
    execute(profileId: string, options?: RequestOptions): Promise<SkyBlockGarden | RequestData>;
}
export default getSkyBlockGarden;
//# sourceMappingURL=getSkyBlockGarden.d.ts.map