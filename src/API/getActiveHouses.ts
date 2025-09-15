import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.ts';

class getActiveHouses extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<WithRaw<House[]> | RequestData> {
    const res = await this.client.requestHandler.request('/housing/active', options);
    if (res.options.raw) return res;
    const houses = res.data.map((b: any) => new House(b));
    return Object.assign(houses, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getActiveHouses;
