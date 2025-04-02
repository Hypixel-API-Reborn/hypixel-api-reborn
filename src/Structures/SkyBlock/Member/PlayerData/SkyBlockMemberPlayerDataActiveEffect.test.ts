import SkyBlockMemberPlayerDataActiveEffect from './SkyBlockMemberPlayerDataActiveEffect.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyBlockPotionEffect } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberPlayerDataActiveEffect', () => {
  const data = new SkyBlockMemberPlayerDataActiveEffect({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerDataActiveEffect);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerDataActiveEffect>();
  expect(data.effect).toBeDefined();
  expectTypeOf(data.effect).toEqualTypeOf<SkyBlockPotionEffect | 'UNKNOWN'>();
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.modifiers).toBeDefined();
  expectTypeOf(data.modifiers).toEqualTypeOf<{ key: string; amp: number }[]>();
  expect(data.ticksRemaining).toBeDefined();
  expectTypeOf(data.ticksRemaining).toEqualTypeOf<number>();
  expect(data.expireAt).toBeDefined();
  expectTypeOf(data.expireAt).toEqualTypeOf<Date>();
  expect(data.expireTimestamp).toBeDefined();
  expectTypeOf(data.expireTimestamp).toEqualTypeOf<number>();
  expect(data.infinite).toBeDefined();
  expectTypeOf(data.infinite).toEqualTypeOf<boolean>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyBlockPotionEffect | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.effect);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyBlockPotionEffect | 'UNKNOWN'>();
});
