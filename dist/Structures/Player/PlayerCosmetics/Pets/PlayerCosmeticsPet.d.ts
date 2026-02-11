import type { PlayerCosmeticsPetName } from '../../../../Types/Player.js';
declare class PlayerCosmeticsPet {
    isFavorite: boolean;
    name: PlayerCosmeticsPetName | 'UNKNOWN';
    active: boolean;
    hunger: number;
    lastFed: number | null;
    lastFedAt: Date | null;
    thirst: number;
    lastDrank: number | null;
    lastDrankAt: Date | null;
    exercise: number;
    lastExercised: number | null;
    lastExercisedAt: Date | null;
    nickname: string;
    experience: number;
    constructor(name: string, data: Record<string, any>);
}
export default PlayerCosmeticsPet;
//# sourceMappingURL=PlayerCosmeticsPet.d.ts.map