import type { SkyBlockGemstoneQuality } from '../../Types/SkyBlock.js';

class SkyBlockGemstone {
  type: string | 'UNKNOWN';
  quality: SkyBlockGemstoneQuality | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.type = data?.type || 'UNKNOWN';
    this.quality = data?.quality || 'UNKNOWN';
  }
}

export default SkyBlockGemstone;
