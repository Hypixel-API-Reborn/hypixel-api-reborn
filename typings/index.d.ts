type PLAYER_RANK = 'Default' | 'VIP' | 'VIP+' | 'MVP' | 'MVP+' | 'MVP++' | 'YouTube' | 'Helper' | 'Moderator' | 'Admin';
type GAME_NAME = 'Quake Craft' | 'Walls' | 'Paintball' | 'Blitz Survival Games' | 'The TNT Games' | 'VampireZ' | 'Mega Walls' | 'Arcade' | 'Arena Walls' | 'UHC Champions' | 'Cops and Crims' | 'Warlords' | 'Smash Heroes' | 'Turbo Kart Racing' | 'Housing' | 'SkyWars' | 'Crazy Walls' | 'Speed UHC' | 'SkyClash' | 'Classic Games' | 'Prototype' | 'BedWars' | 'Murder Mystery' | 'Build Battle' | 'Duels' | 'SkyBlock' | 'The Pit';
type GAME_ID = 2 | 3 | 4 | 5 | 6 | 7 | 13 | 14 | 17 | 20 | 21 | 23 | 24 | 25 | 26 | 51 | 52 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 63 | 64;
type GAME_CODE = 'QUAKECRAFT' | 'WALLS' | 'PAINTBALL' | 'SURVIVAL_GAMES' | 'TNTGAMES' | 'VAMPIREZ' | 'WALLS3' | 'ARCADE' | 'UHC' | 'MCGO' | 'BATTLEGROUND' | 'SUPER_SMASH' | 'GINGERBREAD' | 'HOUSING' | 'SKYWARS' | 'TRUE_COMBAT' | 'SPEED_UHC' | 'SKYCLASH' | 'LEGACY' | 'PROTOTYPE' | 'BEDWARS' | 'MURDER_MYSTERY' | 'BUILD_BATTLE' | 'DUELS' | 'SKYBLOCK' | 'PIT';
type SKYWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow';
type SKYWARS_PRESTIGE_ICON = '⋆' | '★' | '☆' | '⁕' | '✶' | '✳' | '✴' | '✷' | '❋' | '✼' | '❂' | '❁' | '☬' | '✙' | '❤️' | '☠' | '✦' | '✌' | '❦' | '✵' | '❣' | '☯' | '✺' | 'ಠ_ಠ' | '⚔';
type BEDWARS_PRESTIGE = 'Iron' | 'Gold' | 'Diamond' | 'Emerald' | 'Sapphire' | 'Ruby' | 'Crystal' | 'Opal' | 'Amethyst' | 'Rainbow' | 'Iron Prime' | 'Gold Prime' | 'Diamond Prime' | 'Emerald Prime' | 'Sapphire Prime' | 'Ruby Prime' | 'Crystal Prime' | 'Opal Prime' | 'Amethyst Prime' | 'Mirror' | 'Light' | 'Dawn' | 'Dusk' | 'Air' | 'Wind' | 'Nebula' | 'Thunder' | 'Earth' | 'Water' | 'Fire';
type SOCIAL_MEDIA_ID = 'YOUTUBE' | 'DISCORD' | 'HYPIXEL' | 'TWITTER' | 'INSTAGRAM' | 'TWITCH';
interface clientOptions {
    cache?: boolean;
    cacheTime?: number;
    cacheSize?: number;
    cacheFilter?: string | string[] | { 'whitelist': string | string[], 'blacklist': string | string[] };
    rateLimit?: 'HARD' | 'AUTO' | 'NONE';
}
interface methodOptions {
    noCacheCheck?: boolean;
    noCaching?: boolean;
}
interface playerMethodOptions extends methodOptions {
    guild?: boolean;
}
interface skyblockMemberOptions extends methodOptions {
    fetchPlayer?: boolean;
}
interface auctionsOptions extends methodOptions {
    noInfo?: boolean;
    noAuctions?: boolean;
    raw?: boolean;
    retries?: number;
    cooldown?: number;
    race?: boolean;
    includeItemBytes?: boolean
}
declare module 'hypixel-api-reborn' {
    export const version: string;

