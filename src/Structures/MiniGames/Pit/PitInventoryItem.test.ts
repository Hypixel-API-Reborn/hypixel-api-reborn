import PitInventoryItem from './PitInventoryItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PitInventoryItem', () => {
  const data = new PitInventoryItem({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PitInventoryItem);
  expectTypeOf(data).toEqualTypeOf<PitInventoryItem>();
  expect(data.itemId).toBeDefined();
  expect(data.itemId).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.itemId).toEqualTypeOf<number>();
  expect(data.count).toBeDefined();
  expect(data.count).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.count).toEqualTypeOf<number>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string | null>();
  expect(data.lore).toBeDefined();
  expectTypeOf(data.lore).toEqualTypeOf<string | null>();
  expect(data.loreArray).toBeDefined();
  expectTypeOf(data.loreArray).toEqualTypeOf<string[]>();
  expect(data.extraAttributes).toBeDefined();
  expectTypeOf(data.extraAttributes).toEqualTypeOf<object | null>();
});
