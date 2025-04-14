import SkyBlockAuction from './SkyBlockAuction.js';
import SkyBlockAuctionBid from './SkyBlockAuctionBid.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { Rarity } from '../../../Types/SkyBlock.js';
import type { UUID } from '../../../Types/Global.js';

test('SkyBlockAuction', () => {
  const data = new SkyBlockAuction({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockAuction);
  expectTypeOf(data).toEqualTypeOf<SkyBlockAuction>();
  expect(data.coop).toBeDefined();
  expectTypeOf(data.coop).toEqualTypeOf<UUID[]>();
  expect(data.auctionStartTimestamp).toBeDefined();
  expectTypeOf(data.auctionStartTimestamp).toEqualTypeOf<number>();
  expect(data.auctionStartAt).toBeDefined();
  expectTypeOf(data.auctionStartAt).toEqualTypeOf<Date>();
  expect(data.auctionEndTimestamp).toBeDefined();
  expectTypeOf(data.auctionEndTimestamp).toEqualTypeOf<number | null>();
  expect(data.auctionEndAt).toBeDefined();
  expectTypeOf(data.auctionEndAt).toEqualTypeOf<Date | null>();
  expect(data.item).toBeDefined();
  expectTypeOf(data.item).toEqualTypeOf<string>();
  expect(data.itemLore).toBeDefined();
  expectTypeOf(data.itemLore).toEqualTypeOf<string>();
  expect(data.rarity).toBeDefined();
  expectTypeOf(data.rarity).toEqualTypeOf<Rarity | 'UNKNOWN'>();
  expect(data.startingBid).toBeDefined();
  expectTypeOf(data.startingBid).toEqualTypeOf<number>();
  expect(data.highestBid).toBeDefined();
  expectTypeOf(data.highestBid).toEqualTypeOf<number>();
  expect(data.bids).toBeDefined();
  expectTypeOf(data.bids).toEqualTypeOf<SkyBlockAuctionBid[]>();
  data.bids.forEach((bid: SkyBlockAuctionBid) => {
    expect(bid).toBeDefined();
    expect(bid).toBeInstanceOf(SkyBlockAuctionBid);
    expectTypeOf(bid).toEqualTypeOf<SkyBlockAuctionBid>();
  });
  expect(data.claimed).toBeDefined();
  expectTypeOf(data.claimed).toEqualTypeOf<boolean>();
  expect(data.claimedBidders).toBeDefined();
  expectTypeOf(data.claimedBidders).toEqualTypeOf<string[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.item);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