    export const Errors: {
        CACHE_FILTER_INVALID: string,
        CACHE_LIMIT_MUST_BE_A_NUMBER: string,
        CACHE_TIME_MUST_BE_A_NUMBER: string,
        ERROR_CODE_CAUSE: string,
        ERROR_STATUSTEXT: string,
        GUILD_DOES_NOT_EXIST: string,
        INVALID_API_KEY: string,
        INVALID_GUILD_ID: string,
        INVALID_GUILD_SEARCH_PARAMETER: string,
        INVALID_OPTION_VALUE: string,
        INVALID_RATE_LIMIT_OPTION: string,
        INVALID_RESPONSE_BODY: string,
        KEY_MUST_BE_A_STRING: string,
        MALFORMED_UUID: string,
        NO_API_KEY: string,
        NO_GUILD_QUERY: string,
        NO_NICKNAME_UUID: string,
        NO_UUID: string,
        OPTIONS_MUST_BE_AN_OBJECT: string,
        PAGE_INDEX_ERROR: string,
        PLAYER_DISABLED_ENDPOINT: string,
        PLAYER_DOES_NOT_EXIST: string,
        PLAYER_HAS_NEVER_LOGGED: string,
        PLAYER_IS_INACTIVE: string,
        SOMETHING_WENT_WRONG: string,
        UUID_NICKNAME_MUST_BE_A_STRING: string
    }
    export const Utils: {
        arrayTools: {
            /**
             * @description Is this string or array?
             */
            isStrArray(): boolean
            /**
             * @description String to array<string>
             */
            strToArray(): string[]
        },
        Constants: {
            skyblock_year_0: 1560275700000,
            leveling_xp: { 1: 50, 2: 125, 3: 200, 4: 300, 5: 500, 6: 750, 7: 1000, 8: 1500, 9: 2000, 10: 3500, 11: 5000, 12: 7500, 13: 10000, 14: 15000, 15: 20000, 16: 30000, 17: 50000, 18: 75000, 19: 100000, 20: 200000, 21: 300000, 22: 400000, 23: 500000, 24: 600000, 25: 700000, 26: 800000, 27: 900000, 28: 1000000, 29: 1100000, 30: 1200000, 31: 1300000, 32: 1400000, 33: 1500000, 34: 1600000, 35: 1700000, 36: 1800000, 37: 1900000, 38: 2000000, 39: 2100000, 40: 2200000, 41: 2300000, 42: 2400000, 43: 2500000, 44: 2600000, 45: 2750000, 46: 2900000, 47: 3100000, 48: 3400000, 49: 3700000, 50: 4000000 },
            xp_past_50: { 51: 4300000, 52: 4600000, 53: 4900000, 54: 5200000, 55: 5500000, 56: 5800000, 57: 6100000, 58: 6400000, 59: 6700000, 60: 7000000 },
            runecrafting_xp: { 1: 50, 2: 100, 3: 125, 4: 160, 5: 200, 6: 250, 7: 315, 8: 400, 9: 500, 10: 625, 11: 785, 12: 1000, 13: 1250, 14: 1600, 15: 2000, 16: 2465, 17: 3125, 18: 4000, 19: 5000, 20: 6200, 21: 7800, 22: 9800, 23: 12200, 24: 15300, 25: 19050 },
            skills: ['farming', 'mining', 'combat', 'foraging', 'fishing', 'enchanting', 'alchemy', 'taming', 'carpentry', 'runecrafting'],
            skills_achievements: { farming: 'skyblockHarvester', mining: 'skyblockExcavator', combat: 'skyblockCombat', foraging: 'skyblockGatherer', fishing: 'skyblockAngler', enchanting: 'skyblockAugmentation', alchemy: 'skyblockConcoctor', taming: 'skyblockDomesticator' },
            skills_cap: { taming: 50, farming: 60, mining: 50, combat: 50, foraging: 50, fishing: 50, enchanting: 50, alchemy: 50, carpentry: 50, runecrafting: 25, dungeons: 50 },
            dungeon_xp: { 1: 50, 2: 75, 3: 110, 4: 160, 5: 230, 6: 330, 7: 470, 8: 670, 9: 950, 10: 1340, 11: 1890, 12: 2665, 13: 3760, 14: 5260, 15: 7380, 16: 10300, 17: 14400, 18: 20000, 19: 27600, 20: 38000, 21: 52500, 22: 71500, 23: 97000, 24: 132000, 25: 180000, 26: 243000, 27: 328000, 28: 445000, 29: 600000, 30: 800000, 31: 1065000, 32: 1410000, 33: 1900000, 34: 2500000, 35: 3300000, 36: 4300000, 37: 5600000, 38: 7200000, 39: 9200000, 40: 12000000, 41: 15000000, 42: 19000000, 43: 24000000, 44: 30000000, 45: 38000000, 46: 48000000, 47: 60000000, 48: 75000000, 49: 93000000, 50: 116250000 },
            slayer_xp: { 1: 5, 2: 15, 3: 200, 4: 1000, 5: 5000, 6: 20000, 7: 100000, 8: 400000, 9: 1000000 },
            pet_score: { COMMON: 1, UNCOMMON: 2, RARE: 3, EPIC: 4, LEGENDARY: 5 },
            base_stats: { damage: 0, health: 100, defense: 0, effective_health: 100, strength: 0, damage_increase: 0, speed: 100, crit_chance: 20, crit_damage: 50, intelligence: 0 },
            stat_template: { damage: 0, health: 0, defense: 0, effective_health: 0, strength: 0, damage_increase: 0, speed: 0, crit_chance: 0, crit_damage: 0, intelligence: 0 },
            bonus_stats: { taming_skill: { 1: { pet_luck: 1 } }, fairy_souls: { 5: { health: 3, defense: 1, strength: 1, speed: 0 }, 10: { health: 3, defense: 1, strength: 1, speed: 0 }, 15: { health: 4, defense: 1, strength: 1, speed: 0 }, 20: { health: 4, defense: 1, strength: 1, speed: 0 }, 25: { health: 5, defense: 2, strength: 2, speed: 0 }, 30: { health: 5, defense: 1, strength: 1, speed: 0 }, 35: { health: 6, defense: 1, strength: 1, speed: 0 }, 40: { health: 6, defense: 1, strength: 1, speed: 0 }, 45: { health: 7, defense: 1, strength: 1, speed: 0 }, 50: { health: 7, defense: 2, strength: 2, speed: 1 }, 55: { health: 8, defense: 1, strength: 1, speed: 0 }, 60: { health: 8, defense: 1, strength: 1, speed: 0 }, 65: { health: 9, defense: 1, strength: 1, speed: 0 }, 70: { health: 9, defense: 1, strength: 1, speed: 0 }, 75: { health: 10, defense: 2, strength: 2, speed: 0 }, 80: { health: 10, defense: 1, strength: 1, speed: 0 }, 85: { health: 11, defense: 1, strength: 1, speed: 0 }, 90: { health: 11, defense: 1, strength: 1, speed: 0 }, 95: { health: 12, defense: 1, strength: 1, speed: 0 }, 100: { health: 12, defense: 2, strength: 2, speed: 1 }, 105: { health: 13, defense: 1, strength: 1, speed: 0 }, 110: { health: 13, defense: 1, strength: 1, speed: 0 }, 115: { health: 14, defense: 1, strength: 1, speed: 0 }, 120: { health: 14, defense: 1, strength: 1, speed: 0 }, 125: { health: 15, defense: 2, strength: 2, speed: 0 }, 130: { health: 15, defense: 1, strength: 1, speed: 0 }, 135: { health: 16, defense: 1, strength: 1, speed: 0 }, 140: { health: 16, defense: 1, strength: 1, speed: 0 }, 145: { health: 17, defense: 1, strength: 1, speed: 0 }, 150: { health: 17, defense: 2, strength: 2, speed: 1 }, 155: { health: 18, defense: 1, strength: 1, speed: 0 }, 160: { health: 18, defense: 1, strength: 1, speed: 0 }, 165: { health: 19, defense: 1, strength: 1, speed: 0 }, 170: { health: 19, defense: 1, strength: 1, speed: 0 }, 175: { health: 20, defense: 2, strength: 2, speed: 0 }, 180: { health: 20, defense: 1, strength: 1, speed: 0 }, 185: { health: 21, defense: 1, strength: 1, speed: 0 }, 190: { health: 21, defense: 1, strength: 1, speed: 0 } }, farming_skill: { 1: { health: 2 }, 15: { health: 3 }, 20: { health: 4 }, 26: { health: 5 } }, combat_skill: { 1: { crit_chance: 0.5, damage_increase: 0.04 } }, mining_skill: { 1: { defense: 1 }, 15: { defense: 2 } }, foraging_skill: { 1: { strength: 1 }, 15: { strength: 2 } }, fishing_skill: { 1: { health: 2 }, 15: { health: 3 }, 20: { health: 4 }, 26: { health: 5 } }, enchanting_skill: { 1: { intelligence: 1 }, 15: { intelligence: 2 } }, alchemy_skill: { 1: { intelligence: 1 }, 15: { intelligence: 2 } }, carpentry_skill: { 1: {} }, runecrafting_skill: { 1: {} }, zombie_slayer: { 1: { health: 2 }, 3: { health: 3 }, 5: { health: 4 }, 7: { health: 5 }, 9: { health: 6 } }, spider_slayer: { 1: { crit_damage: 1 }, 5: { crit_damage: 2 }, 7: { crit_damage: 0, crit_chance: 1 }, 8: { crit_chance: 0, crit_damage: 3 } }, wolf_slayer: { 1: { speed: 1 }, 2: { health: 2 }, 3: { speed: 1 }, 4: { health: 2 }, 5: { crit_damage: 1 }, 6: { health: 3 }, 7: { crit_damage: 2 }, 8: { speed: 1 } }, enchantments: { sharpness: { 1: { damage_multiplicator: 0.05 } }, ender: { 1: { damage_multiplicator: 0.12 } }, giant_killer: { 1: { damage_multiplicator: 0.05 } }, cubism: { 1: { damage_multiplicator: 0.1 } }, impaling: { 1: { damage_multiplicator: 0.125 } }, critical: { 1: { crit_damage: 10 } }, first_strike: { 1: { damage_multiplicator: 0.25 } }, power: { 1: { damage_multiplicator: 0.08 } } } },
            leaderboardNames: { ARENA: 'ARENA', COPS_AND_CRIMS: 'MCGO', WARLORDS: 'BATTLEGROUND', BLITZ_SURVIVAL_GAMES: 'SURVIVAL_GAMES', UHC: 'UHC', WALLS: 'WALLS', PROTOTYPE: 'PROTOTYPE', PAINTBALL: 'PAINTBALL', SKYWARS: 'SKYWARS', MURDER_MYSTERY: 'MURDER_MYSTERY', SMASH_HEROES: 'SUPER_SMASH', DUELS: 'DUELS', SPEED_UHC: 'SPEED_UHC', TNTGAMES: 'TNTGAMES', BEDWARS: 'BEDWARS', TURBO_KART_RACERS: 'GINGERBREAD', BUILD_BATTLE: 'BUILD_BATTLE', ARCADE: 'ARCADE', SKYCLASH: 'SKYCLASH', QUAKECRAFT: 'QUAKECRAFT', CRAZY_WALLS: 'TRUE_COMBAT', MEGA_WALLS: 'WALLS3', VAMPIREZ: 'VAMPIREZ' },
            MiniGamesString: { QUAKECRAFT: 'Quakecraft', WALLS: 'Walls', PAINTBALL: 'Paintball', SURVIVAL_GAMES: 'Blitz Survival Games', TNTGAMES: 'The TNT Games', VAMPIREZ: 'VampireZ', WALLS3: 'Mega Walls', ARCADE: 'Arcade', ARENA: 'Arena Brawl', MCGO: 'Cops and Crims', UHC: 'UHC Champions', BATTLEGROUND: 'Warlords', SUPER_SMASH: 'Smash Heroes', GINGERBREAD: 'Turbo Kart Racers', HOUSING: 'Housing', SKYWARS: 'SkyWars', TRUE_COMBAT: 'Crazy Walls', SPEED_UHC: 'Speed UHC', SKYCLASH: 'SkyClash', LEGACY: 'Classic Games', PROTOTYPE: 'Prototype', BEDWARS: 'BedWars', MURDER_MYSTERY: 'Murder Mystery', BUILD_BATTLE: 'Build Battle', DUELS: 'Duels', PIT: 'The Pit', SKYBLOCK: 'SkyBlock' }
            SkyWarsPrestigeIcons: { default: '⋆', angel_1: '★', angel_2: '☆', angel_3: '⁕', angel_4: '✶', angel_5: '✳', angel_6: '✴', angel_7: '✷', angel_8: '❋', angel_9: '✼', angel_10: '❂', angel_11: '❁', angel_12: '☬', iron_prestige: '✙', gold_prestige: '❤️', diamond_prestige: '☠', emerald_prestige: '✦', sapphire_prestige: '✌', ruby_prestige: '❦', crystal_prestige: '✵', opal_prestige: '❣', amethyst_prestige: '☯', rainbow_prestige: '✺', mythic_prestige: 'ಠ_ಠ', favor_of_the_angel_prestige: '⚔' }
        },
        /**
         * @description Divides a by b
         */
        divide(a: number, b: number): number,
        /**
         * @description Get guild level by experience
         */
        getGuildLevel(exp: number): number
        /**
         * @description Is this guild ID?
         */
        isGuildID(id: string): boolean
        /**
         * @description Is this uuid?
         */
        isUUID(uuid: string): boolean
        removeSnakeCase: {
            /**
             * @description Validates JSON
             */
            validateJSON(obj: object): boolean
            /**
             * @description Converts {str_str: {}} to {strStr: {}} without JSON validation
             */
            single(obj: object): object;
            /**
             * @description Converts {str_str: {}} to {strStr: {}}
             */
            recursive(obj: object): object;
        },
        SkyblockUtils: {
            /**
             * @description Decodes base64 to skyblock inventory data
             */
            decode(base64: string): Promise<object>;
            /**
             * @description Get level by experience
             */
            getLevelByXp(xp: number, type: string, achievements: object): number;
            /**
             * @description Get level by achievement
             */
            getLevelByAchievement(achievementLevel: number, type: string): { xp: number, level: number, maxLevel: number, xpCurrent: number, xpForNext: number, progress: number }
            /**
             * @description Get slayer level
             */
            getSlayerLevel(slayer: object): { xp: number, tier1: number, tier2: number, tier3: number, tier4: number, level: number };
        }
        /**
         * Calls Mojang API for player's nickname by uuid
         * @param input Player UUID
         */
        toIGN(input: string): Promise<string>
        /**
         * Calls Mojang API for player's uuid by nickname
         * @param input Player nickname
         */
        toUUID(input: string): Promise<string>
    }
    export class Client {
        constructor(key: string, options?: clientOptions);
        public key: string;
        public options: clientOptions;
        /**
         * @description Allows you to get statistics of player
         * @param query - player nickname or uuid
         * @param options - player search options
         */
        public getPlayer(query: string, options?: playerMethodOptions): Promise<Player>;
        /**
         * @description Allows you to get statistics of hypixel guild
         * @param searchParameter - 'name', 'player' or 'id'
         * @param query - guild name, player nickname or guild id
         */
        public getGuild(searchParameter: ('name' | 'player' | 'id'), query: string): Promise<Guild>;
        /**
         * @description Allows you to get all friends of player
         * @param query - player nickname or uuid
         */
        public getFriends(query: string, options?: methodOptions): Promise<Friend[]>;
        /**
         * @description Allows you to get statistics of watchdog anticheat
         */
        public getWatchdogStats(options?: methodOptions): Promise<WatchdogStats>;
        /**
         * @description Allows you to get all active boosters
         */
        public getBoosters(options?: methodOptions): Promise<Booster[]>;
        /**
         * @description Allows you to get a player's skyblock profiles
         * @param query - player nickname or uuid
         */
        public getSkyblockProfiles(query: string, options?: skyblockMemberOptions): Promise<SkyblockProfile[]>;
        /**
         * @description Allows you to get a player's skyblock member data from all their profiles
         * @param query - player nickname or uuid
         */
        public getSkyblockMember(query: string, options?: skyblockMemberOptions): Promise<Map<string, SkyblockMember>>;
        /**
         * @description Allows you to get all skyblock auctions
         * @param page - "*", a page number, or an array with the start and the end page number ( automatically sorted )
         * @param options Options
         */
        public getSkyblockAuctions(page?: ('*' | number | [number, number]), options?: auctionsOptions): Promise<{ info?: AuctionInfo, auctions?: Auction[] }>;
        /**
         * @description Allows you to get all ended auctions in around the last 60 seconds
         * @param includeItemBytes - include item bytes (optional)
         */
        public getEndedSkyblockAuctions(includeItemBytes?: boolean, options?: methodOptions): Promise<{ info: AuctionInfo, auctions: PartialAuction[] }>;
        /**
         * @description Allows you to get all auctions of player
         * @param query - player nickname or uuid
         * @param includeItemBytes - include item bytes (optional)
         */
        public getSkyblockAuctionsByPlayer(query: string, includeItemBytes?: boolean, options?: methodOptions): Promise<Auction[]>;
        /**
         * @description Allows you to get list of products
         */
        public getSkyblockBazaar(options?: methodOptions): Promise<Product[]>;
        /**
         * @description Allows you to get player's network status
         * @param query - player nickname or uuid
         */
        public getStatus(query: string, options?: methodOptions): Promise<Status>;
        /**
         * @description Allows you to get current player count
         */
        public getOnline(options?: methodOptions): Promise<number>;
        /**
         * @description Allows you to get information about used API key
         */
        public getKeyInfo(options?: methodOptions): Promise<KeyInfo>;
        /**
         * @description Allows you to get leaderboards of each mini-game
         */
        public getLeaderboards(options?: methodOptions): Promise<{ ARENA: Leaderboard[], COPS_AND_CRIMS: Leaderboard[], WARLORDS: Leaderboard[], BLITZ_SURVIVAL_GAMES: Leaderboard[], UHC: Leaderboard[], WALLS: Leaderboard[], PROTOTYPE: Leaderboard[], PAINTBALL: Leaderboard[], SKYWARS: Leaderboard[], MURDER_MYSTERY: Leaderboard[], SMASH_HEROES: Leaderboard[], DUELS: Leaderboard[], SPEED_UHC: Leaderboard[], TNTGAMES: Leaderboard[], BEDWARS: Leaderboard[], TURBO_KART_RACERS: Leaderboard[], BUILD_BATTLE: Leaderboard[], ARCADE: Leaderboard[], SKYCLASH: Leaderboard[], QUAKECRAFT: Leaderboard[], CRAZY_WALLS: Leaderboard[], MEGA_WALLS: Leaderboard[], VAMPIREZ: Leaderboard[] }>;
        /**
         * @description Allows you to get recent games of a player
         */
        public getRecentGames(options?: methodOptions): Promise<RecentGame[]>;
        /**
         * @param ip - Valid IP/Hostname address
         * @description Pings the minecraft server of hypixel by default
         */
        public getPing(ip?: string): Promise<number>;
        /**
         * @description Parses the RSS feed from status.hypixel.net
         */
        public getAPIStatus(): Promise<APIStatus>;
        /**
         * @param amount - Amount of cache entries to delete
         * @description Allows you to clear cache
         */
        public sweepCache(amount?: number): void;
        public get cache(): Map<string, object>;
    }
    export class Player {
        constructor(data: object);
        public nickname: string;
        public uuid: string;
        public history: string[];
        public rank: PLAYER_RANK;
        public mcVersion: string;
        public lastLoginTimestamp: number;
        public lastLogin: Date;
        public lastLogoutTimestamp: number;
        public lastLogout: Date;
        public firstLoginTimestamp: number;
        public firstLogin: Date;
        public recentlyPlayedGame: Game;
        public plusColor?: Color;
        public karma: number;
        public achievements: object;
        public achievementPoints: number;
        public totalExperience: number;
        public level: number;
        public socialMedia: { name: string, link: string, id: SOCIAL_MEDIA_ID }[];
        public giftsSent: number;
        public giftsReceived: number;
        public isOnline: boolean;
        public guild?: Guild;
        public stats?: {
            skywars?: SkyWars,
            bedwars?: BedWars,
            uhc?: UHC,
            speeduhc?: SpeedUHC,
            murdermystery?: MurderMystery,
            duels?: Duels,
            buildbattle?: BuildBattle,
            megawalls?: MegaWalls,
            copsandcrims?: CopsAndCrims,
            tntgames?: TNTGames,
            smashheroes?: SmashHeroes,
            vampirez?: VampireZ,
            blitzsg?: BlitzSurvivalGames,
            arena?: ArenaBrawl
        }
        public getRecentGames(): Promise<RecentGame[]>;
    }
    export class Leaderboard {
        constructor(data: object);
        public name: string;
        public title: string;
        public playerCount: number;
        public leaders: string[];
    }
    export class KeyInfo {
        constructor(data: object);
        public key: string;
        public owner: string;
        public limitPerMinute: number;
        public requestsInPastMin: number;
        public totalRequests: number;
        public resetsAfter: number;
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
        public playedGames: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
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
        public game?: Game;
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
        public createdAtTimestamp: number;
        public createdAt: Date;
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
        public chatMuteUntilTimestamp: number;
        public chatMuteUntil: Date;
        public banner: { Base: string, Patterns: [{ Pattern: string, Color: string }] }
        public preferredGames: Game[];
        public members: GuildMember[];
        public ranks: GuildRank[];
        public totalWeeklyGexp: number
        public getRanksByNewest(): GuildRank[];
        public getRankByPriority(priority: number): GuildRank;
        public getMemberUUIDMap(): Map<string, GuildMember>;
    }
    export class BaseAuction {
        constructor(data: object)
        public auctionId: string;
        public auctioneerUuid: string;
        public auctioneerProfile: string;
        public bin: boolean;
        public itemBytes: ItemBytes | null;
    }
    export class Auction extends BaseAuction {
        constructor(data: object);
        public coop: string[] | [];
        public auctionStartTimestamp: number;
        public auctionEndTimestamp: number;
        public auctionStart: Date;
        public auctionEnd: Date;
        public item: string;
        public itemLore: string;
        public itemLoreRaw: string;
        public rarity: string;
        public startingBid: number;
        public highestBid: number;
        public bids: Bid[];
        public claimed: boolean;
        public claimedBidders: string[];
    }
    export class PartialAuction extends BaseAuction {
        constructor(data: object);
        public buyer: string;
        public price: number;
    }
    export class AuctionInfo {
        constructor(data: object);
        public age: number;
        public lastUpdatedAt: Date;
        public lastUpdated: number;
        public totalPages: number;
        public page: number;
        public totalAuctions: number;
        public failedPages: number[]
    }
    export class Bid {
        constructor(data: object);
        public auctionId: string;
        public profileId: string;
        public amount: number;
        public timestamp: number;
        public at: Date;
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
        public joinedAtTimestamp: number;
        public joinedAt: Date;
        public questParticipation: number;
        public rank: string;
        public weeklyExperience: number;
        public mutedUntilTimestamp: number;
        public mutedUntil: Date;
        public expHistory: { day: string, exp: number }[];
    }
    export class GuildRank {
        constructor(data: object);
        public name: string;
        public default: boolean;
        public tag: string | null;
        public createdAtTimestamp: number;
        public createdAt: Date;
        public priority: number;
    }
    export class Friend {
        constructor(data: object);
        public sender: string;
        public receiver: string;
        public friendSinceTimestamp: number;
        public friendSince: Date;
    }
    export class Booster {
        constructor(data: object);
        public purchaser: string;
        public amount: number;
        public originalLength: number;
        public remaining: number;
        public activatedTimestamp: number
        public activated: Date;
        public game?: Game;
    }
    export class SkyblockProfile {
        constructor(data: object);
        public profileId: string;
        public profileName: string;
        public members: SkyblockMember[];
        public me: SkyblockMember;
    }
    export class SkyblockMember {
        constructor(data: object);
        public uuid: string;
        public player?: Player;
        public profileName: string;
        public firstJoin: number;
        public lastSave: number;
        public lastDeath: number;
        public firstJoinAt: Date;
        public lastSaveAt: Date;
        public lastDeathAt: Date;
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
            carpentry?: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            runecrafting?: {
                xp: number,
                level: number,
                maxLevel: number,
                xpCurrent: number,
                xpForNext: number,
                progress: number
            },
            usedAchievementsApi?: boolean
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
        public collections: any;
        public stats: {
            purse: number,
            kills: number,
            deaths: number,
            highest_crit_damage: number,
            highest_critical_damage: number,
            gifts_given: number,
            gifts_received: number
        };
        public getInventory(): Promise<InventoryItem[]>;
        public getEnderChest(): Promise<InventoryItem[]>;
        public getArmor(): Promise<{ helmet: InventoryItem, chestplate: InventoryItem, leggings: InventoryItem, boots: InventoryItem }>;
        public getPetScore(): number;
    }
    export class Color {
        constructor(color: string)
        public toString(): string;
        public toHex(): string;
        public toName(): string;
        public toCode(): string;
    }
    export class InventoryItem {
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
            overall: {
                winstreak: number,
                playedGames: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                winstreak: number,
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
            overall: {
                winstreak: number,
                playedGames: number,
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
            winstreak: number,
            playedGames: number,
            kills: number,
            wins: number,
            losses: number,
            deaths: number,
            KDRatio: number,
            WLRatio: number
        };
        public mega: {
            overall: {
                winstreak: number,
                playedGames: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                winstreak: number,
                KDRatio: number,
                WLRatio: number
            },
            solo: {
                playedGames: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            },
            doubles: {
                playedGames: number,
                kills: number,
                wins: number,
                losses: number,
                deaths: number,
                KDRatio: number,
                WLRatio: number
            }
        };
        public lab: {
            winstreak: number,
            playedGames: number,
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
            KDRatio: number,
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
        public threes: {
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
        public fours: {
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
        public '4v4': {
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
        public redVsBlue: {
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
            KDRatio: number,
            playedGames: number
        };
        public doubleUp: {
            wins: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            playedGames: number
        };
        public infection: {
            wins: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            playedGames: number
        };
    }
    export class Duels {
        public title: string | null;
        public coins: number;
        public kills: number;
        public deaths: number;
        public KDRatio: number;
        public wins: number;
        public losses: number;
        public WLRatio: number;
        public playedGames: number;
        public uhc: {
            overall: {
                winstreak: number,
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number,
                playedGames: number
            },
            '1v1': {
                wintreak: number
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '2v2': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '4v4': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            meetup: {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            }
        };
        public op: {
            overall: {
                winstreak: number,
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number,
                playedGames: number
            },
            '1v1': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '2v2': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            }
        };
        public skywars: {
            overall: {
                winstreak: number,
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number,
                playedGames: number
            },
            '1v1': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '2v2': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            }
        };
        public sumo: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public classic: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public combo: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public bridge: {
            overall: {
                winstreak: number,
                kills: number,
                deaths: number,
                KDRatio: number,
                wins: number,
                losses: number,
                WLRatio: number,
                playedGames: number
            },
            '1v1': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '2v2': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            },
            '4v4': {
                winstreak: number,
                kills: number,
                deaths: number,
                wins: number,
                losses: number,
                KDRatio: number,
                WLRatio: number,
                playedGames: number
            }
        };
        public megawalls: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public blitz: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public nodebuff: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        public bow: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
    }
    export class BuildBattle {
        constructor(data: object);
        public score: number;
        public playedGames: number;
        public coins: number;
        public totalVotes: number;
        public totalWins: number;
        public wins: {
            solo: number,
            team: number,
            pro: number,
            gtb: number
        };
    }
    export class RecentGame extends Game {
        constructor(data: object)
        public dateTimestamp?: number;
        public date?: Date;
        public mode?: string;
        public map?: string;
        public endedAt?: Date;
        public endedTimestamp?: number;
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
    export class APIStatus {
        constructor(data: object)
        public sourceUrl: string;
        public title: string;
        public description: string;
        public incidents: APIIncident[]
    }
    export class APIIncident {
        constructor(data: object)
        public link: string;
        public start: Date;
        public startFormatted: string;
        public startTimestamp: number;
        public author: string;
        public HTMLContent: string;
        public TextContent: string;
        public snippet: string;
        public guid: string;
        public categories: string[];
    }
    export class ItemBytes {
        constructor(data: object)
        public bytesBuffer: Buffer;
        public base64(): string;
        /**
         * @description Reads the bytes as a NBT tag
         */
        public readNBT(): Promise<any[]>
    }
}