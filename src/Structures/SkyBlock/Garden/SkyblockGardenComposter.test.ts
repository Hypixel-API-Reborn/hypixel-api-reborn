import SkyblockGardenComposter from './SkyblockGardenComposter.js';
import SkyblockGardenComposterUpgrades from './SkyblockGardenComposterUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockGardenComposter', () => {
  const data = new SkyblockGardenComposter({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenComposter);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenComposter>();
  expect(data.organicMatter).toBeDefined();
  expectTypeOf(data.organicMatter).toEqualTypeOf<number>();
  expect(data.fuelUnits).toBeDefined();
  expectTypeOf(data.fuelUnits).toEqualTypeOf<number>();
  expect(data.compostUnits).toBeDefined();
  expectTypeOf(data.compostUnits).toEqualTypeOf<number>();
  expect(data.compostItems).toBeDefined();
  expectTypeOf(data.compostItems).toEqualTypeOf<number>();
  expect(data.conversionTicks).toBeDefined();
  expectTypeOf(data.conversionTicks).toEqualTypeOf<number>();
  expect(data.upgrades).toBeDefined();
  expectTypeOf(data.upgrades).toEqualTypeOf<SkyblockGardenComposterUpgrades>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.organicMatter);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
