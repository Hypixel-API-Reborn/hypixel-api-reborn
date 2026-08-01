import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import SkyBlockGarden from '../Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockProfile from '../Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type SkyBlockMuseum from '../Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type { SkyBlockRequestOptions } from '../Types/API.js';

class getSkyBlockProfile extends Endpoint {
  override async execute(profileId: string, options?: SkyBlockRequestOptions): Promise<RequestData<SkyBlockProfile>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/profile?profile=${profileId}`, options);
    if (!res.rawData.profile) throw new HypixelAPIRebornError(Errors.NO_SKYBLOCK_PROFILES);
    const garden = options?.museum ? await this.handleGettingSkyBlockGarden(res.rawData.profile.profile_id) : undefined;
    const museum = options?.museum ? await this.handleGettingSkyBlockMuseum(res.rawData.profile.profile_id) : undefined;
    return new RequestData<SkyBlockProfile>(
      new SkyBlockProfile(res.rawData.profile, { uuid: null, garden, museum }),
      res
    );
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

export default getSkyBlockProfile;
