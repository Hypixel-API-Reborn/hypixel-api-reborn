import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import Status from '../Structures/Status.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getStatus extends Endpoint {
    execute(query: string, options?: RequestOptions): Promise<Status | RequestData>;
}
export default getStatus;
//# sourceMappingURL=getStatus.d.ts.map