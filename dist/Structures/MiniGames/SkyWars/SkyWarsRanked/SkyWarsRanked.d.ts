import BaseSkyWarsMode from '../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsRankedKits from './SkyWarsRankedKits.ts';
declare class SkyWarsRanked extends BaseSkyWarsMode {
    normal: BaseSkyWarsMode;
    kits: SkyWarsRankedKits;
    constructor(data: Record<string, any>);
}
export default SkyWarsRanked;
//# sourceMappingURL=SkyWarsRanked.d.ts.map