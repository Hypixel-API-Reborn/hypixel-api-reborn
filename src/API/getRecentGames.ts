import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getRecentGames extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: RequestOptions): Promise<RecentGame[] | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/recentgames?uuid=${query}`, options);
    if (res.options.raw) return res;
    return res.data.games.map((x: any) => new RecentGame(x));
  }
}

export default getRecentGames;
