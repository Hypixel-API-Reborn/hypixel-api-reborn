/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
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
    includeItemBytes?: boolean;
}
declare module 'hypixel-api-reborn' {
    const version: string;
    const Errors: {
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
    };
    const Utils: {
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
            skyblock_year_0: 1.5602757e+12,
            leveling_xp: { 1: 50, 2: 125, 3: 200, 4: 300, 5: 500, 6: 750, 7: 1000, 8: 1500, 9: 2000, 10: 3500, 11: 5000, 12: 7500, 13: 10000, 14: 15000, 15: 20000, 16: 30000, 17: 50000, 18: 75000, 19: 100000, 20: 200000, 21: 300000, 22: 400000, 23: 500000, 24: 600000, 25: 700000, 26: 800000, 27: 900000, 28: 1000000, 29: 1100000, 30: 1200000, 31: 1300000, 32: 1400000, 33: 1500000, 34: 1600000, 35: 1700000, 36: 1800000, 37: 1900000, 38: 2000000, 39: 2100000, 40: 2200000, 41: 2300000, 42: 2400000, 43: 2500000, 44: 2600000, 45: 2750000, 46: 2900000, 47: 3100000, 48: 3400000, 49: 3700000, 50: 4000000 },
            xp_past_50: { 51: 4300000, 52: 4600000, 53: 4900000, 54: 5200000, 55: 5500000, 56: 5800000, 57: 6100000, 58: 6400000, 59: 6700000, 60: 7000000 },
            runecrafting_xp: { 1: 50, 2: 100, 3: 125, 4: 160, 5: 200, 6: 250, 7: 315, 8: 400, 9: 500, 10: 625, 11: 785, 12: 1000, 13: 1250, 14: 1600, 15: 2000, 16: 2465, 17: 3125, 18: 4000, 19: 5000, 20: 6200, 21: 7800, 22: 9800, 23: 12200, 24: 15300, 25: 19050 },
            skills: ['farming', 'mining', 'combat', 'foraging', 'fishing', 'enchanting', 'alchemy', 'taming', 'carpentry', 'runecrafting'],
            skills_achievements: { farming: 'skyblockHarvester', mining: 'skyblockExcavator', combat: 'skyblockCombat', foraging: 'skyblockGatherer', fishing: 'skyblockAngler', enchanting: 'skyblockAugmentation', alchemy: 'skyblockConcoctor', taming: 'skyblockDomesticator' },
            skills_cap: { taming: 50, farming: 60, mining: 50, combat: 50, foraging: 50, fishing: 50, enchanting: 50, alchemy: 50, carpentry: 50, runecrafting: 25, dungeons: 50 },
            dungeon_xp: { 1: 50, 2: 75, 3: 110, 4: 160, 5: 230, 6: 330, 7: 470, 8: 670, 9: 950, 10: 1340, 11: 1890, 12: 2665, 13: 3760, 14: 5260, 15: 7380, 16: 10300, 17: 14400, 18: 20000, 19: 27600, 20: 38000, 21: 52500, 22: 71500, 23: 97000, 24: 132000, 25: 180000, 26: 243000, 27: 328000, 28: 445000, 29: 600000, 30: 800000, 31: 1065000, 32: 1410000, 33: 1900000, 34: 2500000, 35: 3300000, 36: 4300000, 37: 5600000, 38: 7200000, 39: 9200000, 40: 1.2e+7, 41: 1.5e+7, 42: 1.9e+7, 43: 2.4e+7, 44: 3e+7, 45: 3.8e+7, 46: 4.8e+7, 47: 6e+7, 48: 7.5e+7, 49: 9.3e+7, 50: 1.1625e+8 },
            slayer_xp: { 1: 5, 2: 15, 3: 200, 4: 1000, 5: 5000, 6: 20000, 7: 100000, 8: 400000, 9: 1000000 },
            pet_score: { COMMON: 1, UNCOMMON: 2, RARE: 3, EPIC: 4, LEGENDARY: 5 },
            base_stats: { damage: 0, health: 100, defense: 0, effective_health: 100, strength: 0, damage_increase: 0, speed: 100, crit_chance: 20, crit_damage: 50, intelligence: 0 },
            stat_template: { damage: 0, health: 0, defense: 0, effective_health: 0, strength: 0, damage_increase: 0, speed: 0, crit_chance: 0, crit_damage: 0, intelligence: 0 },
            bonus_stats: { taming_skill: { 1: { pet_luck: 1 } }, fairy_souls: { 5: { health: 3, defense: 1, strength: 1, speed: 0 }, 10: { health: 3, defense: 1, strength: 1, speed: 0 }, 15: { health: 4, defense: 1, strength: 1, speed: 0 }, 20: { health: 4, defense: 1, strength: 1, speed: 0 }, 25: { health: 5, defense: 2, strength: 2, speed: 0 }, 30: { health: 5, defense: 1, strength: 1, speed: 0 }, 35: { health: 6, defense: 1, strength: 1, speed: 0 }, 40: { health: 6, defense: 1, strength: 1, speed: 0 }, 45: { health: 7, defense: 1, strength: 1, speed: 0 }, 50: { health: 7, defense: 2, strength: 2, speed: 1 }, 55: { health: 8, defense: 1, strength: 1, speed: 0 }, 60: { health: 8, defense: 1, strength: 1, speed: 0 }, 65: { health: 9, defense: 1, strength: 1, speed: 0 }, 70: { health: 9, defense: 1, strength: 1, speed: 0 }, 75: { health: 10, defense: 2, strength: 2, speed: 0 }, 80: { health: 10, defense: 1, strength: 1, speed: 0 }, 85: { health: 11, defense: 1, strength: 1, speed: 0 }, 90: { health: 11, defense: 1, strength: 1, speed: 0 }, 95: { health: 12, defense: 1, strength: 1, speed: 0 }, 100: { health: 12, defense: 2, strength: 2, speed: 1 }, 105: { health: 13, defense: 1, strength: 1, speed: 0 }, 110: { health: 13, defense: 1, strength: 1, speed: 0 }, 115: { health: 14, defense: 1, strength: 1, speed: 0 }, 120: { health: 14, defense: 1, strength: 1, speed: 0 }, 125: { health: 15, defense: 2, strength: 2, speed: 0 }, 130: { health: 15, defense: 1, strength: 1, speed: 0 }, 135: { health: 16, defense: 1, strength: 1, speed: 0 }, 140: { health: 16, defense: 1, strength: 1, speed: 0 }, 145: { health: 17, defense: 1, strength: 1, speed: 0 }, 150: { health: 17, defense: 2, strength: 2, speed: 1 }, 155: { health: 18, defense: 1, strength: 1, speed: 0 }, 160: { health: 18, defense: 1, strength: 1, speed: 0 }, 165: { health: 19, defense: 1, strength: 1, speed: 0 }, 170: { health: 19, defense: 1, strength: 1, speed: 0 }, 175: { health: 20, defense: 2, strength: 2, speed: 0 }, 180: { health: 20, defense: 1, strength: 1, speed: 0 }, 185: { health: 21, defense: 1, strength: 1, speed: 0 }, 190: { health: 21, defense: 1, strength: 1, speed: 0 } }, farming_skill: { 1: { health: 2 }, 15: { health: 3 }, 20: { health: 4 }, 26: { health: 5 } }, combat_skill: { 1: { crit_chance: 0.5, damage_increase: 0.04 } }, mining_skill: { 1: { defense: 1 }, 15: { defense: 2 } }, foraging_skill: { 1: { strength: 1 }, 15: { strength: 2 } }, fishing_skill: { 1: { health: 2 }, 15: { health: 3 }, 20: { health: 4 }, 26: { health: 5 } }, enchanting_skill: { 1: { intelligence: 1 }, 15: { intelligence: 2 } }, alchemy_skill: { 1: { intelligence: 1 }, 15: { intelligence: 2 } }, carpentry_skill: { 1: Record<string, unknown> }, runecrafting_skill: { 1: Record<string, unknown> }, zombie_slayer: { 1: { health: 2 }, 3: { health: 3 }, 5: { health: 4 }, 7: { health: 5 }, 9: { health: 6 } }, spider_slayer: { 1: { crit_damage: 1 }, 5: { crit_damage: 2 }, 7: { crit_damage: 0, crit_chance: 1 }, 8: { crit_chance: 0, crit_damage: 3 } }, wolf_slayer: { 1: { speed: 1 }, 2: { health: 2 }, 3: { speed: 1 }, 4: { health: 2 }, 5: { crit_damage: 1 }, 6: { health: 3 }, 7: { crit_damage: 2 }, 8: { speed: 1 } }, enchantments: { sharpness: { 1: { damage_multiplicator: 0.05 } }, ender: { 1: { damage_multiplicator: 0.12 } }, giant_killer: { 1: { damage_multiplicator: 0.05 } }, cubism: { 1: { damage_multiplicator: 0.1 } }, impaling: { 1: { damage_multiplicator: 0.125 } }, critical: { 1: { crit_damage: 10 } }, first_strike: { 1: { damage_multiplicator: 0.25 } }, power: { 1: { damage_multiplicator: 0.08 } } } },
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
            validateJSON(obj: Record<string, unknown>): boolean
            /**
             * @description Converts {str_str: {}} to {strStr: {}} without JSON validation
             */
            single(obj: Record<string, unknown>): Record<string, unknown>;
            /**
             * @description Converts {str_str: {}} to {strStr: {}}
             */
            recursive(obj: Record<string, unknown>, lowerCase?: boolean): Record<string, unknown>;
            /**
             * @description Converts 'str_str' to 'strStr'
             */
            removeSnakeCaseString(str: string): string;
        },
        SkyblockUtils: {
            /**
             * @description Decodes base64 to skyblock inventory data
             */
            decode(base64: string): Promise<Record<string, unknown>>;
            /**
             * @description Get level by experience
             */
            getLevelByXp(xp: number, type: string, achievements: Record<string, unknown>): number;
            /**
             * @description Get level by achievement
             */
            getLevelByAchievement(achievementLevel: number, type: string): { xp: number, level: number, maxLevel: number, xpCurrent: number, xpForNext: number, progress: number }
            /**
             * @description Get slayer level
             */
            getSlayerLevel(slayer: Record<string, unknown>): { xp: number, tier1: number, tier2: number, tier3: number, tier4: number, level: number };
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
    };
    class Client {
      constructor(key: string, options?: clientOptions);
        /**
         * @description API Key
         */
        readonly key: string;
        /**
         * @description Client options
         */
        readonly options: clientOptions;
        /**
         * @description Returns all cache entries
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        readonly cache: Map<string, any>;
        /**
         * @description Allows you to get statistics of player
         * @param query - player nickname or uuid
         * @param options - player search options
         */
        getPlayer(query: string, options?: playerMethodOptions): Promise<Player>;
        /**
         * @description Allows you to get statistics of hypixel guild
         * @param searchParameter - 'name', 'player' or 'id'
         * @param query - guild name, player nickname or guild id
         */
        getGuild(searchParameter: ('name' | 'player' | 'id'), query: string): Promise<Guild>;
        /**
         * @description Allows you to get all friends of player
         * @param query - player nickname or uuid
         */
        getFriends(query: string, options?: methodOptions): Promise<Friend[]>;
        /**
         * @description Allows you to get statistics of watchdog anticheat
         */
        getWatchdogStats(options?: methodOptions): Promise<WatchdogStats>;
        /**
         * @description Allows you to get all active boosters
         */
        getBoosters(options?: methodOptions): Promise<Booster[]>;
        /**
         * @description Allows you to get a player's skyblock profiles
         * @param query - player nickname or uuid
         */
        getSkyblockProfiles(query: string, options?: skyblockMemberOptions): Promise<SkyblockProfile[]>;
        /**
         * @description Allows you to get a player's skyblock member data from all their profiles
         * @param query - player nickname or uuid
         */
        getSkyblockMember(query: string, options?: skyblockMemberOptions): Promise<Map<string, SkyblockMember>>;
        /**
         * @description Allows you to get all skyblock auctions
         * @param page - "*", a page number, or an array with the start and the end page number ( automatically sorted )
         * @param options Options
         */
        getSkyblockAuctions(page?: ('*' | number | [number, number]), options?: auctionsOptions): Promise<{ info?: AuctionInfo, auctions?: Auction[] }>;
        /**
         * @description Allows you to get all ended auctions in around the last 60 seconds
         * @param includeItemBytes - include item bytes (optional)
         */
        getEndedSkyblockAuctions(includeItemBytes?: boolean, options?: methodOptions): Promise<{ info: AuctionInfo, auctions: PartialAuction[] }>;
        /**
         * @description Allows you to get all auctions of player
         * @param query - player nickname or uuid
         * @param includeItemBytes - include item bytes (optional)
         */
        getSkyblockAuctionsByPlayer(query: string, includeItemBytes?: boolean, options?: methodOptions): Promise<Auction[]>;
        /**
         * @description Allows you to get list of products
         */
        getSkyblockBazaar(options?: methodOptions): Promise<Product[]>;
        getSkyblockNews(options?: methodOptions): Promise<SkyblockNews>;
        /**
         * @description Allows you to get player's network status
         * @param query - player nickname or uuid
         */
        getStatus(query: string, options?: methodOptions): Promise<Status>;
        /**
         * @description Allows you to get current player count
         */
        getOnline(options?: methodOptions): Promise<number>;
        /**
         * @description Allows you to get information about used API key
         */
        getKeyInfo(options?: methodOptions): Promise<KeyInfo>;
        /**
         * @description Allows you to get leaderboards of each mini-game
         */
        getLeaderboards(options?: methodOptions): Promise<{ ARENA: Leaderboard[], COPS_AND_CRIMS: Leaderboard[], WARLORDS: Leaderboard[], BLITZ_SURVIVAL_GAMES: Leaderboard[], UHC: Leaderboard[], WALLS: Leaderboard[], PROTOTYPE: Leaderboard[], PAINTBALL: Leaderboard[], SKYWARS: Leaderboard[], MURDER_MYSTERY: Leaderboard[], SMASH_HEROES: Leaderboard[], DUELS: Leaderboard[], SPEED_UHC: Leaderboard[], TNTGAMES: Leaderboard[], BEDWARS: Leaderboard[], TURBO_KART_RACERS: Leaderboard[], BUILD_BATTLE: Leaderboard[], ARCADE: Leaderboard[], SKYCLASH: Leaderboard[], QUAKECRAFT: Leaderboard[], CRAZY_WALLS: Leaderboard[], MEGA_WALLS: Leaderboard[], VAMPIREZ: Leaderboard[] }>;
        /**
         * @description Allows you to get recent games of a player
         */
        getRecentGames(options?: methodOptions): Promise<RecentGame[]>;
        /**
         * @param ip - Valid IP/Hostname address
         * @description Pings the minecraft server of hypixel by default
         */
        getPing(ip?: string): Promise<number>;
        /**
         * @description Parses the RSS feed from status.hypixel.net
         */
        getAPIStatus(): Promise<APIStatus>;
        /**
         * @param amount - Amount of cache entries to delete
         * @description Allows you to clear cache
         */
        sweepCache(amount?: number): void;
    }
    class Player {
      constructor(data: Record<string, unknown>);
        nickname: string;
        uuid: string;
        history: string[];
        rank: PLAYER_RANK;
        mcVersion: string;
        lastLoginTimestamp: number;
        lastLogin: Date;
        lastLogoutTimestamp: number;
        lastLogout: Date;
        firstLoginTimestamp: number;
        firstLogin: Date;
        recentlyPlayedGame: Game;
        plusColor?: Color;
        karma: number;
        achievements: Record<string, unknown>;
        achievementPoints: number;
        totalExperience: number;
        level: number;
        socialMedia: { name: string, link: string, id: SOCIAL_MEDIA_ID }[];
        giftsSent: number;
        giftsReceived: number;
        isOnline: boolean;
        guild?: Guild;
        stats?: {
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
        };
        getRecentGames(): Promise<RecentGame[]>;
    }
    class Leaderboard {
      constructor(data: Record<string, unknown>);
        name: string;
        title: string;
        playerCount: number;
        leaders: string[];
    }
    class KeyInfo {
      constructor(data: Record<string, unknown>);
        key: string;
        owner: string;
        limitPerMinute: number;
        requestsInPastMin: number;
        totalRequests: number;
        resetsAfter: number;
    }
    class ArenaBrawl {
      constructor(data: Record<string, unknown>);
        coins: number;
        mode: {
            '1v1': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            },
            '2v2': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            },
            '4v4': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            }
        };
    }
    class BlitzSurvivalGames {
      constructor(data: Record<string, unknown>);
        coins: number;
        kills: number;
        deaths: number;
        KDRatio: number;
        winsSolo: number;
        winsTeam: number;
        kitStats: {
            name: string, games: number, level: number, experience: number, prestige: number, kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number, timePlayed: number
        }[];
    }
    class VampireZ {
      constructor(data: Record<string, unknown>);
        coins: number;
        human: {
            kills: number, deaths: number, KDRatio: number, wins: number
        };
        zombie: {
            kills: number
        };
        vampire: {
            kills: number, deaths: number, KDRatio: number
        };
    }
    class SmashHeroes {
      constructor(data: Record<string, unknown>);
        coins: number;
        level: number;
        winstreak: number;
        playedGames: number;
        kills: number;
        deaths: number;
        KDRatio: number;
        wins: number;
        losses: number;
        WLRatio: number;
        mode: {
            '1v1v1v1': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            },
            '2v2': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            },
            '2v2v2': {
                kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
            }
        };
        activeClass: string;
        heroStats: {
            name: string, level: number, xp: number, prestige: number, games: number, kills: number, deaths: number, KDRatio: number, wins: number, losses: number, WLRatio: number
        }[];
    }
    class SkyblockNews {
      constructor(data: Record<string, unknown>);
        title: string;
        link: string;
        date: string;
    }
    class TNTGames {
      constructor(data: Record<string, unknown>);
        coins: number;
        winstreak: number;
        wins: number;
        tntrun: {
            wins: number, deaths: number, record: number
        };
        pvprun: {
            kills: number, wins: number, deaths: number, KDRatio: number, record: number
        };
        tnttag: {
            kills: number, wins: number, speed: number
        };
        bowspleef: {
            wins: number, tags: number, deaths: number
        };
        wizards: {
            points: number, class: string, kills: number, assists: number, wins: number, deaths: number, KDRatio: number
        };
    }
    class Status {
      constructor(data: Record<string, unknown>);
        online: boolean;
        game?: Game;
        mode?: string;
        map?: string;
    }
    class Guild {
      constructor(data: Record<string, unknown>);
        id: string;
        name: string;
        description: string;
        experience: number;
        level: number;
        createdAtTimestamp: number;
        createdAt: Date;
        joinable: boolean;
        yListed: boolean;
        tag: string;
        tagColor: Color;
        legacyRank: number;
        dailyExperience: { day: string, exp: number }[];
        achievements: {
            winners: number, experienceKings: number, onlinePlayers: number
        };
        chatMuteUntilTimestamp: number;
        chatMuteUntil: Date;
        banner: { Base: string, Patterns: [{ Pattern: string, Color: string }] };
        preferredGames: Game[];
        members: GuildMember[];
        ranks: GuildRank[];
        totalWeeklyGexp: number;
        getRanksByNewest(): GuildRank[];
        getRankByPriority(priority: number): GuildRank;
        getMemberUUIDMap(): Map<string, GuildMember>;
    }
    class BaseAuction {
      constructor(data: Record<string, unknown>)
        auctionId: string;
        auctioneerUuid: string;
        auctioneerProfile: string;
        bin: boolean;
        itemBytes: ItemBytes | null;
    }
    class Auction extends BaseAuction {
      constructor(data: Record<string, unknown>);
        coop: string[] | [];
        auctionStartTimestamp: number;
        auctionEndTimestamp: number;
        auctionStart: Date;
        auctionEnd: Date;
        item: string;
        itemLore: string;
        itemLoreRaw: string;
        rarity: string;
        startingBid: number;
        highestBid: number;
        bids: Bid[];
        claimed: boolean;
        claimedBidders: string[];
    }
    class PartialAuction extends BaseAuction {
      constructor(data: Record<string, unknown>);
        buyer: string;
        price: number;
    }
    class AuctionInfo {
      constructor(data: Record<string, unknown>);
        age: number;
        lastUpdatedAt: Date;
        lastUpdated: number;
        totalPages: number;
        page: number;
        totalAuctions: number;
        failedPages: number[];
    }
    class Bid {
      constructor(data: Record<string, unknown>);
        auctionId: string;
        profileId: string;
        amount: number;
        timestamp: number;
        at: Date;
        bidder: string;
    }
    class Product {
      constructor(data: Record<string, unknown>);
        productId: string;
        sellSummary: Order[];
        buySummary: Order[];
        status: {
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
      constructor(data: Record<string, unknown>);
        amount: number;
        pricePerUnit: number;
        totalPrice: number;
        orders: number;
    }
    class WatchdogStats {
      constructor(data: Record<string, unknown>);
        byWatchdogTotal: number;
        byWatchdogLastMinute: number;
        byWatchdogRollingDay: number;
        byStaffTotal: number;
        byStaffRollingDay: number;
    }
    class GuildMember {
      constructor(data: Record<string, unknown>);
        uuid: string;
        joinedAtTimestamp: number;
        joinedAt: Date;
        questParticipation: number;
        rank: string;
        weeklyExperience: number;
        mutedUntilTimestamp: number;
        mutedUntil: Date;
        expHistory: { day: string, exp: number }[];
    }
    class GuildRank {
      constructor(data: Record<string, unknown>);
        name: string;
        default: boolean;
        tag: string | null;
        createdAtTimestamp: number;
        createdAt: Date;
        priority: number;
    }
    class Friend {
      constructor(data: Record<string, unknown>);
        sender: string;
        receiver: string;
        friendSinceTimestamp: number;
        friendSince: Date;
    }
    class Booster {
      constructor(data: Record<string, unknown>);
        purchaser: string;
        amount: number;
        originalLength: number;
        remaining: number;
        activatedTimestamp: number;
        activated: Date;
        game?: Game;
    }
    class SkyblockProfile {
      constructor(data: Record<string, unknown>);
        profileId: string;
        profileName: string;
        members: SkyblockMember[];
        me: SkyblockMember;
    }
    class SkyblockMember {
      constructor(data: Record<string, unknown>);
        uuid: string;
        player?: Player;
        profileName: string;
        firstJoin: number;
        lastSave: number;
        lastDeath: number;
        firstJoinAt: Date;
        lastSaveAt: Date;
        lastDeathAt: Date;
        fairySouls: number;
        skills: {
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
        slayer: {
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
        dungeons: {
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        collections: any;
        stats: {
            purse: number,
            kills: number,
            deaths: number,
            highest_crit_damage: number,
            highest_critical_damage: number,
            gifts_given: number,
            gifts_received: number
        };
        getInventory(): Promise<InventoryItem[]>;
        getEnderChest(): Promise<InventoryItem[]>;
        getArmor(): Promise<{ helmet: InventoryItem, chestplate: InventoryItem, leggings: InventoryItem, boots: InventoryItem }>;
        getPetScore(): number;
    }
    class Color {
      constructor(color: string)
      toString(): string;
      toHex(): string;
      toName(): string;
      toCode(): string;
    }
    class InventoryItem {
      constructor(data: Record<string, unknown>);
        itemId: number;
        count: number;
        name: string;
        lore: string;
        loreArray: string[];
        loreForEmbed: string;
        enchantments: Record<string, unknown>;
        anvilUses: number;
        damage: number;
    }
    class Game {
      constructor(game: string | number);
      toString(): GAME_NAME;
        code: GAME_CODE;
        id: GAME_ID;
    }
    class SkyWars {
      constructor(data: Record<string, unknown>);
        coins: number;
        souls: number;
        tokens: number;
        winStreak: number;
        kills: number;
        losses: number;
        deaths: number;
        wins: number;
        lootChests: number;
        openedLootChests: number;
        heads: number;
        level: number;
        levelFormatted: string;
        prestige: SKYWARS_PRESTIGE;
        prestigeIcon: SKYWARS_PRESTIGE_ICON;
        playedGames: number;
        KDRatio: number;
        WLRatio: number;
        solo: {
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
        team: {
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
        ranked: {
            winstreak: number,
            playedGames: number,
            kills: number,
            wins: number,
            losses: number,
            deaths: number,
            KDRatio: number,
            WLRatio: number
        };
        mega: {
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
        lab: {
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
    class CopsAndCrims {
      constructor(data: Record<string, unknown>);
        coins: number;
        kills: number;
        deaths: number;
        KDRatio: number;
        wins: number;
        roundWins: number;
        shotsFired: number;
        headshotKills: number;
        bombsDefused: number;
        bombsPlanted: number;
        killsAsCrim: number;
        killsAsCop: number;
        deathmatch: {
            kills: number,
            deaths: number,
            KDRatio: number,
            killsAsCrim: number,
            killsAsCop: number
        };
    }
    class BedWars {
      constructor(data: Record<string, unknown>);
        coins: number;
        level: number;
        prestige: BEDWARS_PRESTIGE;
        playedGames: number;
        wins: number;
        winstreak: number;
        kills: number;
        finalKills: number;
        losses: number;
        deaths: number;
        finalDeaths: number;
        collectedItemsTotal: {
            iron: number,
            gold: number,
            diamond: number,
            emerald: number
        };
        beds: {
            lost: number,
            broken: number,
            BLRatio: number
        };
        avg: {
            finalKills: number,
            kills: number,
            bedsBroken: number
        };
        KDRatio: number;
        finalKDRatio: number;
        WLRatio: number;
        solo: {
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
        doubles: {
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
        threes: {
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
        fours: {
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
        '4v4': {
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
    }
    class UHC {
      constructor(data: Record<string, unknown>);
        coins: number;
        score: number;
        kills: number;
        deaths: number;
        wins: number;
        headsEaten: number;
        starLevel: number;
        solo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        team: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        redVsBlue: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        noDiamond: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        brawl: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        brawlSolo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
        brawlDuo: {
            wins: number,
            kills: number,
            deaths: number,
            headsEaten: number
        };
    }
    class SpeedUHC {
      constructor(data: Record<string, unknown>);
        coins: number;
        kills: number;
        deaths: number;
        KDRatio: number;
        wins: number;
        losses: number;
        WLRatio: number;
        playedGames: number;
        winstreak: number;
    }
    class MurderMystery {
      constructor(data: Record<string, unknown>);
        coins: number;
        playedGames: number;
        kills: number;
        deaths: number;
        winsAsMurderer: number;
        winsAsDetective: number;
        wins: number;
        assassins: {
            wins: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            playedGames: number
        };
        doubleUp: {
            wins: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            playedGames: number
        };
        infection: {
            wins: number,
            kills: number,
            deaths: number,
            KDRatio: number,
            playedGames: number
        };
    }
    class Duels {
        title: string | null;
        coins: number;
        kills: number;
        deaths: number;
        KDRatio: number;
        wins: number;
        losses: number;
        WLRatio: number;
        playedGames: number;
        uhc: {
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
        op: {
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
        skywars: {
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
        sumo: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        classic: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        combo: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        bridge: {
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
        megawalls: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        blitz: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        nodebuff: {
            winstreak: number,
            kills: number,
            deaths: number,
            wins: number,
            losses: number,
            KDRatio: number,
            WLRatio: number,
            playedGames: number
        };
        bow: {
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
    class BuildBattle {
      constructor(data: Record<string, unknown>);
        score: number;
        playedGames: number;
        coins: number;
        totalVotes: number;
        totalWins: number;
        wins: {
            solo: number,
            team: number,
            pro: number,
            gtb: number
        };
    }
    class RecentGame extends Game {
      constructor(data: Record<string, unknown>)
        dateTimestamp?: number;
        date?: Date;
        mode?: string;
        map?: string;
        endedAt?: Date;
        endedTimestamp?: number;
    }
    class MegaWalls {
      constructor(data: Record<string, unknown>)
        selectedClass: string;
        coins: number;
        kills: number;
        assists: number;
        deaths: number;
        KDRatio: number;
        wins: number;
        losses: number;
        WLRatio: number;
        finalKills: number;
        finalAssists: number;
        finalDeaths: number;
        playedGames: number;
        witherDamage: number;
        defenderKills: number;
        mode: {
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
    class APIStatus {
      constructor(data: Record<string, unknown>)
        sourceUrl: string;
        title: string;
        description: string;
        incidents: APIIncident[];
    }
    class APIIncident {
      constructor(data: Record<string, unknown>)
        link: string;
        start: Date;
        startFormatted: string;
        startTimestamp: number;
        author: string;
        HTMLContent: string;
        TextContent: string;
        snippet: string;
        guid: string;
        categories: string[];
    }
    class ItemBytes {
      constructor(data: Record<string, unknown>)
        bytesBuffer: Buffer;
        base64(): string;
        /**
         * @description Reads the bytes as a NBT tag
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        readNBT(): Promise<any[]>;
    }
}
