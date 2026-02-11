import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockElectionData from '../Structures/SkyBlock/Election/SkyBlockElectionData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockElection extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockElectionData | RequestData>;
}
export default getSkyBlockElection;
//# sourceMappingURL=getSkyBlockElection.d.ts.map