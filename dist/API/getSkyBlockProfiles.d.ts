import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type { SkyBlockProfileName } from '../Types/SkyBlock.js';
import type { SkyBlockRequestOptions, WithSelectedProfile } from '../Types/API.js';
declare class getSkyBlockProfiles extends Endpoint {
    execute(query: string, options?: SkyBlockRequestOptions): Promise<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>> | RequestData>;
    private hasMe;
    private handleGettingSkyBlockGarden;
    private handleGettingSkyBlockMuseum;
}
export default getSkyBlockProfiles;
//# sourceMappingURL=getSkyBlockProfiles.d.ts.map