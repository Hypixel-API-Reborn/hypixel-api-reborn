import SkyBlockMemberRiftAccess from './SkyBlockMemberRiftAccess.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftAccess', () => {
  const data = new SkyBlockMemberRiftAccess({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftAccess);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftAccess>();
  expect(data.lastFree).toBeDefined();
  expect(data.lastFree).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lastFree).toEqualTypeOf<number>();
  expect(data.lastFreeAt).toBeDefined();
  expect(data.lastFreeAt).toBeInstanceOf(Date);
  expectTypeOf(data.lastFreeAt).toEqualTypeOf<Date>();
  expect(data.consumedPrism).toBeDefined();
  expectTypeOf(data.consumedPrism).toEqualTypeOf<boolean>();
  expect(data.chargeTrackTimestamp).toBeDefined();
  expect(data.chargeTrackTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chargeTrackTimestamp).toEqualTypeOf<number>();
  expect(data.chargeTrackTimestampAt).toBeDefined();
  expect(data.chargeTrackTimestampAt).toBeInstanceOf(Date);
  expectTypeOf(data.chargeTrackTimestampAt).toEqualTypeOf<Date>();
});
