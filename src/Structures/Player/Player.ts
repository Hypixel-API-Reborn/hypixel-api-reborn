import Arcade from '../MiniGames/Arcade/Arcade.js';
import ArenaBrawl from '../MiniGames/ArenaBrawl/ArenaBrawl.js';
import BedWars from '../MiniGames/BedWars/BedWars.js';
import BlitzSurvivalGames from '../MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.js';
import BuildBattle from '../MiniGames/BuildBattle.js';
import Color from '../Color.js';
import CopsAndCrims from '../MiniGames/CopsAndCrims/CopsAndCrims.js';
import Cosmetics from './Cosmetics.js';
import Duels from '../MiniGames/Duels/Duels.js';
import Gifting from './Gifting.js';
import Guild from '../Guild/Guild.js';
import House from '../House.js';
import Housing from '../Housing.js';
import MegaWalls from '../MiniGames/MegaWalls/MegaWalls.js';
import MurderMystery from '../MiniGames/MurderMystery/MurderMystery.js';
import Paintball from '../MiniGames/Paintball.js';
import Parkour from './Parkour.js';
import Pit from '../MiniGames/Pit/Pit.js';
import PlayerAchievements from './PlayerAchievements.js';
import PlayerQuests from './Quests/PlayerQuests.js';
import Quakecraft from '../MiniGames/Quakecraft/Quakecraft.js';
import RecentGame from '../RecentGame.js';
import Rewards from './Rewards.js';
import Seasonal from './Seasonal/Seasonal.js';
import SkyWars from '../MiniGames/SkyWars/SkyWars.js';
import SmashHeroes from '../MiniGames/SmashHeroes/SmashHeroes.js';
import SocialMedia, { parseSocialMedia } from './SocialMedia.js';
import SpeedUHC from '../MiniGames/SpeedUHC/SpeedUHC.js';
import TNTGames from '../MiniGames/TNTGames/TNTGames.js';
import Tourney from './Tourney/Tourney.js';
import TurboKartRacers from '../MiniGames/TurboKartRacers/TurboKartRacers.js';
import UHC from '../MiniGames/UHC/UHC.js';
import VampireZ from '../MiniGames/VampireZ/VampireZ.js';
import Walls from '../MiniGames/Walls.js';
import Warlords from '../MiniGames/Warlords/Warlords.js';
import WoolGames from '../MiniGames/WoolGames/WoolGames.js';
import { getRank, playerLevelProgress } from '../../Utils/PlayerUtils.js';
import type {
  ChatChannel,
  Language,
  LevelProgress,
  PlayerRank,
  PlayerStats,
  ScorpiusBribe
} from '../../Types/Player.js';
import type { UUID } from '../../Types/Global.js';

class Player {
  uuid: UUID;
  nickname: string;
  rank: PlayerRank;
  mvpPlusColor: Color | null;
  mvpPlusPlusColor: Color | null;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  firstLoginTimestamp: number;
  firstLoginAt: Date;
  lastLoginTimestamp: number | null;
  lastLoginAt: Date | null;
  achievements: PlayerAchievements;
  language: Language;
  channel: ChatChannel;
  exp: number;
  level: LevelProgress;
  seasonal: Seasonal;
  karma: number;
  freeSkyBlockCookie: number | null;
  tourney: Tourney;
  rewards: Rewards;
  challenges: object;
  parkour: Parkour[];
  housing: Housing;
  cosmetics: Cosmetics;
  scorpiusBribes: ScorpiusBribe[];
  quests: PlayerQuests;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  stats: PlayerStats;
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.uuid = data.uuid || '';
    this.nickname = data.displayname || '';
    this.rank = getRank(data);
    this.mvpPlusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    this.mvpPlusPlusColor = data.monthlyRankColor ? new Color(data.monthlyRankColor) : null;
    this.gifting = new Gifting(data?.giftingMeta || {});
    this.socialMedia = parseSocialMedia(data?.socialMedia?.links || {});
    this.firstLoginTimestamp = data?.firstLogin || 0;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.lastLoginTimestamp = data?.lastLogin || null;
    this.lastLoginAt = this.lastLoginTimestamp ? new Date(this.lastLoginTimestamp) : null;
    this.achievements = new PlayerAchievements(data);
    this.language = data?.userLanguage || 'ENGLISH';
    this.channel = data.channel || 'ALL';
    this.exp = data?.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.seasonal = new Seasonal(data?.seasonal || {});
    this.karma = data?.karma || 0;
    this.freeSkyBlockCookie = data?.skyblock_free_cookie || null;
    this.tourney = new Tourney(data?.tourney || {});
    this.rewards = new Rewards(data);
    this.challenges = data?.challenges || {};
    this.parkour = [];
    Object.keys(data?.parkourCompletions || {}).map((location) => {
      this.parkour.push(new Parkour(data?.parkourCompletions || {}, data?.parkourCheckpointBests || {}, location));
    });
    this.housing = new Housing(data?.housingMeta || {});
    this.cosmetics = new Cosmetics(data);
    this.scorpiusBribes = [];
    Object.keys(data)
      .filter((key) => key.startsWith('scorpius_bribe_'))
      .forEach((key) => {
        this.scorpiusBribes.push({ year: Number(key), timestamp: data[key] });
      });
    this.quests = new PlayerQuests(data?.quests || {}, data?.questSettings?.autoActivate || false);
    this.guild = extra.guild || null;
    this.houses = extra.houses || null;
    this.recentGames = extra.recentGames || null;
    this.stats = {
      Arcade: new Arcade(data?.stats?.Arcade),
      ArenaBrawl: new ArenaBrawl(data?.stats?.Arena),
      BedWars: new BedWars(data?.stats?.Bedwars),
      BlitzSurvivalGames: new BlitzSurvivalGames(data?.stats?.HungerGames),
      BuildBattle: new BuildBattle(data?.stats?.BuildBattle),
      CopsAndCrims: new CopsAndCrims(data?.stats?.MCGO),
      Duels: new Duels(data?.stats?.Duels),
      MegaWalls: new MegaWalls(data?.stats?.Walls3),
      MurderMystery: new MurderMystery(data?.stats?.MurderMystery),
      Paintball: new Paintball(data?.stats?.Paintball),
      Pit: new Pit(data?.stats?.Pit),
      QuakeCraft: new Quakecraft(data?.stats?.Quake),
      SkyWars: new SkyWars(data?.stats?.SkyWars),
      SmashHeroes: new SmashHeroes(data?.stats?.SuperSmash),
      SpeedUHC: new SpeedUHC(data?.stats?.SpeedUHC),
      TNTGames: new TNTGames(data?.stats?.TNTGames),
      TurboKartRacers: new TurboKartRacers(data?.stats?.GingerBread),
      UHC: new UHC(data?.stats?.UHC),
      VampireZ: new VampireZ(data?.stats?.VampireZ),
      Walls: new Walls(data?.stats?.Walls),
      Warlords: new Warlords(data?.stats?.Battleground),
      WoolGames: new WoolGames(data?.stats?.WoolGames)
    };
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
