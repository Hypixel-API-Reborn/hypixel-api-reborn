import HypixelSays from './HypixelSays.js';
import { expect, expectTypeOf, test } from 'vitest';

test('HypixelSays', () => {
  const data = new HypixelSays({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(HypixelSays);
  expectTypeOf(data).toEqualTypeOf<HypixelSays>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.rounds).toBeDefined();
  expect(data.rounds).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rounds).toEqualTypeOf<number>();
  expect(data.roundWins).toBeDefined();
  expect(data.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundWins).toEqualTypeOf<number>();
  expect(data.topScore).toBeDefined();
  expect(data.topScore).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.topScore).toEqualTypeOf<number>();
});
