import Endpoint from '../Private/Endpoint.js';
import Quests from '../Structures/Static/Quests.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getQuests extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<Quests>> {
    const res = await this.client.requestHandler.request('/resources/quests', options);
    return new RequestData<Quests>(new Quests(res.rawData), res);
  }
}

export default getQuests;
