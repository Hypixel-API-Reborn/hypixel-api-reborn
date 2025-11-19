import BuildBattle from './BuildBattle.js';
import BuildBattleLastWin from './BuildBattleLastWin.js';
import BuildBattleVotes from './BuildBattleVotes.js';
import Emblem from '../Shared/Emblem/Emblem.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import { expect, expectTypeOf, test } from 'vitest';
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

test('BuildBattle', () => {
  const data = new BuildBattle({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(BuildBattle);
  expectTypeOf(data).toEqualTypeOf<BuildBattle>();
  expect(data.activeIsland).toBeDefined();
  expectTypeOf(data.activeIsland).toEqualTypeOf<BuildBattleIsland | 'island_none'>();
  expect(data.activeMovementTrail).toBeDefined();
  expectTypeOf(data.activeMovementTrail).toEqualTypeOf<BuildBattleMovementTrail | 'movement_trail_none'>();
  expect(data.correctGuesses).toBeDefined();
  expect(data.correctGuesses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.correctGuesses).toEqualTypeOf<number>();
  expect(data.emblem).toBeDefined();
  expectTypeOf(data.emblem).toEqualTypeOf<Emblem<BuildBattleEmblemIcon>>();
  expect(data.playedGames).toBeDefined();
  expect(data.playedGames).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.playedGames).toEqualTypeOf<number>();
  expect(data.lastPurchasedSong).toBeDefined();
  expectTypeOf(data.lastPurchasedSong).toEqualTypeOf<BuildBattleSong | 'UNKNOWN'>();
  expect(data.lastWon).toBeDefined();
  expect(data.lastWon).toBeInstanceOf(BuildBattleLastWin);
  expectTypeOf(data.lastWon).toEqualTypeOf<BuildBattleLastWin>();
  expect(data.leaderboardSettings).toBeDefined();
  expectTypeOf(data.leaderboardSettings).toEqualTypeOf<LeaderboardSettings<BuildBattleLeaderboardSettingsMode>>();
  expect(data.loadout).toBeDefined();
  expectTypeOf(data.loadout).toEqualTypeOf<string[]>();
  expect(data.monthlyTokensA).toBeDefined();
  expect(data.monthlyTokensA).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.monthlyTokensA).toEqualTypeOf<number>();
  expect(data.monthlyTokensB).toBeDefined();
  expect(data.monthlyTokensB).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.monthlyTokensB).toEqualTypeOf<number>();
  expect(data.monthlyTokens).toBeDefined();
  expect(data.monthlyTokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.monthlyTokens).toEqualTypeOf<number>();
  expect(data.music).toBeDefined();
  expectTypeOf(data.music).toEqualTypeOf<boolean>();
  expect(data.selectedHat).toBeDefined();
  expectTypeOf(data.selectedHat).toEqualTypeOf<BuildBattleHat | 'hats_none'>();
  expect(data.suit).toBeDefined();
  expectTypeOf(data.suit).toEqualTypeOf<BuildBattleSuit | 'suit_none'>();
  expect(data.victoryDance).toBeDefined();
  expectTypeOf(data.victoryDance).toEqualTypeOf<BuildBattleVictoryDance | 'victory_dance_none'>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<BuildBattlePackageItem[]>();
  expect(data.score).toBeDefined();
  expect(data.score).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.score).toEqualTypeOf<number>();
  expect(data.title).toBeDefined();
  expectTypeOf(data.title).toEqualTypeOf<BuildBattleTitle>();
  expect(data.selectedBackdrop).toBeDefined();
  expectTypeOf(data.selectedBackdrop).toEqualTypeOf<BuildBattleBackdrop | 'backdrops_none'>();
  expect(data.shopSort).toBeDefined();
  expectTypeOf(data.shopSort).toEqualTypeOf<ShopSort | 'UNKNOWN'>();
  expect(data.shopSortEnableOwnedFirst).toBeDefined();
  expectTypeOf(data.shopSortEnableOwnedFirst).toEqualTypeOf<boolean>();
  expect(data.soloMostPoints).toBeDefined();
  expect(data.soloMostPoints).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloMostPoints).toEqualTypeOf<number>();
  expect(data.superVotes).toBeDefined();
  expect(data.superVotes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.superVotes).toEqualTypeOf<number>();
  expect(data.teamsMostPoints).toBeDefined();
  expect(data.teamsMostPoints).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.teamsMostPoints).toEqualTypeOf<number>();
  expect(data.tokens).toBeDefined();
  expect(data.tokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokens).toEqualTypeOf<number>();
  expect(data.totalVotes).toBeDefined();
  expect(data.totalVotes).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.totalVotes).toEqualTypeOf<number>();
  expect(data.weeklyTokensA).toBeDefined();
  expect(data.weeklyTokensA).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.weeklyTokensA).toEqualTypeOf<number>();
  expect(data.weeklyTokensB).toBeDefined();
  expect(data.weeklyTokensB).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.weeklyTokensB).toEqualTypeOf<number>();
  expect(data.votes).toBeDefined();
  expect(data.votes).toBeInstanceOf(BuildBattleVotes);
  expectTypeOf(data.votes).toEqualTypeOf<BuildBattleVotes>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.winsGuessTheBuild).toBeDefined();
  expect(data.winsGuessTheBuild).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsGuessTheBuild).toEqualTypeOf<number>();
  expect(data.winsHalloween).toBeDefined();
  expect(data.winsHalloween).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsHalloween).toEqualTypeOf<number>();
  expect(data.winsSoloNormal).toBeDefined();
  expect(data.winsSoloNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsSoloNormal).toEqualTypeOf<number>();
  expect(data.winsSoloPro).toBeDefined();
  expect(data.winsSoloPro).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsSoloPro).toEqualTypeOf<number>();
  expect(data.winsSpeedBuilders).toBeDefined();
  expect(data.winsSpeedBuilders).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsSpeedBuilders).toEqualTypeOf<number>();
  expect(data.winsTeamsNormal).toBeDefined();
  expect(data.winsTeamsNormal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.winsTeamsNormal).toEqualTypeOf<number>();
});
