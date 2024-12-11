import PartyGames from './PartyGames.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PartyGames', () => {
  const data = new PartyGames({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PartyGames);
  expectTypeOf(data).toEqualTypeOf<PartyGames>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.roundWins).toBeDefined();
  expect(data.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundWins).toEqualTypeOf<number>();
  expect(data.stars).toBeDefined();
  expect(data.stars).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.stars).toEqualTypeOf<number>();
});
