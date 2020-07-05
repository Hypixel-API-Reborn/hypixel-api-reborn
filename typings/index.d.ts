import Player from "../src/structures/Player";
import Guild from "../src/structures/Guild/Guild";
import Friend from "../src/structures/Friend";
import WatchdogStats from "../src/structures/Watchdog/Stats";
import Booster from "../src/structures/Boosters/Booster";
import SkyblockProfile from "../src/structures/SkyBlock/SkyblockProfile";
import Auction from "../src/structures/SkyBlock/Auctions/Auction";
import Product from "../src/structures/SkyBlock/Bazzar/Product";

declare module 'hypixel-api-reborn' {
    export const version: string;
    export class Client {
        constructor(key: string);
        public readonly key: string;

        private async _makeRequest(url: string): Object;
        private async validApiKey(): boolean;

        public async getPlayer(query: string): Player;
        public async getGuild(searchParameter: ('name'|'player'|'id'), query: string): Promise<Guild>;
        public async getFriends(query: string): Promise<Array<Friend>>;
        public async getWatchdog(): Promise<WatchdogStats>;
        public async getBoosters(): Promise<Array<Booster>>;
        public async getSkyblockProfiles(uuid: string): Promise<Array<SkyblockProfile>>;
        public async getSkyblockAuctions(page?: number): Promise<Array<Auction>>;
        public async getSkyblockAuctionsByPlayer(uuid: string): Promise<Array<Auction>>;
        public async getSkyblockBazaar(): Promise<Array<Product>>;
        public async getOnline(): Promise<Number>;
    }
}

