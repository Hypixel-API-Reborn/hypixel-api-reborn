import SkyBlockMemberDungeonsFloor from './SkyBlockMemberDungeonsFloor.js';
import SkyBlockMemberDungeonsFloorRun from './SkyBlockMemberDungeonsFloorRun.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberDungeonsFloor', () => {
  const data = new SkyBlockMemberDungeonsFloor({ stats: 'meow' }, '0');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberDungeonsFloor);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberDungeonsFloor>();
  expect(data.timesPlayed).toBeDefined();
  expectTypeOf(data.timesPlayed).toEqualTypeOf<number>();
  expect(data.bestRuns).toBeDefined();
  expectTypeOf(data.bestRuns).toEqualTypeOf<SkyBlockMemberDungeonsFloorRun[]>();
  expect(data.bestScore).toBeDefined();
  expectTypeOf(data.bestScore).toEqualTypeOf<number>();
  expect(data.mobsKilled).toBeDefined();
  expectTypeOf(data.mobsKilled).toEqualTypeOf<number>();
  expect(data.mostMobsKilled).toBeDefined();
  expectTypeOf(data.mostMobsKilled).toEqualTypeOf<number>();
  expect(data.mostDamageBerserk).toBeDefined();
  expectTypeOf(data.mostDamageBerserk).toEqualTypeOf<number>();
  expect(data.mostDamageMage).toBeDefined();
  expectTypeOf(data.mostDamageMage).toEqualTypeOf<number>();
  expect(data.mostDamageHealer).toBeDefined();
  expectTypeOf(data.mostDamageHealer).toEqualTypeOf<number>();
  expect(data.mostDamageArcher).toBeDefined();
  expectTypeOf(data.mostDamageArcher).toEqualTypeOf<number>();
  expect(data.mostDamageTank).toBeDefined();
  expectTypeOf(data.mostDamageTank).toEqualTypeOf<number>();
  expect(data.mostHealing).toBeDefined();
  expectTypeOf(data.mostHealing).toEqualTypeOf<number>();
  expect(data.watcherKills).toBeDefined();
  expectTypeOf(data.watcherKills).toEqualTypeOf<number>();
  expect(data.fastestTimeS).toBeDefined();
  expectTypeOf(data.fastestTimeS).toEqualTypeOf<number>();
  expect(data.fastestTimeSPlus).toBeDefined();
  expectTypeOf(data.fastestTimeSPlus).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => number>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.timesPlayed);
  expectTypeOf(data.toString()).toEqualTypeOf<number>();
});
