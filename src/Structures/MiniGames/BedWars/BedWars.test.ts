import BedWars from './BedWars.js';
import BedWarsBeds from './BedWarsBeds.js';
import BedWarsCollectedItems from './BedWarsCollectedItems.js';
import BedWarsDreamStats from './BedWarsDreamStats.js';
import BedWarsMode from './BedWarsMode.js';
import BedWarsPracticeStats from './Practice/BedWarsPracticeStats.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BedWarsPrestige } from '../../../Types/Player.js';

test('BedWars', () => {
  const data = new BedWars({ stats: 'meow' });
  expect(data).toBeInstanceOf(BedWars);
  expectTypeOf(data).toEqualTypeOf<BedWars>();
  expect(data.tokens).toBeDefined();
  expect(data.tokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokens).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.prestige).toBeDefined();
  expectTypeOf(data.prestige).toEqualTypeOf<BedWarsPrestige>();
  expect(data.playedGames).toBeDefined();
  expect(data.playedGames).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playedGames).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.winStreak).toBeDefined();
  expect(data.winStreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winStreak).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.finalKills).toBeDefined();
  expect(data.finalKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.finalKills).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.finalDeaths).toBeDefined();
  expect(data.finalDeaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.finalDeaths).toEqualTypeOf<number>();
  expect(data.collectedItemsTotal).toBeDefined();
  expect(data.collectedItemsTotal).toBeInstanceOf(BedWarsCollectedItems);
  expectTypeOf(data.collectedItemsTotal).toEqualTypeOf<BedWarsCollectedItems>();
  expect(data.beds).toBeDefined();
  expect(data.beds).toBeInstanceOf(BedWarsBeds);
  expectTypeOf(data.beds).toEqualTypeOf<BedWarsBeds>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.FKDR).toBeDefined();
  expect(data.FKDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.FKDR).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.solo).toBeDefined();
  expect(data.solo).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.solo).toEqualTypeOf<BedWarsMode>();
  expect(data.doubles).toBeDefined();
  expect(data.doubles).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.doubles).toEqualTypeOf<BedWarsMode>();
  expect(data.threes).toBeDefined();
  expect(data.threes).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.threes).toEqualTypeOf<BedWarsMode>();
  expect(data.fours).toBeDefined();
  expect(data.fours).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.fours).toEqualTypeOf<BedWarsMode>();
  expect(data.dream).toBeDefined();
  expect(data.dream).toBeInstanceOf(BedWarsDreamStats);
  expectTypeOf(data.dream).toEqualTypeOf<BedWarsDreamStats>();
  expect(data.castle).toBeDefined();
  expect(data.castle).toBeInstanceOf(BedWarsMode);
  expectTypeOf(data.castle).toEqualTypeOf<BedWarsMode>();
  expect(data.practice).toBeDefined();
  expect(data.practice).toBeInstanceOf(BedWarsPracticeStats);
  expectTypeOf(data.practice).toEqualTypeOf<BedWarsPracticeStats>();
  expect(data.slumberTickets).toBeDefined();
  expect(data.slumberTickets).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.slumberTickets).toEqualTypeOf<number>();
  expect(data.totalSlumberTicket).toBeDefined();
  expect(data.totalSlumberTicket).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalSlumberTicket).toEqualTypeOf<number>();
});
