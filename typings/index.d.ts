type PLAYER_RANK = 'Default' | 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'MVP++' | 'YouTube' | 'Helper' | 'Moderator' | 'Admin' | 'BUILD TEAM';
type GAME_NAME = 'Quake Craft' | 'Walls' | 'Paintball' | 'Blitz Survival Games' | 'The TNT Games' | 'VampireZ' | 'Mega Walls' | 'Arcade' | 'Arena Walls' | 'UHC Champions' | 'Cops and Crims' | 'Warlords' | 'Smash Heroes' | 'Turbo Kart Racing' | 'Housing' | 'SkyWars' | 'Crazy Walls' | 'Speed UHC' | 'SkyClash' | 'Classic Games' | 'Prototype' | 'BedWars' | 'Murder Mystery' | 'Build Battle' | 'Duels' | 'SkyBlock' | 'The Pit';
type GAME_ID = 2 | 3 | 4 | 5 | 6 | 7 | 13 | 14 | 17 | 20 | 21 | 23 | 24 | 25 | 26 | 51 | 52 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 63 | 64;
type GAME_CODE = 'QUAKECRAFT' | 'WALLS' | 'PAINTBALL' | 'SURVIVAL_GAMES' | 'TNTGAMES' | 'VAMPIREZ' | 'WALLS3' | 'ARCADE' | 'UHC' | 'MCGO' | 'BATTLEGROUND' | 'SUPER_SMASH' | 'GINGERBREAD' | 'HOUSING' | 'SKYWARS' | 'TRUE_COMBAT' | 'SPEED_UHC' | 'SKYCLASH' | 'LEGACY' | 'PROTOTYPE' | 'BEDWARS' | 'MURDER_MYSTERY' | 'BUILD_BATTLE' | 'DUELS' | 'SKYBLOCK' | 'PIT';
type SKYWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow';
type SKYWARS_PRESTIGE_ICON = '⋆' | '★' | '☆' | '⁕' | '✶' | '✳' | '✴' | '✷' | '❋' | '✼' | '❂' | '❁' | '☬' | '✙' | '❤️' | '☠' | '✦' | '✌' | '❦' | '✵' | '❣' | '☯' | '✺' | 'ಠ_ಠ' | '⚔';
type BEDWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow';

declare module 'hypixel-api-reborn' {
    export const version: string;
    export class Client {
        constructor(key: string);
        public readonly key: string;

        private _makeRequest(url: string): Promise<object>;
        private validApiKey(): Promise<boolean>;

        public getPlayer(query: string): Promise<Player>;
        public getGuild(searchParameter: ('name' | 'player' | 'id'), query: string): Promise<Guild>;
        public getFriends(query: string): Promise<Friend[]>;
        public getWatchdogStats(): Promise<WatchdogStats>;
        public getBoosters(): Promise<Booster[]>;
        public getSkyblockProfiles(uuid: string): Promise<SkyblockProfile[]>;
        public getSkyblockAuctions(page?: number): Promise<Auction[]>;
        public getSkyblockAuctionsByPlayer(uuid: string): Promise<Auction[]>;
        public getSkyblockBazaar(): Promise<Product[]>;
        public getStatus(query: string): Promise<Status>;
        public getOnline(): Promise<number>;
    }
    class Player {
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
        public stats?: {
            skywars: SkyWars,
            bedwars: BedWars,
            uhc: UHC,
            speedUHC: SpeedUHC,
            murdermystery: MurderMystery,
            duels: Duels,
            crazywalls: CrazyWalls,
            buildbattle: BuildBattle,
            megawalls: MegaWalls
        }
    }
    class Status {
        constructor(data: object);
        public online: boolean;
        public game: Game;
        public mode?: string;
        public map?: string
    }
    class Guild {
        constructor(data: object);
        private _data: object;
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
        public achievements: {
            winners: number,
            experienceKings: number,
            onlinePlayers: number
        };
        public preferredGames: Game[];
        public get members(): GuildMember[];
        public get ranks(): GuildRank[];
        public get memberUUIDMap(): Map<string, GuildMember>;
    }
    class Auction {
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
    class Bid {
        constructor(data: object);
        public auctionId: string;
        public profileId: string;
        public amount: number;
        public timestamp: number;
    }
    class Product {
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
    class Order {
        constructor(data: object);
        public amount: number;
        public pricePerUnit: number;
        public orders: number;
    }
    class WatchdogStats {
        constructor(data: object);
        public ByWatchdogTotal: number;
        public ByWatchDogLastMinute: number;
        public ByWatchdogRollingDay: number;
        public ByStaffTotal: number;
        public ByStaffRollingDay: number;
    }
    class GuildMember {
        constructor(data: object);
        public uuid: string;
        public joinedAt: number;
        public questParticipation: number;
        public rank: string;
        public weeklyExperience: number;
    }
    class GuildRank {
        constructor(data: object);
        public name: string;
        public default: boolean;
        public tag: string | null;
        public createdAt: number;
        public priority: number;
    }
    class Friend {
        constructor(data: object);
        public sender: string;
        public receiver: string;
        public friendSince: number;
    }
    class Booster {
        constructor(data: object);
        public purchaser: string;
        public amount: number;
        public originalLength: number;
        public remaining: number;
        public activated: boolean;
        public game: Game;
    }
    class SkyblockProfile {
        constructor(data: object);
        public profileId: string;
        public profileName: string;
        public members: SkyblockMember[];
    }
    class SkyblockMember {
        constructor(data: object);
        public uuid: string;
        public firstJoin: number;
        public lastSave: number;
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
        public getArmor(): Promise<{ helmet: Armor, chestplate: Armor, leggings: Armor, boots: Armor }>
    }
    class Color {
        constructor(color: string)
        public toString(): string;
        public toHex(): string;
        public toName(): string;
    }
    class Armor {
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
    class Item {
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
    class Game {
        constructor(game: string | number);
        public toString(): GAME_NAME;
        public get code(): GAME_CODE;
        public get id(): GAME_ID;
    }
    class SkyWars {
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
    class BedWars {
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
            kills: number,
            deaths: number,
            finalKills: number,
            wins: number,
            losses: number,
            played: number,
            KDRatio: number,
            finalKDRatio: number,
            WLRatio: number,
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            beds: {
                lost: number,
                broken: number,
                BLRatio: number
            }
        };
        public doubles: {
            winstreak: number,
            kills: number,
            deaths: number,
            finalKills: number,
            wins: number,
            losses: number,
            played: number,
            KDRatio: number,
            finalKDRatio: number,
            WLRatio: number,
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            beds: {
                lost: number,
                broken: number,
                BLRatio: number
            }
        };
        public three: {
            winstreak: number,
            kills: number,
            deaths: number,
            finalKills: number,
            wins: number,
            losses: number,
            played: number,
            KDRatio: number,
            finalKDRatio: number,
            WLRatio: number,
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            beds: {
                lost: number,
                broken: number,
                BLRatio: number
            }
        };
        public four: {
            winstreak: number,
            kills: number,
            deaths: number,
            finalKills: number,
            wins: number,
            losses: number,
            played: number,
            KDRatio: number,
            finalKDRatio: number,
            WLRatio: number,
            avg: {
                kills: number,
                finalKills: number,
                bedsBroken: number
            },
            beds: {
                lost: number,
                broken: number,
                BLRatio: number
            }
        };
    }
    class UHC {
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
    class SpeedUHC {
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
    class MurderMystery {
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
    class Duels {
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
    class CrazyWalls {
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
    class BuildBattle {
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
    class MegaWalls {
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