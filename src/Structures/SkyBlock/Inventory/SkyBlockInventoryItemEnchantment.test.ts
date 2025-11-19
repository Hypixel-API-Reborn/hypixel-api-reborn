import SkyBlockInventoryItemEnchantment from './SkyBlockInventoryItemEnchantment.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockInventoryItemEnchantment', () => {
  const data = new SkyBlockInventoryItemEnchantment({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockInventoryItemEnchantment);
  expectTypeOf(data).toEqualTypeOf<SkyBlockInventoryItemEnchantment>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string | 'UNKNOWN'>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<string | 'UNKNOWN'>();
});
