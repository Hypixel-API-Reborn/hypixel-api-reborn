import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeBridgingRecordsDistance from './BedWarsPracticeBridgingRecordsDistance.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecords', () => {
  const data = new BedWarsPracticeBridgingRecords({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecords);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecords>();
  expect(data.blocks100).toBeDefined();
  expect(data.blocks100).toBeInstanceOf(BedWarsPracticeBridgingRecordsDistance);
  expectTypeOf(data.blocks100).toEqualTypeOf<BedWarsPracticeBridgingRecordsDistance>();
  expect(data.blocks50).toBeDefined();
  expect(data.blocks50).toBeInstanceOf(BedWarsPracticeBridgingRecordsDistance);
  expectTypeOf(data.blocks50).toEqualTypeOf<BedWarsPracticeBridgingRecordsDistance>();
  expect(data.blocks30).toBeDefined();
  expect(data.blocks30).toBeInstanceOf(BedWarsPracticeBridgingRecordsDistance);
  expectTypeOf(data.blocks30).toEqualTypeOf<BedWarsPracticeBridgingRecordsDistance>();
});
