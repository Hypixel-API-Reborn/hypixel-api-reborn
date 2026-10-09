import BaseSkyWarsMode from '../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsRankedKits from './SkyWarsRankedKits.ts';

class SkyWarsRanked extends BaseSkyWarsMode {
  normal: BaseSkyWarsMode;
  kits: SkyWarsRankedKits;
  constructor(data: Record<string, any>) {
    super(data, 'ranked');
    this.normal = new BaseSkyWarsMode(data, 'ranked_normal');
    this.kits = new SkyWarsRankedKits(data);
  }
}

export default SkyWarsRanked;
