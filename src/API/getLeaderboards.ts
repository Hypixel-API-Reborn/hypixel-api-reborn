import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getLeaderboards extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<Record<string, Leaderboard[]>>> {
    const res = await this.client.requestHandler.request('/leaderboards', options);
    if (!res.rawData.leaderboards) {
      throw new HypixelAPIRebornError(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const leaderboards: Record<string, Leaderboard[]> = {};
    Object.keys(res.rawData.leaderboards).forEach((key) => {
      leaderboards[key] = res.rawData.leaderboards[key].map(
        (leaderboard: Record<string, any>) => new Leaderboard(leaderboard)
      );
    });
    return new RequestData<Record<string, Leaderboard[]>>(leaderboards, res);
  }
}

export default getLeaderboards;
