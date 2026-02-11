import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBazaar from '../Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockBazaar extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockBazaar | RequestData>;
}
export default getSkyBlockBazaar;
//# sourceMappingURL=getSkyBlockBazaar.d.ts.map