import Booster from '../Structures/Boosters/Booster.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.js';

class getBoosters extends Endpoint {
  override async execute(options?: RequestOptions): Promise<WithRaw<Booster[]> | RequestData> {
    const res = await this.client.requestHandler.request('/boosters', options);
    if (res.options.raw) return res;
    const boosters = res.data.boosters.map((b: any) => new Booster(b)).reverse();
    return Object.assign(boosters, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getBoosters;
