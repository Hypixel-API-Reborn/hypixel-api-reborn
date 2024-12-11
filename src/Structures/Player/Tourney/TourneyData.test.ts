import TourneyData from './TourneyData.js';
import { expect, expectTypeOf, test } from 'vitest';

test('TourneyData', () => {
  const data = new TourneyData({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(TourneyData);
  expectTypeOf(data).toEqualTypeOf<TourneyData>();
  expect(data.playtime).toBeDefined();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.tributes).toBeDefined();
  expect(data.tributes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tributes).toEqualTypeOf<number>();
  expect(data.firstWin).toBeDefined();
  expect(data.firstWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.firstWin).toEqualTypeOf<number>();
  expect(data.claimedReward).toBeDefined();
  expect(data.claimedReward).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.claimedReward).toEqualTypeOf<number>();
});
