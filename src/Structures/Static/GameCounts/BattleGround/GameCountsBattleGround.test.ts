import GameCountsBattleGround from './GameCountsBattleGround.js';
import GameCountsBattleGroundModes from './GameCountsBattleGroundModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBattleGround', () => {
  const data = new GameCountsBattleGround({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBattleGround);
  expectTypeOf(data).toEqualTypeOf<GameCountsBattleGround>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsBattleGroundModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsBattleGroundModes>();
});
