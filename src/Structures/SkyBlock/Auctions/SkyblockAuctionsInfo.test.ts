import SkyblockAuctionsInfo from './SkyblockAuctionsInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockAuctionsInfo', () => {
  const data = new SkyblockAuctionsInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockAuctionsInfo);
  expectTypeOf(data).toEqualTypeOf<SkyblockAuctionsInfo>();
  expect(data.page).toBeDefined();
  expectTypeOf(data.page).toEqualTypeOf<number>();
  expect(data.totalPages).toBeDefined();
  expectTypeOf(data.totalPages).toEqualTypeOf<number>();
  expect(data.totalAuctions).toBeDefined();
  expectTypeOf(data.totalAuctions).toEqualTypeOf<number>();
});
