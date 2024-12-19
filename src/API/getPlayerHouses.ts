import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getPlayerHouses extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: RequestOptions): Promise<House[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/housing/houses?player=${query}`, options);
    if (res.options.raw) return res;
    return res.data.map((h: any) => new House(h));
  }
}

export default getPlayerHouses;
