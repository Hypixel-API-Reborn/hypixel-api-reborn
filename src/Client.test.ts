/* eslint-disable @stylistic/max-len  */
import Achievements from './Structures/Static/Achievements/Achievements.js';
import Booster from './Structures/Boosters/Booster.js';
import CacheHandler from './Private/CacheHandler.js';
import Challenge from './Structures/Static/Challenge.ts';
import Challenges from './Structures/Static/Challenges.js';
import Client from './Client.js';
import Color from './Structures/Color.ts';
import Errors from './Errors.js';
import Game from './Structures/Game.ts';
import GameAchievements from './Structures/Static/Achievements/GameAchievements.ts';
import GameChallenges from './Structures/Static/GameChallenges.ts';
import GameCounts from './Structures/Static/GameCounts/GameCounts.js';
import GameQuests from './Structures/Static/GameQuests.ts';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import GuildMember from './Structures/Guild/GuildMember.ts';
import GuildRank from './Structures/Guild/GuildRank.ts';
import House from './Structures/House.js';
import Leaderboard from './Structures/Leaderboard.js';
import OneTimeAchievement from './Structures/Static/Achievements/OneTimeAchievement.ts';
import Player from './Structures/Player/Player.js';
import PlayerAchievements from './Structures/Player/PlayerAchievements/PlayerAchievements.js';
import PlayerAdventRewards from './Structures/Player/PlayerAdventRewards/PlayerAdventRewards.js';
import PlayerCosmetics from './Structures/Player/PlayerCosmetics/PlayerCosmetics.js';
import PlayerGifting from './Structures/Player/PlayerGifting.js';
import PlayerHousing from './Structures/Player/PlayerHousing/PlayerHousing.js';
import PlayerParkour from './Structures/Player/PlayerParkour.js';
import PlayerQuests from './Structures/Player/PlayerQuests/PlayerQuests.js';
import PlayerRankPurchase from './Structures/Player/PlayerRankPurchase.js';
import PlayerRewards from './Structures/Player/PlayerRewards/PlayerRewards.js';
import PlayerScorpiusBribe from './Structures/Player/PlayerScorpiusBribe.js';
import PlayerSocialMedia from './Structures/Player/PlayerSocialMedia.js';
import PlayerStats from './Structures/Player/PlayerStats.js';
import Quest from './Structures/Static/Quest.ts';
import QuestObjective from './Structures/Static/QuestObjective.ts';
import Quests from './Structures/Static/Quests.js';
import RecentGame from './Structures/RecentGame.js';
import RequestData from './Private/RequestData.js';
import RequestHandler from './Private/RequestHandler.js';
import SkyBlockAuction from './Structures/SkyBlock/Auctions/SkyBlockAuction.ts';
import SkyBlockAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.ts';
import SkyBlockBaseAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.ts';
import SkyBlockBazaar from './Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import SkyBlockBazaarProduct from './Structures/SkyBlock/Bazaar/SkyBlockBazaarProduct.ts';
import SkyBlockBingo from './Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import SkyBlockBingoGoal from './Structures/SkyBlock/Bingo/SkyBlockBingoGoal.ts';
import SkyBlockCollection from './Structures/SkyBlock/Collections/SkyBlockCollection.ts';
import SkyBlockCollections from './Structures/SkyBlock/Collections/SkyBlockCollections.js';
import SkyBlockElection from './Structures/SkyBlock/Election/SkyBlockElection.ts';
import SkyBlockElectionData from './Structures/SkyBlock/Election/SkyBlockElectionData.js';
import SkyBlockFireSale from './Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import SkyBlockGarden from './Structures/SkyBlock/Garden/SkyBlockGarden.ts';
import SkyBlockGardenActiveVisitor from './Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitor.ts';
import SkyBlockGardenComposter from './Structures/SkyBlock/Garden/SkyBlockGardenComposter.ts';
import SkyBlockGardenCropMilestones from './Structures/SkyBlock/Garden/SkyBlockGardenCropMilestones.ts';
import SkyBlockGardenCropsUpgrades from './Structures/SkyBlock/Garden/SkyBlockGardenCropsUpgrades.ts';
import SkyBlockGardenVisitors from './Structures/SkyBlock/Garden/SkyBlockGardenVisitors.ts';
import SkyBlockItem from './Structures/SkyBlock/SkyBlockItem.ts';
import SkyBlockMember from './Structures/SkyBlock/Member/SkyBlockMember.ts';
import SkyBlockMuseum from './Structures/SkyBlock/Museum/SkyBlockMuseum.ts';
import SkyBlockMuseumMember from './Structures/SkyBlock/Museum/SkyBlockMuseumMember.ts';
import SkyBlockNews from './Structures/SkyBlock/News/SkyBlockNews.ts';
import SkyBlockProfile from './Structures/SkyBlock/Profile/SkyBlockProfile.js';
import SkyBlockProfileBanking from './Structures/SkyBlock/Profile/Banking/SkyBlockProfileBanking.ts';
import SkyBlockProfileCommunityUpgrades from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgrades.ts';
import SkyBlockSkill from './Structures/SkyBlock/Skills/SkyBlockSkill.ts';
import SkyBlockSkills from './Structures/SkyBlock/Skills/SkyBlockSkills.ts';
import Status from './Structures/Status.ts';
import TieredAchievement from './Structures/Static/Achievements/TieredAchievement.ts';
import Updater from './Private/Updater.js';
import WatchdogStats from './Structures/WatchdogStats.ts';
import { AchievementTier, ChallengeReward, QuestReward, QuestType } from './Types/Static.ts';
import { BarnPlot, BarnSkin, SkillLevelData, SkyBlockProfileName, SkyBlockProfileType } from './Types/SkyBlock.js';
import { ChatChannel, Language, LevelProgress, PlayerRank } from './Types/Player.ts';
import { ColorCode, ColorHex, ColorString, InGameCode } from './Types/Color.ts';
import { ExpHistory } from './Types/Guild.ts';
import { GameCode, GameID, GameString } from './Types/Game.ts';
import { UUID } from './Types/Global.ts';
import { defaultRequestData } from '../vitest.setup.ts';
import { expect, expectTypeOf, test, vi } from 'vitest';
import type {
  AuctionFetchOption,
  AuctionRequestOptions,
  GuildFetchOption,
  PlayerRequestOptions,
  RequestOptions,
  SkyBlockAuctionResult,
  SkyBlockAuctionsResult,
  SkyBlockRequestOptions,
  WithSelectedProfile
} from './Types/Requests.ts';
import type { ClientOptions } from './Types/Client.js';
/* eslint-enable @stylistic/max-len */

test('Client (No Key)', () => {
  expect(() => new Client('')).toThrowError(Errors.NO_API_KEY);
});

test('Client (No Options)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expect(client).toBeInstanceOf(Client);
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.key).toBe(process.env.HYPIXEL_KEY ?? '');
  expectTypeOf(client.key).toBeString();

  expect(client.options).toBeDefined();
  expectTypeOf(client.options).toEqualTypeOf<ClientOptions>();

  expect(client.options.cache).toBeDefined();
  expect(client.options.cache).toBe(true);
  expect(client.options.cache).toBeTruthy();

  expect(client.options.cacheTime).toBeDefined();
  expectTypeOf(client.options.cacheTime).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheTime).toBe(300);

  expect(client.options.cacheMaxKeys).toBeDefined();
  expectTypeOf(client.options.cacheMaxKeys).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheMaxKeys).toBe(-1);

  expect(client.options.cacheCheckPeriod).toBeDefined();
  expectTypeOf(client.options.cacheCheckPeriod).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheCheckPeriod).toBe(180);

  expect(client.options.silent).toBeDefined();
  expectTypeOf(client.options.silent).toEqualTypeOf<boolean | undefined>();
  expect(client.options.silent).toBe(false);
  expect(client.options.silent).toBeFalsy();

  expect(client.options.checkForUpdates).toBeDefined();
  expect(client.options.checkForUpdates).toBeTruthy();
  expect(client.options.checkForUpdates).toBe(true);

  expect(client.options.checkForUpdatesInterval).toBeDefined();
  expectTypeOf(client.options.checkForUpdatesInterval).toEqualTypeOf<number | undefined>();
  expect(client.options.checkForUpdatesInterval).toBe(60);

  expect(client.requestHandler).toBeDefined();
  expect(client.requestHandler).toBeInstanceOf(RequestHandler);
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.cacheHandler).toBeDefined();
  expect(client.cacheHandler).toBeInstanceOf(CacheHandler);
  expectTypeOf(client.cacheHandler).toEqualTypeOf<CacheHandler>();

  expect(client.updater).toBeDefined();
  expect(client.updater).toBeInstanceOf(Updater);
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  client.destroy();
});

test('Client (Options)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', {
    cache: false,
    cacheTime: 600,
    cacheMaxKeys: 100,
    cacheCheckPeriod: 300,
    silent: true,
    checkForUpdates: false,
    checkForUpdatesInterval: 120
  });
  expect(client).toBeDefined();
  expect(client).toBeInstanceOf(Client);
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.key).toBe(process.env.HYPIXEL_KEY ?? '');
  expectTypeOf(client.key).toBeString();

  expect(client.options).toBeDefined();
  expectTypeOf(client.options).toEqualTypeOf<ClientOptions>();

  expect(client.options.cache).toBeDefined();
  expect(client.options.cache).toBe(false);
  expect(client.options.cache).toBeFalsy();

  expect(client.options.cacheTime).toBeDefined();
  expectTypeOf(client.options.cacheTime).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheTime).toBe(600);

  expect(client.options.cacheMaxKeys).toBeDefined();
  expectTypeOf(client.options.cacheMaxKeys).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheMaxKeys).toBe(100);

  expect(client.options.cacheCheckPeriod).toBeDefined();
  expectTypeOf(client.options.cacheCheckPeriod).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheCheckPeriod).toBe(300);

  expect(client.options.silent).toBeDefined();
  expectTypeOf(client.options.silent).toEqualTypeOf<boolean | undefined>();
  expect(client.options.silent).toBe(true);
  expect(client.options.silent).toBeTruthy();

  expect(client.options.checkForUpdates).toBeDefined();
  expect(client.options.checkForUpdates).toBeFalsy();
  expect(client.options.checkForUpdates).toBe(false);

  expect(client.options.checkForUpdatesInterval).toBeDefined();
  expectTypeOf(client.options.checkForUpdatesInterval).toEqualTypeOf<number | undefined>();
  expect(client.options.checkForUpdatesInterval).toBe(120);

  expect(client.requestHandler).toBeDefined();
  expect(client.requestHandler).toBeInstanceOf(RequestHandler);
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.cacheHandler).toBeDefined();
  expect(client.cacheHandler).toBeInstanceOf(CacheHandler);
  expectTypeOf(client.cacheHandler).toEqualTypeOf<CacheHandler>();

  expect(client.updater).toBeDefined();
  expect(client.updater).toBeInstanceOf(Updater);
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  client.destroy();
});

