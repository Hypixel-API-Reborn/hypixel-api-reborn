import SkyBlockProfilesBankingTrasnsaction from './SkyBlockProfilesBankingTrasnsaction.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { BankingTrasnsactionAction } from '../../../../Types/SkyBlock.js';

test('SkyBlockProfilesBankingTrasnsaction', () => {
  const data = new SkyBlockProfilesBankingTrasnsaction({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockProfilesBankingTrasnsaction);
  expectTypeOf(data).toEqualTypeOf<SkyBlockProfilesBankingTrasnsaction>();
  expect(data.amount).toBeDefined();
  expectTypeOf(data.amount).toEqualTypeOf<number>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.action).toBeDefined();
  expectTypeOf(data.action).toEqualTypeOf<BankingTrasnsactionAction | 'UNKNOWN'>();
  expect(data.user).toBeDefined();
  expectTypeOf(data.user).toEqualTypeOf<string | 'Bank Interest' | 'UNKNOWN'>();
});
