import ItemBytes from '../../ItemBytes.js';
import SkyBlockBaseAuction from './SkyBlockBaseAuction.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockBaseAuction', () => {
  const data = new SkyBlockBaseAuction({ stats: 'meow' }, false);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockBaseAuction);
  expectTypeOf(data).toEqualTypeOf<SkyBlockBaseAuction>();
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
  expect(data.toString()).toBe(data.auctionId);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
