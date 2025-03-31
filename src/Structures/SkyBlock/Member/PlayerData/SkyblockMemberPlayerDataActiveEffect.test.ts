import SkyblockMemberPlayerDataActiveEffect from './SkyblockMemberPlayerDataActiveEffect.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { SkyblockPotionEffect } from '../../../../Types/Skyblock.js';

test('SkyblockMemberPlayerDataActiveEffect', () => {
  const data = new SkyblockMemberPlayerDataActiveEffect({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerDataActiveEffect);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerDataActiveEffect>();
  expect(data.effect).toBeDefined();
  expectTypeOf(data.effect).toEqualTypeOf<SkyblockPotionEffect | 'UNKNOWN'>();
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
  expectTypeOf(data.toString).toEqualTypeOf<() => SkyblockPotionEffect | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.effect);
  expectTypeOf(data.toString()).toEqualTypeOf<SkyblockPotionEffect | 'UNKNOWN'>();
});
