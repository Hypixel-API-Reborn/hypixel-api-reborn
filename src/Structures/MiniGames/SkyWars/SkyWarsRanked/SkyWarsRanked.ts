import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsRankedKits from './SkyWarsRankedKits.ts';

class SkyWarsRanked extends SkyWarsMode {
  normal: SkyWarsMode;
  kits: SkyWarsRankedKits;
  constructor(data: Record<string, any>) {
    super(data, 'ranked');
    this.normal = new SkyWarsMode(data, 'ranked_normal');
    this.kits = new SkyWarsRankedKits(data);
  }
}

export default SkyWarsRanked;
