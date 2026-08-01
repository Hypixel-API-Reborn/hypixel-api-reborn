import Endpoint from '../Private/Endpoint.js';
import House from '../Structures/House.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getActiveHouses extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<House[]>> {
    const res = await this.client.requestHandler.request('/housing/active', options);
    return new RequestData<House[]>(
      res.rawData.map((house: Record<string, any>) => new House(house)),
      res
    );
  }
}

export default getActiveHouses;
