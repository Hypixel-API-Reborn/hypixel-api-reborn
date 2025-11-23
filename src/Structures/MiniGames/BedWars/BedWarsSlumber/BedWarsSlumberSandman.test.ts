import BedWarsSlumberSandman from './BedWarsSlumberSandman.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberSandman', () => {
  const data = new BedWarsSlumberSandman({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberSandman);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberSandman>();
  expect(data.expMultiplier).toBeDefined();
  expect(data.expMultiplier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.expMultiplier).toEqualTypeOf<number>();
  expect(data.ticketMultiplier).toBeDefined();
  expect(data.ticketMultiplier).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ticketMultiplier).toEqualTypeOf<number>();
});
