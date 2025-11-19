import PlayerGifting from './PlayerGifting.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerGifting', () => {
  const data = new PlayerGifting({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerGifting);
  expectTypeOf(data).toEqualTypeOf<PlayerGifting>();
  expect(data.bundlesReceived).toBeDefined();
  expect(data.bundlesReceived).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bundlesReceived).toEqualTypeOf<number>();
  expect(data.bundlesGiven).toBeDefined();
  expect(data.bundlesGiven).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bundlesGiven).toEqualTypeOf<number>();
  expect(data.milestones).toBeDefined();
  expectTypeOf(data.milestones).toEqualTypeOf<string[]>();
  expect(data.giftsGiven).toBeDefined();
  expect(data.giftsGiven).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.giftsGiven).toEqualTypeOf<number>();
  expect(data.ranksGiven).toBeDefined();
  expect(data.ranksGiven).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ranksGiven).toEqualTypeOf<number>();
  expect(data.ranksGivenMilestones).toBeDefined();
  expectTypeOf(data.ranksGivenMilestones).toEqualTypeOf<string[]>();
});
