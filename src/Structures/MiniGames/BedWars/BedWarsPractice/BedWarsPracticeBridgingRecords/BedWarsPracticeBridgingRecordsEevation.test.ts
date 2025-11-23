import BedWarsPracticeBridgingRecordsEevation from './BedWarsPracticeBridgingRecordsEevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecordsEevation', () => {
  const data = new BedWarsPracticeBridgingRecordsEevation({ stats: 'meow' }, '100', 'NONE');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecordsEevation);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecordsEevation>();
  expect(data.diagonal).toBeDefined();
  expect(data.diagonal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diagonal).toEqualTypeOf<number>();
  expect(data.straight).toBeDefined();
  expect(data.straight).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.straight).toEqualTypeOf<number>();
});
