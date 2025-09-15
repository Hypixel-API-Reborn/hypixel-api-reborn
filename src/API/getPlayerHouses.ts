import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.ts';

class getPlayerHouses extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: RequestOptions): Promise<WithRaw<House[]> | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/housing/houses?player=${query}`, options);
    if (res.options.raw) return res;
    const houses = res.data.map((h: any) => new House(h));
    return Object.assign(houses, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getPlayerHouses;
