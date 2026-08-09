import Achievements from './Structures/Static/Achievements/Achievements.js';
import Booster from './Structures/Boosters/Booster.js';
import CacheHandler from './Private/CacheHandler.js';
import Challenges from './Structures/Static/Challenges.js';
import Errors from './Errors.js';
import GameCounts from './Structures/Static/GameCounts/GameCounts.js';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import House from './Structures/House.js';
import HypixelAPIRebornError from './Private/HypixelAPIRebornError.js';
import Leaderboard from './Structures/Leaderboard.js';
import Player from './Structures/Player/Player.js';
import Quests from './Structures/Static/Quests.js';
import RecentGame from './Structures/RecentGame.js';
import RequestData from './Private/RequestData.js';
import RequestHandler from './Private/RequestHandler.js';
import SkyBlockAuction from './Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import SkyBlockBaseAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import SkyBlockBazaar from './Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import SkyBlockBingo from './Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import SkyBlockCollections from './Structures/SkyBlock/Collections/SkyBlockCollections.js';
import SkyBlockElectionData from './Structures/SkyBlock/Election/SkyBlockElectionData.js';
import SkyBlockFireSale from './Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import SkyBlockGarden from './Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockItem from './Structures/SkyBlock/SkyBlockItem.js';
import SkyBlockMuseum from './Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import SkyBlockNews from './Structures/SkyBlock/News/SkyBlockNews.js';
import SkyBlockProfile from './Structures/SkyBlock/Profile/SkyBlockProfile.js';
import SkyBlockSkills from './Structures/SkyBlock/Skills/SkyBlockSkills.js';
import Status from './Structures/Status.js';
import Updater from './Private/Updater.js';
import WatchdogStats from './Structures/WatchdogStats.js';
import { Client as MowojangClient, type MowojangProfile } from 'mowojang';
import { SkyBlockProfileHasMe, isGuildId } from './Utils/index.js';
import type {
  AuctionFetchOption,
  AuctionRequestOptions,
  ClientOptions,
  GuildFetchOption,
  PlayerRequestOptions,
  RequestOptions,
  SkyBlockAuctionResult,
  SkyBlockAuctionsResult,
  SkyBlockProfileName,
  SkyBlockRequestOptions,
  SkyblockProfileWithMe,
  WithSelectedProfile
} from './Types/index.js';

const clients: Client[] = [];

class Client {
  readonly key: string;
  readonly options: ClientOptions;
  readonly requestHandler: RequestHandler;
  readonly mowojang: MowojangClient;
  readonly updater: Updater;
  readonly cacheHandler: CacheHandler;
  interval?: NodeJS.Timeout;
  constructor(key: string, options?: ClientOptions) {
    this.key = key;
    if (!this.key.length) throw new HypixelAPIRebornError(Errors.NO_API_KEY);
    this.options = this.parseOptions(options);
    this.requestHandler = new RequestHandler(this);
    if (this.options.mowojang && this.options.mowojang.version !== MowojangClient.version) {
      console.warn(
        Errors.INVALID_MOWOJANG_VERSION.replace(/{mowojangVersion}/, MowojangClient.version).replace(
          /{currentMowojangVersion}/,
          this.options.mowojang.version
        )
      );
      this.options.mowojang = undefined;
    }
    this.mowojang = this.options.mowojang ?? new MowojangClient();
    this.updater = new Updater(this);
    this.cacheHandler = new CacheHandler(this);

    const found = clients.find((x) => x.key === key);
    if (found) {
      console.warn(Errors.MULTIPLE_INSTANCES);
      this.destroy();
      Object.assign(this, found);
      return;
    }
    if (this.options.checkForUpdates) {
      this.interval = setInterval(
        () => {
          this.updater.checkForUpdates();
        },
        1000 * 60 * (this.options.checkForUpdatesInterval ?? 60)
      );
    }
    clients.push(this);
  }

