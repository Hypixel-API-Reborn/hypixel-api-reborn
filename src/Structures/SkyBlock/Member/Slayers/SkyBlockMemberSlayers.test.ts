import SkyBlockMemberSlayers from './SkyBlockMemberSlayers.js';
import SkyBlockMemberSlayersQuest from './SkyBlockMemberSlayersQuest.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberSlayer from './SkyBlockMemberSlayer.js';

test('SkyBlockMemberSlayers', () => {
  const data = new SkyBlockMemberSlayers({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberSlayers);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberSlayers>();
  expect(data.activeSlayer).toBeDefined();
  expectTypeOf(data.activeSlayer).toEqualTypeOf<SkyBlockMemberSlayersQuest | null>();
  expect(data.zombie).toBeDefined();
  expectTypeOf(data.zombie).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.spider).toBeDefined();
  expectTypeOf(data.spider).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.wolf).toBeDefined();
  expectTypeOf(data.wolf).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.enderman).toBeDefined();
  expectTypeOf(data.enderman).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.blaze).toBeDefined();
  expectTypeOf(data.blaze).toEqualTypeOf<SkyBlockMemberSlayer>();
  expect(data.vampire).toBeDefined();
  expectTypeOf(data.vampire).toEqualTypeOf<SkyBlockMemberSlayer>();
});
