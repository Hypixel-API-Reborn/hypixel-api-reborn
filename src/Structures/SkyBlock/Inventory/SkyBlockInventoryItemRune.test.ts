import SkyBlockInventoryItemRune from './SkyBlockInventoryItemRune.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockInventoryItemRune', () => {
  const data = new SkyBlockInventoryItemRune({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockInventoryItemRune);
  expectTypeOf(data).toEqualTypeOf<SkyBlockInventoryItemRune>();
  expect(data.runeId).toBeDefined();
  expectTypeOf(data.runeId).toEqualTypeOf<string | 'UNKNOWN'>();
  expect(data.tier).toBeDefined();
  expect(data.tier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tier).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.runeId);
  expectTypeOf(data.toString()).toEqualTypeOf<string | 'UNKNOWN'>();
});
