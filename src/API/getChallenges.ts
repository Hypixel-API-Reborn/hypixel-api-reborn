import Challenges from '../Structures/Static/Challenges.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';

class getChallenges extends Endpoint {
  override async execute(options?: RequestOptions): Promise<Challenges | RequestData> {
    const res = await this.client.requestHandler.request('/resources/challenges', options);
    if (res.options.raw) return res;
    return new Challenges(res.data);
  }
}
export default getChallenges;
