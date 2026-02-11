import GameCountsPitModes from './GameCountsPitModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsPitModes', () => {
  const data = new GameCountsPitModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsPitModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsPitModes>();
  expect(data.PIT).toBeDefined();
  expect(data.PIT).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.PIT).toEqualTypeOf<number>();
});
