import SkyblockMemberRiftWestVillageMirrorverse from './SkyblockMemberRiftWestVillageMirrorverse.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { MirrorverseChestItem, MirrorverseRoom } from '../../../../../Types/Skyblock.js';

test('SkyblockMemberRiftWestVillageMirrorverse', () => {
  const data = new SkyblockMemberRiftWestVillageMirrorverse({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftWestVillageMirrorverse);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftWestVillageMirrorverse>();
  expect(data.visitedRooms).toBeDefined();
  expectTypeOf(data.visitedRooms).toEqualTypeOf<MirrorverseRoom[]>();
  expect(data.upsideDownHard).toBeDefined();
  expectTypeOf(data.upsideDownHard).toEqualTypeOf<boolean>();
  expect(data.claimedChestItems).toBeDefined();
  expectTypeOf(data.claimedChestItems).toEqualTypeOf<MirrorverseChestItem[]>();
  expect(data.claimedReward).toBeDefined();
  expectTypeOf(data.claimedReward).toEqualTypeOf<boolean>();
});
