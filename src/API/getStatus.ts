import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import Status from '../Structures/Status.js';
import type { RequestOptions } from '../Types/Requests.js';

class getStatus extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<RequestData<Status>> {
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/status?uuid=${query}`, options);
    return new RequestData<Status>(new Status(res.rawData.session), res);
  }
}

export default getStatus;
