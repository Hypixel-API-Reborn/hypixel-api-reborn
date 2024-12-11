/* v8 ignore next 400 */
/* eslint-disable max-len */

import Client from './Client.js';
import Errors from './Errors.js';

export * from './Types/API.d.js';
export * from './Types/Booster.d.js';
export * from './Types/Client.d.js';
export * from './Types/Color.d.js';
export * from './Types/Game.d.js';
export * from './Types/Guild.d.js';
export * from './Types/Player.d.js';
export * from './Types/Requests.d.js';
export * from './Types/Skyblock.d.js';
export * from './Types/Static.d.js';

import Achievements from './Structures/Static/Achievements/Achievements.js';
import Arcade from './Structures/MiniGames/Arcade/Arcade.js';
import ArenaBrawl from './Structures/MiniGames/ArenaBrawl/ArenaBrawl.js';
import ArenaBrawlMode from './Structures/MiniGames/ArenaBrawl/ArenaBrawlMode.js';
import Auction from './Structures/SkyBlock/Auctions/Auction.js';
import AuctionInfo from './Structures/SkyBlock/Auctions/AuctionInfo.js';
import BaseAchievement from './Structures/Static/Achievements/BaseAchievement.js';
import BaseAuction from './Structures/SkyBlock/Auctions/BaseAuction.js';
import BedWars from './Structures/MiniGames/BedWars/BedWars.js';
import BedWarsBeds from './Structures/MiniGames/BedWars/BedWarsBeds.js';
import BedWarsCollectedItems from './Structures/MiniGames/BedWars/BedWarsCollectedItems.js';
import BedWarsDreamMode from './Structures/MiniGames/BedWars/BedWarsDreamMode.js';
import BedWarsDreamStats from './Structures/MiniGames/BedWars/BedWarsDreamStats.js';
import BedWarsMode from './Structures/MiniGames/BedWars/BedWarsMode.js';
import BedWarsPracticeBase from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeBase.js';
import BedWarsPracticeBaseBlocksPlaced from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeBaseBlocksPlaced.js';
import BedWarsPracticeBridging from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeBridging.js';
import BedWarsPracticeBridgingRecords from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeModeAttempts from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeModeAttempts.js';
import BedWarsPracticeRecord from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeRecord.js';
import BedWarsPracticeRecordElevation from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeRecordElevation.js';
import BedWarsPracticeStats from './Structures/MiniGames/BedWars/Practice/BedWarsPracticeStats.js';
import Bid from './Structures/SkyBlock/Auctions/Bid.js';
import Bingo from './Structures/SkyBlock/Static/Bingo.js';
import BingoData from './Structures/SkyBlock/Static/BingoData.js';
import BlitzSurvivalGames from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.js';
import BlitzSurvivalGamesKit from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesKit.js';
import BlockingDead from './Structures/MiniGames/Arcade/BlockingDead.js';
import Booster from './Structures/Boosters/Booster.js';
import BountyHunters from './Structures/MiniGames/Arcade/BountyHunters.js';
import BowSpleef from './Structures/MiniGames/TNTGames/BowSpleef.js';
import BuildBattle from './Structures/MiniGames/BuildBattle.js';
import Candidate from './Structures/SkyBlock/Static/Candidate.js';
import CaptureTheWool from './Structures/MiniGames/WoolGames/CaptureTheWool.js';
import Challenge from './Structures/Static/Challenge.js';
import Challenges from './Structures/Static/Challenges.js';
import Color from './Structures/Color.js';
import CopsAndCrims from './Structures/MiniGames/CopsAndCrims/CopsAndCrims.js';
import CopsAndCrimsGamemode from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGamemode.js';
import CopsAndCrimsGun from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGun.js';
import Cosmetics from './Structures/Player/Cosmetics.js';
import DragonWars from './Structures/MiniGames/Arcade/DragonWars.js';
import Dropper from './Structures/MiniGames/Arcade/Dropper.js';
import DropperMap from './Structures/MiniGames/Arcade/DropperMap.js';
import Duels from './Structures/MiniGames/Duels/Duels.js';
import DuelsBridge from './Structures/MiniGames/Duels/DuelsBridge.js';
import DuelsGamemode from './Structures/MiniGames/Duels/DuelsGamemode.js';
import DuelsMegaWalls from './Structures/MiniGames/Duels/DuelsMegaWalls.js';
import DuelsOP from './Structures/MiniGames/Duels/DuelsOP.js';
import DuelsSkyWars from './Structures/MiniGames/Duels/DuelsSkyWars.js';
import DuelsUHC from './Structures/MiniGames/Duels/DuelsUHC.js';
import EnderSpleef from './Structures/MiniGames/Arcade/EnderSpleef.js';
import FarmHunt from './Structures/MiniGames/Arcade/FarmHunt.js';
import FireSale from './Structures/SkyBlock/Static/FireSale.js';
import Football from './Structures/MiniGames/Arcade/Football.js';
import GalaxyWars from './Structures/MiniGames/Arcade/GalaxyWars.js';
import Game from './Structures/Game.js';
import GameAchievements from './Structures/Static/Achievements/GameAchievements.js';
import GameChallenges from './Structures/Static/GameChallenges.js';
import GameCounts from './Structures/GameCounts.js';
import GameQuests from './Structures/Static/GameQuests.js';
import Gifting from './Structures/Player/Gifting.js';
import Government from './Structures/SkyBlock/Static/Government.js';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import GuildMember from './Structures/Guild/GuildMember.js';
import GuildRank from './Structures/Guild/GuildRank.js';
import HideAndSeek from './Structures/MiniGames/Arcade/HideAndSeek.js';
import HoleInTheWall from './Structures/MiniGames/Arcade/HoleInTheWall.js';
import House from './Structures/House.js';
import Housing from './Structures/Housing.js';
import HypixelSays from './Structures/MiniGames/Arcade/HypixelSays.js';
import ItemBytes from './Structures/ItemBytes.js';
import Leaderboard from './Structures/Leaderboard.js';
import MegaWalls from './Structures/MiniGames/MegaWalls/MegaWalls.js';
import MegaWallsKitStats from './Structures/MiniGames/MegaWalls/MegaWallsKitStats.js';
import MegaWallsModeStats from './Structures/MiniGames/MegaWalls/MegaWallsModeStats.js';
import MiniWalls from './Structures/MiniGames/Arcade/MiniWalls.js';
import MonthlyCrate from './Structures/Player/MonthlyCrate.js';
import MurderMystery from './Structures/MiniGames/MurderMystery/MurderMystery.js';
import MurderMysteryModeStats from './Structures/MiniGames/MurderMystery/MurderMysteryModeStats.js';
import OneTimeAchivement from './Structures/Static/Achievements/OneTimeAchivement.js';
import Order from './Structures/SkyBlock/Bazaar/Order.js';
import PVPRun from './Structures/MiniGames/TNTGames/PVPRun.js';
import Paintball from './Structures/MiniGames/Paintball.js';
import Parkour from './Structures/Player/Parkour.js';
import PartyGames from './Structures/MiniGames/Arcade/PartyGames.js';
import PartyPooper from './Structures/MiniGames/Arcade/PartyPooper.js';
import Perk from './Structures/SkyBlock/Static/Perk.js';
import Pet from './Structures/Player/Pet.js';
import PetConsumables from './Structures/Player/PetConsumables.js';
import Pets from './Structures/Player/Pets.js';
import Pit from './Structures/MiniGames/Pit/Pit.js';
import PitInventoryItem from './Structures/MiniGames/Pit/PitInventoryItem.js';
import PixelParty from './Structures/MiniGames/Arcade/PixelParty.js';
import PixelPartyGameMode from './Structures/MiniGames/Arcade/PixelPartyGameMode.js';
import Player from './Structures/Player/Player.js';
import PlayerAchievements from './Structures/Player/PlayerAchievements.js';
import PlayerAchievementsRewards from './Structures/Player/PlayerAchievementsRewards.js';
import PlayerQuest from './Structures/Player/Quests/PlayerQuest.js';
import PlayerQuestCompletion from './Structures/Player/Quests/PlayerQuestCompletion.js';
import PlayerQuestCompletions from './Structures/Player/Quests/PlayerQuestCompletions.js';
import PlayerQuests from './Structures/Player/Quests/PlayerQuests.js';
import Product from './Structures/SkyBlock/Bazaar/Product.js';
import PropHunt from './Structures/MiniGames/Arcade/PropHunt.js';
import Quakecraft from './Structures/MiniGames/Quakecraft/Quakecraft.js';
import QuakecraftMode from './Structures/MiniGames/Quakecraft/QuakecraftMode.js';
import Quest from './Structures/Static/Quest.js';
import QuestObjective from './Structures/Static/QuestObjective.js';
import Quests from './Structures/Static/Quests.js';
import RecentGame from './Structures/RecentGame.js';
import Rewards from './Structures/Player/Rewards.js';
import Season from './Structures/Player/Seasonal/Season.js';
import SeasonBingo from './Structures/Player/Seasonal/SeasonBingo.js';
import SeasonBingoTier from './Structures/Player/Seasonal/SeasonBingoTier.js';
import SeasonYear from './Structures/Player/Seasonal/SeasonYear.js';
import Seasonal from './Structures/Player/Seasonal/Seasonal.js';
import SheepWars from './Structures/MiniGames/WoolGames/SheepWars.js';
import SkyWars from './Structures/MiniGames/SkyWars/SkyWars.js';
import SkyWarsKit from './Structures/MiniGames/SkyWars/SkyWarsKit.js';
import SkyWarsKits from './Structures/MiniGames/SkyWars/SkyWarsKits.js';
import SkyWarsMode from './Structures/MiniGames/SkyWars/SkyWarsMode.js';
import SkyWarsModeStats from './Structures/MiniGames/SkyWars/SkyWarsModeStats.js';
import SkyWarsPackages from './Structures/MiniGames/SkyWars/SkyWarsPackages.js';
import SkyblockGarden from './Structures/SkyBlock/SkyblockGarden.js';
import SkyblockGemstone from './Structures/SkyBlock/SkyblockGemstone.js';
import SkyblockInventoryItem from './Structures/SkyBlock/SkyblockInventoryItem.js';
import SkyblockMember from './Structures/SkyBlock/SkyblockMember.js';
import SkyblockMemberMinion from './Structures/SkyBlock/SkyblockMemberMinion.js';
import SkyblockMemberMinions from './Structures/SkyBlock/SkyblockMemberMinions.js';
import SkyblockMemberStats from './Structures/SkyBlock/SkyblockMemberStats.js';
import SkyblockMuseum from './Structures/SkyBlock/SkyblockMuseum.js';
import SkyblockMuseumItem from './Structures/SkyBlock/SkyblockMuseumItem.js';
import SkyblockNews from './Structures/SkyBlock/News/SkyblockNews.js';
import SkyblockPet from './Structures/SkyBlock/SkyblockPet.js';
import SkyblockProfile from './Structures/SkyBlock/SkyblockProfile.js';
import SmashHeoresHero from './Structures/MiniGames/SmashHeroes/SmashHeoresHero.js';
import SmashHeroes from './Structures/MiniGames/SmashHeroes/SmashHeroes.js';
import SmashHeroesMode from './Structures/MiniGames/SmashHeroes/SmashHeroesMode.js';
import SocialMedia from './Structures/Player/SocialMedia.js';
import SpeedUHC from './Structures/MiniGames/SpeedUHC/SpeedUHC.js';
import SpeedUHCMode from './Structures/MiniGames/SpeedUHC/SpeedUHCMode.js';
import Status from './Structures/Status.js';
import TNTGames from './Structures/MiniGames/TNTGames/TNTGames.js';
import TNTRun from './Structures/MiniGames/TNTGames/TNTRun.js';
import TNTTag from './Structures/MiniGames/TNTGames/TNTTag.js';
import TNTWizards from './Structures/MiniGames/TNTGames/TNTWizards.js';
import ThrowOut from './Structures/MiniGames/Arcade/ThrowOut.js';
import TieredAchivement from './Structures/Static/Achievements/TieredAchivement.js';
import Tourney from './Structures/Player/Tourney/Tourney.js';
import TourneyData from './Structures/Player/Tourney/TourneyData.js';
import TurboKartRacers from './Structures/MiniGames/TurboKartRacers/TurboKartRacers.js';
import TurboKartRacersMap from './Structures/MiniGames/TurboKartRacers/TurboKartRacersMap.js';
import UHC from './Structures/MiniGames/UHC/UHC.js';
import UHCGamemode from './Structures/MiniGames/UHC/UHCGamemode.js';
import VampireZ from './Structures/MiniGames/VampireZ/VampireZ.js';
import VampireZRole from './Structures/MiniGames/VampireZ/VampireZRole.js';
import Walls from './Structures/MiniGames/Walls.js';
import Warlords from './Structures/MiniGames/Warlords/Warlords.js';
import WarlordsClass from './Structures/MiniGames/Warlords/WarlordsClass.js';
import WatchdogStats from './Structures/WatchdogStats.js';
import WoolGames from './Structures/MiniGames/WoolGames/WoolGames.js';
import WoolWars from './Structures/MiniGames/WoolGames/WoolWars.js';
import WoolWarsClass from './Structures/MiniGames/WoolGames/WoolWarsClass.js';
import Zombies from './Structures/MiniGames/Arcade/Zombies.js';
import ZombiesStats from './Structures/MiniGames/Arcade/ZombiesStats.js';

