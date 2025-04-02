import SkyBlockMemberFairySouls from './SkyBlockMemberFairySouls.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberFairySouls', () => {
  const data = new SkyBlockMemberFairySouls({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberFairySouls);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberFairySouls>();
  expect(data.exchanges).toBeDefined();
  expectTypeOf(data.exchanges).toEqualTypeOf<number>();
  expect(data.collected).toBeDefined();
  expectTypeOf(data.collected).toEqualTypeOf<number>();
  expect(data.unspent).toBeDefined();
  expectTypeOf(data.unspent).toEqualTypeOf<number>();
});
