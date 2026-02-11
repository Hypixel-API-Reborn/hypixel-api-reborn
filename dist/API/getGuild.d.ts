import Endpoint from '../Private/Endpoint.js';
import Guild from '../Structures/Guild/Guild.js';
import RequestData from '../Private/RequestData.js';
import type { GuildFetchOptions } from '../Types/API.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getGuild extends Endpoint {
    execute(searchParameter: GuildFetchOptions, query: string, options?: RequestOptions): Promise<Guild | null | RequestData>;
}
export default getGuild;
//# sourceMappingURL=getGuild.d.ts.map