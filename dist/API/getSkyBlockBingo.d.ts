import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBingo from '../Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockBingo extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockBingo | RequestData>;
}
export default getSkyBlockBingo;
//# sourceMappingURL=getSkyBlockBingo.d.ts.map