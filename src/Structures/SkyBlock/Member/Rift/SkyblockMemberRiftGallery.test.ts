import SkyblockMemberRiftGallery from './SkyblockMemberRiftGallery.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberRiftGallerySecuredTrophy from './SkyblockMemberRiftGallerySecuredTrophy.js';
import type { RiftGalleryTrophy } from '../../../../Types/Skyblock.js';

test('SkyblockMemberRiftGallery', () => {
  const data = new SkyblockMemberRiftGallery({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftGallery);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftGallery>();
  expect(data.eliseStep).toBeDefined();
  expectTypeOf(data.eliseStep).toEqualTypeOf<number>();
  expect(data.securedTrophies).toBeDefined();
  expectTypeOf(data.securedTrophies).toEqualTypeOf<SkyblockMemberRiftGallerySecuredTrophy[]>();
  expect(data.sentTrophyDialogues).toBeDefined();
  expectTypeOf(data.sentTrophyDialogues).toEqualTypeOf<RiftGalleryTrophy[]>();
});
