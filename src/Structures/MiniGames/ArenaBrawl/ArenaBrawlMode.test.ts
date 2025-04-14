import ArenaBrawlMode from './ArenaBrawlMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ArenaBrawlMode', () => {
  const data = new ArenaBrawlMode({ stats: 'meow' }, '1v1');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ArenaBrawlMode);
  expectTypeOf(data).toEqualTypeOf<ArenaBrawlMode>();
  expect(data.damage).toBeDefined();
  expect(data.damage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.damage).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.healed).toBeDefined();
  expect(data.healed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.healed).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.games).toBeDefined();
  expect(data.games).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.games).toEqualTypeOf<number>();
  expect(data.winStreak).toBeDefined();
  expect(data.winStreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winStreak).toEqualTypeOf<number>();
});
