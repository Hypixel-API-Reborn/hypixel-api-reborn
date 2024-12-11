import BaseAuction from './BaseAuction.js';
import ItemBytes from '../../ItemBytes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BaseAuction', () => {
  const data = new BaseAuction({ stats: 'meow' }, false);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BaseAuction);
  expectTypeOf(data).toEqualTypeOf<BaseAuction>();
  expect(data.auctionId).toBeDefined();
  expectTypeOf(data.auctionId).toEqualTypeOf<string | null>();
  expect(data.auctioneerUuid).toBeDefined();
  expectTypeOf(data.auctioneerUuid).toEqualTypeOf<string | null>();
  expect(data.auctioneerProfile).toBeDefined();
  expectTypeOf(data.auctioneerProfile).toEqualTypeOf<string | null>();
  expect(data.bin).toBeDefined();
  expectTypeOf(data.bin).toEqualTypeOf<boolean>();
  expect(data.itemBytes).toBeDefined();
  expectTypeOf(data.itemBytes).toEqualTypeOf<ItemBytes | null>();
  expect(data.toString()).toBeDefined();
  expectTypeOf(data.toString()).toEqualTypeOf<string | null>();
});
