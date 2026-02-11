import BlitzSurvivalGamesKit from './BlitzSurvivalGamesKit.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BlitzSurvivalGamesKit', () => {
  const data = new BlitzSurvivalGamesKit({ stats: 'meow' }, 'arachnologist');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BlitzSurvivalGamesKit);
  expectTypeOf(data).toEqualTypeOf<BlitzSurvivalGamesKit>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.exp).toBeDefined();
  expect(data.exp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.exp).toEqualTypeOf<number>();
  expect(data.prestige).toBeDefined();
  expect(data.prestige).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.prestige).toEqualTypeOf<number>();
  expect(data.inventory).toBeDefined();
  expectTypeOf(data.inventory).toEqualTypeOf<Record<string, string>>();
});
