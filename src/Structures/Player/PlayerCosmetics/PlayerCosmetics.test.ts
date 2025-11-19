import Color from '../../Color.js';
import PlayerCosmetics from './PlayerCosmetics.js';
import PlayerCosmeticsPets from './Pets/PlayerCosmeticsPets.js';
import { expect, expectTypeOf, test } from 'vitest';
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

test('PlayerCosmetics', () => {
  const data = new PlayerCosmetics({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerCosmetics);
  expectTypeOf(data).toEqualTypeOf<PlayerCosmetics>();
  expect(data.menuSort).toBeDefined();
  expectTypeOf(data.menuSort).toEqualTypeOf<SortName | 'UNKNOWN'>();
  expect(data.rankPlusColor).toBeDefined();
  expectTypeOf(data.rankPlusColor).toEqualTypeOf<Color | null>();
  expect(data.monthlyRankColor).toBeDefined();
  expectTypeOf(data.monthlyRankColor).toEqualTypeOf<Color | null>();
  expect(data.cosmetics).toBeDefined();
  expectTypeOf(data.cosmetics).toEqualTypeOf<string[]>();
  expect(data.pets).toBeDefined();
  expect(data.pets).toBeInstanceOf(PlayerCosmeticsPets);
  expectTypeOf(data.pets).toEqualTypeOf<PlayerCosmeticsPets>();
  expect(data.unlockedSuits).toBeDefined();
  expectTypeOf(data.unlockedSuits).toEqualTypeOf<PlayerCosmeticsSuit[]>();
  expect(data.unlockedHats).toBeDefined();
  expectTypeOf(data.unlockedHats).toEqualTypeOf<PlayerCosmeticsHat[]>();
  expect(data.selectedGadget).toBeDefined();
  expectTypeOf(data.selectedGadget).toEqualTypeOf<PlayerCosmeticsGadget | null>();
  expect(data.unlockedGadgets).toBeDefined();
  expectTypeOf(data.unlockedGadgets).toEqualTypeOf<PlayerCosmeticsGadget[]>();
  expect(data.unlockedMorphs).toBeDefined();
  expectTypeOf(data.unlockedMorphs).toEqualTypeOf<PlayerCosmeticsMorph[]>();
  expect(data.unlockedCloaks).toBeDefined();
  expectTypeOf(data.unlockedCloaks).toEqualTypeOf<PlayerCosmeticsCloak[]>();
  expect(data.unlockedTaunts).toBeDefined();
  expectTypeOf(data.unlockedTaunts).toEqualTypeOf<PlayerCosmeticsTaunt[]>();
  expect(data.unlockedRankColors).toBeDefined();
  expectTypeOf(data.unlockedRankColors).toEqualTypeOf<PlayerCosmeticsRankColor[]>();
  expect(data.selectedParticlePack).toBeDefined();
  expectTypeOf(data.selectedParticlePack).toEqualTypeOf<PlayerCosmeticsParticlePack | 'UNKNOWN'>();
  expect(data.unlockedParticlePacks).toBeDefined();
  expectTypeOf(data.unlockedParticlePacks).toEqualTypeOf<PlayerCosmeticsParticlePack[]>();
  expect(data.unlockedClickEffects).toBeDefined();
  expectTypeOf(data.unlockedClickEffects).toEqualTypeOf<PlayerCosmeticsClickEffects[]>();
});
