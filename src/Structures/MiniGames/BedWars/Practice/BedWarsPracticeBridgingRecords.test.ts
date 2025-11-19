import BedWarsPracticeBridgingRecords from './BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeRecord from './BedWarsPracticeRecord.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBridgingRecords', () => {
  const data = new BedWarsPracticeBridgingRecords({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBridgingRecords);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBridgingRecords>();
  expect(data.blocks30).toBeDefined();
  expect(data.blocks30).toBeInstanceOf(BedWarsPracticeRecord);
  expectTypeOf(data.blocks30).toEqualTypeOf<BedWarsPracticeRecord>();
  expect(data.blocks50).toBeDefined();
  expect(data.blocks50).toBeInstanceOf(BedWarsPracticeRecord);
  expectTypeOf(data.blocks50).toEqualTypeOf<BedWarsPracticeRecord>();
  expect(data.blocks100).toBeDefined();
  expect(data.blocks100).toBeInstanceOf(BedWarsPracticeRecord);
  expectTypeOf(data.blocks100).toEqualTypeOf<BedWarsPracticeRecord>();
});
