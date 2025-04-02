import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type { SkyBlockProfileName } from '../Types/SkyBlock.js';
import type { SkyBlockRequestOptions } from '../Types/API.js';

class getSkyBlockProfiles extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    query: string,
    options?: SkyBlockRequestOptions
  ): Promise<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const profiles: Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> = new Map();
    for (const profile of res.data.profiles) {
      const garden = await this.handleGettingSkyBlockGarden(profile.profile_id);
      const parsedProfile = new SkyBlockProfile(profile, { uuid: query, garden });
      profiles.set(parsedProfile.profileName, parsedProfile);
    }
    return profiles;
  }

  private async handleGettingSkyBlockGarden(profileId: string): Promise<SkyBlockGarden | null> {
    try {
      const garden = await this.client.getSkyBlockGarden(profileId);
      return garden as SkyBlockGarden;
    } catch {
      return null;
    }
  }
}

export default getSkyBlockProfiles;
