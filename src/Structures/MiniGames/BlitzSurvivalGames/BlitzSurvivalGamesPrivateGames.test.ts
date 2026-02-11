import BlitzSurvivalGamesPrivateGames from './BlitzSurvivalGamesPrivateGames.js';
import { expect, expectTypeOf, test } from 'vitest';
import type {
  BlitzSurvivalGamesPrivateGamesExtraStars,
  PrivateGameSettingsGameSpeed,
  PrivateGameSettingsHealthBuff
} from '../../../Types/Player.js';

test('BlitzSurvivalGamesPrivateGames', () => {
  const data = new BlitzSurvivalGamesPrivateGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BlitzSurvivalGamesPrivateGames);
  expectTypeOf(data).toEqualTypeOf<BlitzSurvivalGamesPrivateGames>();
  expect(data.healthBuff).toBeDefined();
  expectTypeOf(data.healthBuff).toEqualTypeOf<PrivateGameSettingsHealthBuff | 'UNKNOWN'>();
  expect(data.lowGravity).toBeDefined();
  expectTypeOf(data.lowGravity).toEqualTypeOf<boolean>();
  expect(data.speed).toBeDefined();
  expectTypeOf(data.speed).toEqualTypeOf<PrivateGameSettingsGameSpeed | 'UNKNOWN'>();
  expect(data.extraBlitzStars).toBeDefined();
  expectTypeOf(data.extraBlitzStars).toEqualTypeOf<BlitzSurvivalGamesPrivateGamesExtraStars>();
  expect(data.oneHitOneKill).toBeDefined();
  expectTypeOf(data.oneHitOneKill).toEqualTypeOf<boolean>();
  expect(data.nightTime).toBeDefined();
  expectTypeOf(data.nightTime).toEqualTypeOf<boolean>();
  expect(data.noKits).toBeDefined();
  expectTypeOf(data.noKits).toEqualTypeOf<boolean>();
});
