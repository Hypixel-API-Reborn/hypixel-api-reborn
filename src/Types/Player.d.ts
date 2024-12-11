// Credits: Pixelic: https://github.com/pixelicc - Most types in player

import Arcade from '../Structures/MiniGames/Arcade/Arcade.ts';
import ArenaBrawl from '../Structures/MiniGames/ArenaBrawl/ArenaBrawl.ts';
import BedWars from '../Structures/MiniGames/BedWars/BedWars.ts';
import BlitzSurvivalGames from '../Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.ts';
import BuildBattle from '../Structures/MiniGames/BuildBattle.js';
import CopsAndCrims from '../Structures/MiniGames/CopsAndCrims/CopsAndCrims.ts';
import Duels from '../Structures/MiniGames/Duels/Duels.ts';
import MegaWalls from '../Structures/MiniGames/MegaWalls/MegaWalls.ts';
import MurderMystery from '../Structures/MiniGames/MurderMystery/MurderMystery.ts';
import Paintball from '../Structures/MiniGames/Paintball.js';
import Pit from '../Structures/MiniGames/Pit/Pit.ts';
import PitInventoryItem from '../Structures/MiniGames/Pit/PitInventoryItem.ts';
import Quakecraft from '../Structures/MiniGames/Quakecraft/Quakecraft.ts';
import SkyWars from '../Structures/MiniGames/SkyWars/SkyWars.ts';
import SmashHeroes from '../Structures/MiniGames/SmashHeroes/SmashHeroes.ts';
import SpeedUHC from '../Structures/MiniGames/SpeedUHC/SpeedUHC.ts';
import TNTGames from '../Structures/MiniGames/TNTGames/TNTGames.ts';
import TurboKartRacers from '../Structures/MiniGames/TurboKartRacers/TurboKartRacers.ts';
import UHC from '../Structures/MiniGames/UHC/UHC.ts';
import VampireZ from '../Structures/MiniGames/VampireZ/VampireZ.ts';
import Walls from '../Structures/MiniGames/Walls.js';
import Warlords from '../Structures/MiniGames/Warlords/Warlords.ts';
import WoolGames from '../Structures/MiniGames/WoolGames/WoolGames.ts';

export type Language =
  | 'CHINESE_SIMPLIFIED'
  | 'CHINESE_TRADITIONAL'
  | 'CZECH'
  | 'DANISH'
  | 'DUTCH'
  | 'ENGLISH'
  | 'FINNISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'GREEK'
  | 'HUNGARIAN'
  | 'ITALIAN'
  | 'JAPANESE'
  | 'KOREAN'
  | 'NORWEGIAN'
  | 'POLISH'
  | 'PORTUGUESE_BR'
  | 'PORTUGUESE_PT'
  | 'PIRATE'
  | 'ROMANIAN'
  | 'RUSSIAN'
  | 'SERBIAN_CYRILLIC'
  | 'SPANISH'
  | 'SWEDISH'
  | 'TURKISH'
  | 'UKRAINIAN';
