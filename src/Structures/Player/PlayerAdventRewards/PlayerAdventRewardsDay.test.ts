import PlayerAdventRewardsDay from './PlayerAdventRewardsDay.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerAdventRewardsDay', () => {
  const data = new PlayerAdventRewardsDay({ stats: 'meow' }, '0');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAdventRewardsDay);
  expectTypeOf(data).toEqualTypeOf<PlayerAdventRewardsDay>();
  expect(data.day).toBeDefined();
  expect(data.day).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.day).toEqualTypeOf<number>();
  expect(data.claimed).toBeDefined();
  expectTypeOf(data.claimed).toEqualTypeOf<boolean>();
  expect(data.claimedTimestamp).toBeDefined();
  expectTypeOf(data.claimedTimestamp).toEqualTypeOf<number | null>();
  expect(data.claimedAt).toBeDefined();
  expectTypeOf(data.claimedAt).toEqualTypeOf<Date | null>();
});
