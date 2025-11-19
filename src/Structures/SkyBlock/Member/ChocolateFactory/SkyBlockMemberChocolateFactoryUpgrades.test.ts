import SkyBlockMemberChocolateFactoryUpgrades from './SkyBlockMemberChocolateFactoryUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberChocolateFactoryUpgrades', () => {
  const data = new SkyBlockMemberChocolateFactoryUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberChocolateFactoryUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberChocolateFactoryUpgrades>();
  expect(data.click).toBeDefined();
  expect(data.click).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.click).toEqualTypeOf<number>();
  expect(data.chocolateMultiplier).toBeDefined();
  expect(data.chocolateMultiplier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chocolateMultiplier).toEqualTypeOf<number>();
  expect(data.rabbitRarity).toBeDefined();
  expect(data.rabbitRarity).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rabbitRarity).toEqualTypeOf<number>();
});
