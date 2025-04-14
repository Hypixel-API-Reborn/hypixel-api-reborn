import SkyBlockMemberChocolateFactoryEggs from './SkyBlockMemberChocolateFactoryEggs.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryEggs', () => {
  const data = new SkyBlockMemberChocolateFactoryEggs({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryEggs);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryEggs>();
  expect(data.breakfast).toBeDefined();
  expectTypeOf(data.breakfast).toEqualTypeOf<number>();
  expect(data.lunch).toBeDefined();
  expectTypeOf(data.lunch).toEqualTypeOf<number>();
  expect(data.dinner).toBeDefined();
  expectTypeOf(data.dinner).toEqualTypeOf<number>();
  expect(data.brunch).toBeDefined();
  expectTypeOf(data.brunch).toEqualTypeOf<number>();
  expect(data.dejeuner).toBeDefined();
  expectTypeOf(data.dejeuner).toEqualTypeOf<number>();
  expect(data.supper).toBeDefined();
  expectTypeOf(data.supper).toEqualTypeOf<number>();
});
