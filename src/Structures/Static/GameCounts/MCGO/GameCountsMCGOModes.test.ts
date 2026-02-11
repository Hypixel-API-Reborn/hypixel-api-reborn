import GameCountsMCGOModes from './GameCountsMCGOModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsMCGOModes', () => {
  const data = new GameCountsMCGOModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsMCGOModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsMCGOModes>();
  expect(data.normal).toBeDefined();
  expect(data.normal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.normal).toEqualTypeOf<number>();
  expect(data.gungame).toBeDefined();
  expect(data.gungame).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gungame).toEqualTypeOf<number>();
  expect(data.deathmatch).toBeDefined();
  expect(data.deathmatch).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deathmatch).toEqualTypeOf<number>();
});
