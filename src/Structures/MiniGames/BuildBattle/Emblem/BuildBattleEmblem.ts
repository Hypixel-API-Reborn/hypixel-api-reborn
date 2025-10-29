import BuildBattleEmblemColors from './BuildBattleEmblemColors.ts';
import type { BuildBattleEmblemIcon } from '../../../../Types/Player.ts';
import type { ColorCode } from '../../../../Types/Color.ts';

class BuildBattleEmblem {
  colorUnlocked: BuildBattleEmblemColors;
  selectedColor: ColorCode | 'UNKNOWN';
  selectedIcon: BuildBattleEmblemIcon | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.colorUnlocked = new BuildBattleEmblemColors(data?.color_unlocked || {});
    this.selectedColor = data?.selected_color || 'UNKNOWN';
    this.selectedIcon = data?.selected_icon || 'UNKNOWN';
  }
}

export default BuildBattleEmblem;
