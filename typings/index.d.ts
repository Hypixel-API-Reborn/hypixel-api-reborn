type PLAYER_RANK = 'Default' | 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'MVP++' | 'YouTube' | 'Helper' | 'Moderator' | 'Admin' | 'BUILD TEAM';
type GAME_NAME = 'Quake Craft' | 'Walls' | 'Paintball' | 'Blitz Survival Games' | 'The TNT Games' | 'VampireZ' | 'Mega Walls' | 'Arcade' | 'Arena Walls' | 'UHC Champions' | 'Cops and Crims' | 'Warlords' | 'Smash Heroes' | 'Turbo Kart Racing' | 'Housing' | 'SkyWars' | 'Crazy Walls' | 'Speed UHC' | 'SkyClash' | 'Classic Games' | 'Prototype' | 'BedWars' | 'Murder Mystery' | 'Build Battle' | 'Duels' | 'SkyBlock' | 'The Pit';
type GAME_ID = 2 | 3 | 4 | 5 | 6 | 7 | 13 | 14 | 17 | 20 | 21 | 23 | 24 | 25 | 26 | 51 | 52 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 63 | 64;
type GAME_CODE = 'QUAKECRAFT' | 'WALLS' | 'PAINTBALL' | 'SURVIVAL_GAMES' | 'TNTGAMES' | 'VAMPIREZ' | 'WALLS3' | 'ARCADE' | 'UHC' | 'MCGO' | 'BATTLEGROUND' | 'SUPER_SMASH' | 'GINGERBREAD' | 'HOUSING' | 'SKYWARS' | 'TRUE_COMBAT' | 'SPEED_UHC' | 'SKYCLASH' | 'LEGACY' | 'PROTOTYPE' | 'BEDWARS' | 'MURDER_MYSTERY' | 'BUILD_BATTLE' | 'DUELS' | 'SKYBLOCK' | 'PIT';
type SKYWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow';
type SKYWARS_PRESTIGE_ICON = '⋆' | '★' | '☆' | '⁕' | '✶' | '✳' | '✴' | '✷' | '❋' | '✼' | '❂' | '❁' | '☬' | '✙' | '❤️' | '☠' | '✦' | '✌' | '❦' | '✵' | '❣' | '☯' | '✺' | 'ಠ_ಠ' | '⚔';
type BEDWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow';
interface clientOptions {
    cache: boolean;
    cacheTime: number;
    cacheSize: number;
}
declare module 'hypixel-api-reborn' {
    export const version: string;

