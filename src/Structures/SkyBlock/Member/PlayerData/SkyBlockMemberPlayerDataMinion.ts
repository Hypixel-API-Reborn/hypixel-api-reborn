import type { SkyBlockMinion, SkyBlockMinionName } from '../../../../Types/index.js';

class SkyBlockMemberPlayerDataMinion {
  minion: SkyBlockMinionName;
  tier1: boolean;
  tier2: boolean;
  tier3: boolean;
  tier4: boolean;
  tier5: boolean;
  tier6: boolean;
  tier7: boolean;
  tier8: boolean;
  tier9: boolean;
  tier10: boolean;
  tier11: boolean;
  tier12: boolean;
  constructor(data: SkyBlockMinion[], minion: SkyBlockMinionName) {
    this.minion = minion;
    this.tier1 = data.includes(`${minion}_1`);
    this.tier2 = data.includes(`${minion}_2`);
    this.tier3 = data.includes(`${minion}_3`);
    this.tier4 = data.includes(`${minion}_4`);
    this.tier5 = data.includes(`${minion}_5`);
    this.tier6 = data.includes(`${minion}_6`);
    this.tier7 = data.includes(`${minion}_7`);
    this.tier8 = data.includes(`${minion}_8`);
    this.tier9 = data.includes(`${minion}_9`);
    this.tier10 = data.includes(`${minion}_10`);
    this.tier11 = data.includes(`${minion}_11`);
    this.tier12 = data.includes(`${minion}_12`);
  }
}

export default SkyBlockMemberPlayerDataMinion;
