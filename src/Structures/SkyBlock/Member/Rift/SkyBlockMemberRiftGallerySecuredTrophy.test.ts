import SkyBlockMemberRiftGallerySecuredTrophy from './SkyBlockMemberRiftGallerySecuredTrophy.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { RiftGalleryTrophy } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberRiftGallerySecuredTrophy', () => {
  const data = new SkyBlockMemberRiftGallerySecuredTrophy({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftGallerySecuredTrophy);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftGallerySecuredTrophy>();
  expect(data.type).toBeDefined();
  expectTypeOf(data.type).toEqualTypeOf<RiftGalleryTrophy | 'UNKNOWN'>();
  expect(data.timestamp).toBeDefined();
  expect(data.timestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timestamp).toEqualTypeOf<number>();
  expect(data.timestampAt).toBeDefined();
  expect(data.timestampAt).toBeInstanceOf(Date);
  expectTypeOf(data.timestampAt).toEqualTypeOf<Date>();
  expect(data.visits).toBeDefined();
  expect(data.visits).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.visits).toEqualTypeOf<number>();
});
