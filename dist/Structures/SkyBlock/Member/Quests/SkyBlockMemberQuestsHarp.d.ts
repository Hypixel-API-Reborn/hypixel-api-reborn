import SkyBlockMemberQuestsHarpSong from './SkyBlockMemberQuestsHarpSong.js';
import type { HarpSong } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberQuestsHarp {
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
    constructor(data: Record<string, any>);
    toString(): HarpSong | 'UNKNOWN';
}
export default SkyBlockMemberQuestsHarp;
//# sourceMappingURL=SkyBlockMemberQuestsHarp.d.ts.map