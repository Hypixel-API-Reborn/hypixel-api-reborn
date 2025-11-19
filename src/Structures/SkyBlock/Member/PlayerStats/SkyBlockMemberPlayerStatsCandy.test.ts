import SkyBlockMemberPlayerStatsCandy from './SkyBlockMemberPlayerStatsCandy.js';
import SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsCandy', () => {
  const data = new SkyBlockMemberPlayerStatsCandy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsCandy);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsCandy>();
  expect(data.green).toBeDefined();
  expect(data.green).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expect(data.purple).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.batsSpawned).toBeDefined();
  expectTypeOf(data.batsSpawned).toEqualTypeOf<Record<string, number>>();
  expect(data.festivals).toBeDefined();
  expectTypeOf(data.festivals).toEqualTypeOf<SkyBlockMemberPlayerStatsSpookyFestival[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
