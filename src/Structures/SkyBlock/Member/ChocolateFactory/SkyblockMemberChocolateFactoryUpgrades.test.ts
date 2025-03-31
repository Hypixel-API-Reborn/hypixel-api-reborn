import SkyblockMemberChocolateFactoryUpgrades from './SkyblockMemberChocolateFactoryUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberChocolateFactoryUpgrades', () => {
  const data = new SkyblockMemberChocolateFactoryUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberChocolateFactoryUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberChocolateFactoryUpgrades>();
  expect(data.click).toBeDefined();
  expectTypeOf(data.click).toEqualTypeOf<number>();
  expect(data.chocolateMultiplier).toBeDefined();
  expectTypeOf(data.chocolateMultiplier).toEqualTypeOf<number>();
  expect(data.rabbitRarity).toBeDefined();
  expectTypeOf(data.rabbitRarity).toEqualTypeOf<number>();
});
