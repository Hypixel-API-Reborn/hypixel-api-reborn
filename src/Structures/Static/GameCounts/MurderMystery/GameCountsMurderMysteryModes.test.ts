import GameCountsMurderMysteryModes from './GameCountsMurderMysteryModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsMurderMysteryModes', () => {
  const data = new GameCountsMurderMysteryModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsMurderMysteryModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsMurderMysteryModes>();
  expect(data.doubleUp).toBeDefined();
  expect(data.doubleUp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.doubleUp).toEqualTypeOf<number>();
  expect(data.infection).toBeDefined();
  expect(data.infection).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.infection).toEqualTypeOf<number>();
  expect(data.assassins).toBeDefined();
  expect(data.assassins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.assassins).toEqualTypeOf<number>();
  expect(data.classic).toBeDefined();
  expect(data.classic).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.classic).toEqualTypeOf<number>();
});