export default {
  Client,
  Errors,

  Booster,
  Color,
  Game,
  GameCounts,
  Guild,
  GuildMember,
  GuildRank,
  House,
  Housing,
  ItemBytes,
  Leaderboard,
  Arcade,
  BlockingDead,
  BountyHunters,
  DragonWars,
  Dropper,
  DropperMap,
  EnderSpleef,
  FarmHunt,
  Football,
  GalaxyWars,
  HideAndSeek,
  HoleInTheWall,
  HypixelSays,
  MiniWalls,
  PartyGames,
  PartyPooper,
  PixelParty,
  PixelPartyGameMode,
  PropHunt,
  ThrowOut,
  Zombies,
  ZombiesStats,
  ArenaBrawl,
  ArenaBrawlMode,
  BedWars,
  BedWarsBeds,
  BedWarsCollectedItems,
  BedWarsDreamMode,
  BedWarsDreamStats,
  BedWarsMode,
  BedWarsPracticeBase,
  BedWarsPracticeBaseBlocksPlaced,
  BedWarsPracticeBridging,
  BedWarsPracticeBridgingRecords,
  BedWarsPracticeModeAttempts,
  BedWarsPracticeRecord,
  BedWarsPracticeRecordElevation,
  BedWarsPracticeStats,
  BlitzSurvivalGames,
  BlitzSurvivalGamesKit,
  BuildBattle,
  CopsAndCrims,
  CopsAndCrimsGamemode,
  CopsAndCrimsGun,
  Duels,
  DuelsBridge,
  DuelsGamemode,
  DuelsMegaWalls,
  DuelsOP,
  DuelsSkyWars,
  DuelsUHC,
  MegaWalls,
  MegaWallsKitStats,
  MegaWallsModeStats,
  MurderMystery,
  MurderMysteryModeStats,
  Paintball,
  Pit,
  PitInventoryItem,
  Quakecraft,
  QuakecraftMode,
  SkyWars,
  SkyWarsKit,
  SkyWarsKits,
  SkyWarsMode,
  SkyWarsModeStats,
  SkyWarsPackages,
  SmashHeoresHero,
  SmashHeroes,
  SmashHeroesMode,
  SpeedUHC,
  SpeedUHCMode,
  BowSpleef,
  PVPRun,
  TNTGames,
  TNTRun,
  TNTTag,
  TNTWizards,
  TurboKartRacers,
  TurboKartRacersMap,
  UHC,
  UHCGamemode,
  VampireZ,
  VampireZRole,
  Walls,
  Warlords,
  WarlordsClass,
  CaptureTheWool,
  SheepWars,
  WoolGames,
  WoolWars,
  WoolWarsClass,
  Cosmetics,
  Gifting,
  MonthlyCrate,
  Parkour,
  Pet,
  PetConsumables,
  Pets,
  Player,
  PlayerAchievements,
  PlayerAchievementsRewards,
  PlayerQuest,
  PlayerQuestCompletion,
  PlayerQuestCompletions,
  PlayerQuests,
  Rewards,
  Season,
  SeasonBingo,
  SeasonBingoTier,
  SeasonYear,
  Seasonal,
  SocialMedia,
  Tourney,
  TourneyData,
  RecentGame,
  Auction,
  AuctionInfo,
  BaseAuction,
  Bid,
  Order,
  Product,
  SkyblockNews,
  SkyblockGarden,
  SkyblockGemstone,
  SkyblockInventoryItem,
  SkyblockMember,
  SkyblockMemberMinion,
  SkyblockMemberMinions,
  SkyblockMemberStats,
  SkyblockMuseum,
  SkyblockMuseumItem,
  SkyblockPet,
  SkyblockProfile,
  Bingo,
  BingoData,
  Candidate,
  FireSale,
  Government,
  Perk,
  Achievements,
  BaseAchievement,
  GameAchievements,
  GuildAchievements,
  OneTimeAchivement,
  TieredAchivement,
  Challenge,
  Challenges,
  GameChallenges,
  GameQuests,
  Quest,
  QuestObjective,
  Quests,
  Status,
  WatchdogStats
};
