import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getRecentGames extends Endpoint {
  override async execute(query: string, options?: RequestOptions): Promise<RequestData<RecentGame[]>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    const profile = await this.client.requestHandler.getProfile(query);
    query = profile.UUID;
    const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
    return new RequestData<RecentGame[]>(
      res.rawData.games.map((game: Record<string, any>) => new RecentGame(game)),
      res,
      profile
    );
  }
}

export default getRecentGames;
