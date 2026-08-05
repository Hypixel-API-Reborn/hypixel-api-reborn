import BedWarsPracticeBridgingRecordsDistance from './BedWarsPracticeBridgingRecordsDistance.js';
import BedWarsPracticeBridgingRecordsElevation from './BedWarsPracticeBridgingRecordsElevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecordsDistance', () => {
  const data = new BedWarsPracticeBridgingRecordsDistance({ stats: 'meow' }, '100');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecordsDistance);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecordsDistance>();
  expect(data.none).toBeDefined();
  expect(data.none).toBeInstanceOf(BedWarsPracticeBridgingRecordsElevation);
  expectTypeOf(data.none).toEqualTypeOf<BedWarsPracticeBridgingRecordsElevation>();
  expect(data.slight).toBeDefined();
  expect(data.slight).toBeInstanceOf(BedWarsPracticeBridgingRecordsElevation);
  expectTypeOf(data.slight).toEqualTypeOf<BedWarsPracticeBridgingRecordsElevation>();
  expect(data.staircase).toBeDefined();
  expect(data.staircase).toBeInstanceOf(BedWarsPracticeBridgingRecordsElevation);
  expectTypeOf(data.staircase).toEqualTypeOf<BedWarsPracticeBridgingRecordsElevation>();
});
