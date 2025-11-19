import BedWarsPracticeBase from './BedWarsPracticeBase.js';
import BedWarsPracticeModeAttempts from './BedWarsPracticeModeAttempts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsPracticeBase', () => {
  const data = new BedWarsPracticeBase({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeBase);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeBase>();
  expect(data.attempts).toBeDefined();
  expect(data.attempts).toBeInstanceOf(BedWarsPracticeModeAttempts);
  expectTypeOf(data.attempts).toEqualTypeOf<BedWarsPracticeModeAttempts>();
});
