import Auction from '../Structures/SkyBlock/Auctions/Auction.js';
import AuctionInfo from '../Structures/SkyBlock/Auctions/AuctionInfo.js';
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

export interface SkyblockAuctionsResult {
  info: AuctionInfo;
  auctions: Auction[];
}

export type GuildFetchOptions = 'id' | 'name' | 'player';
export type AuctionFetchOptions = 'profile' | 'player' | 'auction';
