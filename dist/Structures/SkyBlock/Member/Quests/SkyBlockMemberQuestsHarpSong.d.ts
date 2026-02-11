import type { HarpSong } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberQuestsHarpSong {
    song: HarpSong | 'UNKNOWN';
    completions: number;
    bestCompletions: number;
    perfectCompletions: number;
    constructor(data: Record<string, any>, song?: HarpSong | 'UNKNOWN');
    toString(): HarpSong | 'UNKNOWN';
}
export default SkyBlockMemberQuestsHarpSong;
//# sourceMappingURL=SkyBlockMemberQuestsHarpSong.d.ts.map