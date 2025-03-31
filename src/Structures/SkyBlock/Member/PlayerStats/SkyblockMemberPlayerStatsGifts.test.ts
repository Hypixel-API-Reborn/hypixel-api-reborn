import SkyblockMemberPlayerStatsGifts from './SkyblockMemberPlayerStatsGifts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerStatsGifts', () => {
  const data = new SkyblockMemberPlayerStatsGifts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerStatsGifts);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerStatsGifts>();
  expect(data.received).toBeDefined();
  expectTypeOf(data.received).toEqualTypeOf<number>();
  expect(data.given).toBeDefined();
  expectTypeOf(data.given).toEqualTypeOf<number>();
});
