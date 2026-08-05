import Divide from '../../../../Utils/Divide.ts';
import { ParseModeAfter, ParseModeBefore } from '../../../../Utils/ParseMode.js';
import type { DuelsModeId } from '../../../../Types/Player.ts';

class GenericDuelsMode {
  kills: number;
  deaths: number;
  killDeathRatio: number;
  wins: number;
  losses: number;
  winLossRatio: number;
  meleeSwings: number;
  meleeHits: number;
  meleeAccuracy: number;
  roundsPlayed: number;
  damageDealt: number;
  bowShots: number;
  bowHits: number;
  bowAccuracy: number;
  healthRegenerated: number;
  coinsGained: number;
  coins: number;
  blocksPlaced: number;
  blocksBroken: number;
  goldenApplesEaten: number;
  healPotsUsed: number;
  amountHealed: number;
  winstreak: number;
  winstreakBest: number;
  constructor(data: Record<string, any>, mode?: DuelsModeId) {
    const modeAfter = ParseModeAfter(mode) as DuelsModeId;
    mode = ParseModeBefore(mode) as DuelsModeId;
    this.kills = data?.[`${mode}kills`] ?? data?.[`kills${modeAfter}`] ?? 0;
    this.deaths = data?.[`${mode}deaths`] ?? data?.[`deaths${modeAfter}`] ?? 0;
    this.killDeathRatio = Divide(this.kills, this.deaths);
    this.wins = data?.[`${mode}wins`] ?? data?.[`wins${modeAfter}`] ?? 0;
    this.losses = data?.[`${mode}losses`] ?? data?.[`losses${modeAfter}`] ?? 0;
    this.winLossRatio = Divide(this.wins, this.losses);
    this.meleeSwings = data?.[`${mode}melee_swings`] ?? data?.[`melee_swings${modeAfter}`] ?? 0;
    this.meleeHits = data?.[`${mode}melee_hits`] ?? data?.[`melee_hits${modeAfter}`] ?? 0;
    this.meleeAccuracy = Divide(this.meleeHits, this.meleeSwings);
    this.roundsPlayed = data?.[`${mode}rounds_played`] ?? data?.[`rounds_played${modeAfter}`] ?? 0;
    this.damageDealt = data?.[`${mode}damage_dealt`] ?? data?.[`damage_dealt${modeAfter}`] ?? 0;
    this.bowShots = data?.[`${mode}bow_shots`] ?? data?.[`bow_shots${modeAfter}`] ?? 0;
    this.bowHits = data?.[`${mode}bow_hits`] ?? data?.[`bow_hits${modeAfter}`] ?? 0;
    this.bowAccuracy = Divide(this.bowHits, this.bowShots);
    this.healthRegenerated = data?.[`${mode}health_regenerated`] ?? data?.[`health_regenerated${modeAfter}`] ?? 0;
    this.coinsGained = data?.[`${mode}coins_gained`] ?? data?.[`coins_gained${modeAfter}`] ?? 0;
    this.coins = data?.[`${mode}coins`] ?? data?.[`coins${modeAfter}`] ?? 0;
    this.blocksPlaced = data?.[`${mode}blocks_placed`] ?? data?.[`blocks_placed${modeAfter}`] ?? 0;
    this.blocksBroken = data?.[`${mode}blocks_broken`] ?? data?.[`blocks_broken${modeAfter}`] ?? 0;
    this.goldenApplesEaten = data?.[`${mode}golden_apples_eaten`] ?? data?.[`golden_apples_eaten${modeAfter}`] ?? 0;
    this.healPotsUsed = data?.[`${mode}heal_pots_used`] ?? data?.[`heal_pots_used${modeAfter}`] ?? 0;
    this.amountHealed = data?.[`${mode}amount_healed`] ?? data?.[`amount_healed${modeAfter}`] ?? 0;
    this.winstreak = data?.[`duels_winstreak${modeAfter}`] ?? 0;
    this.winstreakBest = data?.[`duels_winstreak_best${modeAfter}`] ?? 0;
  }
}

export default GenericDuelsMode;
