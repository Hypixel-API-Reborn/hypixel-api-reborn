import type { SkyblockGemstoneQuality } from '../../Types/Skyblock.js';

class SkyblockGemstone {
  type: string;
  quality: SkyblockGemstoneQuality;
  constructor(data: Record<string, any>) {
    this.type = data.type;
    this.quality = data.quality;
  }
}

export default SkyblockGemstone;
