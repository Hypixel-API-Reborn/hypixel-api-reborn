import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import Leaderboard from '../Structures/Leaderboard.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
import type { WithRaw } from '../Types/API.ts';

class getLeaderboards extends Endpoint {
  override async execute(options?: RequestOptions): Promise<WithRaw<Record<string, Leaderboard[]>> | RequestData> {
    const res = await this.client.requestHandler.request('/leaderboards', options);
    if (res.options.raw) return res;
    if (!res.data.leaderboards) {
      throw new Error(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const leaderboards: Record<string, Leaderboard[]> = {};
    Object.keys(res.data.leaderboards).forEach((key) => {
      leaderboards[key] = res.data.leaderboards[key].map((l: Record<string, any>) => new Leaderboard(l));
    });
    return Object.assign(leaderboards, {
      isRaw(): this is RequestData {
        return false;
      }
    });
  }
}

export default getLeaderboards;