  destroy() {
    const clientIndex = clients.findIndex((client) => client.key === this.key);
    if (clientIndex !== -1) clients.splice(clientIndex, 1);
    if (this.interval) clearInterval(this.interval);
  }

  private parseOptions(options?: ClientOptions): ClientOptions {
    return {
      cache: options?.cache ?? true,
      cacheTime: options?.cacheTime ?? 300,
      cacheMaxKeys: options?.cacheMaxKeys ?? -1,
      cacheCheckPeriod: options?.cacheCheckPeriod ?? 180,
      silent: options?.silent ?? false,
      checkForUpdates: options?.checkForUpdates ?? true,
      checkForUpdatesInterval: options?.checkForUpdatesInterval ?? 60,
      mowojang: options?.mowojang
    };
  }

  public async getAchievements(options?: RequestOptions): Promise<RequestData<Achievements>> {
    const res = await this.requestHandler.request('/resources/achievements', options);
    return new RequestData<Achievements>(new Achievements(res.rawData), res);
  }

  public async getActiveHouses(options?: RequestOptions): Promise<RequestData<House[]>> {
    const res = await this.requestHandler.request('/housing/active', options);
    return new RequestData<House[]>(
      res.rawData.map((house: Record<string, any>) => new House(house)),
      res
    );
  }

  public async getBoosters(options?: RequestOptions): Promise<RequestData<Booster[]>> {
    const res = await this.requestHandler.request('/boosters', options);
    return new RequestData<Booster[]>(
      res.rawData.boosters.map((booster: Record<string, any>) => new Booster(booster)).reverse(),
      res
    );
  }

  public async getChallenges(options?: RequestOptions): Promise<RequestData<Challenges>> {
    const res = await this.requestHandler.request('/resources/challenges', options);
    return new RequestData<Challenges>(new Challenges(res.rawData), res);
  }

  public async getGameCounts(options?: RequestOptions): Promise<RequestData<GameCounts>> {
    const res = await this.requestHandler.request('/counts', options);
    return new RequestData<GameCounts>(new GameCounts(res.rawData), res);
  }

