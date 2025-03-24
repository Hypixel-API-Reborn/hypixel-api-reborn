import type { WitherCageKilledEye } from '../../../../Types/Skyblock.js';

class SkyblockMemberRiftWitherCage {
  killedEyes: WitherCageKilledEye[];
  constructor(data: Record<string, any>) {
    this.killedEyes = data?.killed_eyes || [];
  }
}

export default SkyblockMemberRiftWitherCage;
