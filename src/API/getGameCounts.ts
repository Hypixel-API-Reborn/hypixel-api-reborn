import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import GameCounts from '../Structures/GameCounts.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGameCounts extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<GameCounts | RequestData> {
    const res = await this.client.requestHandler.request('/counts', options);
    if (res.options.raw) return res;
    return new GameCounts(res.data);
  }
}

export default getGameCounts;
