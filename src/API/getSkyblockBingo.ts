import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockBingo from '../Structures/SkyBlock/Bingo/SkyblockBingo.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyblockBingo extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyblockBingo | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
    if (res.options.raw) return res;
    return new SkyblockBingo(res.data);
  }
}

export default getSkyblockBingo;
