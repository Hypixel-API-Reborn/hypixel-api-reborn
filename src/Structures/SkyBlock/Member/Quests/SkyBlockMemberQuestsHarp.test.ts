import SkyBlockMemberQuestsHarp from './SkyBlockMemberQuestsHarp.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberQuestsHarpSong from './SkyBlockMemberQuestsHarpSong.js';
import type { HarpSong } from '../../../../Types/SkyBlock.js';

test('SkyBlockMemberQuestsHarp', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberQuestsHarp();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberQuestsHarp);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberQuestsHarp>();
  expect(data.selectedSong).toBeDefined();
  expectTypeOf(data.selectedSong).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
  expect(data.selectedSongTimestamp).toBeDefined();
  expectTypeOf(data.selectedSongTimestamp).toEqualTypeOf<number>();
  expect(data.selectedSongDate).toBeDefined();
  expectTypeOf(data.selectedSongDate).toEqualTypeOf<Date>();
  expect(data.claimedTalisman).toBeDefined();
  expectTypeOf(data.claimedTalisman).toEqualTypeOf<boolean>();
  expect(data.hymnJoy).toBeDefined();
  expectTypeOf(data.hymnJoy).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.frereJacques).toBeDefined();
  expectTypeOf(data.frereJacques).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.amazingGrace).toBeDefined();
  expectTypeOf(data.amazingGrace).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.brahms).toBeDefined();
  expectTypeOf(data.brahms).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.happyBirthday).toBeDefined();
  expectTypeOf(data.happyBirthday).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.greensleeves).toBeDefined();
  expectTypeOf(data.greensleeves).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.jeopardy).toBeDefined();
  expectTypeOf(data.jeopardy).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.minuet).toBeDefined();
  expectTypeOf(data.minuet).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.joyWorld).toBeDefined();
  expectTypeOf(data.joyWorld).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.pureImagination).toBeDefined();
  expectTypeOf(data.pureImagination).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.vieEnRose).toBeDefined();
  expectTypeOf(data.vieEnRose).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.fireAndFlames).toBeDefined();
  expectTypeOf(data.fireAndFlames).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
  expect(data.pachelbel).toBeDefined();
  expectTypeOf(data.pachelbel).toEqualTypeOf<SkyBlockMemberQuestsHarpSong>();
});
