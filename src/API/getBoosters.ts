import Booster from '../Structures/Boosters/Booster.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getBoosters extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<Booster[]>> {
    const res = await this.client.requestHandler.request('/boosters', options);
    return new RequestData<Booster[]>(
      res.rawData.boosters.map((booster: Record<string, any>) => new Booster(booster)).reverse(),
      res
    );
  }
}

export default getBoosters;
