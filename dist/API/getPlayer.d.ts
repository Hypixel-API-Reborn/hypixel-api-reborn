import Endpoint from '../Private/Endpoint.js';
import Player from '../Structures/Player/Player.js';
import RequestData from '../Private/RequestData.js';
import type { PlayerRequestOptions } from '../Types/API.js';
declare class getPlayer extends Endpoint {
    execute(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData>;
}
export default getPlayer;
//# sourceMappingURL=getPlayer.d.ts.map