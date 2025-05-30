import SkyBlockAuctionBid from './SkyBlockAuctionBid.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { UUID } from '../../../Types/Global.js';

test('SkyBlockAuctionBid', () => {
  const data = new SkyBlockAuctionBid({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockAuctionBid);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuctionBid>();
  expect(data.auctionId).toBeDefined();
  expectTypeOf(data.auctionId).toEqualTypeOf<UUID | 'UNKNOWN'>();
  expect(data.profileId).toBeDefined();
  expectTypeOf(data.profileId).toEqualTypeOf<UUID | 'UNKNOWN'>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.at).toBeDefined();
  expectTypeOf(data.at).toEqualTypeOf<Date>();
  expect(data.bidder).toBeDefined();
  expectTypeOf(data.bidder).toEqualTypeOf<string>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
