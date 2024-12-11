import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import RequestData from '../Private/RequestData.js';
import SkyblockMember from '../Structures/SkyBlock/SkyblockMember.js';
import { SkyblockRequestOptions } from '../Types/API.js';

class getSkyblockMember extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(query: string, options?: SkyblockRequestOptions): Promise<Map<string, SkyblockMember> | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (!res.data.profiles || !res.data.profiles.length) throw new Error(this.client.errors.NO_SKYBLOCK_PROFILES);
    const memberByProfileName = new Map();
    for (const profile of res.data.profiles) {
      memberByProfileName.set(
        profile.cute_name,
        new SkyblockMember({
          uuid: query,
          profileId: profile.profile_id,
          garden: options?.garden ? await this.client.getSkyblockGarden(profile.profile_id) : null,
          museum: options?.museum ? await this.client.getSkyblockMuseum(query, profile.profile_id) : null,
          profileName: profile.cute_name,
          gameMode: profile.game_mode || null,
          m: profile.members[query],
          banking: profile.banking,
          communityUpgrades: profile.community_upgrades,
          selected: profile.selected
        })
      );
    }
    return memberByProfileName;
  }
}

export default getSkyblockMember;
