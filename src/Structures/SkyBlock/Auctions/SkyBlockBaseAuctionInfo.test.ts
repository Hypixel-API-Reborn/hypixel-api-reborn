import SkyBlockBaseAuctionInfo from './SkyBlockBaseAuctionInfo.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockBaseAuctionInfo', () => {
  const data = new SkyBlockBaseAuctionInfo({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBaseAuctionInfo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.lastUpdatedTimestamp).toBeDefined();
  expect(data.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.lastUpdatedAt).toBeDefined();
  expect(data.lastUpdatedAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastUpdatedAt).toEqualTypeOf<Date>();
});
