import SkyblockMemberChocolateFactoryTimeTower from './SkyblockMemberChocolateFactoryTimeTower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberChocolateFactoryTimeTower', () => {
  const data = new SkyblockMemberChocolateFactoryTimeTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberChocolateFactoryTimeTower);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberChocolateFactoryTimeTower>();
  expect(data.charges).toBeDefined();
  expectTypeOf(data.charges).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.activationTime).toBeDefined();
  expectTypeOf(data.activationTime).toEqualTypeOf<number>();
  expect(data.activationTimeDate).toBeDefined();
  expectTypeOf(data.activationTimeDate).toEqualTypeOf<Date>();
  expect(data.lastChargeTime).toBeDefined();
  expectTypeOf(data.lastChargeTime).toEqualTypeOf<number>();
  expect(data.lastChargeTimeDate).toBeDefined();
  expectTypeOf(data.lastChargeTimeDate).toEqualTypeOf<Date>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.level);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
