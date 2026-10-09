import GameCountsGameCountsMurderMysteryModes from './GameCountsMurderMysteryModes.ts';
import GameCountsMurderMystery from './GameCountsMurderMystery.ts';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsMurderMystery', () => {
  const data = new GameCountsMurderMystery({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsMurderMystery);
  expectTypeOf(data).toEqualTypeOf<GameCountsMurderMystery>();
  expect(data.modes).toBeDefined();
  expect(data.modes).toBeInstanceOf(GameCountsGameCountsMurderMysteryModes);
  expectTypeOf(data.modes).toEqualTypeOf<GameCountsGameCountsMurderMysteryModes>();
});
