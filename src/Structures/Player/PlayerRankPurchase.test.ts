import PlayerRankPurchase from './PlayerRankPurchase.js';
import { expect, expectTypeOf, test } from 'vitest';

test('PlayerRankPurchase', () => {
  const data = new PlayerRankPurchase({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(PlayerRankPurchase);
  expectTypeOf(data).toEqualTypeOf<PlayerRankPurchase>();
  expect(data.vip).toBeDefined();
  expectTypeOf(data.vip).toEqualTypeOf<number | null>();
  expect(data.vipAt).toBeDefined();
  expectTypeOf(data.vipAt).toEqualTypeOf<Date | null>();
  expect(data.vipPlus).toBeDefined();
  expectTypeOf(data.vipPlus).toEqualTypeOf<number | null>();
  expect(data.vipPlusAt).toBeDefined();
  expectTypeOf(data.vipPlusAt).toEqualTypeOf<Date | null>();
  expect(data.mvp).toBeDefined();
  expectTypeOf(data.mvp).toEqualTypeOf<number | null>();
  expect(data.mvpAt).toBeDefined();
  expectTypeOf(data.mvpAt).toEqualTypeOf<Date | null>();
  expect(data.mvpPlus).toBeDefined();
  expectTypeOf(data.mvpPlus).toEqualTypeOf<number | null>();
  expect(data.mvpPlusAt).toBeDefined();
  expectTypeOf(data.mvpPlusAt).toEqualTypeOf<Date | null>();
});
