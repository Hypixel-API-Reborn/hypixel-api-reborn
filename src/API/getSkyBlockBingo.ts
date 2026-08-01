import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockBingo from '../Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockBingo extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<SkyBlockBingo>> {
    const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
    return new RequestData<SkyBlockBingo>(new SkyBlockBingo(res.rawData), res);
  }
}

export default getSkyBlockBingo;
