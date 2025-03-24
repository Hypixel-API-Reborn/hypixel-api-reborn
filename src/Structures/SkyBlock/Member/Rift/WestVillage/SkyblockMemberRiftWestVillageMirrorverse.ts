import type { MirrorverseChestItem, MirrorverseRoom } from '../../../../../Types/Skyblock.js';

class SkyblockMemberRiftWestVillageMirrorverse {
  visitedRooms: MirrorverseRoom[];
  upsideDownHard: boolean;
  claimedChestItems: MirrorverseChestItem[];
  claimedReward: boolean;
  constructor(data: Record<string, any>) {
    this.visitedRooms = data?.visited_rooms || [];
    this.upsideDownHard = data?.upside_down_hard || false;
    this.claimedChestItems = data?.claimed_chest_items || [];
    this.claimedReward = data?.claimed_reward || false;
  }
}

export default SkyblockMemberRiftWestVillageMirrorverse;
