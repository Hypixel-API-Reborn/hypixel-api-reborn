import BedWars from './BedWars.ts';
import BedWarsBoxes from './BedWarsBoxes.ts';
import BedWarsEightOne from './BedWarsEightOne.ts';
import BedWarsEightTwo from './BedWarsEightTwo.ts';
import BedWarsFavorites from './BedWarsFavorites.ts';
import BedWarsFigurines from './BedWarsFigurines.ts';
import BedWarsFourFour from './BedWarsFourFour.ts';
import BedWarsFourThree from './BedWarsFourThree.ts';
import BedWarsMode from './BedWarsMode.ts';
import BedWarsPrivateGameSettings from './BedWarsPrivateGameSettings.ts';
import BedWarsSettings from './BedWarsSettings.ts';
import BedWarsSlumber from './BedWarsSlumber/BedWarsSlumber.ts';
import BedWarsTwoFour from './BedWarsTwoFour.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  BedWarsPackage,
  BedWarsPackageBedDestroy,
  BedWarsPackageDeathCry,
  BedWarsPackageGlyphe,
  BedWarsPackageIslandTopper,
  BedWarsPackageKillEffect,
  BedWarsPackageKillMessage,
  BedWarsPackageNPCSkin,
  BedWarsPackageProjectileTrail,
  BedWarsPackageSpray,
  BedWarsPackageStartingWeapon,
  BedWarsPackageVictoryDance,
  BedWarsPackageWoodSkin,
  BedWarsPrestige,
  BedWarsQuickbuyPrivacy,
  BedWarsUltimate,
  PlayerGenericSelectedCosmetic,
  ShopSort
} from '../../../Types/index.ts';

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
  expectTypeOf(data.activeBedDestroy).toEqualTypeOf<
    BedWarsPackageBedDestroy | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeDeathCry).toBeDefined();
  expectTypeOf(data.activeDeathCry).toEqualTypeOf<BedWarsPackageDeathCry | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeGlyph).toBeDefined();
  expectTypeOf(data.activeGlyph).toEqualTypeOf<BedWarsPackageGlyphe | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeIslandTopper).toBeDefined();
  expectTypeOf(data.activeIslandTopper).toEqualTypeOf<
    BedWarsPackageIslandTopper | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeKillEffect).toBeDefined();
  expectTypeOf(data.activeKillEffect).toEqualTypeOf<
    BedWarsPackageKillEffect | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeKillMessages).toBeDefined();
  expectTypeOf(data.activeKillMessages).toEqualTypeOf<
    BedWarsPackageKillMessage | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeNPCSkin).toBeDefined();
  expectTypeOf(data.activeNPCSkin).toEqualTypeOf<BedWarsPackageNPCSkin | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeProjectileTrail).toBeDefined();
  expectTypeOf(data.activeProjectileTrail).toEqualTypeOf<
    BedWarsPackageProjectileTrail | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeSprays).toBeDefined();
  expectTypeOf(data.activeSprays).toEqualTypeOf<BedWarsPackageSpray | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeVictoryDance).toBeDefined();
  expectTypeOf(data.activeVictoryDance).toEqualTypeOf<
    BedWarsPackageVictoryDance | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeWoodType).toBeDefined();
  expectTypeOf(data.activeWoodType).toEqualTypeOf<BedWarsPackageWoodSkin | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeStartingWeapon).toBeDefined();
  expectTypeOf(data.activeStartingWeapon).toEqualTypeOf<
    BedWarsPackageStartingWeapon | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.tokens).toBeDefined();
  expect(data.tokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokens).toEqualTypeOf<number>();
  expect(data.firstJoin7).toBeDefined();
  expectTypeOf(data.firstJoin7).toEqualTypeOf<boolean>();
  expect(data.glyphStorage).toBeDefined();
  expectTypeOf(data.glyphStorage).toEqualTypeOf<string[]>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<BedWarsPackage[]>();
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
  expect(data.eightOne).toBeDefined();
  expect(data.eightOne).toBeInstanceOf(BedWarsEightOne);
  expectTypeOf(data.eightOne).toEqualTypeOf<BedWarsEightOne>();
  expect(data.eightTwo).toBeDefined();
  expect(data.eightTwo).toBeInstanceOf(BedWarsEightTwo);
  expectTypeOf(data.eightTwo).toEqualTypeOf<BedWarsEightTwo>();
  expect(data.fourThree).toBeDefined();
  expect(data.fourThree).toBeInstanceOf(BedWarsFourThree);
  expectTypeOf(data.fourThree).toEqualTypeOf<BedWarsFourThree>();
  expect(data.fourFour).toBeDefined();
  expect(data.fourFour).toBeInstanceOf(BedWarsFourFour);
  expectTypeOf(data.fourFour).toEqualTypeOf<BedWarsFourFour>();
  expect(data.twoFour).toBeDefined();
  expect(data.twoFour).toBeInstanceOf(BedWarsTwoFour);
  expectTypeOf(data.twoFour).toEqualTypeOf<BedWarsTwoFour>();
  expect(data.castle).toBeDefined();
  expect(data.castle).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.castle).toEqualTypeOf<BedWarsMode>();
  expect(data.slumber).toBeDefined();
  expect(data.slumber).toBeInstanceOf(BedWarsSlumber);
  expectTypeOf(data.slumber).toEqualTypeOf<BedWarsSlumber>();
});
