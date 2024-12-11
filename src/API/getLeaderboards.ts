import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getLeaderboards extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Record<string, Leaderboard[]> | RequestData> {
    const res = await this.client.requestHandler.request('/leaderboards', options);
    if (res.options.raw) return res;
    if (!res.data.leaderboards) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const leaderboards: Record<string, Leaderboard[]> = {};
    Object.keys(res.data.leaderboards).forEach((key) => {
      leaderboards[key] = res.data.leaderboards[key].map((l: Record<string, any>) => new Leaderboard(l));
    });
    return leaderboards;
  }
}

export default getLeaderboards;
