import SkyBlockMemberRiftAccess from './SkyBlockMemberRiftAccess.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftAccess', () => {
  const data = new SkyBlockMemberRiftAccess({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftAccess);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftAccess>();
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
