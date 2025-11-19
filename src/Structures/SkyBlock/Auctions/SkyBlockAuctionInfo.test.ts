import SkyBlockAuctionInfo from './SkyBlockAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockAuctionInfo', () => {
  const data = new SkyBlockAuctionInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockAuctionInfo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionInfo>();
  expect(data.page).toBeDefined();
  expect(data.page).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.page).toEqualTypeOf<number>();
  expect(data.totalPages).toBeDefined();
  expect(data.totalPages).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalPages).toEqualTypeOf<number>();
  expect(data.totalAuctions).toBeDefined();
  expect(data.totalAuctions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalAuctions).toEqualTypeOf<number>();
});
