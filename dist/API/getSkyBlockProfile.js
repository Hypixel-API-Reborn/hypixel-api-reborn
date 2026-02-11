import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
class getSkyBlockProfile extends Endpoint {
    async execute(profileId, options) {
        if (!profileId)
            throw new Error(Errors.NO_UUID);
        const res = await this.client.requestHandler.request(`/skyblock/profile?profile=${profileId}`, options);
        if (res.options.raw)
            return res;
        if (!res.data.profile)
            throw new Error(Errors.NO_SKYBLOCK_PROFILES);
        const garden = options?.museum ? await this.handleGettingSkyBlockGarden(res.data.profile.profile_id) : undefined;
        const museum = options?.museum ? await this.handleGettingSkyBlockMuseum(res.data.profile.profile_id) : undefined;
        const parsedProfile = new SkyBlockProfile(res.data.profile, { uuid: null, garden, museum });
        return parsedProfile;
    }
    async handleGettingSkyBlockGarden(profileId) {
        try {
            const garden = await this.client.getSkyBlockGarden(profileId);
            return garden;
        }
        catch {
            return undefined;
        }
    }
    async handleGettingSkyBlockMuseum(profileId) {
        try {
            const museum = await this.client.getSkyBlockMuseum(profileId);
            return museum;
        }
        catch {
            return undefined;
        }
    }
}
export default getSkyBlockProfile;
//# sourceMappingURL=getSkyBlockProfile.js.map