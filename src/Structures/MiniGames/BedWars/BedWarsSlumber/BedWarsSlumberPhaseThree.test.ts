import BedWarsSlumberPhaseThree from './BedWarsSlumberPhaseThree.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberPhaseThree', () => {
  const data = new BedWarsSlumberPhaseThree({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberPhaseThree);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberPhaseThree>();
  expect(data.completedQuests).toBeDefined();
  expect(data.completedQuests).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.completedQuests).toEqualTypeOf<number>();
});
