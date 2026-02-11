import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getHouse extends Endpoint {
    execute(query: string, options?: RequestOptions): Promise<House | RequestData>;
}
export default getHouse;
//# sourceMappingURL=getHouse.d.ts.map