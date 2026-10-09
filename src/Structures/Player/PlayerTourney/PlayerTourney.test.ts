import PlayerTourney from './PlayerTourney.ts';
import PlayerTourneyData from './PlayerTourneyData.ts';
import { expect, expectTypeOf, test } from 'vitest';
import type { PlayerTourneyShopSort } from '../../../Types/index.ts';

test('PlayerTourney', () => {
  const data = new PlayerTourney({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerTourney);
  expectTypeOf(data).toEqualTypeOf<PlayerTourney>();
  expect(data.firstJoinLobbyTimestamp).toBeDefined();
  expectTypeOf(data.firstJoinLobbyTimestamp).toEqualTypeOf<number | null>();
  expect(data.firstJoinLobbyAt).toBeDefined();
  expectTypeOf(data.firstJoinLobbyAt).toEqualTypeOf<Date | null>();
  expect(data.totalTributes).toBeDefined();
  expect(data.totalTributes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalTributes).toEqualTypeOf<number>();
  expect(data.shopSort).toBeDefined();
  expectTypeOf(data.shopSort).toEqualTypeOf<PlayerTourneyShopSort | 'UNKNOWN'>();
  expect(data.hidePurchased).toBeDefined();
  expectTypeOf(data.hidePurchased).toEqualTypeOf<boolean>();
  expect(data.tourneyData).toBeDefined();
  expectTypeOf(data.tourneyData).toEqualTypeOf<PlayerTourneyData[]>();
});
