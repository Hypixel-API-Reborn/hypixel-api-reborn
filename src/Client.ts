import API from './API/index.js';
import Achievements from './Structures/Static/Achievements/Achievements.js';
import Auction from './Structures/SkyBlock/Auctions/Auction.js';
import BingoData from './Structures/SkyBlock/Static/BingoData.js';
import Booster from './Structures/Boosters/Booster.js';
import CacheHandler from './Private/CacheHandler.js';
import Challenges from './Structures/Static/Challenges.js';
import Errors from './Errors.js';
import FireSale from './Structures/SkyBlock/Static/FireSale.js';
import Functions from './Private/Functions.js';
import GameCounts from './Structures/GameCounts.js';
import GovernmentData from './Structures/SkyBlock/Static/Government.js';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import House from './Structures/House.js';
import Leaderboard from './Structures/Leaderboard.js';
import Player from './Structures/Player/Player.js';
import Product from './Structures/SkyBlock/Bazaar/Product.js';
import Quests from './Structures/Static/Quests.js';
import RateLimit from './Private/RateLimit.js';
import RecentGame from './Structures/RecentGame.js';
import RequestData from './Private/RequestData.js';
import RequestHandler from './Private/RequestHandler.js';
import SkyblockGarden from './Structures/SkyBlock/SkyblockGarden.js';
import SkyblockMember from './Structures/SkyBlock/SkyblockMember.js';
import SkyblockMuseum from './Structures/SkyBlock/SkyblockMuseum.js';
import SkyblockNews from './Structures/SkyBlock/News/SkyblockNews.js';
import SkyblockProfile from './Structures/SkyBlock/SkyblockProfile.js';
import SkyblockItem from './Structures/SkyBlock/SkyblockItem.js';
import Status from './Structures/Status.js';
import Updater from './Private/Updater.js';
import WatchdogStats from './Structures/WatchdogStats.js';
import type {
  AuctionFetchOptions,
  AuctionRequestOptions,
  GuildFetchOptions,
  PlayerRequestOptions,
  SkyblockAuctionsResult,
  SkyblockRequestOptions
} from './Types/API.js';
import type { ClientOptions } from './Types/Client.js';
import type { RequestOptions } from './Types/Requests.js';

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

  public getSkyblockAuction(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockAuctions(query: number | '*', options?: AuctionRequestOptions): Promise<SkyblockAuctionsResult> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockAuctionsByPlayer(query: string, options?: AuctionRequestOptions): Promise<Auction[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockBazaar(options?: RequestOptions): Promise<Product[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockBingo(options?: RequestOptions): Promise<BingoData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockFireSales(options?: RequestOptions): Promise<FireSale[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockGarden(profileId: string, options?: RequestOptions): Promise<SkyblockGarden | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockGovernment(options?: RequestOptions): Promise<GovernmentData | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockMember(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<Map<string, SkyblockMember> | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockMuseum(
    query: string,
    profileId: string,
    options?: RequestOptions
  ): Promise<SkyblockMuseum | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockNews(options?: RequestOptions): Promise<SkyblockNews[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockProfiles(
    query: string,
    options?: SkyblockRequestOptions
  ): Promise<SkyblockProfile[] | RequestData> {
    throw new Error(this.errors.ENDPOINT_NOT_LOADED);
  }

  public getSkyblockItems(options?: RequestOptions): Promise<SkyblockItem[] | RequestData> {
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
