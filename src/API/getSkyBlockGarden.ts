import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockGarden extends Endpoint {
  override async execute(profileId: string, options?: RequestOptions): Promise<RequestData<SkyBlockGarden>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    return new RequestData<SkyBlockGarden>(new SkyBlockGarden(res.rawData.garden), res);
  }
}

export default getSkyBlockGarden;
