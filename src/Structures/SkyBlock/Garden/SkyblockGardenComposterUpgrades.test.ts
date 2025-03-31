import SkyblockGardenComposterUpgrades from './SkyblockGardenComposterUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockGardenComposterUpgrades', () => {
  const data = new SkyblockGardenComposterUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenComposterUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenComposterUpgrades>();
  expect(data.speed).toBeDefined();
  expectTypeOf(data.speed).toEqualTypeOf<number>();
  expect(data.multiDrop).toBeDefined();
  expectTypeOf(data.multiDrop).toEqualTypeOf<number>();
  expect(data.fuelCap).toBeDefined();
  expectTypeOf(data.fuelCap).toEqualTypeOf<number>();
  expect(data.organicMatterCap).toBeDefined();
  expectTypeOf(data.organicMatterCap).toEqualTypeOf<number>();
  expect(data.costReduction).toBeDefined();
  expectTypeOf(data.costReduction).toEqualTypeOf<number>();
});
