import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { SkyBlockProfileName } from '../Types/SkyBlock.js';
import type { SkyBlockRequestOptions, WithSelectedProfile } from '../Types/API.js';

class getSkyBlockProfiles extends Endpoint {
  override async execute(
    query: string,
    options?: SkyBlockRequestOptions
  ): Promise<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>> | RequestData> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(Errors.NO_SKYBLOCK_PROFILES);
    const profiles: Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> = new Map();
    for (const profile of res.data.profiles) {
      const garden = options?.garden ? await this.handleGettingSkyBlockGarden(profile.profile_id) : null;
      const museum = options?.museum ? await this.handleGettingSkyBlockMuseum(profile.profile_id) : null;
      const parsedProfile = new SkyBlockProfile(profile, { uuid: query, garden, museum });
      profiles.set(parsedProfile.profileName, parsedProfile);
    }

    const selectedProfile = Array.from(profiles.values()).find(
      (profile): profile is SkyBlockProfile & { me: NonNullable<SkyBlockProfile['me']> } =>
        profile.selected === true && this.hasMe(profile)
    );

    return Object.assign(profiles, {
      isRaw(): this is RequestData {
        return false;
      },
      selectedProfile
    });
  }

  private hasMe(profile: SkyBlockProfile): profile is SkyBlockProfile & { me: NonNullable<SkyBlockProfile['me']> } {
    return profile.me !== null;
  }

  private async handleGettingSkyBlockGarden(profileId: string): Promise<SkyBlockGarden | undefined> {
    try {
      const garden = await this.client.getSkyBlockGarden(profileId);
      return garden as SkyBlockGarden;
    } catch {
      return undefined;
    }
  }

  private async handleGettingSkyBlockMuseum(profileId: string): Promise<SkyBlockMuseum | undefined> {
    try {
      const museum = await this.client.getSkyBlockMuseum(profileId);
      return museum as SkyBlockMuseum;
    } catch {
      return undefined;
    }
  }
}

export default getSkyBlockProfiles;
