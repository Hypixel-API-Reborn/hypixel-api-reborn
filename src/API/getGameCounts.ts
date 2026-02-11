import Endpoint from '../Private/Endpoint.js';
import GameCounts from '../Structures/Static/GameCounts/GameCounts.ts';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGameCounts extends Endpoint {
  override async execute(options?: RequestOptions): Promise<GameCounts | RequestData> {
    const res = await this.client.requestHandler.request('/counts', options);
    if (res.options.raw) return res;
    return new GameCounts(res.data);
  }
}

export default getGameCounts;
