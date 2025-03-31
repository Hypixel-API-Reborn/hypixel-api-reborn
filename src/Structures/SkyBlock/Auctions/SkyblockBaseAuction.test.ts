import ItemBytes from '../../ItemBytes.js';
import SkyblockBaseAuction from './SkyblockBaseAuction.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockBaseAuction (ItemBytes False)', () => {
  const data = new SkyblockBaseAuction({ stats: 'meow' }, false);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBaseAuction);
  expectTypeOf(data).toEqualTypeOf<SkyblockBaseAuction>();
  expect(data.auctionId).toBeDefined();
  expectTypeOf(data.auctionId).toEqualTypeOf<string>();
  expect(data.auctioneerUuid).toBeDefined();
  expectTypeOf(data.auctioneerUuid).toEqualTypeOf<string>();
  expect(data.auctioneerProfile).toBeDefined();
  expectTypeOf(data.auctioneerProfile).toEqualTypeOf<string>();
  expect(data.bin).toBeDefined();
  expectTypeOf(data.bin).toEqualTypeOf<boolean>();
  expect(data.itemBytes).toBeDefined();
  expectTypeOf(data.itemBytes).toEqualTypeOf<ItemBytes | null>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});

test('SkyblockBaseAuction (ItemBytes True)', () => {
  const data = new SkyblockBaseAuction({ stats: 'meow' }, true);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockBaseAuction);
  expectTypeOf(data).toEqualTypeOf<SkyblockBaseAuction>();
  expect(data.auctionId).toBeDefined();
  expectTypeOf(data.auctionId).toEqualTypeOf<string>();
  expect(data.auctioneerUuid).toBeDefined();
  expectTypeOf(data.auctioneerUuid).toEqualTypeOf<string>();
  expect(data.auctioneerProfile).toBeDefined();
  expectTypeOf(data.auctioneerProfile).toEqualTypeOf<string>();
  expect(data.bin).toBeDefined();
  expectTypeOf(data.bin).toEqualTypeOf<boolean>();
  expect(data.itemBytes).toBeDefined();
  expectTypeOf(data.itemBytes).toEqualTypeOf<ItemBytes | null>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
