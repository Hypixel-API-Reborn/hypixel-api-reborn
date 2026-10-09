import BedWarsPractice from './BedWarsPractice.ts';
import BedWarsPracticeBridging from './BedWarsPracticeBridging.ts';
import BedWarsPracticeMode from './BedWarsPracticeMode.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { BedWarsPracticeModeId } from '../../../../Types/index.ts';

test('BedWarsPractice', () => {
  const data = new BedWarsPractice({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPractice);
  expectTypeOf(data).toEqualTypeOf<BedWarsPractice>();
  expect(data.bridging).toBeDefined();
  expect(data.bridging).toBeInstanceOf(BedWarsPracticeBridging);
  expectTypeOf(data.bridging).toEqualTypeOf<BedWarsPracticeBridging>();
  expect(data.fireballJumping).toBeDefined();
  expect(data.fireballJumping).toBeInstanceOf(BedWarsPracticeMode);
  expectTypeOf(data.fireballJumping).toEqualTypeOf<BedWarsPracticeMode>();
  expect(data.mlg).toBeDefined();
  expect(data.mlg).toBeInstanceOf(BedWarsPracticeMode);
  expectTypeOf(data.mlg).toEqualTypeOf<BedWarsPracticeMode>();
  expect(data.pearlClutching).toBeDefined();
  expect(data.pearlClutching).toBeInstanceOf(BedWarsPracticeMode);
  expectTypeOf(data.pearlClutching).toEqualTypeOf<BedWarsPracticeMode>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<BedWarsPracticeModeId | 'UNKNOWN'>();
});
