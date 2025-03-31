import SkyblockMemberQuestsHarp from './SkyblockMemberQuestsHarp.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberQuestsHarpSong from './SkyblockMemberQuestsHarpSong.js';
import type { HarpSong } from '../../../../Types/Skyblock.js';

test('SkyblockMemberQuestsHarp', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberQuestsHarp();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberQuestsHarp);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberQuestsHarp>();
  expect(data.selectedSong).toBeDefined();
  expectTypeOf(data.selectedSong).toEqualTypeOf<HarpSong | 'UNKNOWN'>();
  expect(data.selectedSongTimestamp).toBeDefined();
  expectTypeOf(data.selectedSongTimestamp).toEqualTypeOf<number>();
  expect(data.selectedSongDate).toBeDefined();
  expectTypeOf(data.selectedSongDate).toEqualTypeOf<Date>();
  expect(data.claimedTalisman).toBeDefined();
  expectTypeOf(data.claimedTalisman).toEqualTypeOf<boolean>();
  expect(data.hymnJoy).toBeDefined();
  expectTypeOf(data.hymnJoy).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.frereJacques).toBeDefined();
  expectTypeOf(data.frereJacques).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.amazingGrace).toBeDefined();
  expectTypeOf(data.amazingGrace).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.brahms).toBeDefined();
  expectTypeOf(data.brahms).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.happyBirthday).toBeDefined();
  expectTypeOf(data.happyBirthday).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.greensleeves).toBeDefined();
  expectTypeOf(data.greensleeves).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.jeopardy).toBeDefined();
  expectTypeOf(data.jeopardy).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.minuet).toBeDefined();
  expectTypeOf(data.minuet).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.joyWorld).toBeDefined();
  expectTypeOf(data.joyWorld).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.pureImagination).toBeDefined();
  expectTypeOf(data.pureImagination).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.vieEnRose).toBeDefined();
  expectTypeOf(data.vieEnRose).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.fireAndFlames).toBeDefined();
  expectTypeOf(data.fireAndFlames).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
  expect(data.pachelbel).toBeDefined();
  expectTypeOf(data.pachelbel).toEqualTypeOf<SkyblockMemberQuestsHarpSong>();
});
