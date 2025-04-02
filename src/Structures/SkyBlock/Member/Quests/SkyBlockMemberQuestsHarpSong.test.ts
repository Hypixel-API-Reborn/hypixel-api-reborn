import SkyBlockMemberQuestsHarpSong from './SkyBlockMemberQuestsHarpSong.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { HarpSong } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberQuestsHarpSong', () => {
  const data = new SkyBlockMemberQuestsHarpSong({ stats: 'meow' }, 'hymn_joy');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuestsHarpSong);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.song).toBeDefined();
  expectTypeOf(data.song).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
  expect(data.completions).toBeDefined();
  expectTypeOf(data.completions).toEqualTypeOf<number>();
  expect(data.bestCompletions).toBeDefined();
  expectTypeOf(data.bestCompletions).toEqualTypeOf<number>();
  expect(data.perfectCompletions).toBeDefined();
  expectTypeOf(data.perfectCompletions).toEqualTypeOf<number>();
});