export type ChatChannel = 'ALL' | 'PARTY' | 'GUILD' | 'OFFICER' | 'PM' | 'SKYBLOCK_COOP';
export type SeasonName = 'christmas' | 'easter' | 'summer' | 'halloween' | 'anniversary';
export type SocialMediaId = 'DISCORD' | 'TWITTER' | 'YOUTUBE' | 'INSTAGRAM' | 'TIKTOK' | 'TWITCH' | 'HYPIXEL';
export type ZombiesMaps = 'deadend' | 'badblood' | 'alienarcadium' | 'prison';
export type EnderSpleefTrails = 'RAINBOW' | 'GREEN' | 'DEFAULT' | 'RED' | 'BLUE';
export type TurboKartRacersMaps = 'retro' | 'hypixelgp' | 'olympus' | 'junglerush' | 'canyon';
export type VampireZRoles = 'human' | 'vampire';
export type PixelPartyGameModes = 'normal' | 'hyper';
export type QuakecraftBarrels = 'SMALL_BALL' | 'LARGE_BALL' | 'BURST' | 'STAR' | 'CREEPER';
export type QuakecraftTriggers = 'ZERO_POINT_EIGHT_FIVE' | 'ZERO_POINT_NINE' | 'ONE_POINT_ONE' | 'ONE_POINT_THREE';
export type ArenaBrawlModes = '1v1' | '2v2' | '4v4';
export type ArenaBrawlRunes = 'slowing' | 'energy' | 'damage' | 'tank' | 'speed';
export type MiniWallsKits = 'soldier' | 'archer' | 'builder';
export type WoolWarsClassNames = 'ASSAULT' | 'TANK' | 'GOLEM' | 'SWORDSMAN' | 'ENGINEER' | 'ARCHER';
export type MurderMysteryModes = 'MURDER_CLASSIC' | 'MURDER_ASSASSINS' | 'MURDER_DOUBLE_UP' | 'MURDER_INFECTION';
export type SmashHeoresModes = 'normal' | '2v2' | 'teams';
export type SkyWarsBaseModes = 'solo' | 'team';
export type MegaWallsModes = 'face_off' | 'gvg';
export type SpeedUHCModes = 'solo' | 'solo_normal' | 'solo_insane' | 'team' | 'team_normal' | 'team_insane';
export type UHCModes = 'solo' | 'red_vs_blue' | 'no_diamonds' | 'brawl' | 'solo_brawl' | 'duo_brawl';
export type CopsAndCrimsGamemodes = 'deathmatch' | 'gungame';
export type BedWarsPracticeRecordDistances = 30 | 50 | 100;
export type BedWarsPracticeRecordElevations = 'NONE' | 'SLIGHT' | 'STAIRCASE';
export type BedWarsPracticeModes = 'BRIDGING' | 'FIREBALL_JUMPING' | 'BOW' | 'MLG' | 'PEARL_CLUTCHING';
export type BedwarsDreamGamemodeName = 'ultimate' | 'rush' | 'armed' | 'lucky' | 'voidless';
export type BedwarsGamemodeName =
  | 'eight_one'
  | 'eight_two'
  | 'four_three'
  | 'four_four'
  | 'two_four'
  | 'castle'
  | 'eight_two_ultimate'
  | 'four_four_ultimate'
  | 'eight_two_rush'
  | 'four_four_rush'
  | 'eight_two_armed'
  | 'four_four_armed'
  | 'eight_two_lucky'
  | 'four_four_lucky'
  | 'eight_two_voidless'
  | 'four_four_voidless';

export type BlitzSurvivalGamesKits =
  | 'archer'
  | 'meatmaster'
  | 'speleologist'
  | 'baker'
  | 'knight'
  | 'guardian'
  | 'scout'
  | 'hunter'
  | 'hype train'
  | 'fisherman'
  | 'armorer'
  | 'horsetamer'
  | 'astronaut'
  | 'troll'
  | 'reaper'
  | 'shark'
  | 'reddragon'
  | 'toxicologist'
  | 'rogue'
  | 'warlock'
  | 'slimeyslime'
  | 'jockey'
  | 'golem'
  | 'viking'
  | 'shadow knight'
  | 'pigman'
  | 'paladin'
  | 'necromancer'
  | 'florist'
  | 'diver'
  | 'arachnologist'
  | 'blaze'
  | 'wolftamer'
  | 'tim'
  | 'farmer'
  | 'creepertamer'
  | 'snowman';

export type MegaWallsKits =
  | 'cow'
  | 'hunter'
  | 'shark'
  | 'arcanist'
  | 'deadlord'
  | 'golem'
  | 'herobrine'
  | 'pigman'
  | 'zombie'
  | 'blaze'
  | 'enderman'
  | 'shaman'
  | 'squid'
  | 'creeper'
  | 'pirate'
  | 'sheep'
  | 'skeleton'
  | 'spider'
  | 'werewolf'
  | 'angel'
  | 'assassin'
  | 'automaton'
  | 'moleman'
  | 'phoenix'
  | 'renegade'
  | 'snowman';

