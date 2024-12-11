class FarmHunt {
  wins: number;
  winsAsAnimal: number;
  winsAsHunter: number;
  kills: number;
  killsAsAnimal: number;
  killsAsHunter: number;
  tauntsUsed: number;
  riskyTauntsUsed: number;
  safeTauntsUsed: number;
  dangerousTauntsUsed: number;
  fireworkTauntsUsed: number;
  poop: number;
  constructor(data: Record<string, any>) {
    this.wins = data?.wins_farm_hunt || 0;
    this.winsAsAnimal = data?.animal_wins_farm_hunt || 0;
    this.winsAsHunter = data?.hunter_wins_farm_hunt || 0;
    this.kills = data?.kills_farm_hunt || 0;
    this.killsAsAnimal = data?.animal_kills_farm_hunt || 0;
    this.killsAsHunter = data?.hunter_kills_farm_hunt || 0;
    this.tauntsUsed = data?.taunts_used_farm_hunt || 0;
    this.riskyTauntsUsed = data?.risky_taunts_used_farm_hunt || 0;
    this.safeTauntsUsed = data?.safe_taunts_used_farm_hunt || 0;
    this.dangerousTauntsUsed = data?.dangerous_taunts_used_farm_hunt || 0;
    this.fireworkTauntsUsed = data?.firework_taunts_used_farm_hunt || 0;
    this.poop = (data?.poop_collected_farm_hunt || 0) + (data?.poop_collected || 0);
  }
}

export default FarmHunt;
