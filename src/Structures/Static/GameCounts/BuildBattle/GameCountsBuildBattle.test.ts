import GameCountsBuildBattle from './GameCountsBuildBattle.js';
import GameCountsGameCountsBuildBattleModes from './GameCountsBuildBattleModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBuildBattle', () => {
  const data = new GameCountsBuildBattle({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBuildBattle);
  expectTypeOf(data).toEqualTypeOf<GameCountsBuildBattle>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsBuildBattleModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsBuildBattleModes>();
});
