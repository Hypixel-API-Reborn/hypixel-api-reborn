import SkyBlockMemberPlayerStatsAuctionsStats from './SkyBlockMemberPlayerStatsAuctionsStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerStatsAuctionsStats', () => {
  const data = new SkyBlockMemberPlayerStatsAuctionsStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerStatsAuctionsStats);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerStatsAuctionsStats>();
  expect(data.common).toBeDefined();
  expectTypeOf(data.common).toEqualTypeOf<number>();
  expect(data.uncommon).toBeDefined();
  expectTypeOf(data.uncommon).toEqualTypeOf<number>();
  expect(data.rare).toBeDefined();
  expectTypeOf(data.rare).toEqualTypeOf<number>();
  expect(data.epic).toBeDefined();
  expectTypeOf(data.epic).toEqualTypeOf<number>();
  expect(data.legendary).toBeDefined();
  expectTypeOf(data.legendary).toEqualTypeOf<number>();
  expect(data.special).toBeDefined();
  expectTypeOf(data.special).toEqualTypeOf<number>();
  expect(data.mythic).toBeDefined();
  expectTypeOf(data.mythic).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
});
