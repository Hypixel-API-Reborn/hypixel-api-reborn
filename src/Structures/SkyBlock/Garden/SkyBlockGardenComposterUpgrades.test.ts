import SkyBlockGardenComposterUpgrades from './SkyBlockGardenComposterUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockGardenComposterUpgrades', () => {
  const data = new SkyBlockGardenComposterUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockGardenComposterUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyBlockGardenComposterUpgrades>();
  expect(data.speed).toBeDefined();
  expect(data.speed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.speed).toEqualTypeOf<number>();
  expect(data.multiDrop).toBeDefined();
  expect(data.multiDrop).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.multiDrop).toEqualTypeOf<number>();
  expect(data.fuelCap).toBeDefined();
  expect(data.fuelCap).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fuelCap).toEqualTypeOf<number>();
  expect(data.organicMatterCap).toBeDefined();
  expect(data.organicMatterCap).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.organicMatterCap).toEqualTypeOf<number>();
  expect(data.costReduction).toBeDefined();
  expect(data.costReduction).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.costReduction).toEqualTypeOf<number>();
});
