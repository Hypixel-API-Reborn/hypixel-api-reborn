import GameCountsBuildBattle from './GameCountsBuildBattle.ts';
import GameCountsGameCountsBuildBattleModes from './GameCountsBuildBattleModes.ts';
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
