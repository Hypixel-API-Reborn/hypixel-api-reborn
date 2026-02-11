import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsTourneyAdvanced from './SkyWarsSoloKitsTourneyAdvanced.ts';
import SkyWarsSoloKitsTourneyBasic from './SkyWarsSoloKitsTourneyBasic.ts';
declare class SkyWarsSoloKitsTourney {
    basic: SkyWarsSoloKitsTourneyBasic;
    advanced: SkyWarsSoloKitsTourneyAdvanced;
    enderChest: BaseSkyWarsMode;
    constructor(data: Record<string, any>);
}
export default SkyWarsSoloKitsTourney;
//# sourceMappingURL=SkyWarsSoloKitsTourney.d.ts.map