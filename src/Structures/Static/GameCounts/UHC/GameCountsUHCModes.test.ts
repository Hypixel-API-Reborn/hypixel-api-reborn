import GameCountsUHCModes from './GameCountsUHCModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsUHCModes', () => {
  const data = new GameCountsUHCModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsUHCModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsUHCModes>();
  expect(data.teams).toBeDefined();
  expect(data.teams).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.teams).toEqualTypeOf<number>();
  expect(data.solo).toBeDefined();
  expect(data.solo).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo).toEqualTypeOf<number>();
  expect(data.brawlDuo).toBeDefined();
  expect(data.brawlDuo).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawlDuo).toEqualTypeOf<number>();
});
