class SkyBlockMemberQuestsHarpSong {
    song;
    completions;
    bestCompletions;
    perfectCompletions;
    constructor(data, song = 'UNKNOWN') {
        this.song = song;
        this.completions = data?.[`song_${song}_completions`] || 0;
        this.bestCompletions = data?.[`song_${song}_best_completions`] || 0;
        this.perfectCompletions = data?.[`song_${song}_perfect_completions`] || 0;
    }
    toString() {
        return this.song;
    }
}
export default SkyBlockMemberQuestsHarpSong;
//# sourceMappingURL=SkyBlockMemberQuestsHarpSong.js.map