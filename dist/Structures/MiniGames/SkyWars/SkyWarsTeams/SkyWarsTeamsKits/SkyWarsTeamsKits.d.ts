import BaseSkyWarsMode from '../../SkyWarsMode/BaseSkyWarsMode.ts';
import SkyWarsTeamsKitsAttacking from './SkyWarsTeamsKitsAttacking.ts';
import SkyWarsTeamsKitsDefending from './SkyWarsTeamsKitsDefending.ts';
import SkyWarsTeamsKitsMining from './SkyWarsTeamsKitsMining.ts';
import SkyWarsTeamsKitsSupporting from './SkyWarsTeamsKitsSupporting.ts';
declare class SkyWarsTeamsKits {
    mining: SkyWarsTeamsKitsMining;
    defending: SkyWarsTeamsKitsDefending;
    supporting: SkyWarsTeamsKitsSupporting;
    attacking: SkyWarsTeamsKitsAttacking;
    enderChest: BaseSkyWarsMode;
    constructor(data: Record<string, any>);
}
export default SkyWarsTeamsKits;
//# sourceMappingURL=SkyWarsTeamsKits.d.ts.map