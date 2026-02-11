import Challenges from '../Structures/Static/Challenges.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getChallenges extends Endpoint {
    execute(options?: RequestOptions): Promise<Challenges | RequestData>;
}
export default getChallenges;
//# sourceMappingURL=getChallenges.d.ts.map