import SkyblockMemberCrimsonIsleDojo from './SkyblockMemberCrimsonIsleDojo.js';
import SkyblockMemberCrimsonIsleDojoMinigame from './SkyblockMemberCrimsonIsleDojoMinigame.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleBelt } from '../../../../Types/Skyblock.js';

test('SkyblockMemberCrimsonIsleDojo', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberCrimsonIsleDojo();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.force).toBeDefined();
  expectTypeOf(data.force).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.stamina).toBeDefined();
  expectTypeOf(data.stamina).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.mastery).toBeDefined();
  expectTypeOf(data.mastery).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.discipline).toBeDefined();
  expectTypeOf(data.discipline).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.swiftness).toBeDefined();
  expectTypeOf(data.swiftness).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.tenacity).toBeDefined();
  expectTypeOf(data.tenacity).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.control).toBeDefined();
  expectTypeOf(data.control).toEqualTypeOf<SkyblockMemberCrimsonIsleDojoMinigame>();
  expect(data.belt).toBeDefined();
  expectTypeOf(data.belt).toEqualTypeOf<CrimsonIsleBelt>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleBelt>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.belt);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleBelt>();
});

/* eslint-disable camelcase */
test('SkyblockMemberCrimsonIsleDojo getBelt (Black)', () => {
  const data = new SkyblockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 1000,
    dojo_points_fireball: 1000,
    dojo_points_lock_head: 1000
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Black');
});

test('SkyblockMemberCrimsonIsleDojo getBelt (Brown)', () => {
  const data = new SkyblockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 1000,
    dojo_points_fireball: 1000,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Brown');
});

test('SkyblockMemberCrimsonIsleDojo getBelt (Blue)', () => {
  const data = new SkyblockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Blue');
});

test('SkyblockMemberCrimsonIsleDojo getBelt (Green)', () => {
  const data = new SkyblockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 0,
    dojo_points_sword_swap: 0,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Green');
});

test('SkyblockMemberCrimsonIsleDojo getBelt (Yellow)', () => {
  const data = new SkyblockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 0,
    dojo_points_archer: 0,
    dojo_points_sword_swap: 0,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Yellow');
});
