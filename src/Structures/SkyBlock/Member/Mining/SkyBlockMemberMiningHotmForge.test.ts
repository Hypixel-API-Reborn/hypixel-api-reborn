import SkyBlockMemberMiningHotmForge from './SkyBlockMemberMiningHotmForge.js';
import SkyBlockMemberMiningHotmForgeItem from './SkyBlockMemberMiningHotmForgeItem.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningHotmForge', () => {
  const data = new SkyBlockMemberMiningHotmForge({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningHotmForge);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningHotmForge>();
  expect(data.slot1).toBeDefined();
  expectTypeOf(data.slot1).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot2).toBeDefined();
  expectTypeOf(data.slot2).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot3).toBeDefined();
  expectTypeOf(data.slot3).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot4).toBeDefined();
  expectTypeOf(data.slot4).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot5).toBeDefined();
  expectTypeOf(data.slot5).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot6).toBeDefined();
  expectTypeOf(data.slot6).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
  expect(data.slot7).toBeDefined();
  expectTypeOf(data.slot7).toEqualTypeOf<SkyBlockMemberMiningHotmForgeItem | null>();
});
