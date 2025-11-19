import SkyBlockProfilesBankingTransaction from './SkyBlockProfilesBankingTransaction.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BankingTransactionAction } from '../../../../Types/SkyBlock.js';

test('SkyBlockProfilesBankingTransaction', () => {
  const data = new SkyBlockProfilesBankingTransaction({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfilesBankingTransaction);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfilesBankingTransaction>();
  expect(data.amount).toBeDefined();
  expect(data.amount).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expect(data.timestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.action).toBeDefined();
  expectTypeOf(data.action).toEqualTypeOf<BankingTransactionAction | 'UNKNOWN'>();
  expect(data.user).toBeDefined();
  expectTypeOf(data.user).toEqualTypeOf<string | 'Bank Interest' | 'UNKNOWN'>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.amount);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
