import BedWarsPracticeRecordElevation from './BedWarsPracticeRecordElevation.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeRecordElevation', () => {
  const data = new BedWarsPracticeRecordElevation({ stats: 'meow' }, 30, 'NONE');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeRecordElevation);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeRecordElevation>();
  expect(data.straight).toBeDefined();
  expect(data.straight).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.straight).toEqualTypeOf<number>();
  expect(data.diagonal).toBeDefined();
  expect(data.diagonal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.diagonal).toEqualTypeOf<number>();
});
