import Color from '../../Color.js';
import PlayerCosmeticsPets from './Pets/PlayerCosmeticsPets.js';
import type {
  PlayerCosmeticsClickEffects,
  PlayerCosmeticsCloak,
  PlayerCosmeticsGadget,
  PlayerCosmeticsHat,
  PlayerCosmeticsMorph,
  PlayerCosmeticsParticlePack,
  PlayerCosmeticsRankColor,
  PlayerCosmeticsSuit,
  PlayerCosmeticsTaunt
} from '../../../Types/Player.js';
import type { SortName } from '../../../Types/Global.js';

class PlayerCosmetics {
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
  constructor(data: Record<string, any>) {
    this.menuSort = data?.collectibles_menu_sort || 'UNKNOWN';
    this.rankPlusColor = data?.rankPlusColor ? new Color(data?.rankPlusColor) : null;
    this.monthlyRankColor = data?.monthlyRankColor ? new Color(data?.monthlyRankColor) : null;
    this.cosmetics = data?.vanityMeta?.packages || [];
    this.pets = new PlayerCosmeticsPets(
      data,
      this.cosmetics.filter((x) => x.startsWith('pet_'))
    );

    this.unlockedSuits = this.cosmetics
      .filter((x) => x.startsWith('suit_'))
      .map((x) => x.replace('suit_', '') as PlayerCosmeticsSuit);

    this.unlockedHats = this.cosmetics
      .filter((x) => x.startsWith('hat_'))
      .map((x) => x.replace('hat_', '') as PlayerCosmeticsHat);

    this.selectedGadget = data?.currentGadget || null;
    this.unlockedGadgets = this.cosmetics
      .filter((x) => x.startsWith('gadget_'))
      .map((x) => x.replace('gadget_', '') as PlayerCosmeticsGadget);

    this.unlockedMorphs = this.cosmetics
      .filter((x) => x.startsWith('morph_'))
      .map((x) => x.replace('morph_', '') as PlayerCosmeticsMorph);

    this.unlockedCloaks = this.cosmetics
      .filter((x) => x.startsWith('cloak_'))
      .map((x) => x.replace('cloak_', '') as PlayerCosmeticsCloak);

    this.unlockedTaunts = this.cosmetics
      .filter((x) => x.startsWith('taunt_'))
      .map((x) => x.replace('taunt_', '') as PlayerCosmeticsTaunt);

    this.unlockedRankColors = this.cosmetics
      .filter((x) => x.startsWith('rankcolor_'))
      .map((x) => x.replace('rankcolor_', '') as PlayerCosmeticsRankColor);

    this.selectedParticlePack = data?.particlePack || null;
    this.unlockedParticlePacks = this.cosmetics
      .filter((x) => x.startsWith('particlepack_'))
      .map((x) => x.replace('particlepack_', '') as PlayerCosmeticsParticlePack);

    this.unlockedClickEffects = this.cosmetics
      .filter((x) => x.startsWith('clickeffects_'))
      .map((x) => x.replace('clickeffects_', '') as PlayerCosmeticsClickEffects);
  }
}

export default PlayerCosmetics;
