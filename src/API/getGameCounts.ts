import Endpoint from '../Private/Endpoint.js';
import GameCounts from '../Structures/Static/GameCounts/GameCounts.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getGameCounts extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<GameCounts>> {
    const res = await this.client.requestHandler.request('/counts', options);
    return new RequestData<GameCounts>(new GameCounts(res.rawData), res);
  }
}

export default getGameCounts;
