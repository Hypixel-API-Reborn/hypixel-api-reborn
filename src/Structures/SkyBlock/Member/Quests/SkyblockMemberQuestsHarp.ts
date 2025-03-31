import SkyblockMemberQuestsHarpSong from './SkyblockMemberQuestsHarpSong.js';
import type { HarpSong } from '../../../../Types/Skyblock.js';

class SkyblockMemberQuestsHarp {
  selectedSong: HarpSong | 'UNKNOWN';
  selectedSongTimestamp: number;
  selectedSongDate: Date;
  claimedTalisman: boolean;
  hymnJoy: SkyblockMemberQuestsHarpSong;
  frereJacques: SkyblockMemberQuestsHarpSong;
  amazingGrace: SkyblockMemberQuestsHarpSong;
  brahms: SkyblockMemberQuestsHarpSong;
  happyBirthday: SkyblockMemberQuestsHarpSong;
  greensleeves: SkyblockMemberQuestsHarpSong;
  jeopardy: SkyblockMemberQuestsHarpSong;
  minuet: SkyblockMemberQuestsHarpSong;
  joyWorld: SkyblockMemberQuestsHarpSong;
  pureImagination: SkyblockMemberQuestsHarpSong;
  vieEnRose: SkyblockMemberQuestsHarpSong;
  fireAndFlames: SkyblockMemberQuestsHarpSong;
  pachelbel: SkyblockMemberQuestsHarpSong;
  constructor(data: Record<string, any>) {
    this.selectedSong = data?.selected_song || 'UNKNOWN';
    this.selectedSongTimestamp = data?.selected_song_epoch || 0;
    this.selectedSongDate = new Date(this.selectedSongTimestamp);
    this.claimedTalisman = data?.claimed_talisman || false;
    this.hymnJoy = new SkyblockMemberQuestsHarpSong(data || {}, 'hymn_joy');
    this.frereJacques = new SkyblockMemberQuestsHarpSong(data || {}, 'frere_jacques');
    this.amazingGrace = new SkyblockMemberQuestsHarpSong(data || {}, 'amazing_grace');
    this.brahms = new SkyblockMemberQuestsHarpSong(data || {}, 'brahms');
    this.happyBirthday = new SkyblockMemberQuestsHarpSong(data || {}, 'happy_birthday');
    this.greensleeves = new SkyblockMemberQuestsHarpSong(data || {}, 'greensleeves');
    this.jeopardy = new SkyblockMemberQuestsHarpSong(data || {}, 'jeopardy');
    this.minuet = new SkyblockMemberQuestsHarpSong(data || {}, 'minuet');
    this.joyWorld = new SkyblockMemberQuestsHarpSong(data || {}, 'joy_world');
    this.pureImagination = new SkyblockMemberQuestsHarpSong(data || {}, 'pure_imagination');
    this.vieEnRose = new SkyblockMemberQuestsHarpSong(data || {}, 'vie_en_rose');
    this.fireAndFlames = new SkyblockMemberQuestsHarpSong(data || {}, 'fire_and_flames');
    this.pachelbel = new SkyblockMemberQuestsHarpSong(data || {}, 'pachelbel');
  }

  toString(): HarpSong | 'UNKNOWN' {
    return this.selectedSong;
  }
}

export default SkyblockMemberQuestsHarp;
