import SkyBlockBaseAuctionInfo from './SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockBaseAuctionInfo', () => {
  const data = new SkyBlockBaseAuctionInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBaseAuctionInfo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
});
