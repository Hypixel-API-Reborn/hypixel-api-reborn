import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getPlayerHouses extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<RequestData<House[]>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/housing/houses?player=${query}`, options);
    return new RequestData<House[]>(
      res.rawData.map((house: Record<string, any>) => new House(house)),
      res
    );
  }
}

export default getPlayerHouses;
