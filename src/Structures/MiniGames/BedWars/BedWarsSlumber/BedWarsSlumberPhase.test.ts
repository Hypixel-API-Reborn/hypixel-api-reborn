import BedWarsSlumberPhase from './BedWarsSlumberPhase.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberPhase', () => {
  const data = new BedWarsSlumberPhase({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberPhase);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberPhase>();
  expect(data.current).toBeDefined();
  expect(data.current).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.current).toEqualTypeOf<number>();
});