  public async getGuild(
    searchParameter: GuildFetchOption,
    query: string,
    options?: RequestOptions
  ): Promise<RequestData<Guild | null>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_GUILD_QUERY);
    if (searchParameter === 'id' && !isGuildId(query)) {
      throw new HypixelAPIRebornError(Errors.INVALID_GUILD_ID);
    }
    const isPlayerQuery = searchParameter === 'player';
    let profile: MowojangProfile | undefined;
    if (isPlayerQuery) {
      query = await this.requestHandler.toUUID(query);
      profile = await this.getCachedProfile(query);
    }
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new HypixelAPIRebornError(Errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
    const res = await this.requestHandler.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (!res.rawData.guild && searchParameter !== 'player') {
      throw new HypixelAPIRebornError(Errors.GUILD_DOES_NOT_EXIST);
    }
    return new RequestData<Guild | null>(
      res.rawData.guild ? new Guild(res.rawData.guild, isPlayerQuery ? query : undefined) : null,
      res,
      profile
    );
  }

  public async getGuildAchievements(options?: RequestOptions): Promise<RequestData<GuildAchievements>> {
    const res = await this.requestHandler.request('/resources/guilds/achievements', options);
    return new RequestData<GuildAchievements>(new GuildAchievements(res.rawData), res);
  }

  public async getHouse(query: string, options?: RequestOptions): Promise<RequestData<House>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.requestHandler.request(`/housing/house?house=${query}`, options);
    return new RequestData<House>(new House(res.rawData), res);
  }

  public async getLeaderboards(options?: RequestOptions): Promise<RequestData<Record<string, Leaderboard[]>>> {
    const res = await this.requestHandler.request('/leaderboards', options);
    if (!res.rawData.leaderboards) {
      throw new HypixelAPIRebornError(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const leaderboards: Record<string, Leaderboard[]> = {};
    Object.keys(res.rawData.leaderboards).forEach((key) => {
      leaderboards[key] = res.rawData.leaderboards[key].map(
        (leaderboard: Record<string, any>) => new Leaderboard(leaderboard)
      );
    });
    return new RequestData<Record<string, Leaderboard[]>>(leaderboards, res);
  }

  public async getPlayer(query: string, options?: PlayerRequestOptions): Promise<RequestData<Player>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.requestHandler.toUUID(query);
    const res = await this.requestHandler.request(`/player?uuid=${query}`, options);
    if (query && !res.rawData.player) throw new HypixelAPIRebornError(Errors.PLAYER_HAS_NEVER_LOGGED);
    return new RequestData<Player>(
      new Player(res.rawData.player, {
        guild: options?.guild ? (await this.getGuild('player', query)).parsed : null,
        houses: options?.houses ? (await this.getPlayerHouses(query)).parsed : null,
        recentGames: options?.recentGames ? (await this.getRecentGames(query)).parsed : null
      }),
      res,
      await this.getCachedProfile(query)
    );
  }

  public async getPlayerHouses(query: string, options?: RequestOptions): Promise<RequestData<House[]>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.requestHandler.toUUID(query);
    const res = await this.requestHandler.request(`/housing/houses?player=${query}`, options);
    return new RequestData<House[]>(
      res.rawData.map((house: Record<string, any>) => new House(house)),
      res,
      await this.getCachedProfile(query)
    );
  }

  public async getQuests(options?: RequestOptions): Promise<RequestData<Quests>> {
    const res = await this.requestHandler.request('/resources/quests', options);
    return new RequestData<Quests>(new Quests(res.rawData), res);
  }

  public async getRecentGames(query: string, options?: RequestOptions): Promise<RequestData<RecentGame[]>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.requestHandler.toUUID(query);
    const res = await this.requestHandler.request(`/recentgames?uuid=${query}`, options);
    return new RequestData<RecentGame[]>(
      res.rawData.games.map((game: Record<string, any>) => new RecentGame(game)),
      res,
      await this.getCachedProfile(query)
    );
  }

  public async getSkyBlockAuction(
    type: AuctionFetchOption,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<RequestData<SkyBlockAuctionResult>> {
    let filter: string | null;
    if (type === undefined) throw new HypixelAPIRebornError(Errors.BAD_AUCTION_FILTER);
    if (query === undefined) throw new HypixelAPIRebornError(Errors.NO_UUID);

    switch (type) {
      case 'PROFILE': {
        filter = 'profile';
        break;
      }
      case 'PLAYER': {
        filter = 'player';
        break;
      }
      case 'AUCTION_ID': {
        filter = 'uuid';
        break;
      }
      default: {
        filter = null;
        break;
      }
    }

    if (filter === null) throw new HypixelAPIRebornError(Errors.BAD_AUCTION_FILTER);

    const res = await this.requestHandler.request(`/skyblock/auction?${filter}=${query}`, options);
    return new RequestData<SkyBlockAuctionResult>(
      {
        info: new SkyBlockBaseAuctionInfo(res.rawData),
        auctions: res.rawData.auctions.map(
          (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes ?? false)
        )
      },
      res
    );
  }

  public async getSkyBlockAuctions(
    query: number | '*',
    options?: AuctionRequestOptions
  ): Promise<RequestData<SkyBlockAuctionsResult>> {
    if (!query) throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (typeof query === 'number' && query <= 0) throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (typeof query !== 'number' && query !== '*') throw new HypixelAPIRebornError(Errors.INVALID_OPTION_VALUE);
    if (query === '*') return await this.getSkyBlockAuctionsFetchAllPages();
    return await this.getSkyBlockAuctionsFetchPage(query, options);
  }

  private async getSkyBlockAuctionsFetchAllPages(): Promise<RequestData<SkyBlockAuctionsResult>> {
    const page = 0;
    const { parsed, raw } = await this.getSkyBlockAuctionsFetchPage(page);
    const { info, auctions } = parsed;
    const pages = info.totalPages;
    const requests = [];
    for (let i = 1; i < pages; i++) requests.push(this.getSkyBlockAuctionsFetchPage(i));
    const results = await Promise.all(requests);
    results.forEach(({ parsed }) => auctions.push(...parsed.auctions));
    return new RequestData<SkyBlockAuctionsResult>({ info, auctions }, raw);
  }

  private async getSkyBlockAuctionsFetchPage(
    page: number,
    options?: AuctionRequestOptions
  ): Promise<RequestData<SkyBlockAuctionsResult>> {
    const res = await this.requestHandler.request(`/skyblock/auctions?page=${page}`, options);
    return new RequestData<SkyBlockAuctionsResult>(
      {
        info: new SkyBlockAuctionInfo(res.rawData),
        auctions: res.rawData.auctions.map(
          (Auction: Record<string, any>) => new SkyBlockAuction(Auction, options?.includeItemBytes || false)
        )
      },
      res
    );
  }

  public async getSkyBlockBazaar(options?: RequestOptions): Promise<RequestData<SkyBlockBazaar>> {
    const res = await this.requestHandler.request('/skyblock/bazaar', options);
    return new RequestData<SkyBlockBazaar>(new SkyBlockBazaar(res.rawData), res);
  }

  public async getSkyBlockBingo(options?: RequestOptions): Promise<RequestData<SkyBlockBingo>> {
    const res = await this.requestHandler.request('/resources/skyblock/bingo', options);
    return new RequestData<SkyBlockBingo>(new SkyBlockBingo(res.rawData), res);
  }

  public async getSkyBlockCollections(options?: RequestOptions): Promise<RequestData<SkyBlockCollections>> {
    const res = await this.requestHandler.request('/resources/skyblock/collections', options);
    return new RequestData<SkyBlockCollections>(new SkyBlockCollections(res.rawData), res);
  }

  public async getSkyBlockElection(options?: RequestOptions): Promise<RequestData<SkyBlockElectionData>> {
    const res = await this.requestHandler.request('/resources/skyblock/election', options);
    return new RequestData<SkyBlockElectionData>(new SkyBlockElectionData(res.rawData), res);
  }

  public async getSkyBlockEndedAuctions(options?: AuctionRequestOptions): Promise<RequestData<SkyBlockAuctionResult>> {
    const res = await this.requestHandler.request('/skyblock/auctions_ended', options);
    return new RequestData<SkyBlockAuctionResult>(
      {
        info: new SkyBlockBaseAuctionInfo(res.rawData),
        auctions: res.rawData.auctions.map((Auction: Record<string, any>) => new SkyBlockAuction(Auction))
      },
      res
    );
  }

  public async getSkyBlockFireSales(options?: RequestOptions): Promise<RequestData<SkyBlockFireSale[]>> {
    const res = await this.requestHandler.request('/skyblock/firesales', options);
    return new RequestData<SkyBlockFireSale[]>(
      res.rawData.sales.map((sale: Record<string, any>) => new SkyBlockFireSale(sale)),
      res
    );
  }

  public async getSkyBlockGarden(profileId: string, options?: RequestOptions): Promise<RequestData<SkyBlockGarden>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.requestHandler.request(`/skyblock/garden?profile=${profileId}`, options);
    return new RequestData<SkyBlockGarden>(new SkyBlockGarden(res.rawData.garden), res);
  }

  public async getSkyBlockItems(options?: RequestOptions): Promise<RequestData<SkyBlockItem[]>> {
    const res = await this.requestHandler.request('/resources/skyblock/items', options);
    return new RequestData<SkyBlockItem[]>(
      res.rawData.items.map((item: Record<string, any>) => new SkyBlockItem(item)),
      res
    );
  }

  public async getSkyBlockMuseum(profileId: string, options?: RequestOptions): Promise<RequestData<SkyBlockMuseum>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.requestHandler.request(`/skyblock/museum?profile=${profileId}`, options);
    return new RequestData<SkyBlockMuseum>(new SkyBlockMuseum(res.rawData), res);
  }

  public async getSkyBlockNews(options?: RequestOptions): Promise<RequestData<SkyBlockNews[]>> {
    const res = await this.requestHandler.request('/skyblock/news', options);
    return new RequestData<SkyBlockNews[]>(
      res.rawData.items.map((news: any) => new SkyBlockNews(news)),
      res
    );
  }

  public async getSkyBlockProfile(
    profileId: string,
    options?: SkyBlockRequestOptions
  ): Promise<RequestData<SkyBlockProfile>> {
    if (!profileId) throw new HypixelAPIRebornError(Errors.NO_UUID);
    const res = await this.requestHandler.request(`/skyblock/profile?profile=${profileId}`, options);
    if (!res.rawData.profile) throw new HypixelAPIRebornError(Errors.NO_SKYBLOCK_PROFILES);
    const garden = options?.garden
      ? await this.getSkyBlockGarden(res.rawData.profile.profile_id).catch(() => undefined)
      : undefined;
    const museum = options?.museum
      ? await this.getSkyBlockMuseum(res.rawData.profile.profile_id.profile_id).catch(() => undefined)
      : undefined;
    return new RequestData<SkyBlockProfile>(
      new SkyBlockProfile(res.rawData.profile, { uuid: null, garden, museum }),
      res
    );
  }

  public async getSkyBlockProfiles(
    query: string,
    options?: SkyBlockRequestOptions
  ): Promise<RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.requestHandler.toUUID(query);
    const res = await this.requestHandler.request(`/skyblock/profiles?uuid=${query}`, options);
    if (!res.rawData.profiles || !res.rawData.profiles.length) {
      throw new HypixelAPIRebornError(Errors.NO_SKYBLOCK_PROFILES);
    }
    const profiles: Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> = new Map();
    for (const profile of res.rawData.profiles) {
      const garden = options?.garden
        ? await this.getSkyBlockGarden(profile.profile_id).catch(() => undefined)
        : undefined;
      const museum = options?.museum
        ? await this.getSkyBlockMuseum(profile.profile_id).catch(() => undefined)
        : undefined;
      const parsedProfile = new SkyBlockProfile(profile, { uuid: query, garden, museum });
      profiles.set(parsedProfile.profileName, parsedProfile);
    }

    const selectedProfile = Array.from(profiles.values()).find(
      (profile): profile is SkyblockProfileWithMe => profile.selected === true && SkyBlockProfileHasMe(profile)
    );

    return new RequestData<WithSelectedProfile<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile>>>(
      Object.assign(profiles, { selectedProfile }),
      res,
      await this.getCachedProfile(query)
    );
  }

  public async getSkyBlockSkills(options?: RequestOptions): Promise<RequestData<SkyBlockSkills>> {
    const res = await this.requestHandler.request('/resources/skyblock/skills', options);
    return new RequestData<SkyBlockSkills>(new SkyBlockSkills(res.rawData), res);
  }

  public async getStatus(query: string, options?: RequestOptions): Promise<RequestData<Status>> {
    query = await this.requestHandler.toUUID(query);
    const res = await this.requestHandler.request(`/status?uuid=${query}`, options);
    return new RequestData<Status>(new Status(res.rawData.session), res, await this.getCachedProfile(query));
  }

  public async getWatchdogStats(options?: RequestOptions): Promise<RequestData<WatchdogStats>> {
    const res = await this.requestHandler.request('/punishmentstats', options);
    return new RequestData<WatchdogStats>(new WatchdogStats(res.rawData), res);
  }

  private async getCachedProfile(uuid: string): Promise<MowojangProfile | undefined> {
    if (!(await this.mowojang.cache.has(`profile:uuid:${uuid}`))) return undefined;
    return (await this.mowojang.getProfile(uuid)).data ?? undefined;
  }
}

export default Client;
