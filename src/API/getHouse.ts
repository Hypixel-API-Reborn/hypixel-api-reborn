import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getHouse extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: RequestOptions): Promise<House | RequestData> {
    if (!query) throw new Error(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/housing/house?house=${query}`, options);
    if (res.options.raw) return res;
    return new House(res.data);
  }
}

export default getHouse;