test('Client (Endpoints)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  expect(client).toBeDefined();
  expect(client).toBeInstanceOf(Client);
  expectTypeOf(client).toEqualTypeOf<Client>();
  expect(client.getAchievements).toBeDefined();
  expectTypeOf(client.getAchievements).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<Achievements>>
  >();
  expect(client.getActiveHouses).toBeDefined();
  expectTypeOf(client.getActiveHouses).toEqualTypeOf<(options?: RequestOptions) => Promise<RequestData<House[]>>>();
  expect(client.getBoosters).toBeDefined();
  expectTypeOf(client.getBoosters).toEqualTypeOf<(options?: RequestOptions) => Promise<RequestData<Booster[]>>>();
  expect(client.getChallenges).toBeDefined();
  expectTypeOf(client.getChallenges).toEqualTypeOf<(options?: RequestOptions) => Promise<RequestData<Challenges>>>();
  expect(client.getGameCounts).toBeDefined();
  expectTypeOf(client.getGameCounts).toEqualTypeOf<(options?: RequestOptions) => Promise<RequestData<GameCounts>>>();
  expect(client.getGuild).toBeDefined();
  expectTypeOf(client.getGuild).toEqualTypeOf<
    (searchParameter: GuildFetchOption, query: string, options?: RequestOptions) => Promise<RequestData<Guild | null>>
  >();
  expect(client.getGuildAchievements).toBeDefined();
  expectTypeOf(client.getGuildAchievements).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<GuildAchievements>>
  >();
  expect(client.getHouse).toBeDefined();
  expectTypeOf(client.getHouse).toEqualTypeOf<
    (query: string, options?: RequestOptions) => Promise<RequestData<House>>
  >();
  expect(client.getLeaderboards).toBeDefined();
  expectTypeOf(client.getLeaderboards).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<Record<string, Leaderboard[]>>>
  >();
  expect(client.getPlayer).toBeDefined();
  expectTypeOf(client.getPlayer).toEqualTypeOf<
    (query: string, options?: PlayerRequestOptions) => Promise<RequestData<Player>>
  >();
  expect(client.getPlayerHouses).toBeDefined();
  expectTypeOf(client.getPlayerHouses).toEqualTypeOf<
    (query: string, options?: RequestOptions) => Promise<RequestData<House[]>>
  >();
  expect(client.getQuests).toBeDefined();
  expectTypeOf(client.getQuests).toEqualTypeOf<(options?: RequestOptions) => Promise<RequestData<Quests>>>();
  expect(client.getRecentGames).toBeDefined();
  expectTypeOf(client.getRecentGames).toEqualTypeOf<
    (query: string, options?: RequestOptions) => Promise<RequestData<RecentGame[]>>
  >();
  expect(client.getSkyBlockAuction).toBeDefined();
  expectTypeOf(client.getSkyBlockAuction).toEqualTypeOf<
    (
      type: AuctionFetchOption,
      query: string,
      options?: AuctionRequestOptions
    ) => Promise<RequestData<SkyBlockAuctionResult>>
  >();
  expect(client.getSkyBlockAuctions).toBeDefined();
  expectTypeOf(client.getSkyBlockAuctions).toEqualTypeOf<
    (query: number | '*', options?: AuctionRequestOptions) => Promise<RequestData<SkyBlockAuctionsResult>>
  >();
  expect(client.getSkyBlockBazaar).toBeDefined();
  expectTypeOf(client.getSkyBlockBazaar).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockBazaar>>
  >();
  expect(client.getSkyBlockBingo).toBeDefined();
  expectTypeOf(client.getSkyBlockBingo).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockBingo>>
  >();
  expect(client.getSkyBlockCollections).toBeDefined();
  expectTypeOf(client.getSkyBlockCollections).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockCollections>>
  >();
  expect(client.getSkyBlockElection).toBeDefined();
  expectTypeOf(client.getSkyBlockElection).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockElectionData>>
  >();
  expect(client.getSkyBlockEndedAuctions).toBeDefined();
  expectTypeOf(client.getSkyBlockEndedAuctions).toEqualTypeOf<
    (options?: AuctionRequestOptions) => Promise<RequestData<SkyBlockAuctionResult>>
  >();
  expect(client.getSkyBlockFireSales).toBeDefined();
  expectTypeOf(client.getSkyBlockFireSales).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockFireSale[]>>
  >();
  expect(client.getSkyBlockGarden).toBeDefined();
  expectTypeOf(client.getSkyBlockGarden).toEqualTypeOf<
    (profileId: string, options?: RequestOptions) => Promise<RequestData<SkyBlockGarden>>
  >();
  expect(client.getSkyBlockItems).toBeDefined();
  expectTypeOf(client.getSkyBlockItems).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockItem[]>>
  >();
  expect(client.getSkyBlockMuseum).toBeDefined();
  expectTypeOf(client.getSkyBlockMuseum).toEqualTypeOf<
    (profileId: string, options?: RequestOptions) => Promise<RequestData<SkyBlockMuseum>>
  >();
  expect(client.getSkyBlockNews).toBeDefined();
  expectTypeOf(client.getSkyBlockNews).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockNews[]>>
  >();
  expect(client.getSkyBlockProfile).toBeDefined();
  expectTypeOf(client.getSkyBlockProfile).toEqualTypeOf<
    (profileId: string, options?: SkyBlockRequestOptions) => Promise<RequestData<SkyBlockProfile>>
  >();
  expect(client.getSkyBlockProfiles).toBeDefined();
  expectTypeOf(client.getSkyBlockProfiles).toEqualTypeOf<
    (
      query: string,
      options?: SkyBlockRequestOptions
    ) => Promise<RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>>
  >();
  expect(client.getSkyBlockSkills).toBeDefined();
  expectTypeOf(client.getSkyBlockSkills).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<SkyBlockSkills>>
  >();
  expect(client.getStatus).toBeDefined();
  expectTypeOf(client.getStatus).toEqualTypeOf<
    (query: string, options?: RequestOptions) => Promise<RequestData<Status>>
  >();
  expect(client.getWatchdogStats).toBeDefined();
  expectTypeOf(client.getWatchdogStats).toEqualTypeOf<
    (options?: RequestOptions) => Promise<RequestData<WatchdogStats>>
  >();
  client.destroy();
});

test('Client#getAchievements', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getAchievements();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Achievements>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expect(data.parsed.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.achievementsPerGame).toBeDefined();
  expectTypeOf(data.parsed.achievementsPerGame).toEqualTypeOf<Record<string, GameAchievements>>();
  Object.keys(data.parsed.achievementsPerGame).forEach((game) => {
    const gameData = data.parsed.achievementsPerGame[game];
    if (!gameData) return;
    expect(gameData).toBeDefined();
    expect(gameData).toBeInstanceOf(GameAchievements);
    expectTypeOf(gameData).toEqualTypeOf<GameAchievements>();
    expect(gameData.game).toBeDefined();
    expectTypeOf(gameData.game).toEqualTypeOf<string>();
    expect(gameData.points).toBeDefined();
    expect(gameData.points).toBeGreaterThanOrEqual(0);
    expectTypeOf(gameData.points).toEqualTypeOf<number>();
    expect(gameData.legacyPoints).toBeDefined();
    expect(gameData.legacyPoints).toBeGreaterThanOrEqual(0);
    expectTypeOf(gameData.legacyPoints).toEqualTypeOf<number>();
    expect(gameData.oneTimeAchievements).toBeDefined();
    expectTypeOf(gameData.oneTimeAchievements).toEqualTypeOf<OneTimeAchievement[]>();
    gameData.oneTimeAchievements.forEach((achievement) => {
      expect(achievement.codeName).toBeDefined();
      expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
      expect(achievement.name).toBeDefined();
      expectTypeOf(achievement.name).toEqualTypeOf<string>();
      expect(achievement.description).toBeDefined();
      expectTypeOf(achievement.description).toEqualTypeOf<string>();
      expect(achievement.secret).toBeDefined();
      expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
      expect(achievement.legacy).toBeDefined();
      expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
      expect(achievement.points).toBeDefined();
      expectTypeOf(achievement.points).toEqualTypeOf<number>();
      expect(achievement.gamePercentUnlocked).toBeDefined();
      expectTypeOf(achievement.gamePercentUnlocked).toEqualTypeOf<number>();
      expect(achievement.globalPercentUnlocked).toBeDefined();
      expectTypeOf(achievement.globalPercentUnlocked).toEqualTypeOf<number>();
      expect(achievement.toString()).toBeDefined();
      expect(achievement.toString()).toBe(achievement.codeName);
      expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
    });
    expect(gameData.tieredAchievements).toBeDefined();
    expectTypeOf(gameData.tieredAchievements).toEqualTypeOf<TieredAchievement[]>();
    gameData.tieredAchievements.forEach((achievement) => {
      expect(achievement.codeName).toBeDefined();
      expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
      expect(achievement.name).toBeDefined();
      expectTypeOf(achievement.name).toEqualTypeOf<string>();
      expect(achievement.description).toBeDefined();
      expectTypeOf(achievement.description).toEqualTypeOf<string>();
      expect(achievement.secret).toBeDefined();
      expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
      expect(achievement.legacy).toBeDefined();
      expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
      expect(achievement.tiers).toBeDefined();
      expectTypeOf(achievement.tiers).toEqualTypeOf<AchievementTier[]>();
      achievement.tiers.forEach((tier) => {
        expect(tier).toBeDefined();
        expectTypeOf(tier).toEqualTypeOf<AchievementTier>();
        expect(tier.tier).toBeDefined();
        expect(tier.tier).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.tier).toEqualTypeOf<number>();
        expect(tier.points).toBeDefined();
        expect(tier.points).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.points).toEqualTypeOf<number | undefined>();
        expect(tier.amount).toBeDefined();
        expect(tier.amount).toBeGreaterThanOrEqual(0);
        expectTypeOf(tier.amount).toEqualTypeOf<number>();
      });
      expect(achievement.toString()).toBeDefined();
      expect(achievement.toString()).toBe(achievement.codeName);
      expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
    });
  });
  client.destroy();
});

test('Client#getActiveHouses', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getActiveHouses();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<House[]>>();
  data.parsed.forEach((house: House) => {
    expect(house).toBeDefined();
    expect(house).toBeInstanceOf(House);
    expectTypeOf(house).toEqualTypeOf<House>();
    expect(house.name).toBeDefined();
    expectTypeOf(house.name).toEqualTypeOf<string>();
    expect(house.uuid).toBeDefined();
    expectTypeOf(house.uuid).toEqualTypeOf<string>();
    expect(house.owner).toBeDefined();
    expectTypeOf(house.owner).toEqualTypeOf<string>();
    expect(house.createdAtTimestamp).toBeDefined();
    expectTypeOf(house.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(house.createdAt).toBeDefined();
    expectTypeOf(house.createdAt).toEqualTypeOf<Date | null>();
    expect(house.players).toBeDefined();
    expectTypeOf(house.players).toEqualTypeOf<number>();
    expect(house.cookies).toBeDefined();
    expectTypeOf(house.cookies).toEqualTypeOf<number>();
    expect(house.toString()).toBeDefined();
    expectTypeOf(house.toString()).toEqualTypeOf<string>();
    expect(house.toString()).toBe(house.name);
  });
  client.destroy();
});

test('Client#getBoosters', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getBoosters();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<Booster[]>>();
  data.parsed.forEach((booster: Booster) => {
    expect(booster).toBeDefined();
    expect(booster).toBeInstanceOf(Booster);
    expectTypeOf(booster).toEqualTypeOf<Booster>();
    expect(booster.purchaser).toBeDefined();
    expectTypeOf(booster.purchaser).toEqualTypeOf<string>();
    expect(booster.amount).toBeDefined();
    expectTypeOf(booster.amount).toEqualTypeOf<number>();
    expect(booster.originalLength).toBeDefined();
    expectTypeOf(booster.originalLength).toEqualTypeOf<number>();
    expect(booster.remaining).toBeDefined();
    expectTypeOf(booster.remaining).toEqualTypeOf<number>();
    expect(booster.activatedTimestamp).toBeDefined();
    expectTypeOf(booster.activatedTimestamp).toEqualTypeOf<number>();
    expect(booster.activated).toBeDefined();
    expectTypeOf(booster.activated).toEqualTypeOf<Date>();
    expect(booster.game).toBeDefined();
    expectTypeOf(booster.game).toEqualTypeOf<Game>();
    expect(booster.game).toBeDefined();
    expectTypeOf(booster.game).toEqualTypeOf<Game>();
    expect(booster.game.game).toBeDefined();
    expectTypeOf(booster.game.game).toEqualTypeOf<GameID | GameCode>();
    expect(booster.game.id).toBeDefined();
    expectTypeOf(booster.game.id).toEqualTypeOf<GameID | null>();
    expect(booster.game.code).toBeDefined();
    expectTypeOf(booster.game.code).toEqualTypeOf<GameCode | null>();
    expect(booster.game.name).toBeDefined();
    expectTypeOf(booster.game.name).toEqualTypeOf<GameString | null>();
    expect(booster.game.found).toBeDefined();
    expectTypeOf(booster.game.found).toEqualTypeOf<boolean>();
    expect(booster.game.toString()).toBeDefined();
    expect(booster.game.toString()).toBe(booster.game.name);
    expectTypeOf(booster.game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
    expect(booster.isActive).toBeDefined();
    expectTypeOf(booster.isActive).toEqualTypeOf<boolean>();
    expect(booster.type).toBeDefined();
    expectTypeOf(booster.type).toEqualTypeOf<'STACKED' | 'QUEUED' | 'ACTIVE'>();
    expect(booster.stackers).toBeDefined();
    expectTypeOf(booster.stackers).toEqualTypeOf<string[]>();
    expect(booster.expired).toBeDefined();
    expectTypeOf(booster.expired).toEqualTypeOf<boolean>();
    expect(booster.toString()).toBeDefined();
    expectTypeOf(booster.toString()).toEqualTypeOf<string>();
  });
  client.destroy();
});

