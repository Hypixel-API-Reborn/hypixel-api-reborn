import BedWarsSlumberMinion from './BedWarsSlumberMinion.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberMinion', () => {
  const data = new BedWarsSlumberMinion({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberMinion);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberMinion>();
  expect(data.enderDust).toBeDefined();
  expect(data.enderDust).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderDust).toEqualTypeOf<number>();
  expect(data.enderDustCollected).toBeDefined();
  expect(data.enderDustCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderDustCollected).toEqualTypeOf<number>();
  expect(data.games).toBeDefined();
  expect(data.games).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.games).toEqualTypeOf<number>();
  expect(data.tickets).toBeDefined();
  expect(data.tickets).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tickets).toEqualTypeOf<number>();
  expect(data.ticketsCollected).toBeDefined();
  expect(data.ticketsCollected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ticketsCollected).toEqualTypeOf<number>();
});
