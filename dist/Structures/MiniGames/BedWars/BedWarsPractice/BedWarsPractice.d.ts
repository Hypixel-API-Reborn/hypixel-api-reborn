import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import BedWarsPracticeMode from './BedWarsPracticeMode.js';
import type { BedWarsPracticeModeId } from '../../../../Types/Player.js';
declare class BedWarsPractice {
    bridging: BedWarsPracticeBridging;
    fireballJumping: BedWarsPracticeMode;
    mlg: BedWarsPracticeMode;
    pearlClutching: BedWarsPracticeMode;
    selected: BedWarsPracticeModeId | 'UNKNOWN';
    constructor(data: Record<string, any>);
}
export default BedWarsPractice;
//# sourceMappingURL=BedWarsPractice.d.ts.map