test('Client#getChallenges', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getChallenges();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Challenges>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expect(data.parsed.lastUpdatedTimestamp).toBeGreaterThan(0);
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.challengesPerGame).toBeDefined();
  expectTypeOf(data.parsed.challengesPerGame).toEqualTypeOf<Record<string, GameChallenges>>();
  Object.keys(data.parsed.challengesPerGame).forEach((gameName) => {
    if (undefined === data.parsed.challengesPerGame[gameName]) return;
    expect(data.parsed.challengesPerGame[gameName]).toBeDefined();
    expect(data.parsed.challengesPerGame[gameName]).toBeInstanceOf(GameChallenges);
    expectTypeOf(data.parsed.challengesPerGame[gameName]).toEqualTypeOf<GameChallenges>();
    expect(data.parsed.challengesPerGame[gameName].category).toBeDefined();
    expect(data.parsed.challengesPerGame[gameName].category).toEqual(gameName);
    expect(data.parsed.challengesPerGame[gameName].challenges).toBeDefined();
    expectTypeOf(data.parsed.challengesPerGame[gameName].challenges).toEqualTypeOf<Challenge[]>();
    data.parsed.challengesPerGame[gameName].challenges.forEach((challenge: Challenge) => {
      expect(challenge.id).toBeDefined();
      expectTypeOf(challenge.id).toEqualTypeOf<string>();
      expect(challenge.name).toBeDefined();
      expectTypeOf(challenge.name).toEqualTypeOf<string>();
      expect(challenge.rewards).toBeDefined();
      expectTypeOf(challenge.rewards).toEqualTypeOf<ChallengeReward[]>();
    });
  });
  client.destroy();
});

test('Client#getGameCounts', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGameCounts();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<GameCounts>>();
  expect(data.parsed.playerCount).toBeDefined();
  expectTypeOf(data.parsed.playerCount).toEqualTypeOf<number>();
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<number>();
  client.destroy();
});

test('Client#getGuild Invalid Guild Type', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getGuild('invalid', 'invalid')).rejects.toThrowError(Errors.INVALID_GUILD_SEARCH_PARAMETER);
  client.destroy();
});

test('Client#getGuild Invalid Guild', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getGuild('name', 'this guild dose not exist')).rejects.toThrowError(
    Errors.GUILD_DOES_NOT_EXIST
  );
  client.destroy();
});

test('Client#getGuild Invalid Guild ID', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getGuild('id', 'invalid guild id')).rejects.toThrowError(Errors.INVALID_GUILD_ID);
  client.destroy();
});

test('Client#getGuild No Guild Query', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getGuild('id')).rejects.toThrowError(Errors.NO_GUILD_QUERY);
  client.destroy();
});

test('Client#getGuild User not in a guild', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGuild('player', '37501e7512b845ab8796e2baf9e9677a');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<Guild | null>>();
  client.destroy();
});

test('Client#getGuild (Name)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGuild('name', 'Pixelic');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Guild | null>>();
  if (data.parsed === null) return;
  expect(data.parsed.id).toBeDefined();
  expectTypeOf(data.parsed.id).toEqualTypeOf<string>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.description).toBeDefined();
  expectTypeOf(data.parsed.description).toEqualTypeOf<string>();
  expect(data.parsed.experience).toBeDefined();
  expectTypeOf(data.parsed.experience).toEqualTypeOf<number>();
  expect(data.parsed.experience).toBeGreaterThanOrEqual(0);
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<number>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<GuildMember[]>();
  data.parsed.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date | null>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.parsed.me).toBeDefined();
  expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember | null>();
  if (data.parsed.me !== null) {
    expect(data.parsed.me).toBeDefined();
    expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember>();
    expect(data.parsed.me.uuid).toBeDefined();
    expectTypeOf(data.parsed.me.uuid).toEqualTypeOf<string>();
    expect(data.parsed.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.joinedAt).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAt).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.questParticipation).toBeDefined();
    expectTypeOf(data.parsed.me.questParticipation).toEqualTypeOf<number>();
    expect(data.parsed.me.rank).toBeDefined();
    expectTypeOf(data.parsed.me.rank).toEqualTypeOf<string>();
    expect(data.parsed.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.mutedUntil).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.expHistory).toBeDefined();
    expectTypeOf(data.parsed.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.parsed.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.parsed.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.parsed.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.parsed.me.toString()).toBeDefined();
    expectTypeOf(data.parsed.me.toString()).toEqualTypeOf<string>();
    expect(data.parsed.me.toString()).toEqual(data.parsed.me.uuid);
  }
  expect(data.parsed.ranks).toBeDefined();
  expectTypeOf(data.parsed.ranks).toEqualTypeOf<GuildRank[]>();
  data.parsed.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date | null>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.parsed.totalWeeklyGEXP).toBeDefined();
  expectTypeOf(data.parsed.totalWeeklyGEXP).toEqualTypeOf<number>();
  expect(data.parsed.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.joinable).toBeDefined();
  expectTypeOf(data.parsed.joinable).toEqualTypeOf<boolean>();
  expect(data.parsed.publiclyListed).toBeDefined();
  expectTypeOf(data.parsed.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.parsed.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.chatMuteUntil).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.parsed.banner).toBeDefined();
  expectTypeOf(data.parsed.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.parsed.tag).toBeDefined();
  expectTypeOf(data.parsed.tag).toEqualTypeOf<string>();
  expect(data.parsed.tagColor).toBeDefined();
  expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color | null>();
  if (data.parsed.tagColor) {
    expect(data.parsed.tagColor).toBeDefined();
    expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color>();
    expect(data.parsed.tagColor.color).toBeDefined();
    expectTypeOf(data.parsed.tagColor.color).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toString).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString).toEqualTypeOf<() => ColorString>();
    expect(data.parsed.tagColor.toString()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString()).toEqualTypeOf<ColorString>();
    expect(data.parsed.tagColor.toHex).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex).toEqualTypeOf<() => ColorHex>();
    expect(data.parsed.tagColor.toHex()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex()).toEqualTypeOf<ColorHex>();
    expect(data.parsed.tagColor.toCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode).toEqualTypeOf<() => ColorCode>();
    expect(data.parsed.tagColor.toCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode()).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toInGameCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode).toEqualTypeOf<() => InGameCode>();
    expect(data.parsed.tagColor.toInGameCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode()).toEqualTypeOf<InGameCode>();
  }
  expect(data.parsed.expHistory).toBeDefined();
  expectTypeOf(data.parsed.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.parsed.achievements).toBeDefined();
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<{
    winners: number;
    experienceKings: number;
    onlinePlayers: number;
  }>();
  expect(data.parsed.achievements.winners).toBeDefined();
  expectTypeOf(data.parsed.achievements.winners).toEqualTypeOf<number>();
  expect(data.parsed.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.parsed.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.parsed.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.parsed.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.parsed.preferredGames).toBeDefined();
  expectTypeOf(data.parsed.preferredGames).toEqualTypeOf<Game[]>();
  data.parsed.preferredGames.forEach((game: Game) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<Game>();
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<GameID | GameCode>();
    expect(game.id).toBeDefined();
    expectTypeOf(game.id).toEqualTypeOf<GameID | null>();
    expect(game.code).toBeDefined();
    expectTypeOf(game.code).toEqualTypeOf<GameCode | null>();
    expect(game.name).toBeDefined();
    expectTypeOf(game.name).toEqualTypeOf<GameString | null>();
    expect(game.found).toBeDefined();
    expectTypeOf(game.found).toEqualTypeOf<boolean>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toBe(game.name);
    expectTypeOf(game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  });
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<string>();
  client.destroy();
});

test('Client#getGuild (Id)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGuild('id', '64b54f9d8ea8c96aaedafe84');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Guild | null>>();
  if (data.parsed === null) return;
  expect(data.parsed.id).toBeDefined();
  expectTypeOf(data.parsed.id).toEqualTypeOf<string>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.description).toBeDefined();
  expectTypeOf(data.parsed.description).toEqualTypeOf<string>();
  expect(data.parsed.experience).toBeDefined();
  expectTypeOf(data.parsed.experience).toEqualTypeOf<number>();
  expect(data.parsed.experience).toBeGreaterThanOrEqual(0);
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<number>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<GuildMember[]>();
  data.parsed.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date | null>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.parsed.me).toBeDefined();
  expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember | null>();
  if (data.parsed.me !== null) {
    expect(data.parsed.me).toBeDefined();
    expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember>();
    expect(data.parsed.me.uuid).toBeDefined();
    expectTypeOf(data.parsed.me.uuid).toEqualTypeOf<string>();
    expect(data.parsed.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.joinedAt).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAt).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.questParticipation).toBeDefined();
    expectTypeOf(data.parsed.me.questParticipation).toEqualTypeOf<number>();
    expect(data.parsed.me.rank).toBeDefined();
    expectTypeOf(data.parsed.me.rank).toEqualTypeOf<string>();
    expect(data.parsed.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.mutedUntil).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.expHistory).toBeDefined();
    expectTypeOf(data.parsed.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.parsed.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.parsed.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.parsed.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.parsed.me.toString()).toBeDefined();
    expectTypeOf(data.parsed.me.toString()).toEqualTypeOf<string>();
    expect(data.parsed.me.toString()).toEqual(data.parsed.me.uuid);
  }
  expect(data.parsed.ranks).toBeDefined();
  expectTypeOf(data.parsed.ranks).toEqualTypeOf<GuildRank[]>();
  data.parsed.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date | null>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.parsed.totalWeeklyGEXP).toBeDefined();
  expectTypeOf(data.parsed.totalWeeklyGEXP).toEqualTypeOf<number>();
  expect(data.parsed.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.joinable).toBeDefined();
  expectTypeOf(data.parsed.joinable).toEqualTypeOf<boolean>();
  expect(data.parsed.publiclyListed).toBeDefined();
  expectTypeOf(data.parsed.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.parsed.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.chatMuteUntil).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.parsed.banner).toBeDefined();
  expectTypeOf(data.parsed.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.parsed.tag).toBeDefined();
  expectTypeOf(data.parsed.tag).toEqualTypeOf<string>();
  expect(data.parsed.tagColor).toBeDefined();
  expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color | null>();
  if (data.parsed.tagColor) {
    expect(data.parsed.tagColor).toBeDefined();
    expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color>();
    expect(data.parsed.tagColor.color).toBeDefined();
    expectTypeOf(data.parsed.tagColor.color).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toString).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString).toEqualTypeOf<() => ColorString>();
    expect(data.parsed.tagColor.toString()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString()).toEqualTypeOf<ColorString>();
    expect(data.parsed.tagColor.toHex).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex).toEqualTypeOf<() => ColorHex>();
    expect(data.parsed.tagColor.toHex()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex()).toEqualTypeOf<ColorHex>();
    expect(data.parsed.tagColor.toCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode).toEqualTypeOf<() => ColorCode>();
    expect(data.parsed.tagColor.toCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode()).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toInGameCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode).toEqualTypeOf<() => InGameCode>();
    expect(data.parsed.tagColor.toInGameCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode()).toEqualTypeOf<InGameCode>();
  }
  expect(data.parsed.expHistory).toBeDefined();
  expectTypeOf(data.parsed.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.parsed.achievements).toBeDefined();
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<{
    winners: number;
    experienceKings: number;
    onlinePlayers: number;
  }>();
  expect(data.parsed.achievements.winners).toBeDefined();
  expectTypeOf(data.parsed.achievements.winners).toEqualTypeOf<number>();
  expect(data.parsed.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.parsed.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.parsed.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.parsed.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.parsed.preferredGames).toBeDefined();
  expectTypeOf(data.parsed.preferredGames).toEqualTypeOf<Game[]>();
  data.parsed.preferredGames.forEach((game: Game) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<Game>();
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<GameID | GameCode>();
    expect(game.id).toBeDefined();
    expectTypeOf(game.id).toEqualTypeOf<GameID | null>();
    expect(game.code).toBeDefined();
    expectTypeOf(game.code).toEqualTypeOf<GameCode | null>();
    expect(game.name).toBeDefined();
    expectTypeOf(game.name).toEqualTypeOf<GameString | null>();
    expect(game.found).toBeDefined();
    expectTypeOf(game.found).toEqualTypeOf<boolean>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toBe(game.name);
    expectTypeOf(game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  });
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<string>();
  client.destroy();
});

