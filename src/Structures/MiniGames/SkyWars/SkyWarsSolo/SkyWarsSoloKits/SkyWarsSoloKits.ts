import SkyWarsMode from '../../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsSoloKitsAdvanced from './SkyWarsSoloKitsAdvanced.ts';
import SkyWarsSoloKitsBasic from './SkyWarsSoloKitsBasic.ts';
import SkyWarsSoloKitsLab from './SkyWarsSoloKitsLab/SkyWarsSoloKitsLab.ts';
import SkyWarsSoloKitsMini from './SkyWarsSoloKitsMini.ts';
import SkyWarsSoloKitsTourney from './SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourney.ts';

class SkyWarsSoloKits {
  lab: SkyWarsSoloKitsLab;
  basic: SkyWarsSoloKitsBasic;
  advanced: SkyWarsSoloKitsAdvanced;
  mini: SkyWarsSoloKitsMini;
  tourney: SkyWarsSoloKitsTourney;
  enderChest: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.lab = new SkyWarsSoloKitsLab(data);
    this.basic = new SkyWarsSoloKitsBasic(data);
    this.advanced = new SkyWarsSoloKitsAdvanced(data);
    this.mini = new SkyWarsSoloKitsMini(data);
    this.tourney = new SkyWarsSoloKitsTourney(data);
    this.enderChest = new SkyWarsMode(data, 'kit_enderchest_solo_enderchest');
  }
}

export default SkyWarsSoloKits;
