import SkyBlockProfileBanking from './SkyBlockProfileBanking.js';
import SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockProfileBanking', () => {
  const data = new SkyBlockProfileBanking({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileBanking);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileBanking>();
  expect(data.balance).toBeDefined();
  expect(data.balance).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.balance).toEqualTypeOf<number>();
  expect(data.transactions).toBeDefined();
  expectTypeOf(data.transactions).toEqualTypeOf<SkyBlockProfilesBankingTransaction[]>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.balance);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
