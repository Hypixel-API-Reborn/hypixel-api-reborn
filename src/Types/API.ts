/* v8 ignore next 10000 */

import SkyblockAuction from '../Structures/SkyBlock/Auctions/SkyblockAuction.js';
import type SkyblockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyblockAuctionsInfo.js';
import type SkyblockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import type { RequestOptions } from './Requests.js';

export interface PlayerRequestOptions extends RequestOptions {
  guild?: boolean;
  houses?: boolean;
  recentGames?: boolean;
}

export interface AuctionRequestOptions extends RequestOptions {
  includeItemBytes?: boolean;
}

export interface SkyblockRequestOptions extends RequestOptions {
  garden?: boolean;
  museum?: boolean;
}

export interface SkyblockAuctionResult {
  info: SkyblockBaseAucitonInfo;
  auctions: SkyblockAuction[];
}

export interface SkyblockAuctionsResult {
  info: SkyblockAuctionInfo;
  auctions: SkyblockAuction[];
}

export type GuildFetchOptions = 'id' | 'name' | 'player';
export type AuctionFetchOptions = 'PROFILE' | 'PLAYER' | 'AUCTIONID';
