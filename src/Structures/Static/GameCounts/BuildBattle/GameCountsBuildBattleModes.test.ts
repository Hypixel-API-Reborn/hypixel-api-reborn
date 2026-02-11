import GameCountsBuildBattleModes from './GameCountsBuildBattleModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsBuildBattleModes', () => {
  const data = new GameCountsBuildBattleModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsBuildBattleModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsBuildBattleModes>();
  expect(data.soloNormalLatest).toBeDefined();
  expect(data.soloNormalLatest).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloNormalLatest).toEqualTypeOf<number>();
  expect(data.speedBuilders).toBeDefined();
  expect(data.speedBuilders).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.speedBuilders).toEqualTypeOf<number>();
  expect(data.guessTheBuild).toBeDefined();
  expect(data.guessTheBuild).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.guessTheBuild).toEqualTypeOf<number>();
  expect(data.teamsNormal).toBeDefined();
  expect(data.teamsNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.teamsNormal).toEqualTypeOf<number>();
  expect(data.soloPro).toBeDefined();
  expect(data.soloPro).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloPro).toEqualTypeOf<number>();
  expect(data.soloNormal).toBeDefined();
  expect(data.soloNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloNormal).toEqualTypeOf<number>();
});
