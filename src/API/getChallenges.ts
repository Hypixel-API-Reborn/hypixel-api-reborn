import Challenges from '../Structures/Static/Challenges.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.ts';
import type { RequestOptions } from '../Types/Requests.js';

class getChallenges extends Endpoint {
  override async execute(options?: RequestOptions): Promise<RequestData<Challenges>> {
    const res = await this.client.requestHandler.request('/resources/challenges', options);
    return new RequestData<Challenges>(new Challenges(res.rawData), res);
  }
}
export default getChallenges;
