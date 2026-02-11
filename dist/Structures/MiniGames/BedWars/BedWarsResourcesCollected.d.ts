import BedWarsItemsPurchased from './BedWarsItemsPurchased.js';
import type { BedWarsModeId } from '../../../Types/Player.js';
declare class BedWarsResourcesCollected {
    total: number;
    emerald: number;
    diamond: number;
    gold: number;
    iron: number;
    wrappedPresent: number;
    bed: number;
    itemsPurchased: BedWarsItemsPurchased;
    constructor(data: Record<string, any>, mode?: BedWarsModeId);
}
export default BedWarsResourcesCollected;
//# sourceMappingURL=BedWarsResourcesCollected.d.ts.map