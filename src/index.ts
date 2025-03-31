/* v8 ignore next 1000 */
/* eslint-disable max-len */

import Client from './Client.js';
import Errors from './Errors.js';

export * from './Types/API.js';
export * from './Types/Booster.js';
export * from './Types/Client.js';
export * from './Types/Color.js';
export * from './Types/Game.js';
export * from './Types/Global.js';
export * from './Types/Guild.js';
export * from './Types/Player.js';
export * from './Types/Requests.js';
export * from './Types/Skyblock.js';
export * from './Types/Static.js';

import Achievements from './Structures/Static/Achievements/Achievements.js';
import Arcade from './Structures/MiniGames/Arcade/Arcade.js';
import ArenaBrawl from './Structures/MiniGames/ArenaBrawl/ArenaBrawl.js';
import ArenaBrawlMode from './Structures/MiniGames/ArenaBrawl/ArenaBrawlMode.js';
import BaseAchievement from './Structures/Static/Achievements/BaseAchievement.js';
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
import BlitzSurvivalGames from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.js';
import BlitzSurvivalGamesKit from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesKit.js';
import BlockingDead from './Structures/MiniGames/Arcade/BlockingDead.js';
import Booster from './Structures/Boosters/Booster.js';
import BountyHunters from './Structures/MiniGames/Arcade/BountyHunters.js';
import BowSpleef from './Structures/MiniGames/TNTGames/BowSpleef.js';
import BuildBattle from './Structures/MiniGames/BuildBattle.js';
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
import Football from './Structures/MiniGames/Arcade/Football.js';
import GalaxyWars from './Structures/MiniGames/Arcade/GalaxyWars.js';
import Game from './Structures/Game.js';
import GameAchievements from './Structures/Static/Achievements/GameAchievements.js';
import GameChallenges from './Structures/Static/GameChallenges.js';
import GameCounts from './Structures/GameCounts.js';
import GameQuests from './Structures/Static/GameQuests.js';
import Gifting from './Structures/Player/Gifting.js';
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
import PVPRun from './Structures/MiniGames/TNTGames/PVPRun.js';
import Paintball from './Structures/MiniGames/Paintball.js';
import Parkour from './Structures/Player/Parkour.js';
import PartyGames from './Structures/MiniGames/Arcade/PartyGames.js';
import PartyPooper from './Structures/MiniGames/Arcade/PartyPooper.js';
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
import SkyblockAuction from './Structures/SkyBlock/Auctions/SkyblockAuction.js';
import SkyblockAuctionBid from './Structures/SkyBlock/Auctions/SkyblockAuctionBid.js';
import SkyblockAuctionsInfo from './Structures/SkyBlock/Auctions/SkyblockAuctionsInfo.js';
import SkyblockBaseAuction from './Structures/SkyBlock/Auctions/SkyblockBaseAuction.js';
import SkyblockBaseAuctionInfo from './Structures/SkyBlock/Auctions/SkyblockBaseAuctionInfo.js';
import SkyblockBazzar from './Structures/SkyBlock/Bazaar/SkyblockBazzar.js';
import SkyblockBazzarProduct from './Structures/SkyBlock/Bazaar/SkyblockBazzarProduct.js';
import SkyblockBazzarProductOrder from './Structures/SkyBlock/Bazaar/SkyblockBazzarProductOrder.js';
import SkyblockBazzarQuickStatus from './Structures/SkyBlock/Bazaar/SkyblockBazzarQuickStatus.js';
import SkyblockBingo from './Structures/SkyBlock/Bingo/SkyblockBingo.js';
import SkyblockBingoGoal from './Structures/SkyBlock/Bingo/SkyblockBingoGoal.js';
import SkyblockCollection from './Structures/SkyBlock/Collections/SkyblockCollection.js';
import SkyblockCollectionTier from './Structures/SkyBlock/Collections/SkyblockCollectionTier.js';
import SkyblockCollections from './Structures/SkyBlock/Collections/SkyblockCollections.js';
import SkyblockElection from './Structures/SkyBlock/Election/SkyblockElection.js';
import SkyblockElectionCandidate from './Structures/SkyBlock/Election/SkyblockElectionCandidate.js';
import SkyblockElectionCandidatePerk from './Structures/SkyBlock/Election/SkyblockElectionCandidatePerk.js';
import SkyblockElectionData from './Structures/SkyBlock/Election/SkyblockElectionData.js';
import SkyblockFireSale from './Structures/SkyBlock/FireSale/SkyblockFireSale.js';
import SkyblockGarden from './Structures/SkyBlock/Garden/SkyblockGarden.js';
import SkyblockGardenActiveVisitor from './Structures/SkyBlock/Garden/SkyblockGardenActiveVisitor.js';
import SkyblockGardenActiveVisitorRequirement from './Structures/SkyBlock/Garden/SkyblockGardenActiveVisitorRequirement.js';
import SkyblockGardenComposter from './Structures/SkyBlock/Garden/SkyblockGardenComposter.js';
import SkyblockGardenComposterUpgrades from './Structures/SkyBlock/Garden/SkyblockGardenComposterUpgrades.js';
import SkyblockGardenCropMilestones from './Structures/SkyBlock/Garden/SkyblockGardenCropMilestones.js';
import SkyblockGardenCropsUpgrades from './Structures/SkyBlock/Garden/SkyblockGardenCropsUpgrades.js';
import SkyblockGardenVisitors from './Structures/SkyBlock/Garden/SkyblockGardenVisitors.js';
import SkyblockGemstone from './Structures/SkyBlock/SkyblockGemstone.js';
import SkyblockInventoryItem from './Structures/SkyBlock/SkyblockInventoryItem.js';
import SkyblockItem from './Structures/SkyBlock/SkyblockItem.js';
import SkyblockMember from './Structures/SkyBlock/Member/SkyblockMember.js';
import SkyblockMemberAccessoryBag from './Structures/SkyBlock/Member/AccessoryBag/SkyblockMemberAccessoryBag.js';
import SkyblockMemberAccessoryBagTuning from './Structures/SkyBlock/Member/AccessoryBag/SkyblockMemberAccessoryBagTuning.js';
import SkyblockMemberAccessoryBagTuningSlot from './Structures/SkyBlock/Member/AccessoryBag/SkyblockMemberAccessoryBagTuningSlot.js';
import SkyblockMemberBestiary from './Structures/SkyBlock/Member/Bestiary/SkyblockMemberBestiary.js';
import SkyblockMemberChocolateFactory from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactory.js';
import SkyblockMemberChocolateFactoryEggs from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactoryEggs.js';
import SkyblockMemberChocolateFactoryEmployees from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactoryEmployees.js';
import SkyblockMemberChocolateFactoryHitmen from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactoryHitmen.js';
import SkyblockMemberChocolateFactoryTimeTower from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactoryTimeTower.js';
import SkyblockMemberChocolateFactoryUpgrades from './Structures/SkyBlock/Member/ChocolateFactory/SkyblockMemberChocolateFactoryUpgrades.js';
import SkyblockMemberCrimsonIsle from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsle.js';
import SkyblockMemberCrimsonIsleAbiphone from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleAbiphone.js';
import SkyblockMemberCrimsonIsleDojo from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleDojo.js';
import SkyblockMemberCrimsonIsleDojoMinigame from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleDojoMinigame.js';
import SkyblockMemberCrimsonIsleKuudra from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleKuudra.js';
import SkyblockMemberCrimsonIsleKuudraPartyFinder from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleKuudraPartyFinder.js';
import SkyblockMemberCrimsonIsleMatriarch from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleMatriarch.js';
import SkyblockMemberCrimsonIsleTrophyFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleTrophyFish.js';
import SkyblockMemberCrimsonIsleTrophyFishFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyblockMemberCrimsonIsleTrophyFishFish.js';
import SkyblockMemberCurrencies from './Structures/SkyBlock/Member/SkyblockMemberCurrencies.js';
import SkyblockMemberDungeons from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeons.js';
import SkyblockMemberDungeonsClasses from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsClasses.js';
import SkyblockMemberDungeonsFloor from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsFloor.js';
import SkyblockMemberDungeonsFloorRun from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsFloorRun.js';
import SkyblockMemberDungeonsMode from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsMode.js';
import SkyblockMemberDungeonsTreasureRun from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsTreasureRun.js';
import SkyblockMemberDungeonsTreasuresChest from './Structures/SkyBlock/Member/Dungeons/SkyblockMemberDungeonsTreasuresChest.js';
import SkyblockMemberFairySouls from './Structures/SkyBlock/Member/SkyblockMemberFairySouls.js';
import SkyblockMemberJacobContest from './Structures/SkyBlock/Member/JacobContests/SkyblockMemberJacobContest.js';
import SkyblockMemberJacobContests from './Structures/SkyBlock/Member/JacobContests/SkyblockMemberJacobContests.js';
import SkyblockMemberJacobContestsMedals from './Structures/SkyBlock/Member/JacobContests/SkyblockMemberJacobContestsMedals.js';
import SkyblockMemberJacobContestsPerks from './Structures/SkyBlock/Member/JacobContests/SkyblockMemberJacobContestsPerks.js';
import SkyblockMemberJacobContestsUniqueBrackets from './Structures/SkyBlock/Member/JacobContests/SkyblockMemberJacobContestsUniqueBrackets.js';
import SkyblockMemberLeveling from './Structures/SkyBlock/Member/SkyblockMemberLeveling.js';
import SkyblockMemberMining from './Structures/SkyBlock/Member/Mining/SkyblockMemberMining.js';
import SkyblockMemberMiningCrystal from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningCrystal.js';
import SkyblockMemberMiningHotm from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningHotm.js';
import SkyblockMemberMiningHotmForge from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningHotmForge.js';
import SkyblockMemberMiningHotmForgeItem from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningHotmForgeItem.js';
import SkyblockMemberMiningPowder from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningPowder.js';
import SkyblockMemberMiningPowders from './Structures/SkyBlock/Member/Mining/SkyblockMemberMiningPowders.js';
import SkyblockMemberObjectives from './Structures/SkyBlock/Member/SkyblockMemberObjectives.js';
import SkyblockMemberPet from './Structures/SkyBlock/Member/Pets/SkyblockMemberPet.js';
import SkyblockMemberPets from './Structures/SkyBlock/Member/Pets/SkyblockMemberPets.js';
import SkyblockMemberPetsAutoPetRule from './Structures/SkyBlock/Member/Pets/SkyblockMemberPetsAutoPetRule.js';
import SkyblockMemberPetsAutoPets from './Structures/SkyBlock/Member/Pets/SkyblockMemberPetsAutoPets.js';
import SkyblockMemberPetsCare from './Structures/SkyBlock/Member/Pets/SkyblockMemberPetsCare.js';
import SkyblockMemberPlayerData from './Structures/SkyBlock/Member/PlayerData/SkyblockMemberPlayerData.js';
import SkyblockMemberPlayerDataActiveEffect from './Structures/SkyBlock/Member/PlayerData/SkyblockMemberPlayerDataActiveEffect.js';
import SkyblockMemberPlayerDataMinion from './Structures/SkyBlock/Member/PlayerData/SkyblockMemberPlayerDataMinion.js';
import SkyblockMemberPlayerDataMinions from './Structures/SkyBlock/Member/PlayerData/SkyblockMemberPlayerDataMinions.js';
import SkyblockMemberPlayerDataSkills from './Structures/SkyBlock/Member/PlayerData/SkyblockMemberPlayerDataSkills.js';
import SkyblockMemberPlayerStats from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStats.js';
import SkyblockMemberPlayerStatsAuctions from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsAuctions.js';
import SkyblockMemberPlayerStatsAuctionsStats from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsAuctionsStats.js';
import SkyblockMemberPlayerStatsCandy from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsCandy.js';
import SkyblockMemberPlayerStatsEndIsland from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsEndIsland.js';
import SkyblockMemberPlayerStatsEndIslandDragonFight from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsEndIslandDragonFight.js';
import SkyblockMemberPlayerStatsEndIslandDragonFightDragon from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsEndIslandDragonFightDragon.js';
import SkyblockMemberPlayerStatsFishing from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsFishing.js';
import SkyblockMemberPlayerStatsGifts from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsGifts.js';
import SkyblockMemberPlayerStatsMythos from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsMythos.js';
import SkyblockMemberPlayerStatsSpookyFestival from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsSpookyFestival.js';
import SkyblockMemberPlayerStatsWinter from './Structures/SkyBlock/Member/PlayerStats/SkyblockMemberPlayerStatsWinter.js';
import SkyblockMemberProfile from './Structures/SkyBlock/Member/SkyblockMemberProfile.js';
import SkyblockMemberQuests from './Structures/SkyBlock/Member/Quests/SkyblockMemberQuests.js';
import SkyblockMemberQuestsHarp from './Structures/SkyBlock/Member/Quests/SkyblockMemberQuestsHarp.js';
import SkyblockMemberQuestsHarpSong from './Structures/SkyBlock/Member/Quests/SkyblockMemberQuestsHarpSong.js';
import SkyblockMemberRift from './Structures/SkyBlock/Member/Rift/SkyblockMemberRift.js';
import SkyblockMemberRiftAccess from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftAccess.js';
import SkyblockMemberRiftBlackLagoon from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftBlackLagoon.js';
import SkyblockMemberRiftCastle from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftCastle.js';
import SkyblockMemberRiftDeadCats from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftDeadCats.js';
import SkyblockMemberRiftDreamFarm from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftDreamFarm.js';
import SkyblockMemberRiftEnigma from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftEnigma.js';
import SkyblockMemberRiftGallery from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftGallery.js';
import SkyblockMemberRiftGallerySecuredTrophy from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftGallerySecuredTrophy.js';
import SkyblockMemberRiftInventory from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftInventory.js';
import SkyblockMemberRiftVillagePlaza from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyblockMemberRiftVillagePlaza.js';
import SkyblockMemberRiftVillagePlazaBarry from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyblockMemberRiftVillagePlazaBarry.js';
import SkyblockMemberRiftVillagePlazaCowboy from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyblockMemberRiftVillagePlazaCowboy.js';
import SkyblockMemberRiftVillagePlazaMurder from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyblockMemberRiftVillagePlazaMurder.js';
import SkyblockMemberRiftWestVillage from './Structures/SkyBlock/Member/Rift/WestVillage/SkyblockMemberRiftWestVillage.js';
import SkyblockMemberRiftWestVillageCrazyKloon from './Structures/SkyBlock/Member/Rift/WestVillage/SkyblockMemberRiftWestVillageCrazyKloon.js';
import SkyblockMemberRiftWestVillageGlyphs from './Structures/SkyBlock/Member/Rift/WestVillage/SkyblockMemberRiftWestVillageGlyphs.js';
import SkyblockMemberRiftWestVillageKatHouse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyblockMemberRiftWestVillageKatHouse.js';
import SkyblockMemberRiftWestVillageMirrorverse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyblockMemberRiftWestVillageMirrorverse.js';
import SkyblockMemberRiftWitherCage from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftWitherCage.js';
import SkyblockMemberRiftWizardTower from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftWizardTower.js';
import SkyblockMemberRiftWyldWoods from './Structures/SkyBlock/Member/Rift/SkyblockMemberRiftWyldWoods.js';
import SkyblockMemberSlayer from './Structures/SkyBlock/Member/Slayers/SkyblockMemberSlayer.js';
import SkyblockMemberSlayerClaimedLevels from './Structures/SkyBlock/Member/Slayers/SkyblockMemberSlayerClaimedLevels.js';
import SkyblockMemberSlayers from './Structures/SkyBlock/Member/Slayers/SkyblockMemberSlayers.js';
import SkyblockMemberSlayersQuest from './Structures/SkyBlock/Member/Slayers/SkyblockMemberSlayersQuest.js';
import SkyblockMemeberQuestsTrapper from './Structures/SkyBlock/Member/Quests/SkyblockMemeberQuestsTrapper.js';
import SkyblockMuseum from './Structures/SkyBlock/Museum/SkyblockMuseum.js';
import SkyblockMuseumItem from './Structures/SkyBlock/Museum/SkyblockMuseumItem.js';
import SkyblockMuseumMember from './Structures/SkyBlock/Museum/SkyblockMuseumMember.js';
import SkyblockNews from './Structures/SkyBlock/News/SkyblockNews.js';
import SkyblockProfile from './Structures/SkyBlock/Profile/SkyblockProfile.js';
import SkyblockProfileBanking from './Structures/SkyBlock/Profile/Banking/SkyblockProfileBanking.js';
import SkyblockProfileCommunityUpgrades from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyblockProfileCommunityUpgrades.js';
import SkyblockProfileCommunityUpgradesUpgrade from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyblockProfileCommunityUpgradesUpgrade.js';
import SkyblockProfileCommunityUpgradesUpgraded from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyblockProfileCommunityUpgradesUpgraded.js';
import SkyblockProfileCommunityUpgradesUpgrading from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyblockProfileCommunityUpgradesUpgrading.js';
import SkyblockProfilesBankingTrasnsaction from './Structures/SkyBlock/Profile/Banking/SkyblockProfilesBankingTrasnsaction.js';
import SkyblockSkill from './Structures/SkyBlock/Skills/SkyblockSkill.js';
import SkyblockSkillLevel from './Structures/SkyBlock/Skills/SkyblockSkillLevel.js';
import SkyblockSkills from './Structures/SkyBlock/Skills/SkyblockSkills.js';
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

  Achievements,
  Arcade,
  ArenaBrawl,
  ArenaBrawlMode,
  BaseAchievement,
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
  BlockingDead,
  Booster,
  BountyHunters,
  BowSpleef,
  BuildBattle,
  CaptureTheWool,
  Challenge,
  Challenges,
  Color,
  CopsAndCrims,
  CopsAndCrimsGamemode,
  CopsAndCrimsGun,
  Cosmetics,
  DragonWars,
  Dropper,
  DropperMap,
  Duels,
  DuelsBridge,
  DuelsGamemode,
  DuelsMegaWalls,
  DuelsOP,
  DuelsSkyWars,
  DuelsUHC,
  EnderSpleef,
  FarmHunt,
  Football,
  GalaxyWars,
  Game,
  GameAchievements,
  GameChallenges,
  GameCounts,
  GameQuests,
  Gifting,
  Guild,
  GuildAchievements,
  GuildMember,
  GuildRank,
  HideAndSeek,
  HoleInTheWall,
  House,
  Housing,
  HypixelSays,
  ItemBytes,
  Leaderboard,
  MegaWalls,
  MegaWallsKitStats,
  MegaWallsModeStats,
  MiniWalls,
  MonthlyCrate,
  MurderMystery,
  MurderMysteryModeStats,
  OneTimeAchivement,
  PVPRun,
  Paintball,
  Parkour,
  PartyGames,
  PartyPooper,
  Pet,
  PetConsumables,
  Pets,
  Pit,
  PitInventoryItem,
  PixelParty,
  PixelPartyGameMode,
  Player,
  PlayerAchievements,
  PlayerAchievementsRewards,
  PlayerQuest,
  PlayerQuestCompletion,
  PlayerQuestCompletions,
  PlayerQuests,
  PropHunt,
  Quakecraft,
  QuakecraftMode,
  Quest,
  QuestObjective,
  Quests,
  RecentGame,
  Rewards,
  Season,
  SeasonBingo,
  SeasonBingoTier,
  SeasonYear,
  Seasonal,
  SheepWars,
  SkyWars,
  SkyWarsKit,
  SkyWarsKits,
  SkyWarsMode,
  SkyWarsModeStats,
  SkyWarsPackages,
  SkyblockAuction,
  SkyblockAuctionBid,
  SkyblockAuctionsInfo,
  SkyblockBaseAuction,
  SkyblockBaseAuctionInfo,
  SkyblockBazzar,
  SkyblockBazzarProduct,
  SkyblockBazzarProductOrder,
  SkyblockBazzarQuickStatus,
  SkyblockBingo,
  SkyblockBingoGoal,
  SkyblockCollection,
  SkyblockCollectionTier,
  SkyblockCollections,
  SkyblockElection,
  SkyblockElectionCandidate,
  SkyblockElectionCandidatePerk,
  SkyblockElectionData,
  SkyblockFireSale,
  SkyblockGarden,
  SkyblockGardenActiveVisitor,
  SkyblockGardenActiveVisitorRequirement,
  SkyblockGardenComposter,
  SkyblockGardenComposterUpgrades,
  SkyblockGardenCropMilestones,
  SkyblockGardenCropsUpgrades,
  SkyblockGardenVisitors,
  SkyblockGemstone,
  SkyblockInventoryItem,
  SkyblockItem,
  SkyblockMember,
  SkyblockMemberAccessoryBag,
  SkyblockMemberAccessoryBagTuning,
  SkyblockMemberAccessoryBagTuningSlot,
  SkyblockMemberBestiary,
  SkyblockMemberChocolateFactory,
  SkyblockMemberChocolateFactoryEggs,
  SkyblockMemberChocolateFactoryEmployees,
  SkyblockMemberChocolateFactoryHitmen,
  SkyblockMemberChocolateFactoryTimeTower,
  SkyblockMemberChocolateFactoryUpgrades,
  SkyblockMemberCrimsonIsle,
  SkyblockMemberCrimsonIsleAbiphone,
  SkyblockMemberCrimsonIsleDojo,
  SkyblockMemberCrimsonIsleDojoMinigame,
  SkyblockMemberCrimsonIsleKuudra,
  SkyblockMemberCrimsonIsleKuudraPartyFinder,
  SkyblockMemberCrimsonIsleMatriarch,
  SkyblockMemberCrimsonIsleTrophyFish,
  SkyblockMemberCrimsonIsleTrophyFishFish,
  SkyblockMemberCurrencies,
  SkyblockMemberDungeons,
  SkyblockMemberDungeonsClasses,
  SkyblockMemberDungeonsFloor,
  SkyblockMemberDungeonsFloorRun,
  SkyblockMemberDungeonsMode,
  SkyblockMemberDungeonsTreasureRun,
  SkyblockMemberDungeonsTreasuresChest,
  SkyblockMemberFairySouls,
  SkyblockMemberJacobContest,
  SkyblockMemberJacobContests,
  SkyblockMemberJacobContestsMedals,
  SkyblockMemberJacobContestsPerks,
  SkyblockMemberJacobContestsUniqueBrackets,
  SkyblockMemberLeveling,
  SkyblockMemberMining,
  SkyblockMemberMiningCrystal,
  SkyblockMemberMiningHotm,
  SkyblockMemberMiningHotmForge,
  SkyblockMemberMiningHotmForgeItem,
  SkyblockMemberMiningPowder,
  SkyblockMemberMiningPowders,
  SkyblockMemberObjectives,
  SkyblockMemberPet,
  SkyblockMemberPets,
  SkyblockMemberPetsAutoPetRule,
  SkyblockMemberPetsAutoPets,
  SkyblockMemberPetsCare,
  SkyblockMemberPlayerData,
  SkyblockMemberPlayerDataActiveEffect,
  SkyblockMemberPlayerDataMinion,
  SkyblockMemberPlayerDataMinions,
  SkyblockMemberPlayerDataSkills,
  SkyblockMemberPlayerStats,
  SkyblockMemberPlayerStatsAuctions,
  SkyblockMemberPlayerStatsAuctionsStats,
  SkyblockMemberPlayerStatsCandy,
  SkyblockMemberPlayerStatsEndIsland,
  SkyblockMemberPlayerStatsEndIslandDragonFight,
  SkyblockMemberPlayerStatsEndIslandDragonFightDragon,
  SkyblockMemberPlayerStatsFishing,
  SkyblockMemberPlayerStatsGifts,
  SkyblockMemberPlayerStatsMythos,
  SkyblockMemberPlayerStatsSpookyFestival,
  SkyblockMemberPlayerStatsWinter,
  SkyblockMemberProfile,
  SkyblockMemberQuests,
  SkyblockMemberQuestsHarp,
  SkyblockMemberQuestsHarpSong,
  SkyblockMemberRift,
  SkyblockMemberRiftAccess,
  SkyblockMemberRiftBlackLagoon,
  SkyblockMemberRiftCastle,
  SkyblockMemberRiftDeadCats,
  SkyblockMemberRiftDreamFarm,
  SkyblockMemberRiftEnigma,
  SkyblockMemberRiftGallery,
  SkyblockMemberRiftGallerySecuredTrophy,
  SkyblockMemberRiftInventory,
  SkyblockMemberRiftVillagePlaza,
  SkyblockMemberRiftVillagePlazaBarry,
  SkyblockMemberRiftVillagePlazaCowboy,
  SkyblockMemberRiftVillagePlazaMurder,
  SkyblockMemberRiftWestVillage,
  SkyblockMemberRiftWestVillageCrazyKloon,
  SkyblockMemberRiftWestVillageGlyphs,
  SkyblockMemberRiftWestVillageKatHouse,
  SkyblockMemberRiftWestVillageMirrorverse,
  SkyblockMemberRiftWitherCage,
  SkyblockMemberRiftWizardTower,
  SkyblockMemberRiftWyldWoods,
  SkyblockMemberSlayer,
  SkyblockMemberSlayerClaimedLevels,
  SkyblockMemberSlayers,
  SkyblockMemberSlayersQuest,
  SkyblockMemeberQuestsTrapper,
  SkyblockMuseum,
  SkyblockMuseumItem,
  SkyblockMuseumMember,
  SkyblockNews,
  SkyblockProfile,
  SkyblockProfileBanking,
  SkyblockProfileCommunityUpgrades,
  SkyblockProfileCommunityUpgradesUpgrade,
  SkyblockProfileCommunityUpgradesUpgraded,
  SkyblockProfileCommunityUpgradesUpgrading,
  SkyblockProfilesBankingTrasnsaction,
  SkyblockSkill,
  SkyblockSkillLevel,
  SkyblockSkills,
  SmashHeoresHero,
  SmashHeroes,
  SmashHeroesMode,
  SocialMedia,
  SpeedUHC,
  SpeedUHCMode,
  Status,
  TNTGames,
  TNTRun,
  TNTTag,
  TNTWizards,
  ThrowOut,
  TieredAchivement,
  Tourney,
  TourneyData,
  TurboKartRacers,
  TurboKartRacersMap,
  UHC,
  UHCGamemode,
  VampireZ,
  VampireZRole,
  Walls,
  Warlords,
  WarlordsClass,
  WatchdogStats,
  WoolGames,
  WoolWars,
  WoolWarsClass,
  Zombies,
  ZombiesStats
};
