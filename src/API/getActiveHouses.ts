import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getActiveHouses extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<House[] | RequestData> {
    const res = await this.client.requestHandler.request('/housing/active', options);
    if (res.options.raw) return res;
    return res.data.map((b: any) => new House(b));
  }
}

export default getActiveHouses;
