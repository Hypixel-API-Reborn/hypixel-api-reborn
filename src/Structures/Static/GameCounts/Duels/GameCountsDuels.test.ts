import GaemCountsDuels from './GameCountsDuels.ts';
import GameCountsGameCountsDuelsModes from './GameCountsDuelsModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GaemCountsDuels', () => {
  const data = new GaemCountsDuels({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GaemCountsDuels);
  expectTypeOf(data).toEqualTypeOf<GaemCountsDuels>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsDuelsModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsDuelsModes>();
});
