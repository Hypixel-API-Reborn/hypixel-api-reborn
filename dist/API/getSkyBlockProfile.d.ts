import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type { SkyBlockRequestOptions } from '../Types/API.js';
declare class getSkyBlockProfile extends Endpoint {
    execute(profileId: string, options?: SkyBlockRequestOptions): Promise<SkyBlockProfile | RequestData>;
    private handleGettingSkyBlockGarden;
    private handleGettingSkyBlockMuseum;
}
export default getSkyBlockProfile;
//# sourceMappingURL=getSkyBlockProfile.d.ts.map