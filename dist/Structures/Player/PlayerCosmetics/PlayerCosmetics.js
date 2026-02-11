import Color from '../../Color.js';
import PlayerCosmeticsPets from './Pets/PlayerCosmeticsPets.js';
class PlayerCosmetics {
    menuSort;
    rankPlusColor;
    monthlyRankColor;
    cosmetics;
    pets;
    unlockedSuits;
    unlockedHats;
    selectedGadget;
    unlockedGadgets;
    unlockedMorphs;
    unlockedCloaks;
    unlockedTaunts;
    unlockedRankColors;
    selectedParticlePack;
    unlockedParticlePacks;
    unlockedClickEffects;
    constructor(data) {
        this.menuSort = data?.collectibles_menu_sort || 'UNKNOWN';
        this.rankPlusColor = data?.rankPlusColor ? new Color(data?.rankPlusColor) : null;
        this.monthlyRankColor = data?.monthlyRankColor ? new Color(data?.monthlyRankColor) : null;
        this.cosmetics = data?.vanityMeta?.packages || [];
        this.pets = new PlayerCosmeticsPets(data, this.cosmetics.filter((x) => x.startsWith('pet_')));
        this.unlockedSuits = this.cosmetics
            .filter((x) => x.startsWith('suit_'))
            .map((x) => x.replace('suit_', ''));
        this.unlockedHats = this.cosmetics
            .filter((x) => x.startsWith('hat_'))
            .map((x) => x.replace('hat_', ''));
        this.selectedGadget = data?.currentGadget || null;
        this.unlockedGadgets = this.cosmetics
            .filter((x) => x.startsWith('gadget_'))
            .map((x) => x.replace('gadget_', ''));
        this.unlockedMorphs = this.cosmetics
            .filter((x) => x.startsWith('morph_'))
            .map((x) => x.replace('morph_', ''));
        this.unlockedCloaks = this.cosmetics
            .filter((x) => x.startsWith('cloak_'))
            .map((x) => x.replace('cloak_', ''));
        this.unlockedTaunts = this.cosmetics
            .filter((x) => x.startsWith('taunt_'))
            .map((x) => x.replace('taunt_', ''));
        this.unlockedRankColors = this.cosmetics
            .filter((x) => x.startsWith('rankcolor_'))
            .map((x) => x.replace('rankcolor_', ''));
        this.selectedParticlePack = data?.particlePack || null;
        this.unlockedParticlePacks = this.cosmetics
            .filter((x) => x.startsWith('particlepack_'))
            .map((x) => x.replace('particlepack_', ''));
        this.unlockedClickEffects = this.cosmetics
            .filter((x) => x.startsWith('clickeffects_'))
            .map((x) => x.replace('clickeffects_', ''));
    }
}
export default PlayerCosmetics;
//# sourceMappingURL=PlayerCosmetics.js.map