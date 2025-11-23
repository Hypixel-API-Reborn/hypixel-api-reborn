import EmblemColors from './EmblemColors.js';
import type { ColorCode } from '../../../../Types/Color.js';

class Emblem<Icons> {
  colorUnlocked: EmblemColors;
  selectedColor: ColorCode | 'UNKNOWN';
  selectedIcon: Icons | 'UNKNOWN';
  constructor(data: Record<string, any>) {
    this.colorUnlocked = new EmblemColors(data?.color_unlocked || {});
    this.selectedColor = data?.selected_color || 'UNKNOWN';
    this.selectedIcon = data?.selected_icon || 'UNKNOWN';
  }
}

export default Emblem;
