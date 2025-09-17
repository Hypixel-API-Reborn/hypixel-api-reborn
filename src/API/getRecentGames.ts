import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.ts';

class getRecentGames extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<WithRaw<RecentGame[]> | RequestData> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
    if (res.options.raw) return res;
    const games = res.data.games.map((x: any) => new RecentGame(x));
    return Object.assign(games, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getRecentGames;
