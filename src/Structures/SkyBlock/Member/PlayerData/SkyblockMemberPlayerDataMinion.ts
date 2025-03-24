import type { SkyblockMinion, SkyblockMinionName } from '../../../../Types/Skyblock.js';

class SkyblockMemberPlayerDataMinion {
  minion: SkyblockMinionName;
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
  constructor(data: SkyblockMinion[], minion: SkyblockMinionName) {
    this.minion = minion;
    // this.tier1 = data.includes(`${minion}_1`) || false;
    // this.tier2 = data.includes(`${minion}_2`) || false;
    // this.tier3 = data.includes(`${minion}_3`) || false;
    // this.tier4 = data.includes(`${minion}_4`) || false;
    // this.tier5 = data.includes(`${minion}_5`) || false;
    // this.tier6 = data.includes(`${minion}_6`) || false;
    // this.tier7 = data.includes(`${minion}_7`) || false;
    // this.tier8 = data.includes(`${minion}_8`) || false;
    // this.tier9 = data.includes(`${minion}_9`) || false;
    // this.tier10 = data.includes(`${minion}_10`) || false;
    // this.tier11 = data.includes(`${minion}_11`) || false;
    // this.tier12 = data.includes(`${minion}_12`) || false;

    this.tier1 = false;
    this.tier2 = false;
    this.tier3 = false;
    this.tier4 = false;
    this.tier5 = false;
    this.tier6 = false;
    this.tier7 = false;
    this.tier8 = false;
    this.tier9 = false;
    this.tier10 = false;
    this.tier11 = false;
    this.tier12 = false;
  }
}

export default SkyblockMemberPlayerDataMinion;
