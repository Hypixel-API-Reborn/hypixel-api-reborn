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
  expectTypeOf(data.pets).toEqualTypeOf<PlayerCosmeticsPets>();
  expect(data.unlockedSuits).toBeDefined();
  data.unlockedSuits.forEach((unlockedSuit) => {
    expect(unlockedSuit).toBeDefined();
    expectTypeOf(unlockedSuit).toEqualTypeOf<PlayerCosmeticsSuit>();
  });
  expectTypeOf(data.unlockedSuits).toEqualTypeOf<PlayerCosmeticsSuit[]>();
  expect(data.unlockedHats).toBeDefined();
  data.unlockedHats.forEach((unlockedHat) => {
    expect(unlockedHat).toBeDefined();
    expectTypeOf(unlockedHat).toEqualTypeOf<PlayerCosmeticsHat>();
  });
  expectTypeOf(data.unlockedHats).toEqualTypeOf<PlayerCosmeticsHat[]>();
  expect(data.selectedGadget).toBeDefined();
  expectTypeOf(data.selectedGadget).toEqualTypeOf<PlayerCosmeticsGadget | null>();
  expect(data.unlockedGadgets).toBeDefined();
  data.unlockedGadgets.forEach((unlockedGadget) => {
    expect(unlockedGadget).toBeDefined();
    expectTypeOf(unlockedGadget).toEqualTypeOf<PlayerCosmeticsGadget>();
  });
  expectTypeOf(data.unlockedGadgets).toEqualTypeOf<PlayerCosmeticsGadget[]>();
  expect(data.unlockedMorphs).toBeDefined();
  data.unlockedMorphs.forEach((unlockedMorph) => {
    expect(unlockedMorph).toBeDefined();
    expectTypeOf(unlockedMorph).toEqualTypeOf<PlayerCosmeticsMorph>();
  });
  expectTypeOf(data.unlockedMorphs).toEqualTypeOf<PlayerCosmeticsMorph[]>();
  expect(data.unlockedCloaks).toBeDefined();
  data.unlockedCloaks.forEach((unlockedCloak) => {
    expect(unlockedCloak).toBeDefined();
    expectTypeOf(unlockedCloak).toEqualTypeOf<PlayerCosmeticsCloak>();
  });
  expectTypeOf(data.unlockedCloaks).toEqualTypeOf<PlayerCosmeticsCloak[]>();
  expect(data.unlockedTaunts).toBeDefined();
  data.unlockedTaunts.forEach((unlockedTaunt) => {
    expect(unlockedTaunt).toBeDefined();
    expectTypeOf(unlockedTaunt).toEqualTypeOf<PlayerCosmeticsTaunt>();
  });
  expectTypeOf(data.unlockedTaunts).toEqualTypeOf<PlayerCosmeticsTaunt[]>();
  expect(data.unlockedRankColors).toBeDefined();
  data.unlockedRankColors.forEach((unlockedRankColor) => {
    expect(unlockedRankColor).toBeDefined();
    expectTypeOf(unlockedRankColor).toEqualTypeOf<PlayerCosmeticsRankColor>();
  });
  expectTypeOf(data.unlockedRankColors).toEqualTypeOf<PlayerCosmeticsRankColor[]>();
  expect(data.selectedParticlePack).toBeDefined();
  expectTypeOf(data.selectedParticlePack).toEqualTypeOf<PlayerCosmeticsParticlePack | 'UNKNOWN'>();
  expect(data.unlockedParticlePacks).toBeDefined();
  data.unlockedParticlePacks.forEach((unlockedParticlePack) => {
    expect(unlockedParticlePack).toBeDefined();
    expectTypeOf(unlockedParticlePack).toEqualTypeOf<PlayerCosmeticsParticlePack>();
  });
  expectTypeOf(data.unlockedParticlePacks).toEqualTypeOf<PlayerCosmeticsParticlePack[]>();
  expect(data.unlockedClickEffects).toBeDefined();
  data.unlockedClickEffects.forEach((unlockedClickEffect) => {
    expect(unlockedClickEffect).toBeDefined();
    expectTypeOf(unlockedClickEffect).toEqualTypeOf<PlayerCosmeticsClickEffects>();
  });
  expectTypeOf(data.unlockedClickEffects).toEqualTypeOf<PlayerCosmeticsClickEffects[]>();
});
