import type { SkyblockGemstoneQuality } from '../../Types/Skyblock.js';

class SkyblockGemstone {
  type: string | 'UNKNOWN';
  quality: SkyblockGemstoneQuality | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.type = data?.type || 'UNKNOWN';
    this.quality = data?.quality || 'UNKNOWN';
  }
}

export default SkyblockGemstone;
