import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockGarden extends Endpoint {
  override async execute(profileId: string, options?: RequestOptions): Promise<SkyBlockGarden | RequestData> {
    if (!profileId) throw new Error(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    if (res.options.raw) return res;
    return new SkyBlockGarden(res.data.garden);
  }
}

export default getSkyBlockGarden;
