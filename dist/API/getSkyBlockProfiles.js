import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
class getSkyBlockProfiles extends Endpoint {
    async execute(query, options) {
        if (!query)
            throw new Error(Errors.NO_NICKNAME_UUID);
        query = await this.client.requestHandler.toUUID(query);
        const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
        if (res.options.raw)
            return res;
        if (!res.data.profiles || !res.data.profiles.length)
            throw new Error(Errors.NO_SKYBLOCK_PROFILES);
        const profiles = new Map();
        for (const profile of res.data.profiles) {
            const garden = options?.garden ? await this.handleGettingSkyBlockGarden(profile.profile_id) : undefined;
            const museum = options?.museum ? await this.handleGettingSkyBlockMuseum(profile.profile_id) : undefined;
            const parsedProfile = new SkyBlockProfile(profile, { uuid: query, garden, museum });
            profiles.set(parsedProfile.profileName, parsedProfile);
        }
        const selectedProfile = Array.from(profiles.values()).find((profile) => profile.selected === true && this.hasMe(profile));
        return Object.assign(profiles, {
            isRaw() {
                return false;
            },
            selectedProfile
        });
    }
    hasMe(profile) {
        return profile.me !== null;
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
export default getSkyBlockProfiles;
//# sourceMappingURL=getSkyBlockProfiles.js.map