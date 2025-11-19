import Game from './Game.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { GameCode, GameID, GameString } from '../Types/Game.js';

test('Game', () => {
  const data = new Game('ARCADE');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Game);
  expectTypeOf(data).toEqualTypeOf<Game>();
  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<GameID | GameCode>();
  expect(data.id).toBeDefined();
  expectTypeOf(data.id).toEqualTypeOf<GameID | null>();
  expect(data.code).toBeDefined();
  expectTypeOf(data.code).toEqualTypeOf<GameCode | null>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<GameString | null>();
  expect(data.found).toBeDefined();
  expectTypeOf(data.found).toEqualTypeOf<boolean>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => GameString | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<GameString | null>();
});
