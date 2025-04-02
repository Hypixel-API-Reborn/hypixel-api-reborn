import type { WitherCageKilledEye } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberRiftWitherCage {
  killedEyes: WitherCageKilledEye[];
  constructor(data: Record<string, any>) {
    this.killedEyes = data?.killed_eyes || [];
  }
}

export default SkyBlockMemberRiftWitherCage;
