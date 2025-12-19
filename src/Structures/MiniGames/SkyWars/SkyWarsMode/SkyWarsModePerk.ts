import { ParseModeAfter, ParseModeBefore, ParseModeBeforeAfter } from '../../../../Utils/ParseMode.ts';
import type { SkyWarsModeId, SkyWarsPerkId } from '../../../../Types/Player.ts';

class SkyWarsModePerk {
  level: number;
  enabled: boolean;
  constructor(data: Record<string, any>, perk: SkyWarsPerkId, mode: SkyWarsModeId) {
    perk = ParseModeAfter(mode) as SkyWarsPerkId;
    mode = ParseModeBefore(mode) as SkyWarsModeId;
    this.level = data?.[`${mode}${perk}`] || 0;
    mode = ParseModeBeforeAfter(mode) as SkyWarsModeId;
    this.enabled = data?.[`toggle_${mode}${perk}`] || 0;
  }
}

export default SkyWarsModePerk;
