import BingoData from '../Structures/SkyBlock/Static/BingoData.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockBingo extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<BingoData | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
    if (res.options.raw) return res;
    return new BingoData(res.data);
  }
}

export default getSkyblockBingo;
