import BaseSkyWarsMode from '../SkyWarsMode/BaseSkyWarsMode.ts';
import type { SkyWarsMythicKitId } from '../../../../Types/Player.ts';
declare class SkyWarsKitsMythic extends BaseSkyWarsMode {
    autoEquipArmor: boolean;
    xp: number;
    constructor(data: Record<string, any>, kit?: SkyWarsMythicKitId);
}
export default SkyWarsKitsMythic;
//# sourceMappingURL=SkyWarsKitsMythic.d.ts.map