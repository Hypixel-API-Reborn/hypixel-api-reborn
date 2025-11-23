import type RequestData from '../Private/RequestData.js';
import type SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import type SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import type SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { RequestOptions } from './Requests.js';
import type { SkyblockProfileWithMe } from './SkyBlock.js';

export interface PlayerRequestOptions extends RequestOptions {
  guild?: boolean;
  houses?: boolean;
  recentGames?: boolean;
}

export interface AuctionRequestOptions extends RequestOptions {
  includeItemBytes?: boolean;
}

export interface SkyBlockRequestOptions extends RequestOptions {
  garden?: boolean;
  museum?: boolean;
}

export interface SkyBlockAuctionResult {
  info: SkyBlockBaseAuctionInfo;
  auctions: SkyBlockAuction[];
  isRaw(): this is RequestData;
}

export interface SkyBlockAuctionsResult {
  info: SkyBlockAuctionInfo;
  auctions: SkyBlockAuction[];
  isRaw(): this is RequestData;
}
export type WithRaw<T> = T & { isRaw(): this is RequestData };
export type WithSelectedProfile<T> = WithRaw<T> & { selectedProfile?: SkyblockProfileWithMe };

export type GuildFetchOptions = 'id' | 'name' | 'player';
export type AuctionFetchOptions = 'PROFILE' | 'PLAYER' | 'AUCTION_ID';
