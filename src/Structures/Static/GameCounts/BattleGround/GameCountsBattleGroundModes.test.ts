import GameCountsBattleGroundMods from './GameCountsBattleGroundModes.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBattleGroundMods', () => {
  const data = new GameCountsBattleGroundMods({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBattleGroundMods);
  expectTypeOf(data).toEqualTypeOf<GameCountsBattleGroundMods>();
  expect(data.ctfMini).toBeDefined();
  expect(data.ctfMini).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ctfMini).toEqualTypeOf<number>();
  expect(data.domination).toBeDefined();
  expect(data.domination).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.domination).toEqualTypeOf<number>();
  expect(data.teamDeathmatch).toBeDefined();
  expect(data.teamDeathmatch).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.teamDeathmatch).toEqualTypeOf<number>();
});
