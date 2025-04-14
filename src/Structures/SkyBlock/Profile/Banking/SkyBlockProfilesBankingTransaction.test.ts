import SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BankingTransactionAction } from '../../../../Types/SkyBlock.js';

test('SkyBlockProfilesBankingTransaction', () => {
  const data = new SkyBlockProfilesBankingTransaction({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfilesBankingTransaction);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfilesBankingTransaction>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.action).toBeDefined();
  expectTypeOf(data.action).toEqualTypeOf<BankingTransactionAction | 'UNKNOWN'>();
  expect(data.user).toBeDefined();
  expectTypeOf(data.user).toEqualTypeOf<string | 'Bank Interest' | 'UNKNOWN'>();
});
