import Achievements from '../Structures/Static/Achievements/Achievements.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getAchievements extends Endpoint {
    execute(options?: RequestOptions): Promise<Achievements | RequestData>;
}
export default getAchievements;
//# sourceMappingURL=getAchievements.d.ts.map