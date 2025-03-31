import SkyblockMemberFairySouls from './SkyblockMemberFairySouls.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberFairySouls', () => {
  const data = new SkyblockMemberFairySouls({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberFairySouls);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberFairySouls>();
  expect(data.exchanges).toBeDefined();
  expectTypeOf(data.exchanges).toEqualTypeOf<number>();
  expect(data.collected).toBeDefined();
  expectTypeOf(data.collected).toEqualTypeOf<number>();
  expect(data.unspent).toBeDefined();
  expectTypeOf(data.unspent).toEqualTypeOf<number>();
});
