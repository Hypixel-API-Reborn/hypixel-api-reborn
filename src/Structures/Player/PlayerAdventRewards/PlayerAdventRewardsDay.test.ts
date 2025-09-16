import PlayerAdventRewardsDay from './PlayerAdventRewardsDay.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerAdventRewardsDay', () => {
  const data = new PlayerAdventRewardsDay({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerAdventRewardsDay);
  expectTypeOf(data).toEqualTypeOf<PlayerAdventRewardsDay>();
  expect(data.day).toBeDefined();
  expectTypeOf(data.day).toEqualTypeOf<number>();
  expect(data.claimed).toBeDefined();
  expectTypeOf(data.claimed).toEqualTypeOf<boolean>();
  expect(data.claimedTimestamp).toBeDefined();
  expectTypeOf(data.claimedTimestamp).toEqualTypeOf<number | null>();
  expect(data.claimedAt).toBeDefined();
  expectTypeOf(data.claimedAt).toEqualTypeOf<Date | null>();
});