export type SkyWarsModes =
  | 'mega'
  | 'mega_doubles'
  | 'lab'
  | 'solo_normal'
  | 'solo_insane'
  | 'team_normal'
  | 'team_insane';

export type SmashHeoresHeros =
  | 'THE_BULK'
  | 'CAKE_MONSTER'
  | 'GENERAL_CLUCK'
  | 'BOTMUN'
  | 'MARAUDER'
  | 'PUG'
  | 'TINMAN'
  | 'SPODERMAN'
  | 'FROSTY'
  | 'SERGEANT_SHIELD'
  | 'SKULLFIRE'
  | 'GOKU'
  | 'SANIC'
  | 'DUSK_CRAWLER'
  | 'SHOOP_DA_WHOOP'
  | 'GREEN_HOOD';

export type WarlordsClasses =
  | 'pyromancer'
  | 'mage'
  | 'thunderlord'
  | 'shaman'
  | 'earthwarden'
  | 'aquamancer'
  | 'paladin'
  | 'avenger'
  | 'warrior'
  | 'defender'
  | 'cryomancer'
  | 'crusader'
  | 'berserker'
  | 'protector'
  | 'revenant'
  | 'spiritguard';

export type DuelsModes =
  | 'blitz'
  | 'classic'
  | 'bow'
  | 'no_debuff'
  | 'combo'
  | 'tnt_games'
  | 'sumo'
  | 'parkour'
  | 'bridge'
  | 'bridge_duel'
  | 'bridge_doubles'
  | 'bridge_threes'
  | 'bridge_fours'
  | '2v2v2v2'
  | '3v3v3v3'
  | 'capture_threes'
  | 'op'
  | 'mega_walls'
  | 'mw_duel'
  | 'mw_doubles'
  | 'sw'
  | 'sw_duel'
  | 'sw_doubles'
  | 'uhc'
  | 'uhc_duel'
  | 'uhc_doubles'
  | 'uhc_four'
  | 'uhc_meetup'
  | 'blitz_duel'
  | 'classic_duel'
  | 'bow_duel'
  | 'potion_duel'
  | 'combo_duel'
  | 'bowspleef_duel'
  | 'sumo_duel'
  | 'parkour_eight'
  | 'duel_arena'
  | 'op_duel'
  | 'op_doubles';

export type PaintballHats =
  | 'speed_hat'
  | 'vip_kevinkool_hat'
  | 'vip_rezzus_hat'
  | 'vip_agentk_hat'
  | 'normal_hat'
  | 'tnt_hat'
  | 'vip_paintballkitty_hat'
  | 'vip_ghost_hat'
  | 'hard_hat'
  | 'ender_hat'
  | 'vip_codename_b_hat'
  | 'snow_hat'
  | 'vip_hypixel_hat'
  | 'vip_noxyd_hat'
  | 'squid_hat'
  | 'shaky_hat'
  | 'spider_hat'
  | 'drunk_hat';

export type QuakecraftKillSounds =
  | 'anvil_land'
  | 'pig_death'
  | 'bat_death'
  | 'level_up'
  | 'cow_hurt'
  | 'ghast_death'
  | 'creeper_death'
  | 'blaze_death'
  | 'zombie_woodbreak'
  | 'enderman_death'
  | 'wither_idle'
  | 'dragon_growl'
  | 'villager_mhm'
  | 'horse_death'
  | 'golem_death'
  | 'thunder';

export type QuakecraftCase =
  | 'SHINY_DIAMOND_HOE'
  | 'STONE_HOE'
  | 'SHINY_IRON_HOE'
  | 'SHINY_STONE_HOE'
  | 'SHINY_WOOD_HOE'
  | 'WOOD_HOE'
  | 'DIAMOND_HOE'
  | 'SHINY_GOLD_HOE'
  | 'IRON_HOE';

