import SkyBlockMemberMiningCrystal from './SkyBlockMemberMiningCrystal.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningCrystal', () => {
  const data = new SkyBlockMemberMiningCrystal({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningCrystal);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningCrystal>();
  expect(data.found).toBeDefined();
  expectTypeOf(data.found).toEqualTypeOf<boolean>();
  expect(data.totalFound).toBeDefined();
  expectTypeOf(data.totalFound).toEqualTypeOf<number>();
  expect(data.totalPlaced).toBeDefined();
  expectTypeOf(data.totalPlaced).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => boolean>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.found);
  expectTypeOf(data.toString()).toEqualTypeOf<boolean>();
});
