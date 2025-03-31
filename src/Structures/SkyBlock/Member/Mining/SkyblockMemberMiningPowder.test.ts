import SkyblockMemberMiningPowder from './SkyblockMemberMiningPowder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberMiningPowder', () => {
  const data = new SkyblockMemberMiningPowder({ stats: 'meow' }, 'mithril');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberMiningPowder);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberMiningPowder>();
  expect(data.spent).toBeDefined();
  expectTypeOf(data.spent).toEqualTypeOf<number>();
  expect(data.powder).toBeDefined();
  expectTypeOf(data.powder).toEqualTypeOf<number>();
  expect(data.total).toBeDefined();
  expectTypeOf(data.total).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.total);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
