import SkyBlockMemberQuestsHarpSong from './SkyBlockMemberQuestsHarpSong.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { HarpSong } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberQuestsHarpSong', () => {
  const data = new SkyBlockMemberQuestsHarpSong({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuestsHarpSong);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.song).toBeDefined();
  expectTypeOf(data.song).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
  expect(data.completions).toBeDefined();
  expect(data.completions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.completions).toEqualTypeOf<number>();
  expect(data.bestCompletions).toBeDefined();
  expect(data.bestCompletions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bestCompletions).toEqualTypeOf<number>();
  expect(data.perfectCompletions).toBeDefined();
  expect(data.perfectCompletions).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.perfectCompletions).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => HarpSong | 'UNKNOWN'>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.song);
  expectTypeOf(data.toString()).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
});
