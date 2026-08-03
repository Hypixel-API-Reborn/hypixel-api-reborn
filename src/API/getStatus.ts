import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import Status from '../Structures/Status.js';
import type { RequestOptions } from '../Types/Requests.js';

class getStatus extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<RequestData<Status>> {
    const profile = await this.client.requestHandler.getProfile(query);
    query = profile.UUID;
    const res = await this.client.requestHandler.request(`/status?uuid=${query}`, options);
    return new RequestData<Status>(new Status(res.rawData.session), res, profile);
  }
}

export default getStatus;
