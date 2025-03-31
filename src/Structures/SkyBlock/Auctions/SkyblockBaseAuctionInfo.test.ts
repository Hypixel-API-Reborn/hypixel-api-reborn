import SkyblockBaseAuctionInfo from './SkyblockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockBaseAuctionInfo', () => {
  const data = new SkyblockBaseAuctionInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBaseAuctionInfo);
  expectTypeOf(data).toEqualTypeOf<SkyblockBaseAuctionInfo>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
});
