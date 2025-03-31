import SkyblockProfileBanking from './SkyblockProfileBanking.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockProfilesBankingTrasnsaction from './SkyblockProfilesBankingTrasnsaction.js';

test('SkyblockProfileBanking', () => {
  const data = new SkyblockProfileBanking({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfileBanking);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfileBanking>();
  expect(data.balance).toBeDefined();
  expectTypeOf(data.balance).toEqualTypeOf<number>();
  expect(data.transactions).toBeDefined();
  expectTypeOf(data.transactions).toEqualTypeOf<SkyblockProfilesBankingTrasnsaction[]>();
});
