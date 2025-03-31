import SkyblockGardenCropsUpgrades from './SkyblockGardenCropsUpgrades.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockGardenCropsUpgrades', () => {
  const data = new SkyblockGardenCropsUpgrades({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenCropsUpgrades);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenCropsUpgrades>();
  expect(data.wheat).toBeDefined();
  expectTypeOf(data.wheat).toEqualTypeOf<number>();
  expect(data.carrot).toBeDefined();
  expectTypeOf(data.carrot).toEqualTypeOf<number>();
  expect(data.sugarCane).toBeDefined();
  expectTypeOf(data.sugarCane).toEqualTypeOf<number>();
  expect(data.potato).toBeDefined();
  expectTypeOf(data.potato).toEqualTypeOf<number>();
  expect(data.pumpkin).toBeDefined();
  expectTypeOf(data.pumpkin).toEqualTypeOf<number>();
  expect(data.melon).toBeDefined();
  expectTypeOf(data.melon).toEqualTypeOf<number>();
  expect(data.cactus).toBeDefined();
  expectTypeOf(data.cactus).toEqualTypeOf<number>();
  expect(data.cocoaBeans).toBeDefined();
  expectTypeOf(data.cocoaBeans).toEqualTypeOf<number>();
  expect(data.mushroom).toBeDefined();
  expectTypeOf(data.mushroom).toEqualTypeOf<number>();
  expect(data.netherWart).toBeDefined();
  expectTypeOf(data.netherWart).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.average);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
