import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import House from '../Structures/House.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getHouse extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<RequestData<House>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/housing/house?house=${query}`, options);
    return new RequestData<House>(new House(res.rawData), res);
  }
}

export default getHouse;
