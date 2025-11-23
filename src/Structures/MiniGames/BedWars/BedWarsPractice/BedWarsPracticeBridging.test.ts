import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecords.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridging', () => {
  const data = new BedWarsPracticeBridging({ stats: 'meow' }, { stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridging);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridging>();
  expect(data.records).toBeDefined();
  expect(data.records).toBeInstanceOf(BedWarsPracticeBridgingRecords);
  expectTypeOf(data.records).toEqualTypeOf<BedWarsPracticeBridgingRecords>();
});
