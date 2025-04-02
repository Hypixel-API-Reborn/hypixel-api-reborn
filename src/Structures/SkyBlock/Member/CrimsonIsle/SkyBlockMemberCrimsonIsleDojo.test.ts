import SkyBlockMemberCrimsonIsleDojo from './SkyBlockMemberCrimsonIsleDojo.js';
import SkyBlockMemberCrimsonIsleDojoMinigame from './SkyBlockMemberCrimsonIsleDojoMinigame.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleBelt } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberCrimsonIsleDojo', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberCrimsonIsleDojo();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.force).toBeDefined();
  expectTypeOf(data.force).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.stamina).toBeDefined();
  expectTypeOf(data.stamina).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.mastery).toBeDefined();
  expectTypeOf(data.mastery).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.discipline).toBeDefined();
  expectTypeOf(data.discipline).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.swiftness).toBeDefined();
  expectTypeOf(data.swiftness).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.tenacity).toBeDefined();
  expectTypeOf(data.tenacity).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.control).toBeDefined();
  expectTypeOf(data.control).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.belt).toBeDefined();
  expectTypeOf(data.belt).toEqualTypeOf<CrimsonIsleBelt>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleBelt>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.belt);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleBelt>();
});

/* eslint-disable camelcase */
test('SkyBlockMemberCrimsonIsleDojo getBelt (Black)', () => {
  const data = new SkyBlockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 1000,
    dojo_points_fireball: 1000,
    dojo_points_lock_head: 1000
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Black');
});

test('SkyBlockMemberCrimsonIsleDojo getBelt (Brown)', () => {
  const data = new SkyBlockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 1000,
    dojo_points_fireball: 1000,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Brown');
});

test('SkyBlockMemberCrimsonIsleDojo getBelt (Blue)', () => {
  const data = new SkyBlockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 1000,
    dojo_points_sword_swap: 1000,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Blue');
});

test('SkyBlockMemberCrimsonIsleDojo getBelt (Green)', () => {
  const data = new SkyBlockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 1000,
    dojo_points_archer: 0,
    dojo_points_sword_swap: 0,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Green');
});

test('SkyBlockMemberCrimsonIsleDojo getBelt (Yellow)', () => {
  const data = new SkyBlockMemberCrimsonIsleDojo({
    dojo_points_mob_kb: 1000,
    dojo_points_wall_jump: 0,
    dojo_points_archer: 0,
    dojo_points_sword_swap: 0,
    dojo_points_snake: 0,
    dojo_points_fireball: 0,
    dojo_points_lock_head: 0
  });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojo);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojo>();
  expect(data.belt).toBeDefined();
  expect(data.belt).toBe('Yellow');
});
