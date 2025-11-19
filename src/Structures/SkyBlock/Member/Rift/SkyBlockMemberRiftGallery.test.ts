import SkyBlockMemberRiftGallery from './SkyBlockMemberRiftGallery.js';
import SkyBlockMemberRiftGallerySecuredTrophy from './SkyBlockMemberRiftGallerySecuredTrophy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftGalleryTrophy } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftGallery', () => {
  const data = new SkyBlockMemberRiftGallery({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftGallery);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftGallery>();
  expect(data.eliseStep).toBeDefined();
  expect(data.eliseStep).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.eliseStep).toEqualTypeOf<number>();
  expect(data.securedTrophies).toBeDefined();
  expectTypeOf(data.securedTrophies).toEqualTypeOf<SkyBlockMemberRiftGallerySecuredTrophy[]>();
  expect(data.sentTrophyDialogues).toBeDefined();
  expectTypeOf(data.sentTrophyDialogues).toEqualTypeOf<RiftGalleryTrophy[]>();
});
