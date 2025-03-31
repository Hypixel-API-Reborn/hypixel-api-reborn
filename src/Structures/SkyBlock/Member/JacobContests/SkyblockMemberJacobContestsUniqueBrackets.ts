import type { JacobCrops } from '../../../../Types/Skyblock.js';

class SkyblockMemberJacobContestsUniqueBrackets {
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

export default SkyblockMemberJacobContestsUniqueBrackets;
