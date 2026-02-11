import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockNews from '../Structures/SkyBlock/News/SkyBlockNews.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockNews extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockNews[] | RequestData>;
}
export default getSkyBlockNews;
//# sourceMappingURL=getSkyBlockNews.d.ts.map