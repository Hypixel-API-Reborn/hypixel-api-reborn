import PlayerTourneyData from './PlayerTourneyData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerTourneyData', () => {
  const data = new PlayerTourneyData({ stats: 'meow' }, 'mrrp');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerTourneyData);
  expectTypeOf(data).toEqualTypeOf<PlayerTourneyData>();
  expect(data.tourneyName).toBeDefined();
  expectTypeOf(data.tourneyName).toEqualTypeOf<string>();
  expect(data.playtime).toBeDefined();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.tributes).toBeDefined();
  expect(data.tributes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tributes).toEqualTypeOf<number>();
  expect(data.firstWinTimestamp).toBeDefined();
  expectTypeOf(data.firstWinTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstWinAt).toBeDefined();
  expectTypeOf(data.firstWinAt).toEqualTypeOf<Date | null>();
  expect(data.claimedReward).toBeDefined();
  expect(data.claimedReward).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.claimedReward).toEqualTypeOf<number>();
});