test('Client#getGuild (Player)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGuild('player', '14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Guild | null>>();
  if (data.parsed === null) return;
  expect(data.parsed.id).toBeDefined();
  expectTypeOf(data.parsed.id).toEqualTypeOf<string>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.description).toBeDefined();
  expectTypeOf(data.parsed.description).toEqualTypeOf<string>();
  expect(data.parsed.experience).toBeDefined();
  expectTypeOf(data.parsed.experience).toEqualTypeOf<number>();
  expect(data.parsed.experience).toBeGreaterThanOrEqual(0);
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<number>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<GuildMember[]>();
  data.parsed.members.forEach((member: GuildMember) => {
    expect(member).toBeDefined();
    expectTypeOf(member).toEqualTypeOf<GuildMember>();
    expect(member.uuid).toBeDefined();
    expectTypeOf(member.uuid).toEqualTypeOf<string>();
    expect(member.joinedAtTimestamp).toBeDefined();
    expectTypeOf(member.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(member.joinedAt).toBeDefined();
    expectTypeOf(member.joinedAt).toEqualTypeOf<Date | null>();
    expect(member.questParticipation).toBeDefined();
    expectTypeOf(member.questParticipation).toEqualTypeOf<number>();
    expect(member.rank).toBeDefined();
    expectTypeOf(member.rank).toEqualTypeOf<string>();
    expect(member.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(member.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(member.mutedUntil).toBeDefined();
    expectTypeOf(member.mutedUntil).toEqualTypeOf<Date | null>();
    expect(member.expHistory).toBeDefined();
    expectTypeOf(member.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(member.weeklyExperience).toBeDefined();
    expectTypeOf(member.weeklyExperience).toEqualTypeOf<number>();
    expect(member.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(member.toString()).toBeDefined();
    expectTypeOf(member.toString()).toEqualTypeOf<string>();
    expect(member.toString()).toEqual(member.uuid);
  });
  expect(data.parsed.me).toBeDefined();
  expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember | null>();
  if (data.parsed.me !== null) {
    expect(data.parsed.me).toBeDefined();
    expectTypeOf(data.parsed.me).toEqualTypeOf<GuildMember>();
    expect(data.parsed.me.uuid).toBeDefined();
    expectTypeOf(data.parsed.me.uuid).toEqualTypeOf<string>();
    expect(data.parsed.me.joinedAtTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAtTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.joinedAt).toBeDefined();
    expectTypeOf(data.parsed.me.joinedAt).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.questParticipation).toBeDefined();
    expectTypeOf(data.parsed.me.questParticipation).toEqualTypeOf<number>();
    expect(data.parsed.me.rank).toBeDefined();
    expectTypeOf(data.parsed.me.rank).toEqualTypeOf<string>();
    expect(data.parsed.me.mutedUntilTimestamp).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntilTimestamp).toEqualTypeOf<number | null>();
    expect(data.parsed.me.mutedUntil).toBeDefined();
    expectTypeOf(data.parsed.me.mutedUntil).toEqualTypeOf<Date | null>();
    expect(data.parsed.me.expHistory).toBeDefined();
    expectTypeOf(data.parsed.me.expHistory).toEqualTypeOf<ExpHistory[]>();
    expect(data.parsed.me.weeklyExperience).toBeDefined();
    expectTypeOf(data.parsed.me.weeklyExperience).toEqualTypeOf<number>();
    expect(data.parsed.me.weeklyExperience).toBeGreaterThanOrEqual(0);
    expect(data.parsed.me.toString()).toBeDefined();
    expectTypeOf(data.parsed.me.toString()).toEqualTypeOf<string>();
    expect(data.parsed.me.toString()).toEqual(data.parsed.me.uuid);
  }
  expect(data.parsed.ranks).toBeDefined();
  expectTypeOf(data.parsed.ranks).toEqualTypeOf<GuildRank[]>();
  data.parsed.ranks.forEach((rank: GuildRank) => {
    expect(rank).toBeDefined();
    expect(rank).toBeInstanceOf(GuildRank);
    expectTypeOf(rank).toEqualTypeOf<GuildRank>();
    expect(rank.name).toBeDefined();
    expectTypeOf(rank.name).toEqualTypeOf<string>();
    expect(rank.default).toBeDefined();
    expectTypeOf(rank.default).toEqualTypeOf<boolean>();
    expect(rank.tag).toBeDefined();
    expectTypeOf(rank.tag).toEqualTypeOf<string | null>();
    expect(rank.createdAtTimestamp).toBeDefined();
    expectTypeOf(rank.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(rank.createdAt).toBeDefined();
    expectTypeOf(rank.createdAt).toEqualTypeOf<Date | null>();
    expect(rank.priority).toBeDefined();
    expectTypeOf(rank.priority).toEqualTypeOf<number>();
    expect(rank.toString()).toBeDefined();
    expectTypeOf(rank.toString()).toEqualTypeOf<string>();
    expect(rank.toString()).toEqual(rank.name);
  });
  expect(data.parsed.totalWeeklyGEXP).toBeDefined();
  expectTypeOf(data.parsed.totalWeeklyGEXP).toEqualTypeOf<number>();
  expect(data.parsed.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.joinable).toBeDefined();
  expectTypeOf(data.parsed.joinable).toEqualTypeOf<boolean>();
  expect(data.parsed.publiclyListed).toBeDefined();
  expectTypeOf(data.parsed.publiclyListed).toEqualTypeOf<boolean>();
  expect(data.parsed.chatMuteUntilTimestamp).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntilTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.chatMuteUntil).toBeDefined();
  expectTypeOf(data.parsed.chatMuteUntil).toEqualTypeOf<Date | null>();
  expect(data.parsed.banner).toBeDefined();
  expectTypeOf(data.parsed.banner).toEqualTypeOf<{ Pattern: string; Color: string }[]>();
  expect(data.parsed.tag).toBeDefined();
  expectTypeOf(data.parsed.tag).toEqualTypeOf<string>();
  expect(data.parsed.tagColor).toBeDefined();
  expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color | null>();
  if (data.parsed.tagColor) {
    expect(data.parsed.tagColor).toBeDefined();
    expectTypeOf(data.parsed.tagColor).toEqualTypeOf<Color>();
    expect(data.parsed.tagColor.color).toBeDefined();
    expectTypeOf(data.parsed.tagColor.color).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toString).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString).toEqualTypeOf<() => ColorString>();
    expect(data.parsed.tagColor.toString()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toString()).toEqualTypeOf<ColorString>();
    expect(data.parsed.tagColor.toHex).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex).toEqualTypeOf<() => ColorHex>();
    expect(data.parsed.tagColor.toHex()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toHex()).toEqualTypeOf<ColorHex>();
    expect(data.parsed.tagColor.toCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode).toEqualTypeOf<() => ColorCode>();
    expect(data.parsed.tagColor.toCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toCode()).toEqualTypeOf<ColorCode>();
    expect(data.parsed.tagColor.toInGameCode).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode).toEqualTypeOf<() => InGameCode>();
    expect(data.parsed.tagColor.toInGameCode()).toBeDefined();
    expectTypeOf(data.parsed.tagColor.toInGameCode()).toEqualTypeOf<InGameCode>();
  }
  expect(data.parsed.expHistory).toBeDefined();
  expectTypeOf(data.parsed.expHistory).toEqualTypeOf<ExpHistory[]>();
  expect(data.parsed.achievements).toBeDefined();
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<{
    winners: number;
    experienceKings: number;
    onlinePlayers: number;
  }>();
  expect(data.parsed.achievements.winners).toBeDefined();
  expectTypeOf(data.parsed.achievements.winners).toEqualTypeOf<number>();
  expect(data.parsed.achievements.winners).toBeGreaterThanOrEqual(0);
  expect(data.parsed.achievements.experienceKings).toBeDefined();
  expectTypeOf(data.parsed.achievements.experienceKings).toEqualTypeOf<number>();
  expect(data.parsed.achievements.experienceKings).toBeGreaterThanOrEqual(0);
  expect(data.parsed.preferredGames).toBeDefined();
  expectTypeOf(data.parsed.preferredGames).toEqualTypeOf<Game[]>();
  data.parsed.preferredGames.forEach((game: Game) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<Game>();
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<GameID | GameCode>();
    expect(game.id).toBeDefined();
    expectTypeOf(game.id).toEqualTypeOf<GameID | null>();
    expect(game.code).toBeDefined();
    expectTypeOf(game.code).toEqualTypeOf<GameCode | null>();
    expect(game.name).toBeDefined();
    expectTypeOf(game.name).toEqualTypeOf<GameString | null>();
    expect(game.found).toBeDefined();
    expectTypeOf(game.found).toEqualTypeOf<boolean>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toBe(game.name);
    expectTypeOf(game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  });
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<string>();
  client.destroy();
});

test('Client#getGuildAchievements', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getGuildAchievements();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<GuildAchievements>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.oneTimeAchievements).toBeDefined();
  expectTypeOf(data.parsed.oneTimeAchievements).toEqualTypeOf<OneTimeAchievement[]>();
  data.parsed.oneTimeAchievements.forEach((achievement: OneTimeAchievement) => {
    expect(achievement.codeName).toBeDefined();
    expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
    expect(achievement.name).toBeDefined();
    expectTypeOf(achievement.name).toEqualTypeOf<string>();
    expect(achievement.description).toBeDefined();
    expectTypeOf(achievement.description).toEqualTypeOf<string>();
    expect(achievement.secret).toBeDefined();
    expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
    expect(achievement.legacy).toBeDefined();
    expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
    expect(achievement.points).toBeDefined();
    expectTypeOf(achievement.points).toEqualTypeOf<number>();
    expect(achievement.gamePercentUnlocked).toBeDefined();
    expectTypeOf(achievement.gamePercentUnlocked).toEqualTypeOf<number>();
    expect(achievement.globalPercentUnlocked).toBeDefined();
    expectTypeOf(achievement.globalPercentUnlocked).toEqualTypeOf<number>();
    expect(achievement.toString()).toBeDefined();
    expect(achievement.toString()).toBe(achievement.codeName);
    expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
  });
  expect(data.parsed.tieredAchievements).toBeDefined();
  expectTypeOf(data.parsed.tieredAchievements).toEqualTypeOf<TieredAchievement[]>();
  data.parsed.tieredAchievements.forEach((achievement: TieredAchievement) => {
    expect(achievement.codeName).toBeDefined();
    expectTypeOf(achievement.codeName).toEqualTypeOf<string>();
    expect(achievement.name).toBeDefined();
    expectTypeOf(achievement.name).toEqualTypeOf<string>();
    expect(achievement.description).toBeDefined();
    expectTypeOf(achievement.description).toEqualTypeOf<string>();
    expect(achievement.secret).toBeDefined();
    expectTypeOf(achievement.secret).toEqualTypeOf<boolean>();
    expect(achievement.legacy).toBeDefined();
    expectTypeOf(achievement.legacy).toEqualTypeOf<boolean>();
    expect(achievement.tiers).toBeDefined();
    expectTypeOf(achievement.tiers).toEqualTypeOf<AchievementTier[]>();
    achievement.tiers.forEach((tier) => {
      expect(tier).toBeDefined();
      expectTypeOf(tier).toEqualTypeOf<AchievementTier>();
      expect(tier.tier).toBeDefined();
      expect(tier.tier).toBeGreaterThanOrEqual(0);
      expectTypeOf(tier.tier).toEqualTypeOf<number>();
      expect(tier.points).toBeUndefined();
      expectTypeOf(tier.points).toEqualTypeOf<number | undefined>();
      expect(tier.amount).toBeDefined();
      expect(tier.amount).toBeGreaterThanOrEqual(0);
      expectTypeOf(tier.amount).toEqualTypeOf<number>();
    });
    expect(achievement.toString()).toBeDefined();
    expect(achievement.toString()).toBe(achievement.codeName);
    expectTypeOf(achievement.toString()).toEqualTypeOf<string>();
  });
  client.destroy();
});

