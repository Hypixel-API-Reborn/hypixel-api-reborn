import BedWarsPracticeBase from './BedWarsPracticeBase.js';
import BedWarsPracticeBaseBlocksPlaced from './BedWarsPracticeBaseBlocksPlaced.js';
import BedWarsPracticeBridging from './BedWarsPracticeBridging.js';
import BedWarsPracticeStats from './BedWarsPracticeStats.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BedWarsPracticeModes } from '../../../../Types/Player.js';

test('BedWarsPracticeStats', () => {
  const data = new BedWarsPracticeStats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsPracticeStats);
  expectTypeOf(data).toEqualTypeOf<BedWarsPracticeStats>();
  expect(data.selected).toBeDefined();
  expectTypeOf(data.selected).toEqualTypeOf<BedWarsPracticeModes | 'NONE'>();
  expect(data.bridging).toBeDefined();
  expect(data.bridging).toBeInstanceOf(BedWarsPracticeBridging);
  expectTypeOf(data.bridging).toEqualTypeOf<BedWarsPracticeBridging>();
  expect(data.fireballJumping).toBeDefined();
  expect(data.fireballJumping).toBeInstanceOf(BedWarsPracticeBaseBlocksPlaced);
  expectTypeOf(data.fireballJumping).toEqualTypeOf<BedWarsPracticeBaseBlocksPlaced>();
  expect(data.pearlClutching).toBeDefined();
  expect(data.pearlClutching).toBeInstanceOf(BedWarsPracticeBase);
  expectTypeOf(data.pearlClutching).toEqualTypeOf<BedWarsPracticeBase>();
  expect(data.MLG).toBeDefined();
  expect(data.MLG).toBeInstanceOf(BedWarsPracticeBaseBlocksPlaced);
  expectTypeOf(data.MLG).toEqualTypeOf<BedWarsPracticeBaseBlocksPlaced>();
});
