import SkyBlockMemberFairySouls from './SkyBlockMemberFairySouls.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberFairySouls', () => {
  const data = new SkyBlockMemberFairySouls({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberFairySouls);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberFairySouls>();
  expect(data.exchanges).toBeDefined();
  expect(data.exchanges).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.exchanges).toEqualTypeOf<number>();
  expect(data.collected).toBeDefined();
  expect(data.collected).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.collected).toEqualTypeOf<number>();
  expect(data.unspent).toBeDefined();
  expect(data.unspent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.unspent).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.collected);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
