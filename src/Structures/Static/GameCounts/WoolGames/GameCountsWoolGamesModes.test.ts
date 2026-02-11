import GameCountsWoolGamesModes from './GameCountsWoolGamesModes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GameCountsWoolGamesModes', () => {
  const data = new GameCountsWoolGamesModes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GameCountsWoolGamesModes);
  expectTypeOf(data).toEqualTypeOf<GameCountsWoolGamesModes>();
  expect(data.captureTheWoolTwoTwenty).toBeDefined();
  expect(data.captureTheWoolTwoTwenty).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.captureTheWoolTwoTwenty).toEqualTypeOf<number>();
  expect(data.sheepWarsTwoSix).toBeDefined();
  expect(data.sheepWarsTwoSix).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.sheepWarsTwoSix).toEqualTypeOf<number>();
  expect(data.woolWarsTwoFour).toBeDefined();
  expect(data.woolWarsTwoFour).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.woolWarsTwoFour).toEqualTypeOf<number>();
});
