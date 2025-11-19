import SkyBlockInventoryItemAttribute from './SkyBlockInventoryItemAttribute.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockInventoryItemAttribute', () => {
  const data = new SkyBlockInventoryItemAttribute({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockInventoryItemAttribute);
  expectTypeOf(data).toEqualTypeOf<SkyBlockInventoryItemAttribute>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<string | 'UNKNOWN'>();
  expect(data.tier).toBeDefined();
  expect(data.tier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.id);
  expectTypeOf(data.toString()).toEqualTypeOf<string | 'UNKNOWN'>();
});
