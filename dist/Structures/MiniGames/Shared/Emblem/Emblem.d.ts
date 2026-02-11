import EmblemColors from './EmblemColors.js';
import type { ColorCode } from '../../../../Types/Color.js';
declare class Emblem<Icons> {
    colorUnlocked: EmblemColors;
    selectedColor: ColorCode | 'UNKNOWN';
    selectedIcon: Icons | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default Emblem;
//# sourceMappingURL=Emblem.d.ts.map