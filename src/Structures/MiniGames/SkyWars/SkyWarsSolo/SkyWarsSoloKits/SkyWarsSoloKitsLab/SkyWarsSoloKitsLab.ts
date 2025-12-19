import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsSoloKitsLabAdvanced from './SkyWarsSoloKitsLabAdvanced.ts';
import SkyWarsSoloKitsLabBasic from './SkyWarsSoloKitsLabBasic.js';

class SkyWarsSoloKitsLab {
  basic: SkyWarsSoloKitsLabBasic;
  advanced: SkyWarsSoloKitsLabAdvanced;
  enderChest: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.basic = new SkyWarsSoloKitsLabBasic(data);
    this.advanced = new SkyWarsSoloKitsLabAdvanced(data);
    this.enderChest = new SkyWarsMode(data, 'lab_kit_enderchest_solo_enderchest');
  }
}

export default SkyWarsSoloKitsLab;
