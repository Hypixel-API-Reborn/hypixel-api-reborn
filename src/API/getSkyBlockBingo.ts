import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockBingo from '../Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockBingo extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<SkyBlockBingo | RequestData> {
    const res = await this.client.requestHandler.request('/resources/skyblock/bingo', options);
    if (res.options.raw) return res;
    return new SkyBlockBingo(res.data);
  }
}

export default getSkyBlockBingo;
