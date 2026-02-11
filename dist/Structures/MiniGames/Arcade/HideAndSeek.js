class HideAndSeek {
    hiderWins;
    partyPooperHiderWins;
    partyPooperSeekerWins;
    propHuntHiderWins;
    propHuntSeekerWins;
    seekerWins;
    constructor(data) {
        this.hiderWins = data?.hider_wins_hide_and_seek || 0;
        this.partyPooperHiderWins = data?.party_pooper_hider_wins_hide_and_seek || 0;
        this.partyPooperSeekerWins = data?.party_pooper_seeker_wins_hide_and_seek || 0;
        this.propHuntHiderWins = data?.prop_hunt_hider_wins_hide_and_seek || 0;
        this.propHuntSeekerWins = data?.prop_hunt_seeker_wins_hide_and_seek || 0;
        this.seekerWins = data?.seeker_wins_hide_and_seek || 0;
    }
}
export default HideAndSeek;
//# sourceMappingURL=HideAndSeek.js.map