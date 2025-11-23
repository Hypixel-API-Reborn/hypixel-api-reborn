import BedWarsChallenge from './BedWarsChallenge.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsChallenge', () => {
  const data = new BedWarsChallenge({ stats: 'meow' }, 'archer_only');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsChallenge);
  expectTypeOf(data).toEqualTypeOf<BedWarsChallenge>();
  expect(data.bestTime).toBeDefined();
  expect(data.bestTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestTime).toEqualTypeOf<number>();
  expect(data.timesCompleted).toBeDefined();
  expect(data.timesCompleted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timesCompleted).toEqualTypeOf<number>();
});
