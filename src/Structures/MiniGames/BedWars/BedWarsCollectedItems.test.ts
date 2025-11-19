import BedWarsCollectedItems from './BedWarsCollectedItems.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsCollectedItems', () => {
  const data = new BedWarsCollectedItems({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsCollectedItems);
  expectTypeOf(data).toEqualTypeOf<BedWarsCollectedItems>();
  expect(data.iron).toBeDefined();
  expect(data.iron).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.iron).toEqualTypeOf<number>();
  expect(data.gold).toBeDefined();
  expect(data.gold).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gold).toEqualTypeOf<number>();
  expect(data.diamond).toBeDefined();
  expect(data.diamond).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diamond).toEqualTypeOf<number>();
  expect(data.emerald).toBeDefined();
  expect(data.emerald).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.emerald).toEqualTypeOf<number>();
});
