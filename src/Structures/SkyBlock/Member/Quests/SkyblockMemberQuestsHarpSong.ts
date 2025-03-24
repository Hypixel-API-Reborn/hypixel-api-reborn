import type { HarpSong } from '../../../../Types/Skyblock.js';

class SkyblockMemberQuestsHarpSong {
  song: HarpSong;
  completions: number;
  bestCompletions: number;
  perfectCompletions: number;
  constructor(data: Record<string, any>, song: HarpSong) {
    this.song = song;
    this.completions = data?.[`song_${song}_completions`] || 0;
    this.bestCompletions = data?.[`song_${song}_best_completions`] || 0;
    this.perfectCompletions = data?.[`song_${song}_perfect_completions`] || 0;
  }

  toString(): HarpSong {
    return this.song;
  }
}

export default SkyblockMemberQuestsHarpSong;
