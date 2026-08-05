import type SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import type SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import type SkyBlockBaseAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { SkyblockProfileWithMe } from './SkyBlock.js';

export interface RequestOptions {
  noCache?: boolean;
  noCacheCheck?: boolean;
}

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
}

export interface SkyBlockAuctionsResult {
  info: SkyBlockAuctionInfo;
  auctions: SkyBlockAuction[];
}
export type WithSelectedProfile<T> = T & { selectedProfile?: SkyblockProfileWithMe };

export const GuildFetchOptions = ['id', 'name', 'player'] as const;
export type GuildFetchOption = (typeof GuildFetchOptions)[number];
export const AuctionFetchOptions = ['PROFILE', 'PLAYER', 'AUCTION_ID'] as const;
export type AuctionFetchOption = (typeof AuctionFetchOptions)[number];
