import SkyBlockProfileBanking from './SkyBlockProfileBanking.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';

test('SkyBlockProfileBanking', () => {
  const data = new SkyBlockProfileBanking({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfileBanking);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfileBanking>();
  expect(data.balance).toBeDefined();
  expectTypeOf(data.balance).toEqualTypeOf<number>();
  expect(data.transactions).toBeDefined();
  expectTypeOf(data.transactions).toEqualTypeOf<SkyBlockProfilesBankingTransaction[]>();
});
