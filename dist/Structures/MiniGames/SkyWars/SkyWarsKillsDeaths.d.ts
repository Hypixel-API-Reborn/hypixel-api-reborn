import SkyWarsKillsDeathsType from './SkyWarsKillsDeathsType.ts';
import type { SkyWarsKitId, SkyWarsModeId } from '../../../Types/Player.ts';
declare class SkyWarsKillsDeaths {
    total: SkyWarsKillsDeathsType;
    melee: SkyWarsKillsDeathsType;
    void: SkyWarsKillsDeathsType;
    bow: SkyWarsKillsDeathsType;
    mob: SkyWarsKillsDeathsType;
    fall: SkyWarsKillsDeathsType;
    constructor(data: Record<string, any>, mode?: SkyWarsModeId | SkyWarsKitId);
}
export default SkyWarsKillsDeaths;
//# sourceMappingURL=SkyWarsKillsDeaths.d.ts.map