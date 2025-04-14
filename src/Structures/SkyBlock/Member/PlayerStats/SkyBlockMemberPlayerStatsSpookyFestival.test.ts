import SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsSpookyFestival', () => {
  const data = new SkyBlockMemberPlayerStatsSpookyFestival({ stats: 'meow' }, 1);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsSpookyFestival);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsSpookyFestival>();
  expect(data.year).toBeDefined();
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.green).toBeDefined();
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
});
