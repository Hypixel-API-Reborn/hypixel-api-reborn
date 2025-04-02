/* v8 ignore next 10000 */

import SkyBlockAuction from '../Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import type SkyBlockAuctionInfo from '../Structures/SkyBlock/Auctions/SkyBlockAuctionsInfo.js';
import type SkyBlockBaseAucitonInfo from '../Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import type { RequestOptions } from './Requests.js';

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
  info: SkyBlockBaseAucitonInfo;
  auctions: SkyBlockAuction[];
}

export interface SkyBlockAuctionsResult {
  info: SkyBlockAuctionInfo;
  auctions: SkyBlockAuction[];
}

export type GuildFetchOptions = 'id' | 'name' | 'player';
export type AuctionFetchOptions = 'PROFILE' | 'PLAYER' | 'AUCTIONID';
