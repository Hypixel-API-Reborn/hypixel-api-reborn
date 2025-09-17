import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import RequestData from '../Private/RequestData.js';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { SkyBlockRequestOptions } from '../Types/API.js';

class getSkyBlockProfile extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(profileId: string, options?: SkyBlockRequestOptions): Promise<SkyBlockProfile | RequestData> {
    if (!profileId) throw new Error(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/profile?profile=${profileId}`, options);
    if (res.options.raw) return res;
    if (!res.data.profile) throw new Error(Errors.NO_SKYBLOCK_PROFILES);
    const garden = await this.handleGettingSkyBlockGarden(res.data.profile.profile_id);
    const museum = await this.handleGettingSkyBlockMuseum(res.data.profile.profile_id);
    const parsedProfile = new SkyBlockProfile(res.data.profile, { uuid: null, garden, museum });
    return parsedProfile;
  }

  private async handleGettingSkyBlockGarden(profileId: string): Promise<SkyBlockGarden | null> {
    try {
      const garden = await this.client.getSkyBlockGarden(profileId);
      return garden as SkyBlockGarden;
    } catch {
      return null;
    }
  }

  private async handleGettingSkyBlockMuseum(profileId: string): Promise<SkyBlockMuseum | null> {
    try {
      const museum = await this.client.getSkyBlockMuseum(profileId);
      return museum as SkyBlockMuseum;
    } catch {
      return null;
    }
  }
}

export default getSkyBlockProfile;
