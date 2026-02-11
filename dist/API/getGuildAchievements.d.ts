import Endpoint from '../Private/Endpoint.js';
import GuildAchievements from '../Structures/Static/Achievements/GuildAchievements.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getGuildAchievements extends Endpoint {
    execute(options?: RequestOptions): Promise<GuildAchievements | RequestData>;
}
export default getGuildAchievements;
//# sourceMappingURL=getGuildAchievements.d.ts.map