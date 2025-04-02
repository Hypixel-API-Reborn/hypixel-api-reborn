import SkyBlockMemberRiftWestVillageMirrorverse from './SkyBlockMemberRiftWestVillageMirrorverse.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { MirrorverseChestItem, MirrorverseRoom } from '../../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftWestVillageMirrorverse', () => {
  const data = new SkyBlockMemberRiftWestVillageMirrorverse({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillageMirrorverse);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillageMirrorverse>();
  expect(data.visitedRooms).toBeDefined();
  expectTypeOf(data.visitedRooms).toEqualTypeOf<MirrorverseRoom[]>();
  expect(data.upsideDownHard).toBeDefined();
  expectTypeOf(data.upsideDownHard).toEqualTypeOf<boolean>();
  expect(data.claimedChestItems).toBeDefined();
  expectTypeOf(data.claimedChestItems).toEqualTypeOf<MirrorverseChestItem[]>();
  expect(data.claimedReward).toBeDefined();
  expectTypeOf(data.claimedReward).toEqualTypeOf<boolean>();
});
