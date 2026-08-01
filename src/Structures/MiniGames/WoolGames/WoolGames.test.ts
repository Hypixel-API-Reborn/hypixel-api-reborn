import CaptureTheWool from './CaptureTheWool/CaptureTheWool.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import SheepWars from './SheepWars/SheepWars.js';
import WoolGames from './WoolGames.js';
import WoolGamesPrivateGames from './WoolGamesPrivateGames.js';
import WoolGamesProgression from './WoolGamesProgression.js';
import WoolWars from './WoolWars/WoolWars.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  WoolGamesLeaderboardSettingsMode,
  WoolGamesPackage,
  WoolGamesPackageBarrier,
  WoolGamesPackageCage,
  WoolGamesPackageDeathCry,
  WoolGamesPackageGlyph,
  WoolGamesPackageHat,
  WoolGamesPackageKillMessage,
  WoolGamesPackageProjectileTrail
} from '../../../Types/Player.js';

test('WoolGames', () => {
  const data = new WoolGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolGames);
  expectTypeOf(data).toEqualTypeOf<WoolGames>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<WoolGamesPackage[]>();
  expect(data.privateGames).toBeDefined();
  expect(data.privateGames).toBeInstanceOf(WoolGamesPrivateGames);
  expectTypeOf(data.privateGames).toEqualTypeOf<WoolGamesPrivateGames>();
  expect(data.progression).toBeDefined();
  expect(data.progression).toBeInstanceOf(WoolGamesProgression);
  expectTypeOf(data.progression).toEqualTypeOf<WoolGamesProgression>();
  expect(data.selectedCage).toBeDefined();
  expectTypeOf(data.selectedCage).toEqualTypeOf<WoolGamesPackageCage | 'UNKNOWN'>();
  expect(data.selectedKillMessages).toBeDefined();
  expectTypeOf(data.selectedKillMessages).toEqualTypeOf<WoolGamesPackageKillMessage | 'UNKNOWN'>();
  expect(data.selectedHat).toBeDefined();
  expectTypeOf(data.selectedHat).toEqualTypeOf<WoolGamesPackageHat | 'UNKNOWN'>();
  expect(data.selectedGlyph).toBeDefined();
  expectTypeOf(data.selectedGlyph).toEqualTypeOf<WoolGamesPackageGlyph | 'UNKNOWN'>();
  expect(data.selectedDeathCry).toBeDefined();
  expectTypeOf(data.selectedDeathCry).toEqualTypeOf<WoolGamesPackageDeathCry | 'UNKNOWN'>();
  expect(data.selectedBarrier).toBeDefined();
  expectTypeOf(data.selectedBarrier).toEqualTypeOf<WoolGamesPackageBarrier | 'UNKNOWN'>();
  expect(data.selectedProjectileTrail).toBeDefined();
  expectTypeOf(data.selectedProjectileTrail).toEqualTypeOf<WoolGamesPackageProjectileTrail | 'UNKNOWN'>();
  expect(data.playtime).toBeDefined();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.leaderboardSettings).toBeDefined();
  expectTypeOf(data.leaderboardSettings).toEqualTypeOf<LeaderboardSettings<WoolGamesLeaderboardSettingsMode>>();
  expect(data.woolWars).toBeDefined();
  expect(data.woolWars).toBeInstanceOf(WoolWars);
  expectTypeOf(data.woolWars).toEqualTypeOf<WoolWars>();
  expect(data.captureTheWool).toBeDefined();
  expect(data.captureTheWool).toBeInstanceOf(CaptureTheWool);
  expectTypeOf(data.captureTheWool).toEqualTypeOf<CaptureTheWool>();
  expect(data.sheepWars).toBeDefined();
  expect(data.sheepWars).toBeInstanceOf(SheepWars);
  expectTypeOf(data.sheepWars).toEqualTypeOf<SheepWars>();
});
