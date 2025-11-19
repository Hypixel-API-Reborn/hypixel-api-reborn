import SimonSays from './SimonSays.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SimonSays', () => {
  const data = new SimonSays({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SimonSays);
  expectTypeOf(data).toEqualTypeOf<SimonSays>();
  expect(data.roundWins).toBeDefined();
  expect(data.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundWins).toEqualTypeOf<number>();
  expect(data.rounds).toBeDefined();
  expect(data.rounds).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.rounds).toEqualTypeOf<number>();
  expect(data.topScore).toBeDefined();
  expect(data.topScore).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.topScore).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});
