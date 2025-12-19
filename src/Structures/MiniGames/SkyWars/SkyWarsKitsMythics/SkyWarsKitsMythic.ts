import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import { ParseModeAfter, ParseModeBefore } from '../../../../Utils/ParseMode.ts';
import type { SkyWarsMythicKitId } from '../../../../Types/Player.ts';

class SkyWarsKitsMythic extends SkyWarsMode {
  autoEquipArmor: boolean;
  xp: number;
  constructor(data: Record<string, any>, kit?: SkyWarsMythicKitId) {
    kit = ParseModeAfter(kit) as SkyWarsMythicKitId;
    super(data, kit);
    this.autoEquipArmor = data?.[`${ParseModeBefore(kit)}inventory_auto_equip_armor`] || true;
    this.xp = data?.[`xp${kit}`] || 0;
  }
}

export default SkyWarsKitsMythic;
