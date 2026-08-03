import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { SkyBlockProfileName, SkyblockProfileWithMe } from '../Types/SkyBlock.js';
import type { SkyBlockRequestOptions, WithSelectedProfile } from '../Types/API.js';

class getSkyBlockProfiles extends Endpoint {
  override async execute(
    query: string,
    options?: SkyBlockRequestOptions
  ): Promise<RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    const profile = await this.client.requestHandler.getProfile(query);
    query = profile.UUID;
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (!res.rawData.profiles || !res.rawData.profiles.length) {
      throw new HypixelAPIRebornError(Errors.NO_SKYBLOCK_PROFILES);
    }
    const profiles: Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> = new Map();
    for (const profile of res.rawData.profiles) {
      const garden = options?.garden ? await this.handleGettingSkyBlockGarden(profile.profile_id) : undefined;
      const museum = options?.museum ? await this.handleGettingSkyBlockMuseum(profile.profile_id) : undefined;
      const parsedProfile = new SkyBlockProfile(profile, { uuid: query, garden, museum });
      profiles.set(parsedProfile.profileName, parsedProfile);
    }

    const selectedProfile = Array.from(profiles.values()).find(
      (profile): profile is SkyblockProfileWithMe => profile.selected === true && this.hasMe(profile)
    );

    return new RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>(
      Object.assign(profiles, { selectedProfile }),
      res,
      profile
    );
  }

  private hasMe(profile: SkyBlockProfile): profile is SkyblockProfileWithMe {
    return profile.me !== null;
  }

  private async handleGettingSkyBlockGarden(profileId: string): Promise<RequestData<SkyBlockGarden> | undefined> {
    try {
      return await this.client.getSkyBlockGarden(profileId);
    } catch {
      return undefined;
    }
  }

  private async handleGettingSkyBlockMuseum(profileId: string): Promise<RequestData<SkyBlockMuseum> | undefined> {
    try {
      return await this.client.getSkyBlockMuseum(profileId);
    } catch {
      return undefined;
    }
  }
}

export default getSkyBlockProfiles;