test('Client#getHouse (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getHouse()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('Client#getHouse', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const houses = await client.getActiveHouses();
  expect(houses).toBeDefined();
  expectTypeOf(houses).toEqualTypeOf<RequestData<House[]>>();
  if (undefined === houses.parsed[0]) return;
  const data = await client.getHouse(houses.parsed[0].uuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<House>>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.owner).toBeDefined();
  expectTypeOf(data.parsed.owner).toEqualTypeOf<string>();
  expect(data.parsed.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.players).toBeDefined();
  expectTypeOf(data.parsed.players).toEqualTypeOf<number>();
  expect(data.parsed.cookies).toBeDefined();
  expectTypeOf(data.parsed.cookies).toEqualTypeOf<number>();
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<string>();
  client.destroy();
});

test('Client#getLeaderboards', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getLeaderboards();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<Record<string, Leaderboard[]>>>();
  Object.keys(data).forEach((key) => {
    if (undefined === data.parsed[key]) return;
    expect(data.parsed[key]).toBeDefined();
    expectTypeOf(data.parsed[key]).toEqualTypeOf<Leaderboard[]>();
    data.parsed[key].forEach((leaderboard: Leaderboard) => {
      expect(leaderboard).toBeDefined();
      expect(leaderboard).instanceOf(Leaderboard);
      expectTypeOf(leaderboard).toEqualTypeOf<Leaderboard>();

      expect(leaderboard.path).toBeDefined();
      expectTypeOf(leaderboard.path).toEqualTypeOf<string>();
      expect(leaderboard.prefix).toBeDefined();
      expectTypeOf(leaderboard.prefix).toEqualTypeOf<string>();
      expect(leaderboard.title).toBeDefined();
      expectTypeOf(leaderboard.title).toEqualTypeOf<string>();
      expect(leaderboard.location).toBeDefined();
      expectTypeOf(leaderboard.location).toEqualTypeOf<string>();
      expect(leaderboard.count).toBeDefined();
      expect(leaderboard.count).toBeGreaterThanOrEqual(0);
      expectTypeOf(leaderboard.count).toEqualTypeOf<number>();
      expect(leaderboard.leaders).toBeDefined();
      expectTypeOf(leaderboard.leaders).toEqualTypeOf<string[]>();
      leaderboard.leaders.forEach((leader: string) => {
        expect(leader).toBeDefined();
        expectTypeOf(leader).toEqualTypeOf<string>();
      });
    });
  });
  client.destroy();
});

test('Client#getLeaderboards (Missing Data)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () => Promise.resolve({ success: true })
  } as any);

  await expect(() => client.getLeaderboards()).rejects.toThrowError(
    Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.')
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('Client#getPlayer (never joined hypixel)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () => Promise.resolve({ success: true })
  } as any);

  await expect(() => client.getPlayer('14727faefbdc4aff848cd2713eb9939e')).rejects.toThrowError(
    Errors.PLAYER_HAS_NEVER_LOGGED
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('Client#getPlayer (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getPlayer()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#getPlayer (guild)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayer('28667672039044989b0019b14a2c34d6', { guild: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Player>>();
  expect(data.parsed.nickname).toBeDefined();
  expectTypeOf(data.parsed.nickname).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.rank).toBeDefined();
  expectTypeOf(data.parsed.rank).toEqualTypeOf<PlayerRank>();
  expect(data.parsed.firstLoginAt).toBeDefined();
  expectTypeOf(data.parsed.firstLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLoginAt).toBeDefined();
  expectTypeOf(data.parsed.lastLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLogoutAt).toBeDefined();
  expectTypeOf(data.parsed.lastLogoutAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.achievements).toBeDefined();
  expect(data.parsed.achievements).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<PlayerAchievements>();
  expect(data.parsed.karma).toBeDefined();
  expect(data.parsed.karma).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.karma).toEqualTypeOf<number>();
  expect(data.parsed.stats).toBeDefined();
  expect(data.parsed.stats).toBeInstanceOf(PlayerStats);
  expectTypeOf(data.parsed.stats).toEqualTypeOf<PlayerStats>();
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<LevelProgress>();
  expect(data.parsed.claimedCenturyCakeAt).toBeDefined();
  expectTypeOf(data.parsed.claimedCenturyCakeAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.language).toBeDefined();
  expectTypeOf(data.parsed.language).toEqualTypeOf<Language>();
  expect(data.parsed.cosmetics).toBeDefined();
  expect(data.parsed.cosmetics).toBeInstanceOf(PlayerCosmetics);
  expectTypeOf(data.parsed.cosmetics).toEqualTypeOf<PlayerCosmetics>();
  expect(data.parsed.rankPurchase).toBeDefined();
  expect(data.parsed.rankPurchase).toBeInstanceOf(PlayerRankPurchase);
  expectTypeOf(data.parsed.rankPurchase).toEqualTypeOf<PlayerRankPurchase>();
  expect(data.parsed.challenges).toBeDefined();
  expectTypeOf(data.parsed.challenges).toEqualTypeOf<Record<string, Record<string, number>>>();
  expect(data.parsed.quests).toBeDefined();
  expect(data.parsed.quests).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data.parsed.quests).toEqualTypeOf<PlayerQuests>();
  expect(data.parsed.rewards).toBeDefined();
  expect(data.parsed.rewards).toBeInstanceOf(PlayerRewards);
  expectTypeOf(data.parsed.rewards).toEqualTypeOf<PlayerRewards>();
  expect(data.parsed.parkour).toBeDefined();
  expectTypeOf(data.parsed.parkour).toEqualTypeOf<PlayerParkour[]>();
  expect(data.parsed.channel).toBeDefined();
  expectTypeOf(data.parsed.channel).toEqualTypeOf<ChatChannel>();
  expect(data.parsed.skyBlockFreeCookieAt).toBeDefined();
  expectTypeOf(data.parsed.skyBlockFreeCookieAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.housing).toBeDefined();
  expect(data.parsed.housing).toBeInstanceOf(PlayerHousing);
  expectTypeOf(data.parsed.housing).toEqualTypeOf<PlayerHousing>();
  expect(data.parsed.adventRewards).toBeDefined();
  expectTypeOf(data.parsed.adventRewards).toEqualTypeOf<PlayerAdventRewards[]>();
  expect(data.parsed.gifting).toBeDefined();
  expect(data.parsed.gifting).toBeInstanceOf(PlayerGifting);
  expectTypeOf(data.parsed.gifting).toEqualTypeOf<PlayerGifting>();
  expect(data.parsed.socialMedia).toBeDefined();
  expect(data.parsed.socialMedia).toBeInstanceOf(PlayerSocialMedia);
  expectTypeOf(data.parsed.socialMedia).toEqualTypeOf<PlayerSocialMedia>();
  expect(data.parsed.scorpiusBribes).toBeDefined();
  expectTypeOf(data.parsed.scorpiusBribes).toEqualTypeOf<PlayerScorpiusBribe[]>();
  expect(data.parsed.guild).toBeDefined();
  expectTypeOf(data.parsed.guild).toEqualTypeOf<Guild | null>();
  expect(data.parsed.houses).toBeDefined();
  expectTypeOf(data.parsed.houses).toEqualTypeOf<House[] | null>();
  if (data.parsed.houses) {
    data.parsed.houses.forEach((house: House) => {
      expect(house).toBeDefined();
      expect(house).toBeInstanceOf(House);
      expectTypeOf(house).toEqualTypeOf<House>();
    });
  }
  expect(data.parsed.recentGames).toBeDefined();
  expectTypeOf(data.parsed.recentGames).toEqualTypeOf<RecentGame[] | null>();
  client.destroy();
});

test('Client#getPlayer (houses)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayer('618a96fec8b0493fa89427891049550b', { houses: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Player>>();
  expect(data.parsed.nickname).toBeDefined();
  expectTypeOf(data.parsed.nickname).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.rank).toBeDefined();
  expectTypeOf(data.parsed.rank).toEqualTypeOf<PlayerRank>();
  expect(data.parsed.firstLoginAt).toBeDefined();
  expectTypeOf(data.parsed.firstLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLoginAt).toBeDefined();
  expectTypeOf(data.parsed.lastLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLogoutAt).toBeDefined();
  expectTypeOf(data.parsed.lastLogoutAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.achievements).toBeDefined();
  expect(data.parsed.achievements).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<PlayerAchievements>();
  expect(data.parsed.karma).toBeDefined();
  expect(data.parsed.karma).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.karma).toEqualTypeOf<number>();
  expect(data.parsed.stats).toBeDefined();
  expect(data.parsed.stats).toBeInstanceOf(PlayerStats);
  expectTypeOf(data.parsed.stats).toEqualTypeOf<PlayerStats>();
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<LevelProgress>();
  expect(data.parsed.claimedCenturyCakeAt).toBeDefined();
  expectTypeOf(data.parsed.claimedCenturyCakeAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.language).toBeDefined();
  expectTypeOf(data.parsed.language).toEqualTypeOf<Language>();
  expect(data.parsed.cosmetics).toBeDefined();
  expect(data.parsed.cosmetics).toBeInstanceOf(PlayerCosmetics);
  expectTypeOf(data.parsed.cosmetics).toEqualTypeOf<PlayerCosmetics>();
  expect(data.parsed.rankPurchase).toBeDefined();
  expect(data.parsed.rankPurchase).toBeInstanceOf(PlayerRankPurchase);
  expectTypeOf(data.parsed.rankPurchase).toEqualTypeOf<PlayerRankPurchase>();
  expect(data.parsed.challenges).toBeDefined();
  expectTypeOf(data.parsed.challenges).toEqualTypeOf<Record<string, Record<string, number>>>();
  expect(data.parsed.quests).toBeDefined();
  expect(data.parsed.quests).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data.parsed.quests).toEqualTypeOf<PlayerQuests>();
  expect(data.parsed.rewards).toBeDefined();
  expect(data.parsed.rewards).toBeInstanceOf(PlayerRewards);
  expectTypeOf(data.parsed.rewards).toEqualTypeOf<PlayerRewards>();
  expect(data.parsed.parkour).toBeDefined();
  expectTypeOf(data.parsed.parkour).toEqualTypeOf<PlayerParkour[]>();
  expect(data.parsed.channel).toBeDefined();
  expectTypeOf(data.parsed.channel).toEqualTypeOf<ChatChannel>();
  expect(data.parsed.skyBlockFreeCookieAt).toBeDefined();
  expectTypeOf(data.parsed.skyBlockFreeCookieAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.housing).toBeDefined();
  expect(data.parsed.housing).toBeInstanceOf(PlayerHousing);
  expectTypeOf(data.parsed.housing).toEqualTypeOf<PlayerHousing>();
  expect(data.parsed.adventRewards).toBeDefined();
  expectTypeOf(data.parsed.adventRewards).toEqualTypeOf<PlayerAdventRewards[]>();
  expect(data.parsed.gifting).toBeDefined();
  expect(data.parsed.gifting).toBeInstanceOf(PlayerGifting);
  expectTypeOf(data.parsed.gifting).toEqualTypeOf<PlayerGifting>();
  expect(data.parsed.socialMedia).toBeDefined();
  expect(data.parsed.socialMedia).toBeInstanceOf(PlayerSocialMedia);
  expectTypeOf(data.parsed.socialMedia).toEqualTypeOf<PlayerSocialMedia>();
  expect(data.parsed.scorpiusBribes).toBeDefined();
  expectTypeOf(data.parsed.scorpiusBribes).toEqualTypeOf<PlayerScorpiusBribe[]>();
  expect(data.parsed.guild).toBeDefined();
  expectTypeOf(data.parsed.guild).toEqualTypeOf<Guild | null>();
  expect(data.parsed.houses).toBeDefined();
  expectTypeOf(data.parsed.houses).toEqualTypeOf<House[] | null>();
  if (data.parsed.houses) {
    data.parsed.houses.forEach((house: House) => {
      expect(house).toBeDefined();
      expect(house).toBeInstanceOf(House);
      expectTypeOf(house).toEqualTypeOf<House>();
    });
  }
  expect(data.parsed.recentGames).toBeDefined();
  expectTypeOf(data.parsed.recentGames).toEqualTypeOf<RecentGame[] | null>();
  client.destroy();
});

