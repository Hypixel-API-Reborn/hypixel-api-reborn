import SkyBlockMemberChocolateFactoryEggs from './SkyBlockMemberChocolateFactoryEggs.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryEggs', () => {
  const data = new SkyBlockMemberChocolateFactoryEggs({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryEggs);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryEggs>();
  expect(data.breakfast).toBeDefined();
  expect(data.breakfast).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.breakfast).toEqualTypeOf<number>();
  expect(data.lunch).toBeDefined();
  expect(data.lunch).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lunch).toEqualTypeOf<number>();
  expect(data.dinner).toBeDefined();
  expect(data.dinner).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dinner).toEqualTypeOf<number>();
  expect(data.brunch).toBeDefined();
  expect(data.brunch).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brunch).toEqualTypeOf<number>();
  expect(data.dejeuner).toBeDefined();
  expect(data.dejeuner).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.dejeuner).toEqualTypeOf<number>();
  expect(data.supper).toBeDefined();
  expect(data.supper).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.supper).toEqualTypeOf<number>();
});
