import RawSkyBlockInventoryItem from './RawSkyBlockInventoryItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('RawSkyBlockInventoryItem', () => {
  const data = new RawSkyBlockInventoryItem({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RawSkyBlockInventoryItem);
  expectTypeOf(data).toEqualTypeOf<RawSkyBlockInventoryItem>();
  expect(data.base64).toBeDefined();
  expectTypeOf(data.base64).toEqualTypeOf<string | null>();
});
