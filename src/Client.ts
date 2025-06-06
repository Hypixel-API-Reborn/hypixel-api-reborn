import API from './API/index.js';
import Achievements from './Structures/Static/Achievements/Achievements.js';
import Booster from './Structures/Boosters/Booster.js';
import CacheHandler from './Private/CacheHandler.js';
import Challenges from './Structures/Static/Challenges.js';
import Errors from './Errors.js';
import Functions from './Private/Functions.js';
import GameCounts from './Structures/GameCounts.js';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import House from './Structures/House.js';
import Leaderboard from './Structures/Leaderboard.js';
import Player from './Structures/Player/Player.js';
import Quests from './Structures/Static/Quests.js';
import RateLimit from './Private/RateLimit.js';
import RecentGame from './Structures/RecentGame.js';
import RequestData from './Private/RequestData.js';
import RequestHandler from './Private/RequestHandler.js';
import Status from './Structures/Status.js';
import Updater from './Private/Updater.js';
import WatchdogStats from './Structures/WatchdogStats.js';
import type SkyBlockBazaar from './Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import type SkyBlockBingo from './Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import type SkyBlockCollections from './Structures/SkyBlock/Collections/SkyBlockCollections.js';
import type SkyBlockElectionData from './Structures/SkyBlock/Election/SkyBlockElectionData.js';
import type SkyBlockFireSale from './Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import type SkyBlockGarden from './Structures/SkyBlock/Garden/SkyBlockGarden.js';
import type SkyBlockItem from './Structures/SkyBlock/SkyBlockItem.js';
import type SkyBlockMuseum from './Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import type SkyBlockNews from './Structures/SkyBlock/News/SkyBlockNews.js';
import type SkyBlockProfile from './Structures/SkyBlock/Profile/SkyBlockProfile.js';
import type SkyBlockSkills from './Structures/SkyBlock/Skills/SkyBlockSkills.js';
import type {
  AuctionFetchOptions,
  AuctionRequestOptions,
  GuildFetchOptions,
  PlayerRequestOptions,
  SkyBlockAuctionResult,
  SkyBlockAuctionsResult,
  SkyBlockRequestOptions
} from './Types/API.js';
import type { ClientOptions } from './Types/Client.js';
import type { RequestOptions } from './Types/Requests.js';
import type { SkyBlockProfileName } from './Types/SkyBlock.js';

const clients: Client[] = [];

class Client {
  declare options: ClientOptions;
  declare requestHandler: RequestHandler;
  declare cacheHandler: CacheHandler;
  declare functions: Functions;
  declare updater: Updater;
  declare errors: Errors;
  declare rateLimit: RateLimit;
  readonly key: string;
  declare interval: NodeJS.Timeout;
  constructor(key: string, options?: ClientOptions) {
    this.key = key;
    this.errors = new Errors();
    if (!this.key.length) throw new Error(this.errors.NO_API_KEY);
    this.options = this.parasOptions(options);
    this.requestHandler = new RequestHandler(this);
    this.cacheHandler = new CacheHandler(this);
    this.functions = new Functions(this);
    this.updater = new Updater(this);
    this.rateLimit = new RateLimit(this);
    if ('NONE' !== this.options.rateLimit) this.rateLimit.initialize();
    for (const func in API) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const endpoint = new API[func](this);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this[func] = endpoint.execute.bind(endpoint);
    }
    if (clients.find((x) => x.key === key)) {
      // eslint-disable-next-line no-console
      console.warn(this.errors.MULTIPLE_INSTANCES);
      const found = clients.find((x) => x.key === key);
      if (found) {
        this.destroy();
        Object.assign(this, found);
      }
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
    if (-1 !== clientIndex) clients.splice(clientIndex, 1);
    if (this.interval) clearInterval(this.interval);
    if (this.rateLimit.interval) clearInterval(this.rateLimit.interval);
  }

  private parasOptions(options?: ClientOptions): ClientOptions {
    return {
      cache: options?.cache ?? true,
      cacheTime: options?.cacheTime ?? 300,
      cacheMaxKeys: options?.cacheMaxKeys ?? -1,
      cacheCheckPeriod: options?.cacheCheckPeriod ?? 180,
      rateLimit: options?.rateLimit ?? 'AUTO',
      silent: options?.silent ?? false,
      checkForUpdates: options?.checkForUpdates ?? true,
      checkForUpdatesInterval: options?.checkForUpdatesInterval ?? 60
    };
  }

  /* v8 ignore next 140 */
  public getAchievements(options?: RequestOptions): Promise<Achievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getActiveHouses(options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getBoosters(options?: RequestOptions): Promise<Booster[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getChallenges(options?: RequestOptions): Promise<Challenges | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGameCounts(options?: RequestOptions): Promise<GameCounts | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGuild(
    searchParameter: GuildFetchOptions,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getGuildAchievements(options?: RequestOptions): Promise<GuildAchievements | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getHouse(query: string, options?: RequestOptions): Promise<House | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getLeaderboards(options?: RequestOptions): Promise<Record<string, Leaderboard[]> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getPlayer(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getPlayerHouses(query: string, options?: RequestOptions): Promise<House[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getQuests(options?: RequestOptions): Promise<Quests | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getRecentGames(query: string, options?: RequestOptions): Promise<RecentGame[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockAuction(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<SkyBlockAuctionResult | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockAuctions(
    query: number | '*',
    options?: AuctionRequestOptions
  ): Promise<SkyBlockAuctionsResult | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockBazaar(options?: RequestOptions): Promise<SkyBlockBazaar | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockBingo(options?: RequestOptions): Promise<SkyBlockBingo | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockCollections(options?: RequestOptions): Promise<SkyBlockCollections | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockElection(options?: RequestOptions): Promise<SkyBlockElectionData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockEndedAuctions(options?: AuctionRequestOptions): Promise<SkyBlockAuctionResult | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockFireSales(options?: RequestOptions): Promise<SkyBlockFireSale[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockGarden(profileId: string, options?: RequestOptions): Promise<SkyBlockGarden | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockItems(options?: RequestOptions): Promise<SkyBlockItem[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockMuseum(profileId: string, options?: RequestOptions): Promise<SkyBlockMuseum | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockNews(options?: RequestOptions): Promise<SkyBlockNews[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockProfile(
    profileId: string,
    options?: SkyBlockRequestOptions
  ): Promise<SkyBlockProfile | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockProfiles(
    query: string,
    options?: SkyBlockRequestOptions
  ): Promise<Map<SkyBlockProfileName | 'UNKNOWN', SkyBlockProfile> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyBlockSkills(options?: RequestOptions): Promise<SkyBlockSkills | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getStatus(query: string, options?: RequestOptions): Promise<Status | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getWatchdogStats(options?: RequestOptions): Promise<WatchdogStats | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }
}

export default Client;
