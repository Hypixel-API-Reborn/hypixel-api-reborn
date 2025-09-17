import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import Status from '../Structures/Status.js';
import type { RequestOptions } from '../Types/Requests.js';

class getStatus extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<Status | RequestData> {
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/status?uuid=${query}`, options);
    if (res.options.raw) return res;
    return new Status(res.data.session);
  }
}

export default getStatus;