test('Client#getPlayer (recent games)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayer('37501e7512b845ab8796e2baf9e9677a', { recentGames: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Player>>();
  expect(data.parsed.nickname).toBeDefined();
  expectTypeOf(data.parsed.nickname).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.rank).toBeDefined();
  expectTypeOf(data.parsed.rank).toEqualTypeOf<PlayerRank>();
  expect(data.parsed.firstLoginAt).toBeDefined();
  expectTypeOf(data.parsed.firstLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLoginAt).toBeDefined();
  expectTypeOf(data.parsed.lastLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLogoutAt).toBeDefined();
  expectTypeOf(data.parsed.lastLogoutAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.achievements).toBeDefined();
  expect(data.parsed.achievements).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<PlayerAchievements>();
  expect(data.parsed.karma).toBeDefined();
  expect(data.parsed.karma).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.karma).toEqualTypeOf<number>();
  expect(data.parsed.stats).toBeDefined();
  expect(data.parsed.stats).toBeInstanceOf(PlayerStats);
  expectTypeOf(data.parsed.stats).toEqualTypeOf<PlayerStats>();
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<LevelProgress>();
  expect(data.parsed.claimedCenturyCakeAt).toBeDefined();
  expectTypeOf(data.parsed.claimedCenturyCakeAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.language).toBeDefined();
  expectTypeOf(data.parsed.language).toEqualTypeOf<Language>();
  expect(data.parsed.cosmetics).toBeDefined();
  expect(data.parsed.cosmetics).toBeInstanceOf(PlayerCosmetics);
  expectTypeOf(data.parsed.cosmetics).toEqualTypeOf<PlayerCosmetics>();
  expect(data.parsed.rankPurchase).toBeDefined();
  expect(data.parsed.rankPurchase).toBeInstanceOf(PlayerRankPurchase);
  expectTypeOf(data.parsed.rankPurchase).toEqualTypeOf<PlayerRankPurchase>();
  expect(data.parsed.challenges).toBeDefined();
  expectTypeOf(data.parsed.challenges).toEqualTypeOf<Record<string, Record<string, number>>>();
  expect(data.parsed.quests).toBeDefined();
  expect(data.parsed.quests).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data.parsed.quests).toEqualTypeOf<PlayerQuests>();
  expect(data.parsed.rewards).toBeDefined();
  expect(data.parsed.rewards).toBeInstanceOf(PlayerRewards);
  expectTypeOf(data.parsed.rewards).toEqualTypeOf<PlayerRewards>();
  expect(data.parsed.parkour).toBeDefined();
  expectTypeOf(data.parsed.parkour).toEqualTypeOf<PlayerParkour[]>();
  expect(data.parsed.channel).toBeDefined();
  expectTypeOf(data.parsed.channel).toEqualTypeOf<ChatChannel>();
  expect(data.parsed.skyBlockFreeCookieAt).toBeDefined();
  expectTypeOf(data.parsed.skyBlockFreeCookieAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.housing).toBeDefined();
  expect(data.parsed.housing).toBeInstanceOf(PlayerHousing);
  expectTypeOf(data.parsed.housing).toEqualTypeOf<PlayerHousing>();
  expect(data.parsed.adventRewards).toBeDefined();
  expectTypeOf(data.parsed.adventRewards).toEqualTypeOf<PlayerAdventRewards[]>();
  expect(data.parsed.gifting).toBeDefined();
  expect(data.parsed.gifting).toBeInstanceOf(PlayerGifting);
  expectTypeOf(data.parsed.gifting).toEqualTypeOf<PlayerGifting>();
  expect(data.parsed.socialMedia).toBeDefined();
  expect(data.parsed.socialMedia).toBeInstanceOf(PlayerSocialMedia);
  expectTypeOf(data.parsed.socialMedia).toEqualTypeOf<PlayerSocialMedia>();
  expect(data.parsed.scorpiusBribes).toBeDefined();
  expectTypeOf(data.parsed.scorpiusBribes).toEqualTypeOf<PlayerScorpiusBribe[]>();
  expect(data.parsed.guild).toBeDefined();
  expectTypeOf(data.parsed.guild).toEqualTypeOf<Guild | null>();
  expect(data.parsed.houses).toBeDefined();
  expectTypeOf(data.parsed.houses).toEqualTypeOf<House[] | null>();
  expect(data.parsed.recentGames).toBeDefined();
  expectTypeOf(data.parsed.recentGames).toEqualTypeOf<RecentGame[] | null>();
  if (data.parsed.recentGames) {
    data.parsed.recentGames.forEach((game: RecentGame) => {
      expect(game).toBeDefined();
      expect(game).toBeInstanceOf(RecentGame);
      expectTypeOf(game).toEqualTypeOf<RecentGame>();
    });
  }
  client.destroy();
});

test('Client#getPlayer', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayer('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Player>>();
  expect(data.parsed.nickname).toBeDefined();
  expectTypeOf(data.parsed.nickname).toEqualTypeOf<string>();
  expect(data.parsed.uuid).toBeDefined();
  expectTypeOf(data.parsed.uuid).toEqualTypeOf<string>();
  expect(data.parsed.rank).toBeDefined();
  expectTypeOf(data.parsed.rank).toEqualTypeOf<PlayerRank>();
  expect(data.parsed.firstLoginAt).toBeDefined();
  expectTypeOf(data.parsed.firstLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLoginAt).toBeDefined();
  expectTypeOf(data.parsed.lastLoginAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.lastLogoutAt).toBeDefined();
  expectTypeOf(data.parsed.lastLogoutAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.achievements).toBeDefined();
  expect(data.parsed.achievements).toBeInstanceOf(PlayerAchievements);
  expectTypeOf(data.parsed.achievements).toEqualTypeOf<PlayerAchievements>();
  expect(data.parsed.karma).toBeDefined();
  expect(data.parsed.karma).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.karma).toEqualTypeOf<number>();
  expect(data.parsed.stats).toBeDefined();
  expect(data.parsed.stats).toBeInstanceOf(PlayerStats);
  expectTypeOf(data.parsed.stats).toEqualTypeOf<PlayerStats>();
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<LevelProgress>();
  expect(data.parsed.claimedCenturyCakeAt).toBeDefined();
  expectTypeOf(data.parsed.claimedCenturyCakeAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.language).toBeDefined();
  expectTypeOf(data.parsed.language).toEqualTypeOf<Language>();
  expect(data.parsed.cosmetics).toBeDefined();
  expect(data.parsed.cosmetics).toBeInstanceOf(PlayerCosmetics);
  expectTypeOf(data.parsed.cosmetics).toEqualTypeOf<PlayerCosmetics>();
  expect(data.parsed.rankPurchase).toBeDefined();
  expect(data.parsed.rankPurchase).toBeInstanceOf(PlayerRankPurchase);
  expectTypeOf(data.parsed.rankPurchase).toEqualTypeOf<PlayerRankPurchase>();
  expect(data.parsed.challenges).toBeDefined();
  expectTypeOf(data.parsed.challenges).toEqualTypeOf<Record<string, Record<string, number>>>();
  expect(data.parsed.quests).toBeDefined();
  expect(data.parsed.quests).toBeInstanceOf(PlayerQuests);
  expectTypeOf(data.parsed.quests).toEqualTypeOf<PlayerQuests>();
  expect(data.parsed.rewards).toBeDefined();
  expect(data.parsed.rewards).toBeInstanceOf(PlayerRewards);
  expectTypeOf(data.parsed.rewards).toEqualTypeOf<PlayerRewards>();
  expect(data.parsed.parkour).toBeDefined();
  expectTypeOf(data.parsed.parkour).toEqualTypeOf<PlayerParkour[]>();
  expect(data.parsed.channel).toBeDefined();
  expectTypeOf(data.parsed.channel).toEqualTypeOf<ChatChannel>();
  expect(data.parsed.skyBlockFreeCookieAt).toBeDefined();
  expectTypeOf(data.parsed.skyBlockFreeCookieAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.housing).toBeDefined();
  expect(data.parsed.housing).toBeInstanceOf(PlayerHousing);
  expectTypeOf(data.parsed.housing).toEqualTypeOf<PlayerHousing>();
  expect(data.parsed.adventRewards).toBeDefined();
  expectTypeOf(data.parsed.adventRewards).toEqualTypeOf<PlayerAdventRewards[]>();
  expect(data.parsed.gifting).toBeDefined();
  expect(data.parsed.gifting).toBeInstanceOf(PlayerGifting);
  expectTypeOf(data.parsed.gifting).toEqualTypeOf<PlayerGifting>();
  expect(data.parsed.socialMedia).toBeDefined();
  expect(data.parsed.socialMedia).toBeInstanceOf(PlayerSocialMedia);
  expectTypeOf(data.parsed.socialMedia).toEqualTypeOf<PlayerSocialMedia>();
  expect(data.parsed.scorpiusBribes).toBeDefined();
  expectTypeOf(data.parsed.scorpiusBribes).toEqualTypeOf<PlayerScorpiusBribe[]>();
  expect(data.parsed.guild).toBeDefined();
  expectTypeOf(data.parsed.guild).toEqualTypeOf<Guild | null>();
  expect(data.parsed.houses).toBeDefined();
  expectTypeOf(data.parsed.houses).toEqualTypeOf<House[] | null>();
  expect(data.parsed.recentGames).toBeDefined();
  expectTypeOf(data.parsed.recentGames).toEqualTypeOf<RecentGame[] | null>();
  client.destroy();
});

