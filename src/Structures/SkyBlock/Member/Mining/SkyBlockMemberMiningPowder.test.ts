import SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningPowder', () => {
  const data = new SkyBlockMemberMiningPowder({ stats: 'meow' }, 'mithril');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningPowder);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningPowder>();
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
