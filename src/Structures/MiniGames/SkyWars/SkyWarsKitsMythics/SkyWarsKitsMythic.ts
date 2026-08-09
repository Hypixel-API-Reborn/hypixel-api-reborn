import BaseSkyWarsMode from '../SkyWarsMode/BaseSkyWarsMode.js';
import { ParseModeAfter, ParseModeBefore } from '../../../../Utils/index.js';
import type { SkyWarsMythicKitId } from '../../../../Types/index.js';

class SkyWarsKitsMythic extends BaseSkyWarsMode {
  autoEquipArmor: boolean;
  xp: number;
  constructor(data: Record<string, any>, kit?: SkyWarsMythicKitId) {
    kit = ParseModeAfter(kit) as SkyWarsMythicKitId;
    super(data, kit);
    this.autoEquipArmor = data?.[`${ParseModeBefore(kit)}inventory_auto_equip_armor`] ?? true;
    this.xp = data?.[`xp${kit}`] ?? 0;
  }
}

export default SkyWarsKitsMythic;
