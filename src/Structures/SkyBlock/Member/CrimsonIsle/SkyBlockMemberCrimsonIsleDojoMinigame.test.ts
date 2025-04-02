import SkyBlockMemberCrimsonIsleDojoMinigame from './SkyBlockMemberCrimsonIsleDojoMinigame.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { CrimsonIsleDojoRank } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberCrimsonIsleDojoMinigame', () => {
  const data = new SkyBlockMemberCrimsonIsleDojoMinigame({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberCrimsonIsleDojoMinigame);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberCrimsonIsleDojoMinigame>();
  expect(data.points).toBeDefined();
  expectTypeOf(data.points).toEqualTypeOf<number>();
  expect(data.time).toBeDefined();
  expectTypeOf(data.time).toEqualTypeOf<number>();
  expect(data.rank).toBeDefined();
  expectTypeOf(data.rank).toEqualTypeOf<CrimsonIsleDojoRank>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => CrimsonIsleDojoRank>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.rank);
  expectTypeOf(data.toString()).toEqualTypeOf<CrimsonIsleDojoRank>();
});
