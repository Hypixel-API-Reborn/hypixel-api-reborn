import BedWarsPracticeRecord from './BedWarsPracticeRecord.js';
import BedWarsPracticeRecordElevation from './BedWarsPracticeRecordElevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeRecord', () => {
  const data = new BedWarsPracticeRecord({ stats: 'meow' }, 100);
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeRecord);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeRecord>();
  expect(data.elevationNone).toBeDefined();
  expect(data.elevationNone).toBeInstanceOf(BedWarsPracticeRecordElevation);
  expectTypeOf(data.elevationNone).toEqualTypeOf<BedWarsPracticeRecordElevation>();
  expect(data.elevationSlight).toBeDefined();
  expect(data.elevationSlight).toBeInstanceOf(BedWarsPracticeRecordElevation);
  expectTypeOf(data.elevationSlight).toEqualTypeOf<BedWarsPracticeRecordElevation>();
  expect(data.elevationStaircase).toBeDefined();
  expect(data.elevationStaircase).toBeInstanceOf(BedWarsPracticeRecordElevation);
  expectTypeOf(data.elevationStaircase).toEqualTypeOf<BedWarsPracticeRecordElevation>();
});
