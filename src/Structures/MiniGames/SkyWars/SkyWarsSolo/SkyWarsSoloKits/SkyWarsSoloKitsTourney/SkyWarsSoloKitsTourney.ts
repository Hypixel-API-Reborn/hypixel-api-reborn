import SkyWarsMode from '../../../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsSoloKitsTourneyAdvanced from './SkyWarsSoloKitsTourneyAdvanced.ts';
import SkyWarsSoloKitsTourneyBasic from './SkyWarsSoloKitsTourneyBasic.ts';

class SkyWarsSoloKitsTourney {
  basic: SkyWarsSoloKitsTourneyBasic;
  advanced: SkyWarsSoloKitsTourneyAdvanced;
  enderChest: SkyWarsMode;
  constructor(data: Record<string, any>) {
    this.basic = new SkyWarsSoloKitsTourneyBasic(data);
    this.advanced = new SkyWarsSoloKitsTourneyAdvanced(data);
    this.enderChest = new SkyWarsMode(data, 'tourney_kit_enderchest_solo_enderchest');
  }
}

export default SkyWarsSoloKitsTourney;
