import Color from '../../Color.js';
import PlayerCosmeticsPets from './Pets/PlayerCosmeticsPets.js';
import type { PlayerCosmeticsClickEffects, PlayerCosmeticsCloak, PlayerCosmeticsGadget, PlayerCosmeticsHat, PlayerCosmeticsMorph, PlayerCosmeticsParticlePack, PlayerCosmeticsRankColor, PlayerCosmeticsSuit, PlayerCosmeticsTaunt } from '../../../Types/Player.js';
import type { SortName } from '../../../Types/Global.js';
declare class PlayerCosmetics {
    menuSort: SortName | 'UNKNOWN';
    rankPlusColor: Color | null;
    monthlyRankColor: Color | null;
    cosmetics: string[];
    pets: PlayerCosmeticsPets;
    unlockedSuits: PlayerCosmeticsSuit[];
    unlockedHats: PlayerCosmeticsHat[];
    selectedGadget: PlayerCosmeticsGadget | null;
    unlockedGadgets: PlayerCosmeticsGadget[];
    unlockedMorphs: PlayerCosmeticsMorph[];
    unlockedCloaks: PlayerCosmeticsCloak[];
    unlockedTaunts: PlayerCosmeticsTaunt[];
    unlockedRankColors: PlayerCosmeticsRankColor[];
    selectedParticlePack: PlayerCosmeticsParticlePack | 'UNKNOWN';
    unlockedParticlePacks: PlayerCosmeticsParticlePack[];
    unlockedClickEffects: PlayerCosmeticsClickEffects[];
    constructor(data: Record<string, any>);
}
export default PlayerCosmetics;
//# sourceMappingURL=PlayerCosmetics.d.ts.map