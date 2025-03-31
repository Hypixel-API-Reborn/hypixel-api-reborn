import SkyblockMemberPlayerStatsCandy from './SkyblockMemberPlayerStatsCandy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberPlayerStatsSpookyFestival from './SkyblockMemberPlayerStatsSpookyFestival.js';

test('SkyblockMemberPlayerStatsCandy', () => {
  const data = new SkyblockMemberPlayerStatsCandy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsCandy);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsCandy>();
  expect(data.green).toBeDefined();
  expectTypeOf(data.green).toEqualTypeOf<number>();
  expect(data.purple).toBeDefined();
  expectTypeOf(data.purple).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.batsSpawned).toBeDefined();
  expectTypeOf(data.batsSpawned).toEqualTypeOf<Record<string, number>>();
  expect(data.festivals).toBeDefined();
  expectTypeOf(data.festivals).toEqualTypeOf<SkyblockMemberPlayerStatsSpookyFestival[]>();
});