test('Client#getPlayerHouses (No input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getPlayerHouses()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#getPlayerHouses', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getPlayerHouses('69e04609da2a4e7dabb83546a971969e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<House[]>>();
  data.parsed.forEach((house: House) => {
    expect(house).toBeDefined();
    expect(house).toBeInstanceOf(House);
    expectTypeOf(house).toEqualTypeOf<House>();
    expect(house.name).toBeDefined();
    expectTypeOf(house.name).toEqualTypeOf<string>();
    expect(house.uuid).toBeDefined();
    expectTypeOf(house.uuid).toEqualTypeOf<string>();
    expect(house.owner).toBeDefined();
    expectTypeOf(house.owner).toEqualTypeOf<string>();
    expect(house.createdAtTimestamp).toBeDefined();
    expectTypeOf(house.createdAtTimestamp).toEqualTypeOf<number | null>();
    expect(house.createdAt).toBeDefined();
    expectTypeOf(house.createdAt).toEqualTypeOf<Date | null>();
    expect(house.players).toBeDefined();
    expectTypeOf(house.players).toEqualTypeOf<number>();
    expect(house.cookies).toBeDefined();
    expectTypeOf(house.cookies).toEqualTypeOf<number>();
    expect(house.toString()).toBeDefined();
    expectTypeOf(house.toString()).toEqualTypeOf<string>();
    expect(house.toString()).toBe(house.name);
  });
  client.destroy();
});

test('Client#getQuests', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getQuests();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Quests>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedTimestamp).toBeGreaterThanOrEqual(0);
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.questsPerGame).toBeDefined();
  expectTypeOf(data.parsed.questsPerGame).toEqualTypeOf<Record<string, GameQuests>>();
  Object.keys(data.parsed.questsPerGame).forEach((game) => {
    if (undefined === data.parsed.questsPerGame[game]) return;
    expect(data.parsed.questsPerGame[game]).toBeDefined();
    expect(data.parsed.questsPerGame[game]).toBeInstanceOf(GameQuests);
    expectTypeOf(data.parsed.questsPerGame[game]).toEqualTypeOf<GameQuests>();
    expect(data.parsed.questsPerGame[game].game).toBeDefined();
    expect(data.parsed.questsPerGame[game].game).toBe(game);
    expectTypeOf(data.parsed.questsPerGame[game].game).toEqualTypeOf<string>();
    expect(data.parsed.questsPerGame[game].quests).toBeDefined();
    expectTypeOf(data.parsed.questsPerGame[game].quests).toEqualTypeOf<Quest[]>();
    data.parsed.questsPerGame[game].quests.forEach((quest: Quest) => {
      expect(quest).toBeDefined();
      expect(quest).toBeInstanceOf(Quest);
      expectTypeOf(quest).toEqualTypeOf<Quest>();
      expect(quest.id).toBeDefined();
      expectTypeOf(quest.id).toEqualTypeOf<string>();
      expect(quest.name).toBeDefined();
      expectTypeOf(quest.name).toEqualTypeOf<string>();
      expect(quest.description).toBeDefined();
      expectTypeOf(quest.description).toEqualTypeOf<string>();
      expect(quest.rewards).toBeDefined();
      expectTypeOf(quest.rewards).toEqualTypeOf<QuestReward[]>();
      expect(quest.type).toBeDefined();
      expectTypeOf(quest.type).toEqualTypeOf<QuestType>();
      expect(quest.objectives).toBeDefined();
      expectTypeOf(quest.objectives).toEqualTypeOf<QuestObjective[]>();
    });
  });
  client.destroy();
});

test('Client#getRecentGames (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getRecentGames()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#getRecentGames', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getRecentGames('ea805d40e8284d8d8e64e9fc8ac301ca');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<RecentGame[]>>();
  data.parsed.forEach((game: RecentGame) => {
    expect(game).toBeDefined();
    expectTypeOf(game).toEqualTypeOf<RecentGame>();
    expect(game).toBeInstanceOf(RecentGame);
    expect(game.game).toBeDefined();
    expectTypeOf(game.game).toEqualTypeOf<Game | null>();
    expect(game.dateTimestamp).toBeDefined();
    expectTypeOf(game.dateTimestamp).toEqualTypeOf<number | null>();
    expect(game.dateAt).toBeDefined();
    expectTypeOf(game.dateAt).toEqualTypeOf<Date | null>();
    expect(game.mode).toBeDefined();
    expectTypeOf(game.mode).toEqualTypeOf<string | null>();
    expect(game.map).toBeDefined();
    expectTypeOf(game.map).toEqualTypeOf<string | null>();
    expect(game.ongoing).toBeDefined();
    expectTypeOf(game.ongoing).toEqualTypeOf<boolean>();
    expect(game.endedTimestamp).toBeDefined();
    expectTypeOf(game.endedTimestamp).toEqualTypeOf<number | null>();
    expect(game.endedAt).toBeDefined();
    expectTypeOf(game.endedAt).toEqualTypeOf<Date | null>();
    expect(game.toString()).toBeDefined();
    expect(game.toString()).toEqual(game.mode);
    expectTypeOf(game.toString()).toEqualTypeOf<string | null>();
  });
  client.destroy();
});

test('Client#getSkyBlockAuction (No Type Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction()).rejects.toThrowError(Errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('Client#getSkyBlockAuction (Bad Type Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction('meow', 'meow')).rejects.toThrowError(Errors.BAD_AUCTION_FILTER);
  client.destroy();
});

test('Client#getSkyBlockAuction (No Query Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuction('AUCTION_ID')).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('Client#getSkyBlockAuction (PROFILE)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const auctions = await client.getSkyBlockAuctions(1);
  if (undefined === auctions.parsed.auctions[0]) return;
  if (!auctions.parsed.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyBlockAuction('PROFILE', auctions.parsed.auctions[0].auctioneerProfile);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('Client#getSkyBlockAuction (PLAYER)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const auctions = await client.getSkyBlockAuctions(1);
  if (undefined === auctions.parsed.auctions[0]) return;
  if (!auctions.parsed.auctions[0].auctioneerUuid) throw new Error("Something wen't wrong while fetching auctions");
  const data = await client.getSkyBlockAuction('PLAYER', auctions.parsed.auctions[0].auctioneerUuid);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('Client#getSkyBlockAuctions (No Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuctions()).rejects.toThrowError(Errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#getSkyBlockAuctions (Negative Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getSkyBlockAuctions(-1)).rejects.toThrowError(Errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#getSkyBlockAuctions (Page 0)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getSkyBlockAuctions(0)).rejects.toThrowError(Errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#getSkyBlockAuctions (String Input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockAuctions('hi')).rejects.toThrowError(Errors.INVALID_OPTION_VALUE);
  client.destroy();
});

test('Client#getSkyBlockAuctions (One Page)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockAuctions(1);
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionsResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('Client#getSkyBlockAuctions (All Pages)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockAuctions('*');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionsResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('Client#getSkyBlockBazaar', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockBazaar();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockBazaar>>();
  expect(data.parsed.lastUpdated).toBeDefined();
  expectTypeOf(data.parsed.lastUpdated).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.products).toBeDefined();
  expectTypeOf(data.parsed.products).toEqualTypeOf<SkyBlockBazaarProduct[]>();
  client.destroy();
});

test('Client#getSkyBlockBingo', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockBingo();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockBingo>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.id).toBeDefined();
  expectTypeOf(data.parsed.id).toEqualTypeOf<number | null>();
  expect(data.parsed.name).toBeDefined();
  expectTypeOf(data.parsed.name).toEqualTypeOf<string>();
  expect(data.parsed.start).toBeDefined();
  expectTypeOf(data.parsed.start).toEqualTypeOf<number>();
  expect(data.parsed.startAt).toBeDefined();
  expectTypeOf(data.parsed.startAt).toEqualTypeOf<Date>();
  expect(data.parsed.end).toBeDefined();
  expectTypeOf(data.parsed.end).toEqualTypeOf<number>();
  expect(data.parsed.endAt).toBeDefined();
  expectTypeOf(data.parsed.endAt).toEqualTypeOf<Date>();
  expect(data.parsed.goals).toBeDefined();
  expectTypeOf(data.parsed.goals).toEqualTypeOf<SkyBlockBingoGoal[] | null>();
  client.destroy();
});

test('Client#getSkyBlockCollections', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockCollections();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockCollections>>();
  expect(data.parsed.lastUpdated).toBeDefined();
  expectTypeOf(data.parsed.lastUpdated).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.version).toBeDefined();
  expectTypeOf(data.parsed.version).toEqualTypeOf<string>();
  expect(data.parsed.farming).toBeDefined();
  expectTypeOf(data.parsed.farming).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.parsed.mining).toBeDefined();
  expectTypeOf(data.parsed.mining).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.parsed.combat).toBeDefined();
  expectTypeOf(data.parsed.combat).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.parsed.foraging).toBeDefined();
  expectTypeOf(data.parsed.foraging).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.parsed.fishing).toBeDefined();
  expectTypeOf(data.parsed.fishing).toEqualTypeOf<SkyBlockCollection[]>();
  expect(data.parsed.rift).toBeDefined();
  expectTypeOf(data.parsed.rift).toEqualTypeOf<SkyBlockCollection[]>();
  client.destroy();
});

test('Client#getSkyBlockElection', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockElection();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockElectionData>>();
  expect(data.parsed.lastUpdatedTimestamp).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedTimestamp).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.lastElectionResults).toBeDefined();
  expectTypeOf(data.parsed.lastElectionResults).toEqualTypeOf<SkyBlockElection>();
  expect(data.parsed.currentElection).toBeDefined();
  expectTypeOf(data.parsed.currentElection).toEqualTypeOf<SkyBlockElection | null>();
  client.destroy();
});

test('Client#getSkyBlockEndedAuctions', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockEndedAuctions();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockAuctionResult>>();
  expect(data.parsed.info).toBeDefined();
  expectTypeOf(data.parsed.info).toEqualTypeOf<SkyBlockBaseAuctionInfo>();
  expect(data.parsed.auctions).toBeDefined();
  expectTypeOf(data.parsed.auctions).toEqualTypeOf<SkyBlockAuction[]>();
  client.destroy();
});

test('Client#getSkyBlockFireSales', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () =>
      /* eslint-disable camelcase */
      Promise.resolve({
        success: true,
        sales: [
          { item_id: 'PET_SKIN_LION_WHITE', start: 1725120000000, end: 1725552000000, amount: 6500, price: 650 },
          { item_id: 'PET_SKIN_LION_BLACK', start: 1725120000000, end: 1725552000000, amount: 6500, price: 650 }
        ]
      })
    /* eslint-enable camelcase */
  } as any);

  const data = await client.getSkyBlockFireSales();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockFireSale[]>>();
  data.parsed.forEach((FireSale: SkyBlockFireSale) => {
    expect(FireSale.itemId).toBeDefined();
    expectTypeOf(FireSale.itemId).toEqualTypeOf<string>();
    expect(FireSale.startTimestamp).toBeDefined();
    expectTypeOf(FireSale.startTimestamp).toEqualTypeOf<number>();
    expect(FireSale.startAt).toBeDefined();
    expectTypeOf(FireSale.startAt).toEqualTypeOf<Date>();
    expect(FireSale.endTimestamp).toBeDefined();
    expectTypeOf(FireSale.endTimestamp).toEqualTypeOf<number>();
    expect(FireSale.endAt).toBeDefined();
    expectTypeOf(FireSale.endAt).toEqualTypeOf<Date>();
    expect(FireSale.amount).toBeDefined();
    expectTypeOf(FireSale.amount).toEqualTypeOf<number>();
    expect(FireSale.price).toBeDefined();
    expectTypeOf(FireSale.price).toEqualTypeOf<number>();
    expect(FireSale.toString).toBeDefined();
    expectTypeOf(FireSale.toString).toEqualTypeOf<() => string>();
    expect(FireSale.toString()).toBeDefined();
    expect(FireSale.toString()).toBe(FireSale.itemId);
    expectTypeOf(FireSale.toString()).toEqualTypeOf<string>();
  });
  vi.restoreAllMocks();
  client.destroy();
});

