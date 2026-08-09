import Duels from './Duels.js';
import DuelsBedWars from './Mode/DuelsBedWars.js';
import DuelsBlitz from './Mode/DuelsBlitz.js';
import DuelsBow from './Mode/DuelsBow.js';
import DuelsBridge from './Mode/Bridge/DuelsBridge.js';
import DuelsClassic from './Mode/DuelsClassic.js';
import DuelsCombo from './Mode/DuelsCombo.js';
import DuelsMegaWalls from './Mode/DuelsMegaWalls.js';
import DuelsModeFull from './Mode/DuelsModeFull.js';
import DuelsOP from './Mode/DuelsOP.js';
import DuelsOdyssey from './DuelsOdyssey.js';
import DuelsOptions from './DuelsOptions.js';
import DuelsPotion from './Mode/DuelsPotion.js';
import DuelsPrivateGames from './DuelsPrivateGames.js';
import DuelsSkyWars from './Mode/DuelsSkyWars.js';
import DuelsSumo from './Mode/DuelsSumo.js';
import DuelsUHC from './Mode/DuelsUHC.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  DuelsLeaderboardSettingsMode,
  DuelsMap,
  DuelsPackage,
  DuelsPackageArrowTrail,
  DuelsPackageAura,
  DuelsPackageBoxingFish,
  DuelsPackageCage,
  DuelsPackageDoubleJump,
  DuelsPackageEmblem,
  DuelsPackageGlyph,
  DuelsPackageGoal,
  DuelsPackageHat,
  DuelsPackageKillEffect,
  DuelsPackageKillMessage,
  DuelsPackagePrefixIcon,
  DuelsPackagePrefixSchema,
  DuelsPackageProjectileTrail,
  DuelsPackageSpleefShovel,
  DuelsPackageStartingHelmet,
  DuelsPackageStartingWeapon,
  DuelsPackageTitle,
  DuelsPackageTitleCosmetic,
  DuelsPackageVictoryDance,
  DuelsPackageWeaponPack,
  DuelsPackageWoodSkin,
  DuelsStatus,
  DuelsTitleParsed,
  PlayerGenericSelectedCosmetic
} from '../../../Types/index.js';

