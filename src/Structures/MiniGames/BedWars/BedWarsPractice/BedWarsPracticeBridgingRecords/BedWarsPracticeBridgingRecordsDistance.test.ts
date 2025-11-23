import BedWarsPracticeBridgingRecordsDistance from './BedWarsPracticeBridgingRecordsDistance.js';
import BedWarsPracticeBridgingRecordsEevation from './BedWarsPracticeBridgingRecordsEevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecordsDistance', () => {
  const data = new BedWarsPracticeBridgingRecordsDistance({ stats: 'meow' }, '100');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecordsDistance);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecordsDistance>();
  expect(data.none).toBeDefined();
  expect(data.none).toBeInstanceOf(BedWarsPracticeBridgingRecordsEevation);
  expectTypeOf(data.none).toEqualTypeOf<BedWarsPracticeBridgingRecordsEevation>();
  expect(data.slight).toBeDefined();
  expect(data.slight).toBeInstanceOf(BedWarsPracticeBridgingRecordsEevation);
  expectTypeOf(data.slight).toEqualTypeOf<BedWarsPracticeBridgingRecordsEevation>();
  expect(data.staircase).toBeDefined();
  expect(data.staircase).toBeInstanceOf(BedWarsPracticeBridgingRecordsEevation);
  expectTypeOf(data.staircase).toEqualTypeOf<BedWarsPracticeBridgingRecordsEevation>();
});
