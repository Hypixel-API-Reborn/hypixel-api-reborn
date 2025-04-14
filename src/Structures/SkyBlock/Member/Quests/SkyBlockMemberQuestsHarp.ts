import SkyBlockMemberQuestsHarpSong from './SkyBlockMemberQuestsHarpSong.js';
import type { HarpSong } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberQuestsHarp {
  selectedSong: HarpSong | 'UNKNOWN';
  selectedSongTimestamp: number;
  selectedSongDate: Date;
  claimedTalisman: boolean;
  hymnJoy: SkyBlockMemberQuestsHarpSong;
  frereJacques: SkyBlockMemberQuestsHarpSong;
  amazingGrace: SkyBlockMemberQuestsHarpSong;
  brahms: SkyBlockMemberQuestsHarpSong;
  happyBirthday: SkyBlockMemberQuestsHarpSong;
  greensleeves: SkyBlockMemberQuestsHarpSong;
  jeopardy: SkyBlockMemberQuestsHarpSong;
  minuet: SkyBlockMemberQuestsHarpSong;
  joyWorld: SkyBlockMemberQuestsHarpSong;
  pureImagination: SkyBlockMemberQuestsHarpSong;
  vieEnRose: SkyBlockMemberQuestsHarpSong;
  fireAndFlames: SkyBlockMemberQuestsHarpSong;
  pachelbel: SkyBlockMemberQuestsHarpSong;
  constructor(data: Record<string, any>) {
    this.selectedSong = data?.selected_song || 'UNKNOWN';
    this.selectedSongTimestamp = data?.selected_song_epoch || 0;
    this.selectedSongDate = new Date(this.selectedSongTimestamp);
    this.claimedTalisman = data?.claimed_talisman || false;
    this.hymnJoy = new SkyBlockMemberQuestsHarpSong(data || {}, 'hymn_joy');
    this.frereJacques = new SkyBlockMemberQuestsHarpSong(data || {}, 'frere_jacques');
    this.amazingGrace = new SkyBlockMemberQuestsHarpSong(data || {}, 'amazing_grace');
    this.brahms = new SkyBlockMemberQuestsHarpSong(data || {}, 'brahms');
    this.happyBirthday = new SkyBlockMemberQuestsHarpSong(data || {}, 'happy_birthday');
    this.greensleeves = new SkyBlockMemberQuestsHarpSong(data || {}, 'greensleeves');
    this.jeopardy = new SkyBlockMemberQuestsHarpSong(data || {}, 'jeopardy');
    this.minuet = new SkyBlockMemberQuestsHarpSong(data || {}, 'minuet');
    this.joyWorld = new SkyBlockMemberQuestsHarpSong(data || {}, 'joy_world');
    this.pureImagination = new SkyBlockMemberQuestsHarpSong(data || {}, 'pure_imagination');
    this.vieEnRose = new SkyBlockMemberQuestsHarpSong(data || {}, 'vie_en_rose');
    this.fireAndFlames = new SkyBlockMemberQuestsHarpSong(data || {}, 'fire_and_flames');
    this.pachelbel = new SkyBlockMemberQuestsHarpSong(data || {}, 'pachelbel');
  }

  toString(): HarpSong | 'UNKNOWN' {
    return this.selectedSong;
  }
}

export default SkyBlockMemberQuestsHarp;
