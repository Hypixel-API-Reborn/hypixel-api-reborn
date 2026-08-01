import Achievements from '../Structures/Static/Achievements/Achievements.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getAchievements extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<Achievements>> {
    const res = await this.client.requestHandler.request('/resources/achievements', options);
    return new RequestData<Achievements>(new Achievements(res.rawData), res);
  }
}

export default getAchievements;
