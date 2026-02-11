import GameCountGames from './GameCountsGames.js';
import GameCounts from './GameCounts.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCounts', () => {
  const data = new GameCounts({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCounts);
  expectTypeOf(data).toEqualTypeOf<GameCounts>();
  expect(data.playerCount).toBeDefined();
  expect(data.playerCount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playerCount).toEqualTypeOf<number>();
  expect(data.games).toBeDefined();
  expect(data.games).toBeInstanceOf(GameCountGames);
  expectTypeOf(data.games).toEqualTypeOf<GameCountGames>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.playerCount);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
