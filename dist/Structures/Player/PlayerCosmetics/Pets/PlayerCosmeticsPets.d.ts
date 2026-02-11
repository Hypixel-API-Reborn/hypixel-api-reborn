import PlayerCosmeticsPet from './PlayerCosmeticsPet.js';
import PlayerCosmeticsPetsConsumables from './PlayerCosmeticsPetsConsumables.js';
declare class PlayerCosmeticsPets {
    lastJourney: number | null;
    lastJourneyAt: Date | null;
    consumables: PlayerCosmeticsPetsConsumables;
    pets: PlayerCosmeticsPet[];
    constructor(data: Record<string, any>, pets: string[]);
}
export default PlayerCosmeticsPets;
//# sourceMappingURL=PlayerCosmeticsPets.d.ts.map