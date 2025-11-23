import BedWarsSlumberQuestGamblerGeorge from './BedWarsSlumberQuestGamblerGeorge.js';
import { expect, expectTypeOf, test } from 'vitest';

test('BedWarsSlumberQuestGamblerGeorge', () => {
  const data = new BedWarsSlumberQuestGamblerGeorge({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BedWarsSlumberQuestGamblerGeorge);
  expectTypeOf(data).toEqualTypeOf<BedWarsSlumberQuestGamblerGeorge>();
  expect(data.betAmount).toBeDefined();
  expect(data.betAmount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.betAmount).toEqualTypeOf<number>();
  expect(data.gambleGamesWon).toBeDefined();
  expect(data.gambleGamesWon).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gambleGamesWon).toEqualTypeOf<number>();
  expect(data.lostBet).toBeDefined();
  expectTypeOf(data.lostBet).toEqualTypeOf<boolean>();
  expect(data.lostBetTime).toBeDefined();
  expect(data.lostBetTime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lostBetTime).toEqualTypeOf<number>();
  expect(data.shouldReward).toBeDefined();
  expectTypeOf(data.shouldReward).toEqualTypeOf<boolean>();
  expect(data.wonLastGame).toBeDefined();
  expectTypeOf(data.wonLastGame).toEqualTypeOf<boolean>();
});
