import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockSkills from '../Structures/SkyBlock/Skills/SkyBlockSkills.js';
import type { RequestOptions } from '../Types/Requests.js';
declare class getSkyBlockSkills extends Endpoint {
    execute(options?: RequestOptions): Promise<SkyBlockSkills | RequestData>;
}
export default getSkyBlockSkills;
//# sourceMappingURL=getSkyBlockSkills.d.ts.map