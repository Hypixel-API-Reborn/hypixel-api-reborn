import SkyblockMemberMiningHotmForge from './SkyblockMemberMiningHotmForge.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberMiningHotmForgeItem from './SkyblockMemberMiningHotmForgeItem.js';

test('SkyblockMemberMiningHotmForge', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberMiningHotmForge();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberMiningHotmForge);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberMiningHotmForge>();
  expect(data.slot1).toBeDefined();
  expectTypeOf(data.slot1).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot2).toBeDefined();
  expectTypeOf(data.slot2).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot3).toBeDefined();
  expectTypeOf(data.slot3).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot4).toBeDefined();
  expectTypeOf(data.slot4).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot5).toBeDefined();
  expectTypeOf(data.slot5).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot6).toBeDefined();
  expectTypeOf(data.slot6).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
  expect(data.slot7).toBeDefined();
  expectTypeOf(data.slot7).toEqualTypeOf<SkyblockMemberMiningHotmForgeItem | null>();
});
