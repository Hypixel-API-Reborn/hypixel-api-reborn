import SkyBlockMemberChocolateFactoryTimeTower from './SkyBlockMemberChocolateFactoryTimeTower.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryTimeTower', () => {
  const data = new SkyBlockMemberChocolateFactoryTimeTower({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryTimeTower);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryTimeTower>();
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
