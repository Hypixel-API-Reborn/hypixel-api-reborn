import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsAdvanced from './SkyWarsSoloKitsAdvanced.ts';
import SkyWarsSoloKitsBasic from './SkyWarsSoloKitsBasic.ts';
import SkyWarsSoloKitsLab from './SkyWarsSoloKitsLab/SkyWarsSoloKitsLab.ts';
import SkyWarsSoloKitsMini from './SkyWarsSoloKitsMini.ts';
import SkyWarsSoloKitsTourney from './SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourney.ts';
declare class SkyWarsSoloKits {
    lab: SkyWarsSoloKitsLab;
    basic: SkyWarsSoloKitsBasic;
    advanced: SkyWarsSoloKitsAdvanced;
    mini: SkyWarsSoloKitsMini;
    tourney: SkyWarsSoloKitsTourney;
    enderChest: BaseSkyWarsMode;
    constructor(data: Record<string, any>);
}
export default SkyWarsSoloKits;
//# sourceMappingURL=SkyWarsSoloKits.d.ts.map