import SkyblockMemberSlayers from './SkyblockMemberSlayers.js';
import SkyblockMemberSlayersQuest from './SkyblockMemberSlayersQuest.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberSlayer from './SkyblockMemberSlayer.js';

test('SkyblockMemberSlayers', () => {
  const data = new SkyblockMemberSlayers({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberSlayers);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberSlayers>();
  expect(data.activeSlayer).toBeDefined();
  expectTypeOf(data.activeSlayer).toEqualTypeOf<SkyblockMemberSlayersQuest | null>();
  expect(data.zombie).toBeDefined();
  expectTypeOf(data.zombie).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.spider).toBeDefined();
  expectTypeOf(data.spider).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.wolf).toBeDefined();
  expectTypeOf(data.wolf).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.enderman).toBeDefined();
  expectTypeOf(data.enderman).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.blaze).toBeDefined();
  expectTypeOf(data.blaze).toEqualTypeOf<SkyblockMemberSlayer>();
  expect(data.vampire).toBeDefined();
  expectTypeOf(data.vampire).toEqualTypeOf<SkyblockMemberSlayer>();
});