test('Duels', () => {
  const data = new Duels({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Duels);
  expectTypeOf(data).toEqualTypeOf<Duels>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<DuelsTitleParsed>();
  expect(data.chests).toBeDefined();
  expect(data.chests).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chests).toEqualTypeOf<number>();
  expect(data.openedChests).toBeDefined();
  expect(data.openedChests).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.openedChests).toEqualTypeOf<number>();
  expect(data.openedCommons).toBeDefined();
  expect(data.openedCommons).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.openedCommons).toEqualTypeOf<number>();
  expect(data.openedRares).toBeDefined();
  expect(data.openedRares).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.openedRares).toEqualTypeOf<number>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<DuelsPackage[]>();
  expect(data.duelsChestHistory).toBeDefined();
  expectTypeOf(data.duelsChestHistory).toEqualTypeOf<DuelsPackage[]>();
  expect(data.activeAuras).toBeDefined();
  expectTypeOf(data.activeAuras).toEqualTypeOf<DuelsPackageAura | PlayerGenericSelectedCosmetic | 'auras_none'>();
  expect(data.activeEmblem).toBeDefined();
  expectTypeOf(data.activeEmblem).toEqualTypeOf<DuelsPackageEmblem | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeKillMessage).toBeDefined();
  expectTypeOf(data.activeKillMessage).toEqualTypeOf<
    DuelsPackageKillMessage | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeVictoryDance).toBeDefined();
  expectTypeOf(data.activeVictoryDance).toEqualTypeOf<
    DuelsPackageVictoryDance | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeHat).toBeDefined();
  expectTypeOf(data.activeHat).toEqualTypeOf<DuelsPackageHat | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeKillEffect).toBeDefined();
  expectTypeOf(data.activeKillEffect).toEqualTypeOf<
    DuelsPackageKillEffect | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeProjectileTrail).toBeDefined();
  expectTypeOf(data.activeProjectileTrail).toEqualTypeOf<
    DuelsPackageProjectileTrail | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeCage).toBeDefined();
  expectTypeOf(data.activeCage).toEqualTypeOf<DuelsPackageCage | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeCosmeticTitle).toBeDefined();
  expectTypeOf(data.activeCosmeticTitle).toEqualTypeOf<
    DuelsPackageTitleCosmetic | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeWeaponPack).toBeDefined();
  expectTypeOf(data.activeWeaponPack).toEqualTypeOf<
    DuelsPackageWeaponPack | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeGoal).toBeDefined();
  expectTypeOf(data.activeGoal).toEqualTypeOf<DuelsPackageGoal | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activePrefixIcon).toBeDefined();
  expectTypeOf(data.activePrefixIcon).toEqualTypeOf<
    DuelsPackagePrefixIcon | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeTitle).toBeDefined();
  expectTypeOf(data.activeTitle).toEqualTypeOf<DuelsPackageTitle | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activeWoodSkin).toBeDefined();
  expectTypeOf(data.activeWoodSkin).toEqualTypeOf<DuelsPackageWoodSkin | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.activePrefixScheme).toBeDefined();
  expectTypeOf(data.activePrefixScheme).toEqualTypeOf<
    DuelsPackagePrefixSchema | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeSpleefShovel).toBeDefined();
  expectTypeOf(data.activeSpleefShovel).toEqualTypeOf<
    DuelsPackageSpleefShovel | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeArrowTrail).toBeDefined();
  expectTypeOf(data.activeArrowTrail).toEqualTypeOf<
    DuelsPackageArrowTrail | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeStartingWeapon).toBeDefined();
  expectTypeOf(data.activeStartingWeapon).toEqualTypeOf<
    DuelsPackageStartingWeapon | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeDoubleJump).toBeDefined();
  expectTypeOf(data.activeDoubleJump).toEqualTypeOf<
    DuelsPackageDoubleJump | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeBoxingFish).toBeDefined();
  expectTypeOf(data.activeBoxingFish).toEqualTypeOf<
    DuelsPackageBoxingFish | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeStartingHelmet).toBeDefined();
  expectTypeOf(data.activeStartingHelmet).toEqualTypeOf<
    DuelsPackageStartingHelmet | PlayerGenericSelectedCosmetic | 'UNKNOWN'
  >();
  expect(data.activeGlyph).toBeDefined();
  expectTypeOf(data.activeGlyph).toEqualTypeOf<DuelsPackageGlyph | PlayerGenericSelectedCosmetic | 'UNKNOWN'>();
  expect(data.mapsWonOn).toBeDefined();
  expectTypeOf(data.mapsWonOn).toEqualTypeOf<DuelsMap[]>();
  expect(data.customTitles).toBeDefined();
  expectTypeOf(data.customTitles).toEqualTypeOf<string[]>();
  expect(data.statusField).toBeDefined();
  expectTypeOf(data.statusField).toEqualTypeOf<DuelsStatus | 'UNKNOWN'>();
  expect(data.pingPreference).toBeDefined();
  expect(data.pingPreference).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.pingPreference).toEqualTypeOf<number>();
  expect(data.options).toBeDefined();
  expect(data.options).toBeInstanceOf(DuelsOptions);
  expectTypeOf(data.options).toEqualTypeOf<DuelsOptions>();
  expect(data.oddyssey).toBeDefined();
  expect(data.oddyssey).toBeInstanceOf(DuelsOdyssey);
  expectTypeOf(data.oddyssey).toEqualTypeOf<DuelsOdyssey>();
  expect(data.leaderboardSettings).toBeDefined();
  expectTypeOf(data.leaderboardSettings).toEqualTypeOf<LeaderboardSettings<DuelsLeaderboardSettingsMode>>();
  expect(data.privateGames).toBeDefined();
  expect(data.privateGames).toBeInstanceOf(DuelsPrivateGames);
  expectTypeOf(data.privateGames).toEqualTypeOf<DuelsPrivateGames>();
  expect(data.combo).toBeDefined();
  expect(data.combo).toBeInstanceOf(DuelsCombo);
  expectTypeOf(data.combo).toEqualTypeOf<DuelsCombo>();
  expect(data.boxing).toBeDefined();
  expect(data.boxing).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.boxing).toEqualTypeOf<DuelsModeFull>();
  expect(data.parkour).toBeDefined();
  expect(data.parkour).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.parkour).toEqualTypeOf<DuelsModeFull>();
  expect(data.blitz).toBeDefined();
  expect(data.blitz).toBeInstanceOf(DuelsBlitz);
  expectTypeOf(data.blitz).toEqualTypeOf<DuelsBlitz>();
  expect(data.bow).toBeDefined();
  expect(data.bow).toBeInstanceOf(DuelsBow);
  expectTypeOf(data.bow).toEqualTypeOf<DuelsBow>();
  expect(data.quake).toBeDefined();
  expect(data.quake).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.quake).toEqualTypeOf<DuelsModeFull>();
  expect(data.spleef).toBeDefined();
  expect(data.spleef).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.spleef).toEqualTypeOf<DuelsModeFull>();
  expect(data.bowspleef).toBeDefined();
  expect(data.bowspleef).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.bowspleef).toEqualTypeOf<DuelsModeFull>();
  expect(data.potion).toBeDefined();
  expect(data.potion).toBeInstanceOf(DuelsPotion);
  expectTypeOf(data.potion).toEqualTypeOf<DuelsPotion>();
  expect(data.arena).toBeDefined();
  expect(data.arena).toBeInstanceOf(DuelsModeFull);
  expectTypeOf(data.arena).toEqualTypeOf<DuelsModeFull>();
  expect(data.bedWars).toBeDefined();
  expect(data.bedWars).toBeInstanceOf(DuelsBedWars);
  expectTypeOf(data.bedWars).toEqualTypeOf<DuelsBedWars>();
  expect(data.bridge).toBeDefined();
  expect(data.bridge).toBeInstanceOf(DuelsBridge);
  expectTypeOf(data.bridge).toEqualTypeOf<DuelsBridge>();
  expect(data.classic).toBeDefined();
  expect(data.classic).toBeInstanceOf(DuelsClassic);
  expectTypeOf(data.classic).toEqualTypeOf<DuelsClassic>();
  expect(data.megaWalls).toBeDefined();
  expect(data.megaWalls).toBeInstanceOf(DuelsMegaWalls);
  expectTypeOf(data.megaWalls).toEqualTypeOf<DuelsMegaWalls>();
  expect(data.op).toBeDefined();
  expect(data.op).toBeInstanceOf(DuelsOP);
  expectTypeOf(data.op).toEqualTypeOf<DuelsOP>();
  expect(data.skyWars).toBeDefined();
  expect(data.skyWars).toBeInstanceOf(DuelsSkyWars);
  expectTypeOf(data.skyWars).toEqualTypeOf<DuelsSkyWars>();
  expect(data.sumo).toBeDefined();
  expect(data.sumo).toBeInstanceOf(DuelsSumo);
  expectTypeOf(data.sumo).toEqualTypeOf<DuelsSumo>();
  expect(data.uhc).toBeDefined();
  expect(data.uhc).toBeInstanceOf(DuelsUHC);
  expectTypeOf(data.uhc).toEqualTypeOf<DuelsUHC>();
});
