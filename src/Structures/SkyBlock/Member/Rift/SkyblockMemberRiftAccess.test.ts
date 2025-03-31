import SkyblockMemberRiftAccess from './SkyblockMemberRiftAccess.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftAccess', () => {
  const data = new SkyblockMemberRiftAccess({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftAccess);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftAccess>();
  expect(data.lastFree).toBeDefined();
  expectTypeOf(data.lastFree).toEqualTypeOf<number>();
  expect(data.lastFreeAt).toBeDefined();
  expectTypeOf(data.lastFreeAt).toEqualTypeOf<Date>();
  expect(data.consumedPrism).toBeDefined();
  expectTypeOf(data.consumedPrism).toEqualTypeOf<boolean>();
  expect(data.chargeTrackTimestamp).toBeDefined();
  expectTypeOf(data.chargeTrackTimestamp).toEqualTypeOf<number>();
  expect(data.chargeTrackTimestampAt).toBeDefined();
  expectTypeOf(data.chargeTrackTimestampAt).toEqualTypeOf<Date>();
});
