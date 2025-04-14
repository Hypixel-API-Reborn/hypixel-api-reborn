import Tourney from './Tourney.js';
import TourneyData from './TourneyData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Tourney', () => {
  const data = new Tourney({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(Tourney);
  expectTypeOf(data).toEqualTypeOf<Tourney>();
  expect(data.firstJoinLobby).toBeDefined();
  expectTypeOf(data.firstJoinLobby).toEqualTypeOf<string | null>();
  expect(data.totalTributes).toBeDefined();
  expectTypeOf(data.totalTributes).toEqualTypeOf<number>();
  expect(data.shopSort).toBeDefined();
  expectTypeOf(data.shopSort).toEqualTypeOf<string>();
  expect(data.hidePurchased).toBeDefined();
  expectTypeOf(data.hidePurchased).toEqualTypeOf<boolean>();
  expect(data.tourneyData).toBeDefined();
  expectTypeOf(data.tourneyData).toEqualTypeOf<TourneyData[]>();
});
