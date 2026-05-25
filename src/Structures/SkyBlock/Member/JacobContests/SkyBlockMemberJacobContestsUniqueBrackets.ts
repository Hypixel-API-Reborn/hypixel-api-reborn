import type { JacobCrop } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberJacobContestsUniqueBrackets {
  bronze: JacobCrop[];
  silver: JacobCrop[];
  gold: JacobCrop[];
  platinum: JacobCrop[];
  diamond: JacobCrop[];
  constructor(data: Record<string, any>) {
    this.bronze = data?.bronze || [];
    this.silver = data?.silver || [];
    this.gold = data?.gold || [];
    this.platinum = data?.platinum || [];
    this.diamond = data?.diamond || [];
  }
}

export default SkyBlockMemberJacobContestsUniqueBrackets;