export type QuakecraftMuzzle =
  | 'SOUL_SAND'
  | 'QUARTZ'
  | 'REDSTONE'
  | 'NONE'
  | 'IRON'
  | 'DIAMOND'
  | 'LAPIS'
  | 'OBSIDIAN'
  | 'PRISMARINE'
  | 'EMERALD'
  | 'PUMPKIN'
  | 'COMMAND_BLOCK'
  | 'SEA_LANTERN';

export type QuakecraftSights =
  | 'BLACK'
  | 'RED'
  | 'YELLOW'
  | 'SILVER'
  | 'BLUE'
  | 'DIAMOND'
  | 'WHITE'
  | 'PURPLE'
  | 'EMERALD'
  | 'GRAY'
  | 'GOLD'
  | 'ORANGE'
  | 'PINK'
  | 'GREEN';

export type SkyWarsKitNames =
  | 'kit_mythical_end-lord'
  | 'kit_supporting_team_armorsmith'
  | 'ecologist'
  | 'rookie'
  | 'enchanter'
  | 'snowman'
  | 'armorsmith'
  | 'scout'
  | 'knight'
  | 'armorer'
  | 'energix'
  | 'enderchest'
  | 'healer'
  | 'frog'
  | 'grenade'
  | 'batguy'
  | 'pharaoh'
  | 'disco'
  | 'princess'
  | 'enderman'
  | 'pyro'
  | 'speleologist'
  | 'farmer'
  | 'cannoneer'
  | 'fisherman'
  | 'troll'
  | 'hunter'
  | 'guardian'
  | 'engineer'
  | 'salmon'
  | 'slime'
  | 'magician'
  | 'sloth'
  | 'zookeeper'
  | 'jester'
  | 'golem'
  | 'cactus'
  | 'warlock'
  | 'archeologist'
  | 'kit_advanced_solo_pig-rider'
  | 'kit_attacking_team_scout'
  | 'kit_basic_solo_archeologist'
  | 'kit_basic_solo_frog'
  | 'kit_defending_team_armorer'
  | 'kit_advanced_solo_armorer'
  | 'kit_defending_team_batguy'
  | 'kit_supporting_team_ecologist'
  | 'kit_basic_solo_disco'
  | 'kit_attacking_team_knight'
  | 'kit_advanced_solo_farmer'
  | 'kit_advanced_solo_hunter'
  | 'kit_basic_solo_ecologist'
  | 'kit_supporting_team_rookie'
  | 'kit_supporting_team_healer'
  | 'kit_mining_team_cannoneer'
  | 'kit_defending_team_disco'
  | 'kit_mining_team_default'
  | 'kit_advanced_solo_pyro'
  | 'kit_defending_team_baseball-player'
  | 'kit_basic_solo_speleologist'
  | 'kit_attacking_team_energix'
  | 'kit_defending_team_frog'
  | 'kit_advanced_solo_enderman'
  | 'kit_basic_solo_baseball-player';

export type UHCKits =
  | 'ARCHERY_TOOLS'
  | 'WORKING_TOOLS'
  | 'HORSEMAN'
  | 'ECOLOGIST'
  | 'LOOTER'
  | 'MAGIC_TOOLS'
  | 'TRAPPER';

export type CopsAndCrimsGuns =
  | 'smg'
  | 'rifle'
  | 'carbine'
  | 'magnum'
  | 'shotgun'
  | 'sniper'
  | 'scoped_rifle'
  | 'handgun'
  | 'auto_shotgun'
  | 'bullpup'
  | 'knife';

export interface LevelProgress {
  level: number;
  xpToNext: number;
  remainingXP: number;
  currentXP: number;
  percent: number;
  percentRemaining: number;
}

