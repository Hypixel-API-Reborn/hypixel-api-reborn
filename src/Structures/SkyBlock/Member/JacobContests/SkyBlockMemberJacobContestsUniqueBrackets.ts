import type { JacobCrops } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberJacobContestsUniqueBrackets {
  bronze: JacobCrops[];
  silver: JacobCrops[];
  gold: JacobCrops[];
  platinum: JacobCrops[];
  diamond: JacobCrops[];
  constructor(data: Record<string, any>) {
    this.bronze = data?.bronze || [];
    this.silver = data?.silver || [];
    this.gold = data?.gold || [];
    this.platinum = data?.platinum || [];
    this.diamond = data?.diamond || [];
  }
}

export default SkyBlockMemberJacobContestsUniqueBrackets;
