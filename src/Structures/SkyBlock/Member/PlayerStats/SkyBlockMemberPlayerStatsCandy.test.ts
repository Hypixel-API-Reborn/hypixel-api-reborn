import SkyBlockMemberPlayerStatsCandy from './SkyBlockMemberPlayerStatsCandy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberPlayerStatsSpookyFestival from './SkyBlockMemberPlayerStatsSpookyFestival.js';

test('SkyBlockMemberPlayerStatsCandy', () => {
  const data = new SkyBlockMemberPlayerStatsCandy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsCandy);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsCandy>();
  expect(data.green).toBeDefined();
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.batsSpawned).toBeDefined();
  expectTypeOf(data.batsSpawned).toEqualTypeOf<Record<string, number>>();
  expect(data.festivals).toBeDefined();
  expectTypeOf(data.festivals).toEqualTypeOf<SkyBlockMemberPlayerStatsSpookyFestival[]>();
});
