import Booster from '../Structures/Boosters/Booster.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getBoosters extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Booster[] | RequestData> {
    const res = await this.client.requestHandler.request('/boosters', options);
    if (res.options.raw) return res;
    return res.data.boosters.map((b: any) => new Booster(b)).reverse();
  }
}

export default getBoosters;
