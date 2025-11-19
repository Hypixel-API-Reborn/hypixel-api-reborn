import SkyBlockMemberPlayerDataActiveEffect from './SkyBlockMemberPlayerDataActiveEffect.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerDataActiveEffect', () => {
  const data = new SkyBlockMemberPlayerDataActiveEffect({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerDataActiveEffect);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerDataActiveEffect>();
  expect(data.expireAt).toBeDefined();
  expect(data.expireAt).toBeInstanceOf(Date);
  expectTypeOf(data.expireAt).toEqualTypeOf<Date>();
  expect(data.expireTimestamp).toBeDefined();
  expect(data.expireTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.expireTimestamp).toEqualTypeOf<number>();
});
