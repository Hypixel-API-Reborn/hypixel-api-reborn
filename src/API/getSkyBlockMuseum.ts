import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { RequestOptions } from '../Types/Requests.js';

class getSkyBlockMuseum extends Endpoint {
  override async execute(profileId: string, options?: RequestOptions): Promise<RequestData<SkyBlockMuseum>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/museum?profile=${profileId}`, options);
    return new RequestData<SkyBlockMuseum>(new SkyBlockMuseum(res.rawData), res);
  }
}

export default getSkyBlockMuseum;
