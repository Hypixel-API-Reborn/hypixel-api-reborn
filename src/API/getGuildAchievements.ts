import Endpoint from '../Private/Endpoint.js';
import GuildAchievements from '../Structures/Static/Achievements/GuildAchievements.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGuildAchievements extends Endpoint {
  override async execute(options?: RequestOptions): Promise<GuildAchievements | RequestData> {
    const res = await this.client.requestHandler.request('/resources/guilds/achievements', options);
    if (res.options.raw) return res;
    return new GuildAchievements(res.data);
  }
}

export default getGuildAchievements;
