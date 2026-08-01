import SmashHeroesMode from './SmashHeroesMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SmashHeroesMode', () => {
  const data = new SmashHeroesMode({ stats: 'meow' }, '2v2');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SmashHeroesMode);
  expectTypeOf(data).toEqualTypeOf<SmashHeroesMode>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.killDeathRatio).toBeDefined();
  expect(data.killDeathRatio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killDeathRatio).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.winLossRatio).toBeDefined();
  expect(data.winLossRatio).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winLossRatio).toEqualTypeOf<number>();
});
