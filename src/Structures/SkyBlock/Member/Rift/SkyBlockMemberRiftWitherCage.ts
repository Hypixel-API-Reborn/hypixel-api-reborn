import type { WitherCageKilledEye } from '../../../../Types/index.js';

class SkyBlockMemberRiftWitherCage {
  killedEyes: WitherCageKilledEye[];
  constructor(data: Record<string, any>) {
    this.killedEyes = data?.killed_eyes ?? [];
  }
}

export default SkyBlockMemberRiftWitherCage;
