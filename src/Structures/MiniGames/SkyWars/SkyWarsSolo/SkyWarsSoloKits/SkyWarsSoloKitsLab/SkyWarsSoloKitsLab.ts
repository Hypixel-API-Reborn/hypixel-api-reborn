import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsLabAdvanced from './SkyWarsSoloKitsLabAdvanced.ts';
import SkyWarsSoloKitsLabBasic from './SkyWarsSoloKitsLabBasic.js';

class SkyWarsSoloKitsLab {
  basic: SkyWarsSoloKitsLabBasic;
  advanced: SkyWarsSoloKitsLabAdvanced;
  enderChest: BaseSkyWarsMode;
  constructor(data: Record<string, any>) {
    this.basic = new SkyWarsSoloKitsLabBasic(data);
    this.advanced = new SkyWarsSoloKitsLabAdvanced(data);
    this.enderChest = new BaseSkyWarsMode(data, 'lab_kit_enderchest_solo_enderchest');
  }
}

export default SkyWarsSoloKitsLab;