export interface PlayerStats {
  arcade: Arcade;
  arenaBrawl: ArenaBrawl;
  bedwars: BedWars;
  blitzsg: BlitzSurvivalGames;
  buildbattle: BuildBattle;
  copsandcrims: CopsAndCrims;
  duels: Duels;
  megawalls: MegaWalls;
  murdermystery: MurderMystery;
  paintball: Paintball;
  pit: Pit;
  quakecraft: Quakecraft;
  skywars: SkyWars;
  smashheroes: SmashHeroes;
  speeduhc: SpeedUHC;
  tntgames: TNTGames;
  turbokartracers: TurboKartRacers;
  uhc: UHC;
  vampirez: VampireZ;
  walls: Walls;
  warlords: Warlords;
  woolgames: WoolGames;
}

export type PlayerRank =
  | null
  | 'VIP'
  | 'VIP+'
  | 'MVP'
  | 'MVP+'
  | 'MVP++'
  | 'Game Master'
  | 'Admin'
  | 'YouTube'
  | 'Events'
  | 'Mojang'
  | 'Owner'
  | 'PIG+++'
  | 'Innit';

export interface RanksPurchaseTime {
  VIP: Date | null;
  VIP_PLUS: Date | null;
  MVP: Date | null;
  MVP_PLUS: Date | null;
}

export interface ScorpiusBribe {
  year: number;
  timestamp: number;
}

export type BedWarsPrestige =
  | 'Stone'
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Iron Prime'
  | 'Gold Prime'
  | 'Diamond Prime'
  | 'Emerald Prime'
  | 'Sapphire Prime'
  | 'Ruby Prime'
  | 'Crystal Prime'
  | 'Opal Prime'
  | 'Amethyst Prime'
  | 'Mirror'
  | 'Light'
  | 'Dawn'
  | 'Dusk'
  | 'Air'
  | 'Wind'
  | 'Nebula'
  | 'Thunder'
  | 'Earth'
  | 'Water'
  | 'Fire'
  | 'Sunrise'
  | 'Eclipse'
  | 'Gamma'
  | 'Majestic'
  | 'Andesine'
  | 'Marine'
  | 'Element'
  | 'Galaxy'
  | 'Atomic'
  | 'Sunset'
  | 'Time'
  | 'Winter'
  | 'Obsidian'
  | 'Spring'
  | 'Ice'
  | 'Summer'
  | 'Spinel'
  | 'Autumn'
  | 'Mystic'
  | 'Eternal';

export type SkyWarsPrestige =
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Emerald'
  | 'Sapphire'
  | 'Ruby'
  | 'Crystal'
  | 'Opal'
  | 'Amethyst'
  | 'Rainbow'
  | 'Mythic';

export type TurboKartRacersHorn =
  | 'DEFAULT'
  | 'SHY'
  | 'ALIEN'
  | 'TAXI'
  | 'KLAXON'
  | 'TRICYCLE'
  | 'ALARM'
  | 'KLOON'
  | 'TEDDY'
  | 'TRUCK'
  | 'JERRY';

export type DuelsBaseDivision =
  | 'Rookie'
  | 'Iron'
  | 'Gold'
  | 'Diamond'
  | 'Master'
  | 'Legend'
  | 'Grandmaster'
  | 'Godlike'
  | 'Celestial'
  | 'Divine'
  | 'Ascended';

export interface BuildBattleWins {
  solo: number;
  teams: number;
  pro: number;
  gtb: number;
}

export interface WoolGamesPrivateGameConfig {
  one_hit_one_kill: boolean;
  rainbow_wool: 'Enabled' | 'Disabled';
  health_buff: string;
  game_speed: string;
  speed: string;
  no_class: 'Enabled' | 'Disabled';
  respawn_enable: boolean;
}

export interface PitArmor {
  helmet: PitInventoryItem | null;
  chestplate: PitInventoryItem | null;
  leggings: PitInventoryItem | null;
  boots: PitInventoryItem | null;
}
