import SkyBlockAuctionsInfo from './SkyBlockAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockAuctionsInfo', () => {
  const data = new SkyBlockAuctionsInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockAuctionsInfo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionsInfo>();
  expect(data.page).toBeDefined();
  expectTypeOf(data.page).toEqualTypeOf<number>();
  expect(data.totalPages).toBeDefined();
  expectTypeOf(data.totalPages).toEqualTypeOf<number>();
  expect(data.totalAuctions).toBeDefined();
  expectTypeOf(data.totalAuctions).toEqualTypeOf<number>();
});
