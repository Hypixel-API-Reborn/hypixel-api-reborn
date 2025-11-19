import SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsSpookyFestival', () => {
  const data = new SkyBlockMemberPlayerStatsSpookyFestival({ stats: 'meow' }, 100);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsSpookyFestival);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsSpookyFestival>();
  expect(data.year).toBeDefined();
  expect(data.year).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.year).toEqualTypeOf<number>();
  expect(data.green).toBeDefined();
  expect(data.green).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expect(data.purple).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
