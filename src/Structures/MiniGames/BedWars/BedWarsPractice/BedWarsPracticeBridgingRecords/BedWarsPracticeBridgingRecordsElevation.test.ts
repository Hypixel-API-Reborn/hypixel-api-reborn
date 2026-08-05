import BedWarsPracticeBridgingRecordsElevation from './BedWarsPracticeBridgingRecordsElevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecordsElevation', () => {
  const data = new BedWarsPracticeBridgingRecordsElevation({ stats: 'meow' }, '100', 'NONE');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecordsElevation);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecordsElevation>();
  expect(data.diagonal).toBeDefined();
  expect(data.diagonal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diagonal).toEqualTypeOf<number>();
  expect(data.straight).toBeDefined();
  expect(data.straight).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.straight).toEqualTypeOf<number>();
});
