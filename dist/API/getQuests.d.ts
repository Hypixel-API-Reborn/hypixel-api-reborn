import Endpoint from '../Private/Endpoint.js';
import Quests from '../Structures/Static/Quests.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getQuests extends Endpoint {
    execute(options?: RequestOptions): Promise<Quests | RequestData>;
}
export default getQuests;
//# sourceMappingURL=getQuests.d.ts.map