test('Client#getSkyBlockGarden', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockGarden('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockGarden>>();
  expect(data.parsed.level).toBeDefined();
  expectTypeOf(data.parsed.level).toEqualTypeOf<SkillLevelData>();
  expect(data.parsed.barnSkin).toBeDefined();
  expectTypeOf(data.parsed.barnSkin).toEqualTypeOf<BarnSkin>();
  expect(data.parsed.unlockedBarnSkins).toBeDefined();
  expectTypeOf(data.parsed.unlockedBarnSkins).toEqualTypeOf<BarnSkin[]>();
  expect(data.parsed.unlockedPlots).toBeDefined();
  expectTypeOf(data.parsed.unlockedPlots).toEqualTypeOf<BarnPlot[]>();
  expect(data.parsed.visitors).toBeDefined();
  expectTypeOf(data.parsed.visitors).toEqualTypeOf<SkyBlockGardenVisitors>();
  expect(data.parsed.currentVisitors).toBeDefined();
  expectTypeOf(data.parsed.currentVisitors).toEqualTypeOf<SkyBlockGardenActiveVisitor[]>();
  expect(data.parsed.cropMilestones).toBeDefined();
  expectTypeOf(data.parsed.cropMilestones).toEqualTypeOf<SkyBlockGardenCropMilestones>();
  expect(data.parsed.composter).toBeDefined();
  expectTypeOf(data.parsed.composter).toEqualTypeOf<SkyBlockGardenComposter>();
  expect(data.parsed.cropUpgrades).toBeDefined();
  expectTypeOf(data.parsed.cropUpgrades).toEqualTypeOf<SkyBlockGardenCropsUpgrades>();
  client.destroy();
});

test('Client#getSkyBlockItems', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockItems();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockItem[]>>();
  data.parsed.forEach((item: SkyBlockItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(SkyBlockItem);
    expectTypeOf(item).toEqualTypeOf<SkyBlockItem>();
  });
  client.destroy();
});

test('getSkyBlockMuseum (No input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockMuseum()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('getSkyBlockMuseum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockMuseum>>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<Record<UUID, SkyBlockMuseumMember>>();
  client.destroy();
});

test('Client#getSkyBlockMuseum', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockMuseum('63fe6f4c-4b06-43b2-abd0-2d15dc303e41');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockMuseum>>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<Record<UUID, SkyBlockMuseumMember>>();
  client.destroy();
});

test('Client#getSkyBlockNews', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockNews();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockNews[]>>();
  data.parsed.forEach((news: SkyBlockNews) => {
    expect(news.title).toBeDefined();
    expectTypeOf(news.title).toEqualTypeOf<string>();
    expect(news.link).toBeDefined();
    expectTypeOf(news.link).toEqualTypeOf<string>();
    expect(news.date).toBeDefined();
    expectTypeOf(news.date).toEqualTypeOf<Date | null>();
    expect(news.version).toBeDefined();
    expectTypeOf(news.version).toEqualTypeOf<string | null>();
  });
  client.destroy();
});

test('Client#getSkyBlockProfile (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockProfile()).rejects.toThrowError(Errors.NO_UUID);
  client.destroy();
});

test('Client#getSkyBlockProfile (no profiles)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getSkyBlockProfile('ce6685dd-78dd-4418-9f6f-b01cf9778daa')).rejects.toThrowError(
    Errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('Client#getSkyBlockProfile', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockProfile('ed9b9d6d-d9b7-43b1-9841-5d0c20b55494');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockProfile>>();
  expect(data.parsed.profileId).toBeDefined();
  expectTypeOf(data.parsed.profileId).toEqualTypeOf<string>();
  expect(data.parsed.communityUpgrades).toBeDefined();
  expectTypeOf(data.parsed.communityUpgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
  expect(data.parsed.createdTimestamp).toBeDefined();
  expectTypeOf(data.parsed.createdTimestamp).toEqualTypeOf<number | null>();
  expect(data.parsed.createdAt).toBeDefined();
  expectTypeOf(data.parsed.createdAt).toEqualTypeOf<Date | null>();
  expect(data.parsed.members).toBeDefined();
  expectTypeOf(data.parsed.members).toEqualTypeOf<SkyBlockMember[]>();
  expect(data.parsed.me).toBeDefined();
  expectTypeOf(data.parsed.me).toEqualTypeOf<SkyBlockMember | null>();
  expect(data.parsed.gameMode).toBeDefined();
  expectTypeOf(data.parsed.gameMode).toEqualTypeOf<SkyBlockProfileType | null>();
  expect(data.parsed.banking).toBeDefined();
  expectTypeOf(data.parsed.banking).toEqualTypeOf<SkyBlockProfileBanking>();
  expect(data.parsed.profileName).toBeDefined();
  expectTypeOf(data.parsed.profileName).toEqualTypeOf<SkyBlockProfileName | 'UNKNOWN'>();
  expect(data.parsed.selected).toBeDefined();
  expectTypeOf(data.parsed.selected).toEqualTypeOf<boolean>();
  expect(data.parsed.garden).toBeDefined();
  expectTypeOf(data.parsed.garden).toEqualTypeOf<RequestData<SkyBlockGarden> | null>();
  client.destroy();
});

test('Client#getSkyBlockProfiles (no input)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.getSkyBlockProfiles()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  client.destroy();
});

test('Client#getSkyBlockProfiles (no profiles)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  await expect(() => client.getSkyBlockProfiles('b491990d53fd4c5fa61e19d58cc7eddf')).rejects.toThrowError(
    Errors.NO_SKYBLOCK_PROFILES
  );
  client.destroy();
});

test('Client#getSkyBlockProfiles', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockProfiles('14727faefbdc4aff848cd2713eb9939e');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<
    RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>
  >();
  data.parsed.forEach((profile) => {
    expect(profile).toBeDefined();
    expectTypeOf(profile).toEqualTypeOf<SkyBlockProfile>();
    expect(profile.profileId).toBeDefined();
    expectTypeOf(profile.profileId).toEqualTypeOf<string>();
    expect(profile.communityUpgrades).toBeDefined();
    expectTypeOf(profile.communityUpgrades).toEqualTypeOf<SkyBlockProfileCommunityUpgrades>();
    expect(profile.createdTimestamp).toBeDefined();
    expectTypeOf(profile.createdTimestamp).toEqualTypeOf<number | null>();
    expect(profile.createdAt).toBeDefined();
    expectTypeOf(profile.createdAt).toEqualTypeOf<Date | null>();
    expect(profile.members).toBeDefined();
    expectTypeOf(profile.members).toEqualTypeOf<SkyBlockMember[]>();
    expect(profile.me).toBeDefined();
    expectTypeOf(profile.me).toEqualTypeOf<SkyBlockMember | null>();
    expect(profile.gameMode).toBeDefined();
    expectTypeOf(profile.gameMode).toEqualTypeOf<SkyBlockProfileType | null>();
    expect(profile.banking).toBeDefined();
    expectTypeOf(profile.banking).toEqualTypeOf<SkyBlockProfileBanking>();
    expect(profile.profileName).toBeDefined();
    expectTypeOf(profile.profileName).toEqualTypeOf<SkyBlockProfileName | 'UNKNOWN'>();
    expect(profile.selected).toBeDefined();
    expectTypeOf(profile.selected).toEqualTypeOf<boolean>();
    expect(profile.garden).toBeDefined();
    expectTypeOf(profile.garden).toEqualTypeOf<RequestData<SkyBlockGarden> | null>();
  });
  client.destroy();
});

test('Client#getSkyBlockSkills', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getSkyBlockSkills();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<RequestData<SkyBlockSkills>>();
  expect(data.parsed.lastUpdated).toBeDefined();
  expectTypeOf(data.parsed.lastUpdated).toEqualTypeOf<number>();
  expect(data.parsed.lastUpdatedAt).toBeDefined();
  expectTypeOf(data.parsed.lastUpdatedAt).toEqualTypeOf<Date>();
  expect(data.parsed.version).toBeDefined();
  expectTypeOf(data.parsed.version).toEqualTypeOf<string>();
  expect(data.parsed.farming).toBeDefined();
  expectTypeOf(data.parsed.farming).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.mining).toBeDefined();
  expectTypeOf(data.parsed.mining).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.combat).toBeDefined();
  expectTypeOf(data.parsed.combat).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.foraging).toBeDefined();
  expectTypeOf(data.parsed.foraging).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.fishing).toBeDefined();
  expectTypeOf(data.parsed.fishing).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.enchanting).toBeDefined();
  expectTypeOf(data.parsed.enchanting).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.alchemy).toBeDefined();
  expectTypeOf(data.parsed.alchemy).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.carpentry).toBeDefined();
  expectTypeOf(data.parsed.carpentry).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.runecrafting).toBeDefined();
  expectTypeOf(data.parsed.runecrafting).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.social).toBeDefined();
  expectTypeOf(data.parsed.social).toEqualTypeOf<SkyBlockSkill>();
  expect(data.parsed.taming).toBeDefined();
  expectTypeOf(data.parsed.taming).toEqualTypeOf<SkyBlockSkill>();
  client.destroy();
});

test('Client#getStatus', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getStatus('370d6421b761456fadf28c43fe5c4bcf');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<Status>>();
  expect(data.parsed.online).toBeDefined();
  expectTypeOf(data.parsed.online).toEqualTypeOf<boolean>();
  expect(data.parsed.game).toBeDefined();
  expectTypeOf(data.parsed.game).toEqualTypeOf<Game | null>();
  if (data.parsed.game) {
    expect(data.parsed.game).toBeDefined();
    expectTypeOf(data.parsed.game).toEqualTypeOf<Game>();
    expect(data.parsed.game.game).toBeDefined();
    expectTypeOf(data.parsed.game.game).toEqualTypeOf<GameID | GameCode>();
    expect(data.parsed.game.id).toBeDefined();
    expectTypeOf(data.parsed.game.id).toEqualTypeOf<GameID | null>();
    expect(data.parsed.game.code).toBeDefined();
    expectTypeOf(data.parsed.game.code).toEqualTypeOf<GameCode | null>();
    expect(data.parsed.game.name).toBeDefined();
    expectTypeOf(data.parsed.game.name).toEqualTypeOf<GameString | null>();
    expect(data.parsed.game.found).toBeDefined();
    expectTypeOf(data.parsed.game.found).toEqualTypeOf<boolean>();
    expect(data.parsed.game.toString()).toBeDefined();
    expect(data.parsed.game.toString()).toBe(data.parsed.game.name);
    expectTypeOf(data.parsed.game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
  }
  expect(data.parsed.mode).toBeDefined();
  expectTypeOf(data.parsed.mode).toEqualTypeOf<string | null>();
  expect(data.parsed.map).toBeDefined();
  expectTypeOf(data.parsed.map).toEqualTypeOf<string | null>();
  expect(data.parsed.toString()).toBeDefined();
  expectTypeOf(data.parsed.toString()).toEqualTypeOf<'Online' | 'Offline'>();
  expect(data.parsed.toString()).toBe(data.parsed.online ? 'Online' : 'Offline');
  client.destroy();
});

test('Client#getWatchdogStats', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const data = await client.getWatchdogStats();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<RequestData<WatchdogStats>>();
  expect(data.raw).toBeDefined();
  expect(data.parsed).toBeDefined();
  expect(data.parsed).toBeInstanceOf(WatchdogStats);
  expectTypeOf(data.parsed).toEqualTypeOf<WatchdogStats>();
  expect(data.parsed.byWatchdogTotal).toBeDefined();
  expect(data.parsed.byWatchdogTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogTotal).toEqualTypeOf<number>();
  expect(data.parsed.byWatchdogLastMinute).toBeDefined();
  expect(data.parsed.byWatchdogLastMinute).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogLastMinute).toEqualTypeOf<number>();
  expect(data.parsed.byWatchdogRollingDay).toBeDefined();
  expect(data.parsed.byWatchdogRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byWatchdogRollingDay).toEqualTypeOf<number>();
  expect(data.parsed.byStaffTotal).toBeDefined();
  expect(data.parsed.byStaffTotal).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byStaffTotal).toEqualTypeOf<number>();
  expect(data.parsed.byStaffRollingDay).toBeDefined();
  expect(data.parsed.byStaffRollingDay).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.parsed.byStaffRollingDay).toEqualTypeOf<number>();
  client.destroy();
});
