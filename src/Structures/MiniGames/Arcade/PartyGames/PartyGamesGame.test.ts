import PartyGamesGame from './PartyGamesGame.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PartyGamesGame', () => {
  const data = new PartyGamesGame({ stats: 'meow' }, 'animal_slaughter');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PartyGamesGame);
  expectTypeOf(data).toEqualTypeOf<PartyGamesGame>();
  expect(data.bestScore).toBeDefined();
  expect(data.bestScore).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestScore).toEqualTypeOf<number>();
  expect(data.bestTime).toBeDefined();
  expect(data.bestTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestTime).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.roundWins).toBeDefined();
  expect(data.roundWins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.roundWins).toEqualTypeOf<number>();
  expect(data.totalScore).toBeDefined();
  expect(data.totalScore).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalScore).toEqualTypeOf<number>();
});
