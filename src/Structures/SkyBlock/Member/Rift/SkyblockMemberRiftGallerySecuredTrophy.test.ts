import SkyblockMemberRiftGallerySecuredTrophy from './SkyblockMemberRiftGallerySecuredTrophy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftGalleryTrophy } from '../../../../Types/Skyblock.js';

test('SkyblockMemberRiftGallerySecuredTrophy', () => {
  const data = new SkyblockMemberRiftGallerySecuredTrophy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftGallerySecuredTrophy);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftGallerySecuredTrophy>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<RiftGalleryTrophy | 'UNKNOWN'>();
  expect(data.timestamp).toBeDefined();
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.timestampAt).toBeDefined();
  expectTypeOf(data.timestampAt).toEqualTypeOf<Date>();
  expect(data.visits).toBeDefined();
  expectTypeOf(data.visits).toEqualTypeOf<number>();
});
