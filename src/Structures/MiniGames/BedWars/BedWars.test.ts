import BedWars from './BedWars.js';
import BedWarsBoxes from './BedWarsBoxes.js';
import BedWarsFavorites from './BedWarsFavorites.js';
import BedWarsFigurines from './BedWarsFigurines.js';
import BedWarsPrivateGameSettings from './BedWarsPrivateGameSettings.js';
import BedWarsSettings from './BedWarsSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  BedWarsBedDestroy,
  BedWarsDeathCry,
  BedWarsGlyph,
  BedWarsIslandTopper,
  BedWarsKillEffect,
  BedWarsKillMessage,
  BedWarsNPCSkin,
  BedWarsPrestige,
  BedWarsProjectileTrail,
  BedWarsQuickbuyPrivacy,
  BedWarsSpray,
  BedWarsStartingWeapon,
  BedWarsUltimate,
  BedWarsVictoryDance,
  BedWarsWoodSkin,
  PlayerGeneralSelectedCosmetic,
  ShopSort
} from '../../../Types/Player.js';

test('BedWars', () => {
  const data = new BedWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWars);
  expectTypeOf(data).toEqualTypeOf<BedWars>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.prestige).toBeDefined();
  expectTypeOf(data.prestige).toEqualTypeOf<BedWarsPrestige>();
  expect(data.activeBedDestroy).toBeDefined();
  expectTypeOf(data.activeBedDestroy).toEqualTypeOf<BedWarsBedDestroy | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeDeathCry).toBeDefined();
  expectTypeOf(data.activeDeathCry).toEqualTypeOf<BedWarsDeathCry | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeGlyph).toBeDefined();
  expectTypeOf(data.activeGlyph).toEqualTypeOf<BedWarsGlyph | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeIslandTopper).toBeDefined();
  expectTypeOf(data.activeIslandTopper).toEqualTypeOf<
    BedWarsIslandTopper | PlayerGeneralSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeKillEffect).toBeDefined();
  expectTypeOf(data.activeKillEffect).toEqualTypeOf<BedWarsKillEffect | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeKillMessages).toBeDefined();
  expectTypeOf(data.activeKillMessages).toEqualTypeOf<BedWarsKillMessage | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeNPCSkin).toBeDefined();
  expectTypeOf(data.activeNPCSkin).toEqualTypeOf<BedWarsNPCSkin | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeProjectileTrail).toBeDefined();
  expectTypeOf(data.activeProjectileTrail).toEqualTypeOf<
    BedWarsProjectileTrail | PlayerGeneralSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeSprays).toBeDefined();
  expectTypeOf(data.activeSprays).toEqualTypeOf<BedWarsSpray | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeVictoryDance).toBeDefined();
  expectTypeOf(data.activeVictoryDance).toEqualTypeOf<
    BedWarsVictoryDance | PlayerGeneralSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeWoodType).toBeDefined();
  expectTypeOf(data.activeWoodType).toEqualTypeOf<BedWarsWoodSkin | PlayerGeneralSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeStartingWeapon).toBeDefined();
  expectTypeOf(data.activeStartingWeapon).toEqualTypeOf<
    BedWarsStartingWeapon | PlayerGeneralSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.tokens).toBeDefined();
  expect(data.tokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokens).toEqualTypeOf<number>();
  expect(data.firstJoin7).toBeDefined();
  expectTypeOf(data.firstJoin7).toEqualTypeOf<boolean>();
  expect(data.glyphStorage).toBeDefined();
  expectTypeOf(data.glyphStorage).toEqualTypeOf<string[]>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<string[]>();
  expect(data.quickbuyPrivacy).toBeDefined();
  expectTypeOf(data.quickbuyPrivacy).toEqualTypeOf<BedWarsQuickbuyPrivacy>();
  expect(data.seenBetaMenu).toBeDefined();
  expectTypeOf(data.seenBetaMenu).toEqualTypeOf<boolean>();
  expect(data.selectedUltimate).toBeDefined();
  expectTypeOf(data.selectedUltimate).toEqualTypeOf<BedWarsUltimate | 'UNKNOWN'>();
  expect(data.shopSort).toBeDefined();
  expectTypeOf(data.shopSort).toEqualTypeOf<ShopSort | 'UNKNOWN'>();
  expect(data.shopSortEnableOwnedFirst).toBeDefined();
  expectTypeOf(data.shopSortEnableOwnedFirst).toEqualTypeOf<boolean>();
  expect(data.spookyOpenAch).toBeDefined();
  expect(data.spookyOpenAch).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.spookyOpenAch).toEqualTypeOf<number>();
  expect(data.sprayGlyphField).toBeDefined();
  expectTypeOf(data.sprayGlyphField).toEqualTypeOf<string[]>();
  expect(data.sprayStorage).toBeDefined();
  expectTypeOf(data.sprayStorage).toEqualTypeOf<string[]>();
  expect(data.understandsResourceBank).toBeDefined();
  expectTypeOf(data.understandsResourceBank).toEqualTypeOf<boolean>();
  expect(data.understandsStreaks).toBeDefined();
  expectTypeOf(data.understandsStreaks).toEqualTypeOf<boolean>();
  expect(data.updateBook).toBeDefined();
  expectTypeOf(data.updateBook).toEqualTypeOf<string | 'UNKNOWN'>();
  expect(data.boxes).toBeDefined();
  expect(data.boxes).toBeInstanceOf(BedWarsBoxes);
  expectTypeOf(data.boxes).toEqualTypeOf<BedWarsBoxes>();
  expect(data.favorites).toBeDefined();
  expect(data.favorites).toBeInstanceOf(BedWarsFavorites);
  expectTypeOf(data.favorites).toEqualTypeOf<BedWarsFavorites>();
  expect(data.figurines).toBeDefined();
  expect(data.figurines).toBeInstanceOf(BedWarsFigurines);
  expectTypeOf(data.figurines).toEqualTypeOf<BedWarsFigurines>();
  expect(data.privateGameSettings).toBeDefined();
  expect(data.privateGameSettings).toBeInstanceOf(BedWarsPrivateGameSettings);
  expectTypeOf(data.privateGameSettings).toEqualTypeOf<BedWarsPrivateGameSettings>();
  expect(data.settings).toBeDefined();
  expect(data.settings).toBeInstanceOf(BedWarsSettings);
  expectTypeOf(data.settings).toEqualTypeOf<BedWarsSettings>();
});
