import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockGarden from '../Structures/SkyBlock/Garden/SkyblockGarden.js';
import SkyblockProfile from '../Structures/SkyBlock/Profile/SkyblockProfile.js';
import type { SkyblockProfileName } from '../Types/Skyblock.js';
import type { SkyblockRequestOptions } from '../Types/API.js';

class getSkyblockProfiles extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile> | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const profiles: Map<SkyblockProfileName | 'UNKNOWN', SkyblockProfile> = new Map();
    for (const profile of res.data.profiles) {
      const garden = await this.handleGettingSkyblockGarden(profile.profile_id);
      const parsedProfile = new SkyblockProfile(profile, { uuid: query, garden });
      profiles.set(parsedProfile.profileName, parsedProfile);
    }
    return profiles;
  }

  private async handleGettingSkyblockGarden(profileId: string): Promise<SkyblockGarden | null> {
    try {
      const garden = await this.client.getSkyblockGarden(profileId);
      return garden as SkyblockGarden;
    } catch {
      return null;
    }
  }
}

export default getSkyblockProfiles;
