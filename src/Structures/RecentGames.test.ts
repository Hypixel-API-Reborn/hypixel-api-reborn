import Game from './Game.js';
import RecentGame from './RecentGame.js';
import { expect, expectTypeOf, test } from 'vitest';

test('RecentGame', () => {
  const data = new RecentGame({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RecentGame);
  expectTypeOf(data).toEqualTypeOf<RecentGame>();
  expect(data.game).toBeDefined();
  expectTypeOf(data.game).toEqualTypeOf<Game | null>();
  expect(data.dateTimestamp).toBeDefined();
  expectTypeOf(data.dateTimestamp).toEqualTypeOf<number | null>();
  expect(data.dateAt).toBeDefined();
  expectTypeOf(data.dateAt).toEqualTypeOf<Date | null>();
  expect(data.mode).toBeDefined();
  expectTypeOf(data.mode).toEqualTypeOf<string | null>();
  expect(data.map).toBeDefined();
  expectTypeOf(data.map).toEqualTypeOf<string | null>();
  expect(data.ongoing).toBeDefined();
  expectTypeOf(data.ongoing).toEqualTypeOf<boolean>();
  expect(data.endedTimestamp).toBeDefined();
  expectTypeOf(data.endedTimestamp).toEqualTypeOf<number | null>();
  expect(data.endedAt).toBeDefined();
  expectTypeOf(data.endedAt).toEqualTypeOf<Date | null>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.mode);
  expectTypeOf(data.toString()).toEqualTypeOf<string | null>();
});
