import SkyblockProfilesBankingTrasnsaction from './SkyblockProfilesBankingTrasnsaction.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BankingTrasnsactionAction } from '../../../../Types/Skyblock.js';

test('SkyblockProfilesBankingTrasnsaction', () => {
  const data = new SkyblockProfilesBankingTrasnsaction({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockProfilesBankingTrasnsaction);
  expectTypeOf(data).toEqualTypeOf<SkyblockProfilesBankingTrasnsaction>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.action).toBeDefined();
  expectTypeOf(data.action).toEqualTypeOf<BankingTrasnsactionAction | 'UNKNOWN'>();
  expect(data.user).toBeDefined();
  expectTypeOf(data.user).toEqualTypeOf<string | 'Bank Interest' | 'UNKNOWN'>();
});
