import BaseSkyWarsMode from '../../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsSoloKitsLabAdvanced from './SkyWarsSoloKitsLabAdvanced.ts';
import SkyWarsSoloKitsLabBasic from './SkyWarsSoloKitsLabBasic.js';
declare class SkyWarsSoloKitsLab {
    basic: SkyWarsSoloKitsLabBasic;
    advanced: SkyWarsSoloKitsLabAdvanced;
    enderChest: BaseSkyWarsMode;
    constructor(data: Record<string, any>);
}
export default SkyWarsSoloKitsLab;
//# sourceMappingURL=SkyWarsSoloKitsLab.d.ts.map