import Achievements from '../Structures/Static/Achievements/Achievements.js';
import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getAchievements extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(options?: RequestOptions): Promise<Achievements | RequestData> {
    const res = await this.client.requestHandler.request('/resources/achievements', options);
    if (res.options.raw) return res;
    return new Achievements(res.data);
  }
}

export default getAchievements;