    export const Errors: {
        INVALID_API_KEY: string,
        NO_API_KEY: string,
        KEY_MUST_BE_A_STRING: string,
        NO_NICKNAME_UUID: string,
        NO_UUID: string,
        MALFORMED_UUID: string,
        PLAYER_DOES_NOT_EXIST: string,
        NO_GUILD_QUERY: string,
        INVALID_GUILD_ID: string,
        INVALID_GUILD_SEARCH_PARAMETER: string,
        GUILD_DOES_NOT_EXIST: string,
        INVALID_RESPONSE_BODY: string,
        OPTIONS_MUST_BE_AN_OBJECT: string,
        CACHE_TIME_MUST_BE_A_NUMBER: string,
        CACHE_LIMIT_MUST_BE_A_NUMBER: string
    }
    export class Client {
        constructor(key: string, options?: clientOptions);
        public key: string;
        /**
         * @description Allows you to get statistics of player
         * @param query - player nickname or uuid
         * @param options - player search options
         */
        public getPlayer(query: string, options?: {guild?: boolean}): Promise<Player>;
        /**
         * @description Allows you to get statistics of hypixel guild
         * @param searchParameter 'name', 'player' or 'id'
         * @param query guild name, player nickname or guild id
         */
        public getGuild(searchParameter: ('name' | 'player' | 'id'), query: string): Promise<Guild>;
        /**
         * @description Allows you to get all friends of player
         * @param query player nickname or uuid
         */
        public getFriends(query: string): Promise<Friend[]>;
        /**
         * @description Allows you to get statistics of watchdog anticheat
         */
        public getWatchdogStats(): Promise<WatchdogStats>;
        /**
         * @description Allows you to get all active boosters
         */
        public getBoosters(): Promise<Booster[]>;
        /**
         * @description Allows you to get player's skyblock profiles
         * @param query player uuid
         */
        public getSkyblockProfiles(query: string): Promise<SkyblockProfile[]>;
        /**
         * @description Allows you to get all skyblock auctions
         * @param page number (not required)
         */
        public getSkyblockAuctions(page?: number): Promise<Auction[]>;
        /**
         * @description Allows you to get all auctions of player
         * @param qeury player uuid
         */
        public getSkyblockAuctionsByPlayer(qeury: string): Promise<Auction[]>;
        /**
         * @description Allows you to get list of products
         */
        public getSkyblockBazaar(): Promise<Product[]>;
        /**
         * @description Allows you to get player's network status
         * @param query player nickname or uuid
         */
        public getStatus(query: string): Promise<Status>;
        /**
         * @description Allows you to get current player count
         */
        public getOnline(): Promise<number>;
        /**
         * @description Allows you to get information about API key used
         */
        public getKeyInfo(): Promise<KeyInfo>;
        /**
         * @description Allows you to get leaderboards of each mini-game
         */
        public getLeaderboards(): Promise<{ ARENA: Leaderboard[], COPS_AND_CRIMS: Leaderboard[], WARLORDS: Leaderboard[], BLITZ_SURVIVAL_GAMES: Leaderboard[], UHC: Leaderboard[], WALLS: Leaderboard[], PROTOTYPE: Leaderboard[], PAINTBALL: Leaderboard[], SKYWARS: Leaderboard[], MURDER_MYSTERY: Leaderboard[], SMASH_HEROES: Leaderboard[], DUELS: Leaderboard[], SPEED_UHC: Leaderboard[], TNTGAMES: Leaderboard[], BEDWARS: Leaderboard[], TURBO_KART_RACERS: Leaderboard[], BUILD_BATTLE: Leaderboard[], ARCADE: Leaderboard[], SKYCLASH: Leaderboard[], QUAKECRAFT: Leaderboard[], CRAZY_WALLS: Leaderboard[], MEGA_WALLS: Leaderboard[], VAMPIREZ: Leaderboard[] }>;
    }
    export class Player {
        constructor(data: object);
        public nickname: string;
        public uuid: string;
        public history: string[];
        public rank: PLAYER_RANK;
        public mcVersion: string;
        public lastLogin: number;
        public firstLogin: number;
        public recentlyPlayedGame: Game;
        public plusColor?: Color;
        public karma: number;
        public achievementPoints: number;
        public totalExperience: number;
        public level: number;
        public socialmedia: { name: string, link: string }[];
        public giftsSent: number;
        public giftsReceived: number;
        public isOnline: boolean;
        public guild?: Guild;
        public stats?: {
            skywars?: SkyWars,
            bedwars?: BedWars,
            uhc?: UHC,
            speedUHC?: SpeedUHC,
            murdermystery?: MurderMystery,
            duels?: Duels,
            crazywalls?: CrazyWalls,
            buildbattle?: BuildBattle,
            megawalls?: MegaWalls,
            copsandcrims?: CopsAndCrims,
            tntgames?: TNTGames,
            smashheroes?: SmashHeroes,
            vampirez?: VampireZ,
            blitzsg?: BlitzSurvivalGames,
            arena?: ArenaBrawl
        }
    }
    export class Leaderboard {
        constructor(data: object);
        public name: string;
        public title: string;
        public playerCount: number;
        /**
         * @description Array of player uuids
         */
        public leaders: string[];
    }
    export class KeyInfo {
        constructor(data: object);
        public key: string;
        public owner: string;
        public limitPerMinute: number;
        public requestsInPastMin: number;
        public totalRequests: number;
    }
    export class ArenaBrawl {
        constructor(data: object);
        public coins: number;
        public mode: {
            '1v1': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            '2v2': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            '4v4': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            }
        };
    }
    export class BlitzSurvivalGames {
        constructor(data: object);
        public coins: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public winsSolo: number;
        public winsTeam: number
        public kitStats: {
            name: string,
            games: number,
            level: number,
            experience: number,
            prestige: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            wins: number,
            losses: number,
            WLRatio: number,
            timePlayed: number
        }[];
    }
    export class VampireZ {
        constructor(data: object);
        public coins: number;
        public human: {
            kills: number,
            deaths: number,
            KDRatio: number,
            wins: number
        };
        public zombie: {
            kills: number
        };
        public vampire: {
            kills: number,
            deaths: number,
            KDRatio: number
        };
    }
    export class SmashHeroes {
        constructor(data: object);
        public coins: number;
        public level: number;
        public winstreak: number;
        public games: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public quits: number;
        public mode: {
            '1v1v1v1': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            '2v2': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            '2v2v2': {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            }
        };
        public activeClass: string;
        public heroStats: {
            name: string,
            level: number,
            xp: number,
            prestige: number,
            games: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            wins: number,
            losses: number,
            WLRatio: number
        }[]
    }
    export class TNTGames {
        constructor(data: object);
        public coins: number;
        public winstreak: number;
        public wins: number;
        public tntrun: {
            wins: number,
            deaths: number,
            record: number
        };
        public pvprun: {
            kills: number,
            wins: number,
            deaths: number,
            KDRatio: number,
            record: number
        };
        public tnttag: {
            kills: number,
            wins: number,
            speed: number
        };
        public bowspleef: {
            wins: number,
            tags: number,
            deaths: number
        };
        public wizards: {
            points: number,
            class: string,
            kills: number,
            assists: number,
            wins: number,
            deaths: number,
            KDRatio: number
        };
    }
    export class Status {
        constructor(data: object);
        public online: boolean;
        public game: Game;
        public mode?: string;
        public map?: string
    }
    export class Guild {
        constructor(data: object);
        public id: string;
        public name: string;
        public description: string;
        public experience: number;
        public level: number;
        public createdAt: number;
        public joinable: boolean;
        public publiclyListed: boolean;
        public tag: string;
        public tagColor: Color;
        public legacyRank: number;
        public dailyExperience: { day: string, exp: number }[];
        public achievements: {
            winners: number,
            experienceKings: number,
            onlinePlayers: number
        };
        public chatMuteUntil: number;
        public banner: { Base: string, Patterns: [{ Pattern: string, Color: string }] }
        public preferredGames: Game[];
        public members: GuildMember[];
        public ranks: GuildRank[];
        public ranksByNewest(): GuildRank[];
        public getRankByPriority(data: object, priority: number): GuildRank;
        public memberUUIDMap(): Map<string, GuildMember>;
    }
    export class Auction {
        constructor(data: object);
        public auctionId: string;
        public auctioneerUuid: string;
        public coop: string[];
        public auctionStart: number;
        public auctionEnd: number;
        public item: string;
        public itemLore: string;
        public startingBid: number;
        public highestBid: number;
        public bids: Bid[];
        public claimed: boolean;
        public claimedBidders: string[];
        public bin: boolean;
    }
    export class Bid {
        constructor(data: object);
        public auctionId: string;
        public profileId: string;
        public amount: number;
        public timestamp: number;
        public bidder: string;
    }
    export class Product {
        constructor(data: object);
        public productId: string;
        public sellSummary: Order[];
        public buySummary: Order[];
        public status: {
            sellPrice: number,
            buyPrice: number,
            sellVolume: number,
            buyVolume: number,
            sellMovingWeek: number,
            buyMovingWeek: number,
            sellOrders: number,
            buyOrders: number
        };
    }
    export class Order {
        constructor(data: object);
        public amount: number;
        public pricePerUnit: number;
        public totalPrice: number;
        public orders: number;
    }
    export class WatchdogStats {
        constructor(data: object);
        public byWatchdogTotal: number;
        public byWatchDogLastMinute: number;
        public byWatchdogRollingDay: number;
        public byStaffTotal: number;
        public byStaffRollingDay: number;
    }
    export class GuildMember {
        constructor(data: object);
        public uuid: string;
        public joinedAt: number;
        public questParticipation: number;
        public rank: string;
        public weeklyExperience: number;
        public mutedUntil: number;
        public expHistory: { day: string, exp: number }[];
    }
    export class GuildRank {
        constructor(data: object);
        public name: string;
        public default: boolean;
        public tag: string | null;
        public createdAt: number;
        public priority: number;
    }
    export class Friend {
        constructor(data: object);
        public sender: string;
        public receiver: string;
        public friendSince: number;
    }
    export class Booster {
        constructor(data: object);
        public purchaser: string;
        public amount: number;
        public originalLength: number;
        public remaining: number;
        public activated: boolean;
        public game: Game;
    }
    export class SkyblockProfile {
        constructor(data: object);
        public profileId: string;
        public profileName: string;
        public members: SkyblockMember[];
    }
    export class SkyblockMember {
        constructor(data: object);
        public uuid: string;
        public firstJoin: number;
        public lastSave: number;
        public lastDeath: number;
        public fairySouls: number;
        public skills: {
            taming: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            farming: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            mining: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            combat: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            foraging: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            fishing: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            enchanting: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            alchemy: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            carpentry: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            runecrafting: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            }
        };
        public slayer: {
            zombie: {
                xp: number,
                tier1: number,
                tier2: number,
                tier3: number,
                tier4: number,
                level: number
            },
            spider: {
                xp: number,
                tier1: number,
                tier2: number,
                tier3: number,
                tier4: number,
                level: number
            },
            wolf: {
                xp: number,
                tier1: number,
                tier2: number,
                tier3: number,
                tier4: number,
                level: number
            }
        };
        public dungeons: {
            types: {
                catacombs: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                }
            },
            classes: {
                healer: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                },
                mage: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                },
                berserk: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                },
                archer: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                },
                tank: {
                    xp: number,
                    level: number,
                    maxLevel: number,
                    xpCurrent: number,
                    xpForNext: number,
                    progress: number
                }
            }
        };
        public collections: object;
        public stats: {
            purse: number,
            kills: number,
            deaths: number,
            highest_crit_damage: number,
            highest_critical_damage: number,
            gifts_given: number,
            gifts_received: number
        };
        public getInventory(): Promise<Item[]>;
        public getEnderChest(): Promise<Item[]>;
        public getArmor(): Promise<{ helmet: Armor, chestplate: Armor, leggings: Armor, boots: Armor }>;
    }
    export class Color {
        constructor(color: string)
        public toString(): string;
        public toHex(): string;
        public toName(): string;
    }
    export class Armor {
        constructor(data: object);
        public itemId: number;
        public count: number;
        public name: string;
        public lore: string;
        public loreForEmbed: string;
        public enchantments: object;
        public anvilUses: number;
        public damage: number;
    }
    export class Item {
        constructor(data: object);
        public itemId: number;
        public count: number;
        public name: string;
        public lore: string;
        public loreArray: string[];
        public loreForEmbed: string;
        public enchantments: object;
        public anvilUses: number;
        public damage: number;
    }
    export class Game {
        constructor(game: string | number);
        public toString(): GAME_NAME;
        public get code(): GAME_CODE;
        public get id(): GAME_ID;
    }
    export class SkyWars {
        constructor(data: object);
        public coins: number;
        public souls: number;
        public tokens: number;
        public winStreak: number;
        public kills: number;
        public losses: number;
        public deaths: number;
        public wins: number;
        public lootChests: number;
        public openedLootChests: number;
        public heads: number;
        public level: number;
        public levelFormatted: string;
        public prestige: SKYWARS_PRESTIGE;
        public prestigeIcon: SKYWARS_PRESTIGE_ICON;
        public playedGames: number;
        public KDRatio: number;
        public WLRatio: number;
        public solo: {
            total: {
                played: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                winstreak: number,
                killstreak: number,
                KDRatio: number,
                WLRatio: number
            },
            normal: {
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            },
            insane: {
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            }
        };
        public team: {
            total: {
                played: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            },
            normal: {
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            },
            insane: {
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            }
        };
        public ranked: {
            played: number,
            kills: number,
            wins: number,
            losses: number,
            deaths: number,
            KDRatio: number,
            WLRatio: number
        };
        public mega: {
            played: number,
            kills: number,
            wins: number,
            losses: number,
            deaths: number,
            KDRatio: number,
            WLRatio: number
        };
        public lab: {
            played: number,
            kills: number,
            wins: number,
            losses: number,
            deaths: number,
            KDRatio: number,
            WLRatio: number
        };
    }
    export class CopsAndCrims {
        constructor(data: object);
        public coins: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public roundWins: number;
        public shotsFired: number;
        public headshotKills: number;
        public bombsDefused: number;
        public bombsPlanted: number;
        public killsAsCrim: number;
        public killsAsCop: number;
        public deathmatch: {
            kills: number,
            deaths: number,
            killsAsCrim: number,
            killsAsCop: number
        }
    }
    export class BedWars {
        constructor(data: object);
        public coins: number;
        public level: number;
        public prestige: BEDWARS_PRESTIGE;
        public playedGames: number;
        public wins: number;
        public winstreak: number;
        public kills: number;
        public finalKills: number;
        public losses: number;
        public deaths: number;
        public finalDeaths: number;
        public collectedItemsTotal: {
            iron: number,
            gold: number,
            diamond: number,
            emerald: number
        };
        public beds: {
            lost: number,
            broken: number,
            BLRatio: number
        };
        public avg: {
            finalKills: number,
            kills: number,
            bedsBroken: number
        };
        public KDRatio: number;
        public finalKDRatio: number;
        public WLRatio: number;
        public solo: {
            winstreak: number,
            playedGames: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            finalKills: number,
            finalDeaths: number,
            beds: {
                broken: number,
                lost: number,
                BLRatio: number
            },
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            KDRatio: number,
            WLRatio: number,
            finalKDRatio: number,
        };
        public doubles: {
            winstreak: number,
            playedGames: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            finalKills: number,
            finalDeaths: number,
            beds: {
                broken: number,
                lost: number,
                BLRatio: number
            },
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            KDRatio: number,
            WLRatio: number,
            finalKDRatio: number,
        };
        public three: {
            winstreak: number,
            playedGames: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            finalKills: number,
            finalDeaths: number,
            beds: {
                broken: number,
                lost: number,
                BLRatio: number
            },
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            KDRatio: number,
            WLRatio: number,
            finalKDRatio: number,
        };
        public four: {
            winstreak: number,
            playedGames: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            finalKills: number,
            finalDeaths: number,
            beds: {
                broken: number,
                lost: number,
                BLRatio: number
            },
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            KDRatio: number,
            WLRatio: number,
            finalKDRatio: number,
        };
        public fourV2: {
            winstreak: number,
            playedGames: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            finalKills: number,
            finalDeaths: number,
            beds: {
                broken: number,
                lost: number,
                BLRatio: number
            },
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            KDRatio: number,
            WLRatio: number,
            finalKDRatio: number,
        }
    }
    export class UHC {
        constructor(data: object);
        public coins: number;
        public score: number;
        public kills: number;
        public deaths: number;
        public wins: number;
        public headsEaten: number;
        public starLevel: number;
        public solo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public team: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public redVSblue: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public noDiamond: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public brawl: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public brawlSolo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        public brawlDuo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
    }
    export class SpeedUHC {
        constructor(data: object);
        public coins: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public playedGames: number;
        public winstreak: number;
    }
    export class MurderMystery {
        constructor(data: object);
        public coins: number;
        public playedGames: number;
        public kills: number;
        public deaths: number;
        public winsAsMurderer: number;
        public winsAsDetective: number;
        public wins: number;
        public assassins: {
            wins: number,
            kills: number,
            deaths: number,
            playedGames: number
        };
        public doubleUp: {
            wins: number,
            kills: number,
            deaths: number,
            playedGames: number
        };
        public infection: {
            wins: number,
            kills: number,
            deaths: number,
            playedGames: number
        };
    }
    export class Duels {
        public coins: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public playedGames: number;
        public uhc: {
            v1: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v2: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v4: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            }
        };
        public op: {
            v1: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v2: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            }
        };
        public skywars: {
            v1: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v2: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            }
        };
        public sumo: {
            kills: number,
            deaths: number,
            wins: number,
            losses: number
        };
        public classic: {
            kills: number,
            deaths: number,
            wins: number,
            losses: number
        };
        public combo: {
            kills: number,
            deaths: number,
            wins: number,
            losses: number
        };
        public bridge: {
            v1: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v2: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            v4: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            }
        };
    }
    export class CrazyWalls {
        constructor(data: object);
        public coins: number;
        public winstreak: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public solo: {
            normal: {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            lucky: {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            }
        };
        public team: {
            normal: {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            },
            lucky: {
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number
            }
        };
    }
    export class BuildBattle {
        constructor(data: object);
        public score: number;
        public playedGames: number;
        public coins: number;
        public totalVotes: number;
        public winsTotal: number;
        public wins: {
            solo: number,
            team: number,
            pro: number,
            gtb: number
        };
    }
    export class MegaWalls {
        constructor(data: object)
        public selectedClass: string;
        public coins: number;
        public kills: number;
        public assists: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public finalKills: number;
        public finalAssists: number;
        public finalDeaths: number;
        public playedGames: number;
        public witherDamage: number;
        public defenderKills: number;
        public mode: {
            normal: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            faceoff: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            },
            casualBrawl: {
                kills: number,
                deaths: number,
                wins: number,
                losses: number
            }
        };
    }
}