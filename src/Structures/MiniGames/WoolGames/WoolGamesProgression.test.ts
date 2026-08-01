import WoolGamesProgression from './WoolGamesProgression.js';
import { expect, expectTypeOf, test } from 'vitest';

test('WoolGamesProgression', () => {
  const data = new WoolGamesProgression({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(WoolGamesProgression);
  expectTypeOf(data).toEqualTypeOf<WoolGamesProgression>();
  expect(data.availableLayers).toBeDefined();
  expect(data.availableLayers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.availableLayers).toEqualTypeOf<number>();
  expect(data.xp).toBeDefined();
  expect(data.xp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.xp).toEqualTypeOf<number>();
  expect(data.exactLevel).toBeDefined();
  expect(data.exactLevel).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.exactLevel).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
});
