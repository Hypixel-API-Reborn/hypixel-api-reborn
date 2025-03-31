import SkyblockMemberPlayerStatsAuctionsStats from './SkyblockMemberPlayerStatsAuctionsStats.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsAuctionsStats', () => {
  const data = new SkyblockMemberPlayerStatsAuctionsStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsAuctionsStats);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsAuctionsStats>();
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
