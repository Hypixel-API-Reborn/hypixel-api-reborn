import BuildBattleLastWin from './BuildBattleLastWin.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BuildBattleLastWin', () => {
  const data = new BuildBattleLastWin({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BuildBattleLastWin);
  expectTypeOf(data).toEqualTypeOf<BuildBattleLastWin>();
  expect(data.guessTheBuildAt).toBeDefined();
  expectTypeOf(data.guessTheBuildAt).toEqualTypeOf<Date | null>();
  expect(data.soloNormalAt).toBeDefined();
  expectTypeOf(data.soloNormalAt).toEqualTypeOf<Date | null>();
  expect(data.soloProAt).toBeDefined();
  expectTypeOf(data.soloProAt).toEqualTypeOf<Date | null>();
  expect(data.speedBuildersAt).toBeDefined();
  expectTypeOf(data.speedBuildersAt).toEqualTypeOf<Date | null>();
  expect(data.teamsNormalAt).toBeDefined();
  expectTypeOf(data.teamsNormalAt).toEqualTypeOf<Date | null>();
});
