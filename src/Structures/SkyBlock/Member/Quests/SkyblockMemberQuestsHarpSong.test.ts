import SkyblockMemberQuestsHarpSong from './SkyblockMemberQuestsHarpSong.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { HarpSong } from '../../../../Types/Skyblock.js';

test('SkyblockMemberQuestsHarpSong', () => {
  const data = new SkyblockMemberQuestsHarpSong({ stats: 'meow' }, 'hymn_joy');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberQuestsHarpSong);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.song).toBeDefined();
  expectTypeOf(data.song).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
  expect(data.completions).toBeDefined();
  expectTypeOf(data.completions).toEqualTypeOf<number>();
  expect(data.bestCompletions).toBeDefined();
  expectTypeOf(data.bestCompletions).toEqualTypeOf<number>();
  expect(data.perfectCompletions).toBeDefined();
  expectTypeOf(data.perfectCompletions).toEqualTypeOf<number>();
});
