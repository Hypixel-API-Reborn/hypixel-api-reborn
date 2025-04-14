import SkyBlockMemberChocolateFactoryUpgrades from './SkyBlockMemberChocolateFactoryUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryUpgrades', () => {
  const data = new SkyBlockMemberChocolateFactoryUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryUpgrades>();
  expect(data.click).toBeDefined();
  expectTypeOf(data.click).toEqualTypeOf<number>();
  expect(data.chocolateMultiplier).toBeDefined();
  expectTypeOf(data.chocolateMultiplier).toEqualTypeOf<number>();
  expect(data.rabbitRarity).toBeDefined();
  expectTypeOf(data.rabbitRarity).toEqualTypeOf<number>();
});
