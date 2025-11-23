import BuildBattleLastWin from './BuildBattleLastWin.js';
import BuildBattleVotes from './BuildBattleVotes.js';
import Emblem from '../Shared/Emblem/Emblem.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import { BuildBattleTitleRequirements } from '../../../Utils/Constants.js';
import { monthAB } from '../../../Utils/Oscillation.js';
import type {
  BuildBattleBackdrop,
  BuildBattleEmblemIcon,
  BuildBattleHat,
  BuildBattleIsland,
  BuildBattleLeaderboardSettingsMode,
  BuildBattleMovementTrail,
  BuildBattlePackageItem,
  BuildBattleSong,
  BuildBattleSuit,
  BuildBattleTitle,
  BuildBattleVictoryDance,
  ShopSort
} from '../../../Types/Player.js';

class BuildBattle {
  activeIsland: BuildBattleIsland | 'island_none';
  activeMovementTrail: BuildBattleMovementTrail | 'movement_trail_none';
  correctGuesses: number;
  emblem: Emblem<BuildBattleEmblemIcon>;
  playedGames: number;
  lastPurchasedSong: BuildBattleSong | 'UNKNOWN';
  lastWon: BuildBattleLastWin;
  leaderboardSettings: LeaderboardSettings<BuildBattleLeaderboardSettingsMode>;
  loadout: string[];
  monthlyTokensA: number;
  monthlyTokensB: number;
  monthlyTokens: number;
  music: boolean;
  selectedHat: BuildBattleHat | 'hats_none';
  suit: BuildBattleSuit | 'suit_none';
  victoryDance: BuildBattleVictoryDance | 'victory_dance_none';
  packages: BuildBattlePackageItem[];
  score: number;
  title: BuildBattleTitle;
  selectedBackdrop: BuildBattleBackdrop | 'backdrops_none';
  shopSort: ShopSort | 'UNKNOWN';
  shopSortEnableOwnedFirst: boolean;
  soloMostPoints: number;
  superVotes: number;
  teamsMostPoints: number;
  tokens: number;
  totalVotes: number;
  weeklyTokensA: number;
  weeklyTokensB: number;
  votes: BuildBattleVotes;
  wins: number;
  winsGuessTheBuild: number;
  winsHalloween: number;
  winsSoloNormal: number;
  winsSoloPro: number;
  winsSpeedBuilders: number;
  winsTeamsNormal: number;
  constructor(data: Record<string, any>) {
    this.activeIsland = data?.active_island || 'island_none';
    this.activeMovementTrail = data?.active_movement_trail || 'movement_trail_none';
    this.correctGuesses = data?.correct_guesses || 0;
    this.emblem = new Emblem<BuildBattleEmblemIcon>(data?.emblem || {});
    this.playedGames = data?.games_played || 0;
    this.lastPurchasedSong = data?.last_purchased_song || 'UNKNOWN';
    this.lastWon = new BuildBattleLastWin(data?.last_won || {});
    this.leaderboardSettings = new LeaderboardSettings<BuildBattleLeaderboardSettingsMode>(
      data?.leaderboardSettings || {}
    );
    this.loadout = data?.buildbattle_loadout || [];
    this.monthlyTokensA = data?.monthly_tokens_a || data?.monthly_coins_a || 0;
    this.monthlyTokensB = data?.monthly_tokens_b || data?.monthly_coins_b || 0;
    this.monthlyTokens = data?.[`monthly_tokens_${monthAB()}`] || data?.[`monthly_coins_${monthAB()}`] || 0;
    this.music = data?.music || true;
    this.selectedHat = data?.new_selected_hat || 'hats_none';
    this.suit = data?.new_suit || 'suit_none';
    this.victoryDance = data?.new_victory_dance || 'victory_dance_none';
    this.packages = data?.packages || [];
    this.score = data?.score || 0;
    this.title = BuildBattle.getBuildBattleTitle(this.score);
    this.selectedBackdrop = data?.selected_backdrop || 'backdrops_none';
    this.shopSort = data?.shop_sort || 'UNKNOWN';
    this.shopSortEnableOwnedFirst = data?.shop_sort_enable_owned_first || false;
    this.soloMostPoints = data?.solo_most_points || 0;
    this.superVotes = data?.super_votes || 0;
    this.teamsMostPoints = data?.teams_most_points || 0;
    this.tokens = data?.tokens || data?.coins || 0;
    this.totalVotes = data?.total_votes || 0;
    this.weeklyTokensA = data?.weekly_tokens_a || data?.weekly_coins_a || 0;
    this.weeklyTokensB = data?.weekly_tokens_b || data?.weekly_coins_b || 0;
    this.monthlyTokens = data?.[`weekly_tokens_${monthAB()}`] || data?.[`weekly_coins_${monthAB()}`] || 0;
    this.votes = new BuildBattleVotes(data);
    this.wins = data?.wins || 0;
    this.winsGuessTheBuild = data?.wins_guess_the_build || 0;
    this.winsHalloween = data?.wins_halloween || 0;
    this.winsSoloNormal = data?.wins_solo_normal || 0;
    this.winsSoloPro = data?.wins_solo_pro || 0;
    this.winsSpeedBuilders = data?.wins_speed_builders || 0;
    this.winsTeamsNormal = data?.wins_teams_normal || 0;
  }

  static getBuildBattleTitle(score: number): BuildBattleTitle {
    return (
      (
        BuildBattleTitleRequirements.slice()
          .reverse()
          .find((t) => score >= t.requirement) || BuildBattleTitleRequirements[0]
      )?.title || 'Rookie'
    );
  }
}

export default BuildBattle;
