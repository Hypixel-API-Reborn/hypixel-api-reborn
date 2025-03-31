import SkyblockMemberPlayerStatsSpookyFestival from './SkyblockMemberPlayerStatsSpookyFestival.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsSpookyFestival', () => {
  const data = new SkyblockMemberPlayerStatsSpookyFestival({ stats: 'meow' }, 1);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsSpookyFestival);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsSpookyFestival>();
  expect(data.year).toBeDefined();
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.green).toBeDefined();
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
});
