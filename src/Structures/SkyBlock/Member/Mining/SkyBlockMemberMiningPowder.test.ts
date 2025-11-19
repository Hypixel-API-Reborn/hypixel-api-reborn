import SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningPowder', () => {
  const data = new SkyBlockMemberMiningPowder({ stats: 'meow' }, 'gemstone');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningPowder);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningPowder>();
  expect(data.spent).toBeDefined();
  expect(data.spent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.spent).toEqualTypeOf<number>();
  expect(data.powder).toBeDefined();
  expect(data.powder).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.powder).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expect(data.total).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
