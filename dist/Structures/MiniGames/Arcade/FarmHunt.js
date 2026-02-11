class FarmHunt {
    animalBowKills;
    animalKills;
    animalWins;
    animalsBowKills;
    bowKills;
    dangerousTauntsUsed;
    fireworkTauntsUsed;
    hunterBowKills;
    hunterKills;
    hunterWins;
    huntersBowKills;
    kills;
    poopCollected;
    riskyTauntsUsed;
    safeTauntsUsed;
    tauntsUsed;
    wins;
    constructor(data) {
        this.animalBowKills = data?.animal_bow_kills_farm_hunt || 0;
        this.animalKills = data?.animal_kills_farm_hunt || 0;
        this.animalWins = data?.animal_wins_farm_hunt || 0;
        this.animalsBowKills = data?.animals_bow_kills_farm_hunt || 0;
        this.bowKills = data?.bow_kills_farm_hunt || 0;
        this.dangerousTauntsUsed = data?.dangerous_taunts_used_farm_hunt || 0;
        this.fireworkTauntsUsed = data?.firework_taunts_used_farm_hunt || 0;
        this.hunterBowKills = data?.hunter_bow_kills_farm_hunt || 0;
        this.hunterKills = data?.hunter_kills_farm_hunt || 0;
        this.hunterWins = data?.hunter_wins_farm_hunt || 0;
        this.huntersBowKills = data?.hunters_bow_kills_farm_hunt || 0;
        this.kills = data?.kills_farm_hunt || 0;
        this.poopCollected = data?.poop_collected_farm_hunt || 0;
        this.riskyTauntsUsed = data?.risky_taunts_used_farm_hunt || 0;
        this.safeTauntsUsed = data?.safe_taunts_used_farm_hunt || 0;
        this.tauntsUsed = data?.taunts_used_farm_hunt || 0;
        this.wins = data?.wins_farm_hunt || 0;
    }
}
export default FarmHunt;
//# sourceMappingURL=FarmHunt.js.map