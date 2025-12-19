/* v8 ignore next 10000 */
/* eslint-disable @stylistic/max-len  */

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
export * from './Types/SkyBlock.js';
export * from './Types/Static.js';

export * from './Utils/Constants.js';
export * from './Utils/Divide.js';
export * from './Utils/Guild.js';
export * from './Utils/Oscillation.js';
export * from './Utils/ParseBoosterType.js';
export * from './Utils/ParseMode.js';
export * from './Utils/RemoveSnakeCase.js';
export * from './Utils/Romanize.js';
export * from './Utils/SkyBlockUtils.js';
export * from './Utils/TicksToMilliseconds.js';

import Achievements from './Structures/Static/Achievements/Achievements.js';
import Arcade from './Structures/MiniGames/Arcade/Arcade.js';
import ArcadeOptions from './Structures/MiniGames/Arcade/ArcadeOptions.js';
import ArenaBrawl from './Structures/MiniGames/ArenaBrawl/ArenaBrawl.js';
import ArenaBrawlMode from './Structures/MiniGames/ArenaBrawl/ArenaBrawlMode.js';
import BaseAchievement from './Structures/Static/Achievements/BaseAchievement.js';
import BaseKillDeathsType from './Structures/MiniGames/Shared/BaseKillDeathsType.js';
import BedWars from './Structures/MiniGames/BedWars/BedWars.js';
import BedWarsBeds from './Structures/MiniGames/BedWars/BedWarsBeds.js';
import BedWarsBoxes from './Structures/MiniGames/BedWars/BedWarsBoxes.js';
import BedWarsChallenge from './Structures/MiniGames/BedWars/BedWarsChallenges/BedWarsChallenge.js';
import BedWarsChallenges from './Structures/MiniGames/BedWars/BedWarsChallenges/BedWarsChallenges.js';
import BedWarsEightOne from './Structures/MiniGames/BedWars/BedWarsEightOne.js';
import BedWarsEightTwo from './Structures/MiniGames/BedWars/BedWarsEightTwo.js';
import BedWarsFavorites from './Structures/MiniGames/BedWars/BedWarsFavorites.js';
import BedWarsFigurines from './Structures/MiniGames/BedWars/BedWarsFigurines.js';
import BedWarsFourFour from './Structures/MiniGames/BedWars/BedWarsFourFour.js';
import BedWarsFourThree from './Structures/MiniGames/BedWars/BedWarsFourThree.js';
import BedWarsItemsPurchased from './Structures/MiniGames/BedWars/BedWarsItemsPurchased.js';
import BedWarsKillsDeaths from './Structures/MiniGames/BedWars/BedWarsKillsDeaths/BedWarsKillsDeaths.js';
import BedWarsKillsDeathsType from './Structures/MiniGames/BedWars/BedWarsKillsDeaths/BedWarsKillsDeathsType.js';
import BedWarsMode from './Structures/MiniGames/BedWars/BedWarsMode.js';
import BedWarsPractice from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPractice.js';
import BedWarsPracticeBridging from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridging.js';
import BedWarsPracticeBridgingRecords from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecords.js';
import BedWarsPracticeBridgingRecordsDistance from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecordsDistance.js';
import BedWarsPracticeBridgingRecordsEevation from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecordsEevation.js';
import BedWarsPracticeMode from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeMode.js';
import BedWarsPrivateGameSettings from './Structures/MiniGames/BedWars/BedWarsPrivateGameSettings.js';
import BedWarsResourcesCollected from './Structures/MiniGames/BedWars/BedWarsResourcesCollected.js';
import BedWarsSettings from './Structures/MiniGames/BedWars/BedWarsSettings.js';
import BedWarsSlumber from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumber.js';
import BedWarsSlumberMinion from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberMinion.js';
import BedWarsSlumberPhase from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberPhase.js';
import BedWarsSlumberPhaseThree from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberPhaseThree.js';
import BedWarsSlumberQuest from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuest.js';
import BedWarsSlumberQuestGamblerGeorge from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestGamblerGeorge.js';
import BedWarsSlumberQuestItem from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestItem.js';
import BedWarsSlumberQuestNPC from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPC.js';
import BedWarsSlumberQuestNPCSBoolean from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPCSBoolean.js';
import BedWarsSlumberQuestNPCSNumber from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPCSNumber.js';
import BedWarsSlumberQuestObjective from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestObjective.js';
import BedWarsSlumberRoom from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberRoom.js';
import BedWarsSlumberSandman from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberSandman.js';
import BedWarsTwoFour from './Structures/MiniGames/BedWars/BedWarsTwoFour.js';
import BlitzSurvivalGames from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.js';
import BlitzSurvivalGamesKit from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesKit.js';
import BlockingDead from './Structures/MiniGames/Arcade/BlockingDead.js';
import Booster from './Structures/Boosters/Booster.js';
import BowSpleef from './Structures/MiniGames/TNTGames/BowSpleef.js';
import BuildBattle from './Structures/MiniGames/BuildBattle/BuildBattle.js';
import BuildBattleLastWin from './Structures/MiniGames/BuildBattle/BuildBattleLastWin.js';
import BuildBattleVotes from './Structures/MiniGames/BuildBattle/BuildBattleVotes.js';
import CaptureTheWool from './Structures/MiniGames/WoolGames/CaptureTheWool.js';
import Challenge from './Structures/Static/Challenge.js';
import Challenges from './Structures/Static/Challenges.js';
import Color from './Structures/Color.js';
import CopsAndCrims from './Structures/MiniGames/CopsAndCrims/CopsAndCrims.js';
import CopsAndCrimsGamemode from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGamemode.js';
import CopsAndCrimsGun from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGun.js';
import DragonWars from './Structures/MiniGames/Arcade/DragonWars.js';
import DrawTheirThing from './Structures/MiniGames/Arcade/DrawTheirThing.js';
import Dropper from './Structures/MiniGames/Arcade/Dropper/Dropper.js';
import DropperMap from './Structures/MiniGames/Arcade/Dropper/DropperMap.js';
import Dtt from './Structures/MiniGames/Arcade/Dtt.js';
import Duels from './Structures/MiniGames/Duels/Duels.js';
import DuelsBridge from './Structures/MiniGames/Duels/DuelsBridge.js';
import DuelsGamemode from './Structures/MiniGames/Duels/DuelsGamemode.js';
import DuelsMegaWalls from './Structures/MiniGames/Duels/DuelsMegaWalls.js';
import DuelsOP from './Structures/MiniGames/Duels/DuelsOP.js';
import DuelsSkyWars from './Structures/MiniGames/Duels/DuelsSkyWars.js';
import DuelsUHC from './Structures/MiniGames/Duels/DuelsUHC.js';
import EasterSimulator from './Structures/MiniGames/Arcade/EasterSimulator.js';
import Emblem from './Structures/MiniGames/Shared/Emblem/Emblem.js';
import EmblemColors from './Structures/MiniGames/Shared/Emblem/EmblemColors.js';
import EnderSpleef from './Structures/MiniGames/Arcade/EnderSpleef.js';
import FarmHunt from './Structures/MiniGames/Arcade/FarmHunt.js';
import FootBall from './Structures/MiniGames/Arcade/FootBall.js';
import GalaxyWars from './Structures/MiniGames/Arcade/GalaxyWars.js';
import Game from './Structures/Game.js';
import GameAchievements from './Structures/Static/Achievements/GameAchievements.js';
import GameChallenges from './Structures/Static/GameChallenges.js';
import GameCounts from './Structures/GameCounts.js';
import GameQuests from './Structures/Static/GameQuests.js';
import GrinchSimulator from './Structures/MiniGames/Arcade/GrinchSimulator.js';
import Guild from './Structures/Guild/Guild.js';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.js';
import GuildMember from './Structures/Guild/GuildMember.js';
import GuildRank from './Structures/Guild/GuildRank.js';
import HalloweenSimulator from './Structures/MiniGames/Arcade/HalloweenSimulator.js';
import HideAndSeek from './Structures/MiniGames/Arcade/HideAndSeek.js';
import HoleInTheWall from './Structures/MiniGames/Arcade/HoleInTheWall.js';
import House from './Structures/House.js';
import HypixelSports from './Structures/MiniGames/Arcade/HypixelSports.js';
import ItemBytes from './Structures/ItemBytes.js';
import LawnMoower from './Structures/MiniGames/Arcade/PartyGames/LawnMoower.js';
import Leaderboard from './Structures/Leaderboard.js';
import LeaderboardSettings from './Structures/MiniGames/Shared/LeaderboardSettings.js';
import MegaWalls from './Structures/MiniGames/MegaWalls/MegaWalls.js';
import MegaWallsKitStats from './Structures/MiniGames/MegaWalls/MegaWallsKitStats.js';
import MegaWallsModeStats from './Structures/MiniGames/MegaWalls/MegaWallsModeStats.js';
import MiniWalls from './Structures/MiniGames/Arcade/MiniWalls.js';
import MurderMystery from './Structures/MiniGames/MurderMystery/MurderMystery.js';
import MurderMysteryDescent from './Structures/MiniGames/MurderMystery/MurderMysteryDescent.js';
import MurderMysteryDescentItem from './Structures/MiniGames/MurderMystery/MurderMysteryDescentItem.js';
import MurderMysteryFavorites from './Structures/MiniGames/MurderMystery/MurderMysteryFavorites.js';
import MurderMysteryGamemode from './Structures/MiniGames/MurderMystery/MurderMysteryGamemode.js';
import MurderMysteryKnifeSkinPrestige from './Structures/MiniGames/MurderMystery/MurderMysteryKnifeSkinPrestige.js';
import MurderMysteryKnifeSkinPrestigeXp from './Structures/MiniGames/MurderMystery/MurderMysteryKnifeSkinPrestigeXp.js';
import MurderMysteryMap from './Structures/MiniGames/MurderMystery/MurderMysteryMap.js';
import OneInTheQuiver from './Structures/MiniGames/Arcade/OneInTheQuiver.js';
import OneTimeAchievement from './Structures/Static/Achievements/OneTimeAchievement.js';
import PVPRun from './Structures/MiniGames/TNTGames/PVPRun.js';
import Paintball from './Structures/MiniGames/Paintball.js';
import PartyGames from './Structures/MiniGames/Arcade/PartyGames/PartyGames.js';
import PartyGamesGame from './Structures/MiniGames/Arcade/PartyGames/PartyGamesGame.js';
import Pit from './Structures/MiniGames/Pit/Pit.js';
import PitInventoryItem from './Structures/MiniGames/Pit/PitInventoryItem.js';
import Player from './Structures/Player/Player.js';
import PlayerAchievements from './Structures/Player/PlayerAchievements/PlayerAchievements.js';
import PlayerAchievementsRewards from './Structures/Player/PlayerAchievements/PlayerAchievementsRewards.js';
import PlayerAchievementsTotem from './Structures/Player/PlayerAchievements/PlayerAchievementsTotem.js';
import PlayerAdventRewards from './Structures/Player/PlayerAdventRewards/PlayerAdventRewards.js';
import PlayerAdventRewardsDay from './Structures/Player/PlayerAdventRewards/PlayerAdventRewardsDay.js';
import PlayerCosmetics from './Structures/Player/PlayerCosmetics/PlayerCosmetics.js';
import PlayerCosmeticsPet from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPet.js';
import PlayerCosmeticsPets from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPets.js';
import PlayerCosmeticsPetsConsumables from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPetsConsumables.js';
import PlayerGifting from './Structures/Player/PlayerGifting.js';
import PlayerHousing from './Structures/Player/PlayerHousing/PlayerHousing.js';
import PlayerHousingGivenCookies from './Structures/Player/PlayerHousing/PlayerHousingGivenCookies.js';
import PlayerHousingPlayerSettings from './Structures/Player/PlayerHousing/PlayerHousingPlayerSettings.js';
import PlayerParkour from './Structures/Player/PlayerParkour.js';
import PlayerQuest from './Structures/Player/PlayerQuests/PlayerQuest.js';
import PlayerQuestCompletion from './Structures/Player/PlayerQuests/PlayerQuestCompletion.js';
import PlayerQuestCompletions from './Structures/Player/PlayerQuests/PlayerQuestCompletions.js';
import PlayerQuests from './Structures/Player/PlayerQuests/PlayerQuests.js';
import PlayerRankPurchase from './Structures/Player/PlayerRankPurchase.js';
import PlayerRewards from './Structures/Player/PlayerRewards/PlayerRewards.js';
import PlayerRewardsMonthlyCrate from './Structures/Player/PlayerRewards/PlayerRewardsMonthlyCrate.js';
import PlayerScorpiusBribe from './Structures/Player/PlayerScorpiusBribe.js';
import PlayerSeasonalChristmasYear from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYear.js';
import PlayerSeasonalChristmasYearAdventRewards from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYearAdventRewards.js';
import PlayerSeasonalChristmasYearLeveling from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYearLeveling.js';
import PlayerSocialMedia from './Structures/Player/PlayerSocialMedia.js';
import PlayerStats from './Structures/Player/PlayerStats.js';
import PlayerTourney from './Structures/Player/PlayerTourney/PlayerTourney.js';
import PlayerTourneyData from './Structures/Player/PlayerTourney/PlayerTourneyData.js';
import Quakecraft from './Structures/MiniGames/Quakecraft/Quakecraft.js';
import QuakecraftMode from './Structures/MiniGames/Quakecraft/QuakecraftMode.js';
import Quest from './Structures/Static/Quest.js';
import QuestObjective from './Structures/Static/QuestObjective.js';
import Quests from './Structures/Static/Quests.js';
import RPG16 from './Structures/MiniGames/Arcade/PartyGames/RPG16.js';
import RecentGame from './Structures/RecentGame.js';
import SantaSays from './Structures/MiniGames/Arcade/SantaSays.js';
import SantaSimulator from './Structures/MiniGames/Arcade/SantaSimulator.js';
import ScubaSimulator from './Structures/MiniGames/Arcade/ScubaSimulator.js';
import SheepWars from './Structures/MiniGames/WoolGames/SheepWars.js';
import SimonSays from './Structures/MiniGames/Arcade/SimonSays.js';
import SkyBlockAuction from './Structures/SkyBlock/Auctions/SkyBlockAuction.js';
import SkyBlockAuctionBid from './Structures/SkyBlock/Auctions/SkyBlockAuctionBid.js';
import SkyBlockAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.js';
import SkyBlockBaseAuction from './Structures/SkyBlock/Auctions/SkyBlockBaseAuction.js';
import SkyBlockBaseAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.js';
import SkyBlockBazaar from './Structures/SkyBlock/Bazaar/SkyBlockBazaar.js';
import SkyBlockBazaarProduct from './Structures/SkyBlock/Bazaar/SkyBlockBazaarProduct.js';
import SkyBlockBazaarProductOrder from './Structures/SkyBlock/Bazaar/SkyBlockBazaarProductOrder.js';
import SkyBlockBazaarQuickStatus from './Structures/SkyBlock/Bazaar/SkyBlockBazaarQuickStatus.js';
import SkyBlockBingo from './Structures/SkyBlock/Bingo/SkyBlockBingo.js';
import SkyBlockBingoGoal from './Structures/SkyBlock/Bingo/SkyBlockBingoGoal.js';
import SkyBlockCollection from './Structures/SkyBlock/Collections/SkyBlockCollection.js';
import SkyBlockCollectionTier from './Structures/SkyBlock/Collections/SkyBlockCollectionTier.js';
import SkyBlockCollections from './Structures/SkyBlock/Collections/SkyBlockCollections.js';
import SkyBlockElection from './Structures/SkyBlock/Election/SkyBlockElection.js';
import SkyBlockElectionCandidate from './Structures/SkyBlock/Election/SkyBlockElectionCandidate.js';
import SkyBlockElectionCandidatePerk from './Structures/SkyBlock/Election/SkyBlockElectionCandidatePerk.js';
import SkyBlockElectionData from './Structures/SkyBlock/Election/SkyBlockElectionData.js';
import SkyBlockFireSale from './Structures/SkyBlock/FireSale/SkyBlockFireSale.js';
import SkyBlockGarden from './Structures/SkyBlock/Garden/SkyBlockGarden.js';
import SkyBlockGardenActiveVisitor from './Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenActiveVisitorRequirement from './Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitorRequirement.js';
import SkyBlockGardenComposter from './Structures/SkyBlock/Garden/SkyBlockGardenComposter.js';
import SkyBlockGardenComposterUpgrades from './Structures/SkyBlock/Garden/SkyBlockGardenComposterUpgrades.js';
import SkyBlockGardenCropMilestones from './Structures/SkyBlock/Garden/SkyBlockGardenCropMilestones.js';
import SkyBlockGardenCropsUpgrades from './Structures/SkyBlock/Garden/SkyBlockGardenCropsUpgrades.js';
import SkyBlockGardenVisitors from './Structures/SkyBlock/Garden/SkyBlockGardenVisitors.js';
import SkyBlockInventoryItem from './Structures/SkyBlock/Inventory/SkyBlockInventoryItem.js';
import SkyBlockInventoryItemAttribute from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemAttribute.js';
import SkyBlockInventoryItemEnchantment from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemEnchantment.js';
import SkyBlockInventoryItemRune from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemRune.js';
import SkyBlockItem from './Structures/SkyBlock/SkyBlockItem.js';
import SkyBlockMember from './Structures/SkyBlock/Member/SkyBlockMember.js';
import SkyBlockMemberAccessoryBag from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBag.js';
import SkyBlockMemberAccessoryBagTuning from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBagTuning.js';
import SkyBlockMemberAccessoryBagTuningSlot from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBagTuningSlot.js';
import SkyBlockMemberBestiary from './Structures/SkyBlock/Member/Bestiary/SkyBlockMemberBestiary.js';
import SkyBlockMemberChocolateFactory from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactory.js';
import SkyBlockMemberChocolateFactoryEggs from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryEggs.js';
import SkyBlockMemberChocolateFactoryEmployees from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryEmployees.js';
import SkyBlockMemberChocolateFactoryHitmen from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryHitmen.js';
import SkyBlockMemberChocolateFactoryTimeTower from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryTimeTower.js';
import SkyBlockMemberChocolateFactoryUpgrades from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryUpgrades.js';
import SkyBlockMemberCrimsonIsle from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsle.js';
import SkyBlockMemberCrimsonIsleAbiphone from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleAbiphone.js';
import SkyBlockMemberCrimsonIsleDojo from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleDojo.js';
import SkyBlockMemberCrimsonIsleDojoMinigame from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleDojoMinigame.js';
import SkyBlockMemberCrimsonIsleKuudra from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleKuudra.js';
import SkyBlockMemberCrimsonIsleKuudraPartyFinder from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleKuudraPartyFinder.js';
import SkyBlockMemberCrimsonIsleMatriarch from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleMatriarch.js';
import SkyBlockMemberCrimsonIsleTrophyFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFish.js';
import SkyBlockMemberCrimsonIsleTrophyFishCaught from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFishCaught.js';
import SkyBlockMemberCrimsonIsleTrophyFishFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFishFish.js';
import SkyBlockMemberCurrencies from './Structures/SkyBlock/Member/SkyBlockMemberCurrencies.js';
import SkyBlockMemberDungeons from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeons.js';
import SkyBlockMemberDungeonsClasses from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsClasses.js';
import SkyBlockMemberDungeonsFloor from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsFloor.js';
import SkyBlockMemberDungeonsFloorRun from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsFloorRun.js';
import SkyBlockMemberDungeonsMode from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsMode.js';
import SkyBlockMemberDungeonsTreasureRun from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsTreasureRun.js';
import SkyBlockMemberDungeonsTreasuresChest from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsTreasuresChest.js';
import SkyBlockMemberFairySouls from './Structures/SkyBlock/Member/SkyBlockMemberFairySouls.js';
import SkyBlockMemberInventories from './Structures/SkyBlock/Member/Inventories/SkyBlockMemberInventories.js';
import SkyBlockMemberInventoriesArmor from './Structures/SkyBlock/Member/Inventories/Armor/SkyBlockMemberInventoriesArmor.js';
import SkyBlockMemberInventoriesArmorDecoded from './Structures/SkyBlock/Member/Inventories/Armor/SkyBlockMemberInventoriesArmorDecoded.js';
import SkyBlockMemberInventoriesBackpack from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpack.js';
import SkyBlockMemberInventoriesBackpackDecoded from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpackDecoded.js';
import SkyBlockMemberInventoriesBackpacks from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpacks.js';
import SkyBlockMemberInventoriesBags from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBags.js';
import SkyBlockMemberInventoriesBagsTalisman from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBagsTalisman.js';
import SkyBlockMemberInventoriesBagsTalismanDecoded from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBagsTalismanDecoded.js';
import SkyBlockMemberInventoriesBaseInventory from './Structures/SkyBlock/Member/Inventories/SkyBlockMemberInventoriesBaseInventory.js';
import SkyBlockMemberInventoriesEquipment from './Structures/SkyBlock/Member/Inventories/Equipment/SkyBlockMemberInventoriesEquipment.js';
import SkyBlockMemberInventoriesEquipmentDecoded from './Structures/SkyBlock/Member/Inventories/Equipment/SkyBlockMemberInventoriesEquipmentDecoded.js';
import SkyBlockMemberInventoriesInventory from './Structures/SkyBlock/Member/Inventories/Inventory/SkyBlockMemberInventoriesInventory.js';
import SkyBlockMemberInventoriesInventoryDecoded from './Structures/SkyBlock/Member/Inventories/Inventory/SkyBlockMemberInventoriesInventoryDecoded.js';
import SkyBlockMemberJacobContest from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContest.js';
import SkyBlockMemberJacobContests from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContests.js';
import SkyBlockMemberJacobContestsMedals from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsMedals.js';
import SkyBlockMemberJacobContestsPerks from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsPerks.js';
import SkyBlockMemberJacobContestsUniqueBrackets from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsUniqueBrackets.js';
import SkyBlockMemberLeveling from './Structures/SkyBlock/Member/SkyBlockMemberLeveling.js';
import SkyBlockMemberMining from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMining.js';
import SkyBlockMemberMiningCrystal from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningCrystal.js';
import SkyBlockMemberMiningHotm from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotm.js';
import SkyBlockMemberMiningHotmForge from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotmForge.js';
import SkyBlockMemberMiningHotmForgeItem from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotmForgeItem.js';
import SkyBlockMemberMiningPowder from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningPowder.js';
import SkyBlockMemberMiningPowders from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningPowders.js';
import SkyBlockMemberObjectives from './Structures/SkyBlock/Member/SkyBlockMemberObjectives.js';
import SkyBlockMemberPet from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPet.js';
import SkyBlockMemberPets from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPets.js';
import SkyBlockMemberPetsAutoPetRule from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsAutoPetRule.js';
import SkyBlockMemberPetsAutoPets from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsAutoPets.js';
import SkyBlockMemberPetsCare from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsCare.js';
import SkyBlockMemberPlayerData from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerData.js';
import SkyBlockMemberPlayerDataActiveEffect from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataActiveEffect.js';
import SkyBlockMemberPlayerDataMinion from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataMinion.js';
import SkyBlockMemberPlayerDataMinions from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataMinions.js';
import SkyBlockMemberPlayerDataSkills from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataSkills.js';
import SkyBlockMemberPlayerStats from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStats.js';
import SkyBlockMemberPlayerStatsAuctions from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsAuctions.js';
import SkyBlockMemberPlayerStatsAuctionsStats from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsAuctionsStats.js';
import SkyBlockMemberPlayerStatsCandy from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsCandy.js';
import SkyBlockMemberPlayerStatsEndIsland from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIsland.js';
import SkyBlockMemberPlayerStatsEndIslandDragonFight from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIslandDragonFight.js';
import SkyBlockMemberPlayerStatsEndIslandDragonFightDragon from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.js';
import SkyBlockMemberPlayerStatsFishing from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsFishing.js';
import SkyBlockMemberPlayerStatsGifts from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsGifts.js';
import SkyBlockMemberPlayerStatsMythos from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsMythos.js';
import SkyBlockMemberPlayerStatsSpookyFestival from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsSpookyFestival.js';
import SkyBlockMemberPlayerStatsWinter from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsWinter.js';
import SkyBlockMemberProfile from './Structures/SkyBlock/Member/SkyBlockMemberProfile.js';
import SkyBlockMemberQuests from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuests.js';
import SkyBlockMemberQuestsHarp from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsHarp.js';
import SkyBlockMemberQuestsHarpSong from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsHarpSong.js';
import SkyBlockMemberQuestsTrapper from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsTrapper.js';
import SkyBlockMemberRift from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRift.js';
import SkyBlockMemberRiftAccess from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftAccess.js';
import SkyBlockMemberRiftBlackLagoon from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftBlackLagoon.js';
import SkyBlockMemberRiftCastle from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftCastle.js';
import SkyBlockMemberRiftDeadCats from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftDeadCats.js';
import SkyBlockMemberRiftDreamFarm from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftDreamFarm.js';
import SkyBlockMemberRiftEnigma from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftEnigma.js';
import SkyBlockMemberRiftGallery from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftGallery.js';
import SkyBlockMemberRiftGallerySecuredTrophy from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftGallerySecuredTrophy.js';
import SkyBlockMemberRiftInventory from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftInventory.js';
import SkyBlockMemberRiftVillagePlaza from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlaza.js';
import SkyBlockMemberRiftVillagePlazaBarry from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaBarry.js';
import SkyBlockMemberRiftVillagePlazaCowboy from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaCowboy.js';
import SkyBlockMemberRiftVillagePlazaMurder from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaMurder.js';
import SkyBlockMemberRiftWestVillage from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillage.js';
import SkyBlockMemberRiftWestVillageCrazyKloon from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageCrazyKloon.js';
import SkyBlockMemberRiftWestVillageGlyphs from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageGlyphs.js';
import SkyBlockMemberRiftWestVillageKatHouse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageKatHouse.js';
import SkyBlockMemberRiftWestVillageMirrorverse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageMirrorverse.js';
import SkyBlockMemberRiftWitherCage from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWitherCage.js';
import SkyBlockMemberRiftWizardTower from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWizardTower.js';
import SkyBlockMemberRiftWyldWoods from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWyldWoods.js';
import SkyBlockMemberSlayer from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayer.js';
import SkyBlockMemberSlayerClaimedLevels from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayerClaimedLevels.js';
import SkyBlockMemberSlayers from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayers.js';
import SkyBlockMemberSlayersQuest from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayersQuest.js';
import SkyBlockMuseum from './Structures/SkyBlock/Museum/SkyBlockMuseum.js';
import SkyBlockMuseumItem from './Structures/SkyBlock/Museum/SkyBlockMuseumItem.js';
import SkyBlockMuseumMember from './Structures/SkyBlock/Museum/SkyBlockMuseumMember.js';
import SkyBlockNews from './Structures/SkyBlock/News/SkyBlockNews.js';
import SkyBlockPotionEffect from './Structures/SkyBlock/Potion/SkyBlockPotionEffect.js';
import SkyBlockProfile from './Structures/SkyBlock/Profile/SkyBlockProfile.js';
import SkyBlockProfileBanking from './Structures/SkyBlock/Profile/Banking/SkyBlockProfileBanking.js';
import SkyBlockProfileCommunityUpgrades from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgrades.js';
import SkyBlockProfileCommunityUpgradesUpgrade from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgrade.js';
import SkyBlockProfileCommunityUpgradesUpgraded from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgraded.js';
import SkyBlockProfileCommunityUpgradesUpgrading from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgrading.js';
import SkyBlockProfilesBankingTransaction from './Structures/SkyBlock/Profile/Banking/SkyBlockProfilesBankingTransaction.js';
import SkyBlockSkill from './Structures/SkyBlock/Skills/SkyBlockSkill.js';
import SkyBlockSkillLevel from './Structures/SkyBlock/Skills/SkyBlockSkillLevel.js';
import SkyBlockSkills from './Structures/SkyBlock/Skills/SkyBlockSkills.js';
import SkyWars from './Structures/MiniGames/SkyWars/SkyWars.js';
import SkyWarsHeads from './Structures/MiniGames/SkyWars/SkyWarsHeads.js';
import SkyWarsKillsDeaths from './Structures/MiniGames/SkyWars/SkyWarsKillsDeaths.js';
import SkyWarsKillsDeathsType from './Structures/MiniGames/SkyWars/SkyWarsKillsDeathsType.js';
import SkyWarsKitsMythic from './Structures/MiniGames/SkyWars/SkyWarsKitsMythics/SkyWarsKitsMythic.js';
import SkyWarsKitsMythics from './Structures/MiniGames/SkyWars/SkyWarsKitsMythics/SkyWarsKitsMythics.js';
import SkyWarsMega from './Structures/MiniGames/SkyWars/SkyWarsMega/SkyWarsMega.js';
import SkyWarsMegaKits from './Structures/MiniGames/SkyWars/SkyWarsMega/SkyWarsMegaKits.js';
import SkyWarsMini from './Structures/MiniGames/SkyWars/SkyWarsMini.js';
import SkyWarsMode from './Structures/MiniGames/SkyWars/SkyWarsMode/SkyWarsMode.js';
import SkyWarsModePerk from './Structures/MiniGames/SkyWars/SkyWarsMode/SkyWarsModePerk.js';
import SkyWarsPrivateGames from './Structures/MiniGames/SkyWars/SkyWarsPrivateGames.js';
import SkyWarsRanked from './Structures/MiniGames/SkyWars/SkyWarsRanked/SkyWarsRanked.js';
import SkyWarsRankedKits from './Structures/MiniGames/SkyWars/SkyWarsRanked/SkyWarsRankedKits.js';
import SkyWarsSolo from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSolo.js';
import SkyWarsSoloKits from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKits.js';
import SkyWarsSoloKitsAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsAdvanced.js';
import SkyWarsSoloKitsBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsBasic.js';
import SkyWarsSoloKitsLab from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLab.js';
import SkyWarsSoloKitsLabAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLabAdvanced.js';
import SkyWarsSoloKitsLabBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLabBasic.js';
import SkyWarsSoloKitsMini from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsMini.js';
import SkyWarsSoloKitsTourney from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourney.js';
import SkyWarsSoloKitsTourneyAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourneyAdvanced.js';
import SkyWarsSoloKitsTourneyBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourneyBasic.js';
import SkyWarsTeams from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeams.js';
import SkyWarsTeamsKits from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKits.js';
import SkyWarsTeamsKitsAttacking from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsAttacking.js';
import SkyWarsTeamsKitsDefending from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsDefending.js';
import SkyWarsTeamsKitsMining from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsMining.js';
import SkyWarsTeamsKitsSupporting from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsSupporting.js';
import SmashHeoresHero from './Structures/MiniGames/SmashHeroes/SmashHeoresHero.js';
import SmashHeroes from './Structures/MiniGames/SmashHeroes/SmashHeroes.js';
import SmashHeroesMode from './Structures/MiniGames/SmashHeroes/SmashHeroesMode.js';
import Soccer from './Structures/MiniGames/Arcade/Soccer.js';
import SpeedUHC from './Structures/MiniGames/SpeedUHC/SpeedUHC.js';
import SpeedUHCMode from './Structures/MiniGames/SpeedUHC/SpeedUHCMode.js';
import Status from './Structures/Status.js';
import TNTGames from './Structures/MiniGames/TNTGames/TNTGames.js';
import TNTRun from './Structures/MiniGames/TNTGames/TNTRun.js';
import TNTTag from './Structures/MiniGames/TNTGames/TNTTag.js';
import TNTWizards from './Structures/MiniGames/TNTGames/TNTWizards.js';
import ThrowOut from './Structures/MiniGames/Arcade/ThrowOut.js';
import TieredAchievement from './Structures/Static/Achievements/TieredAchievement.js';
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
import WoolHunt from './Structures/MiniGames/Arcade/WoolHunt.js';
import WoolWars from './Structures/MiniGames/WoolGames/WoolWars.js';
import WoolWarsClass from './Structures/MiniGames/WoolGames/WoolWarsClass.js';
import Zombies from './Structures/MiniGames/Arcade/Zombies/Zombies.js';
import ZombiesMap from './Structures/MiniGames/Arcade/Zombies/ZombiesMap.js';

export {
  Client,
  Errors,
  Achievements,
  Arcade,
  ArcadeOptions,
  ArenaBrawl,
  ArenaBrawlMode,
  BaseAchievement,
  BaseKillDeathsType,
  BedWars,
  BedWarsBeds,
  BedWarsBoxes,
  BedWarsChallenge,
  BedWarsChallenges,
  BedWarsEightOne,
  BedWarsEightTwo,
  BedWarsFavorites,
  BedWarsFigurines,
  BedWarsFourFour,
  BedWarsFourThree,
  BedWarsItemsPurchased,
  BedWarsKillsDeaths,
  BedWarsKillsDeathsType,
  BedWarsMode,
  BedWarsPractice,
  BedWarsPracticeBridging,
  BedWarsPracticeBridgingRecords,
  BedWarsPracticeBridgingRecordsDistance,
  BedWarsPracticeBridgingRecordsEevation,
  BedWarsPracticeMode,
  BedWarsPrivateGameSettings,
  BedWarsResourcesCollected,
  BedWarsSettings,
  BedWarsSlumber,
  BedWarsSlumberMinion,
  BedWarsSlumberPhase,
  BedWarsSlumberPhaseThree,
  BedWarsSlumberQuest,
  BedWarsSlumberQuestGamblerGeorge,
  BedWarsSlumberQuestItem,
  BedWarsSlumberQuestNPC,
  BedWarsSlumberQuestNPCSBoolean,
  BedWarsSlumberQuestNPCSNumber,
  BedWarsSlumberQuestObjective,
  BedWarsSlumberRoom,
  BedWarsSlumberSandman,
  BedWarsTwoFour,
  BlitzSurvivalGames,
  BlitzSurvivalGamesKit,
  BlockingDead,
  Booster,
  BowSpleef,
  BuildBattle,
  BuildBattleLastWin,
  BuildBattleVotes,
  CaptureTheWool,
  Challenge,
  Challenges,
  Color,
  CopsAndCrims,
  CopsAndCrimsGamemode,
  CopsAndCrimsGun,
  DragonWars,
  DrawTheirThing,
  Dropper,
  DropperMap,
  Dtt,
  Duels,
  DuelsBridge,
  DuelsGamemode,
  DuelsMegaWalls,
  DuelsOP,
  DuelsSkyWars,
  DuelsUHC,
  EasterSimulator,
  Emblem,
  EmblemColors,
  EnderSpleef,
  FarmHunt,
  FootBall,
  GalaxyWars,
  Game,
  GameAchievements,
  GameChallenges,
  GameCounts,
  GameQuests,
  GrinchSimulator,
  Guild,
  GuildAchievements,
  GuildMember,
  GuildRank,
  HalloweenSimulator,
  HideAndSeek,
  HoleInTheWall,
  House,
  HypixelSports,
  ItemBytes,
  LawnMoower,
  Leaderboard,
  LeaderboardSettings,
  MegaWalls,
  MegaWallsKitStats,
  MegaWallsModeStats,
  MiniWalls,
  MurderMystery,
  MurderMysteryDescent,
  MurderMysteryDescentItem,
  MurderMysteryFavorites,
  MurderMysteryGamemode,
  MurderMysteryKnifeSkinPrestige,
  MurderMysteryKnifeSkinPrestigeXp,
  MurderMysteryMap,
  OneInTheQuiver,
  OneTimeAchievement,
  PVPRun,
  Paintball,
  PartyGames,
  PartyGamesGame,
  Pit,
  PitInventoryItem,
  Player,
  PlayerAchievements,
  PlayerAchievementsRewards,
  PlayerAchievementsTotem,
  PlayerAdventRewards,
  PlayerAdventRewardsDay,
  PlayerCosmetics,
  PlayerCosmeticsPet,
  PlayerCosmeticsPets,
  PlayerCosmeticsPetsConsumables,
  PlayerGifting,
  PlayerHousing,
  PlayerHousingGivenCookies,
  PlayerHousingPlayerSettings,
  PlayerParkour,
  PlayerQuest,
  PlayerQuestCompletion,
  PlayerQuestCompletions,
  PlayerQuests,
  PlayerRankPurchase,
  PlayerRewards,
  PlayerRewardsMonthlyCrate,
  PlayerScorpiusBribe,
  PlayerSeasonalChristmasYear,
  PlayerSeasonalChristmasYearAdventRewards,
  PlayerSeasonalChristmasYearLeveling,
  PlayerSocialMedia,
  PlayerStats,
  PlayerTourney,
  PlayerTourneyData,
  Quakecraft,
  QuakecraftMode,
  Quest,
  QuestObjective,
  Quests,
  RPG16,
  RecentGame,
  SantaSays,
  SantaSimulator,
  ScubaSimulator,
  SheepWars,
  SimonSays,
  SkyBlockAuction,
  SkyBlockAuctionBid,
  SkyBlockAuctionInfo,
  SkyBlockBaseAuction,
  SkyBlockBaseAuctionInfo,
  SkyBlockBazaar,
  SkyBlockBazaarProduct,
  SkyBlockBazaarProductOrder,
  SkyBlockBazaarQuickStatus,
  SkyBlockBingo,
  SkyBlockBingoGoal,
  SkyBlockCollection,
  SkyBlockCollectionTier,
  SkyBlockCollections,
  SkyBlockElection,
  SkyBlockElectionCandidate,
  SkyBlockElectionCandidatePerk,
  SkyBlockElectionData,
  SkyBlockFireSale,
  SkyBlockGarden,
  SkyBlockGardenActiveVisitor,
  SkyBlockGardenActiveVisitorRequirement,
  SkyBlockGardenComposter,
  SkyBlockGardenComposterUpgrades,
  SkyBlockGardenCropMilestones,
  SkyBlockGardenCropsUpgrades,
  SkyBlockGardenVisitors,
  SkyBlockInventoryItem,
  SkyBlockInventoryItemAttribute,
  SkyBlockInventoryItemEnchantment,
  SkyBlockInventoryItemRune,
  SkyBlockItem,
  SkyBlockMember,
  SkyBlockMemberAccessoryBag,
  SkyBlockMemberAccessoryBagTuning,
  SkyBlockMemberAccessoryBagTuningSlot,
  SkyBlockMemberBestiary,
  SkyBlockMemberChocolateFactory,
  SkyBlockMemberChocolateFactoryEggs,
  SkyBlockMemberChocolateFactoryEmployees,
  SkyBlockMemberChocolateFactoryHitmen,
  SkyBlockMemberChocolateFactoryTimeTower,
  SkyBlockMemberChocolateFactoryUpgrades,
  SkyBlockMemberCrimsonIsle,
  SkyBlockMemberCrimsonIsleAbiphone,
  SkyBlockMemberCrimsonIsleDojo,
  SkyBlockMemberCrimsonIsleDojoMinigame,
  SkyBlockMemberCrimsonIsleKuudra,
  SkyBlockMemberCrimsonIsleKuudraPartyFinder,
  SkyBlockMemberCrimsonIsleMatriarch,
  SkyBlockMemberCrimsonIsleTrophyFish,
  SkyBlockMemberCrimsonIsleTrophyFishCaught,
  SkyBlockMemberCrimsonIsleTrophyFishFish,
  SkyBlockMemberCurrencies,
  SkyBlockMemberDungeons,
  SkyBlockMemberDungeonsClasses,
  SkyBlockMemberDungeonsFloor,
  SkyBlockMemberDungeonsFloorRun,
  SkyBlockMemberDungeonsMode,
  SkyBlockMemberDungeonsTreasureRun,
  SkyBlockMemberDungeonsTreasuresChest,
  SkyBlockMemberFairySouls,
  SkyBlockMemberInventories,
  SkyBlockMemberInventoriesArmor,
  SkyBlockMemberInventoriesArmorDecoded,
  SkyBlockMemberInventoriesBackpack,
  SkyBlockMemberInventoriesBackpackDecoded,
  SkyBlockMemberInventoriesBackpacks,
  SkyBlockMemberInventoriesBags,
  SkyBlockMemberInventoriesBagsTalisman,
  SkyBlockMemberInventoriesBagsTalismanDecoded,
  SkyBlockMemberInventoriesBaseInventory,
  SkyBlockMemberInventoriesEquipment,
  SkyBlockMemberInventoriesEquipmentDecoded,
  SkyBlockMemberInventoriesInventory,
  SkyBlockMemberInventoriesInventoryDecoded,
  SkyBlockMemberJacobContest,
  SkyBlockMemberJacobContests,
  SkyBlockMemberJacobContestsMedals,
  SkyBlockMemberJacobContestsPerks,
  SkyBlockMemberJacobContestsUniqueBrackets,
  SkyBlockMemberLeveling,
  SkyBlockMemberMining,
  SkyBlockMemberMiningCrystal,
  SkyBlockMemberMiningHotm,
  SkyBlockMemberMiningHotmForge,
  SkyBlockMemberMiningHotmForgeItem,
  SkyBlockMemberMiningPowder,
  SkyBlockMemberMiningPowders,
  SkyBlockMemberObjectives,
  SkyBlockMemberPet,
  SkyBlockMemberPets,
  SkyBlockMemberPetsAutoPetRule,
  SkyBlockMemberPetsAutoPets,
  SkyBlockMemberPetsCare,
  SkyBlockMemberPlayerData,
  SkyBlockMemberPlayerDataActiveEffect,
  SkyBlockMemberPlayerDataMinion,
  SkyBlockMemberPlayerDataMinions,
  SkyBlockMemberPlayerDataSkills,
  SkyBlockMemberPlayerStats,
  SkyBlockMemberPlayerStatsAuctions,
  SkyBlockMemberPlayerStatsAuctionsStats,
  SkyBlockMemberPlayerStatsCandy,
  SkyBlockMemberPlayerStatsEndIsland,
  SkyBlockMemberPlayerStatsEndIslandDragonFight,
  SkyBlockMemberPlayerStatsEndIslandDragonFightDragon,
  SkyBlockMemberPlayerStatsFishing,
  SkyBlockMemberPlayerStatsGifts,
  SkyBlockMemberPlayerStatsMythos,
  SkyBlockMemberPlayerStatsSpookyFestival,
  SkyBlockMemberPlayerStatsWinter,
  SkyBlockMemberProfile,
  SkyBlockMemberQuests,
  SkyBlockMemberQuestsHarp,
  SkyBlockMemberQuestsHarpSong,
  SkyBlockMemberQuestsTrapper,
  SkyBlockMemberRift,
  SkyBlockMemberRiftAccess,
  SkyBlockMemberRiftBlackLagoon,
  SkyBlockMemberRiftCastle,
  SkyBlockMemberRiftDeadCats,
  SkyBlockMemberRiftDreamFarm,
  SkyBlockMemberRiftEnigma,
  SkyBlockMemberRiftGallery,
  SkyBlockMemberRiftGallerySecuredTrophy,
  SkyBlockMemberRiftInventory,
  SkyBlockMemberRiftVillagePlaza,
  SkyBlockMemberRiftVillagePlazaBarry,
  SkyBlockMemberRiftVillagePlazaCowboy,
  SkyBlockMemberRiftVillagePlazaMurder,
  SkyBlockMemberRiftWestVillage,
  SkyBlockMemberRiftWestVillageCrazyKloon,
  SkyBlockMemberRiftWestVillageGlyphs,
  SkyBlockMemberRiftWestVillageKatHouse,
  SkyBlockMemberRiftWestVillageMirrorverse,
  SkyBlockMemberRiftWitherCage,
  SkyBlockMemberRiftWizardTower,
  SkyBlockMemberRiftWyldWoods,
  SkyBlockMemberSlayer,
  SkyBlockMemberSlayerClaimedLevels,
  SkyBlockMemberSlayers,
  SkyBlockMemberSlayersQuest,
  SkyBlockMuseum,
  SkyBlockMuseumItem,
  SkyBlockMuseumMember,
  SkyBlockNews,
  SkyBlockPotionEffect,
  SkyBlockProfile,
  SkyBlockProfileBanking,
  SkyBlockProfileCommunityUpgrades,
  SkyBlockProfileCommunityUpgradesUpgrade,
  SkyBlockProfileCommunityUpgradesUpgraded,
  SkyBlockProfileCommunityUpgradesUpgrading,
  SkyBlockProfilesBankingTransaction,
  SkyBlockSkill,
  SkyBlockSkillLevel,
  SkyBlockSkills,
  SkyWars,
  SkyWarsHeads,
  SkyWarsKillsDeaths,
  SkyWarsKillsDeathsType,
  SkyWarsKitsMythic,
  SkyWarsKitsMythics,
  SkyWarsMega,
  SkyWarsMegaKits,
  SkyWarsMini,
  SkyWarsMode,
  SkyWarsModePerk,
  SkyWarsPrivateGames,
  SkyWarsRanked,
  SkyWarsRankedKits,
  SkyWarsSolo,
  SkyWarsSoloKits,
  SkyWarsSoloKitsAdvanced,
  SkyWarsSoloKitsBasic,
  SkyWarsSoloKitsLab,
  SkyWarsSoloKitsLabAdvanced,
  SkyWarsSoloKitsLabBasic,
  SkyWarsSoloKitsMini,
  SkyWarsSoloKitsTourney,
  SkyWarsSoloKitsTourneyAdvanced,
  SkyWarsSoloKitsTourneyBasic,
  SkyWarsTeams,
  SkyWarsTeamsKits,
  SkyWarsTeamsKitsAttacking,
  SkyWarsTeamsKitsDefending,
  SkyWarsTeamsKitsMining,
  SkyWarsTeamsKitsSupporting,
  SmashHeoresHero,
  SmashHeroes,
  SmashHeroesMode,
  Soccer,
  SpeedUHC,
  SpeedUHCMode,
  Status,
  TNTGames,
  TNTRun,
  TNTTag,
  TNTWizards,
  ThrowOut,
  TieredAchievement,
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
  WoolHunt,
  WoolWars,
  WoolWarsClass,
  Zombies,
  ZombiesMap
};

export default {
  Client,
  Errors,
  Achievements,
  Arcade,
  ArcadeOptions,
  ArenaBrawl,
  ArenaBrawlMode,
  BaseAchievement,
  BaseKillDeathsType,
  BedWars,
  BedWarsBeds,
  BedWarsBoxes,
  BedWarsChallenge,
  BedWarsChallenges,
  BedWarsEightOne,
  BedWarsEightTwo,
  BedWarsFavorites,
  BedWarsFigurines,
  BedWarsFourFour,
  BedWarsFourThree,
  BedWarsItemsPurchased,
  BedWarsKillsDeaths,
  BedWarsKillsDeathsType,
  BedWarsMode,
  BedWarsPractice,
  BedWarsPracticeBridging,
  BedWarsPracticeBridgingRecords,
  BedWarsPracticeBridgingRecordsDistance,
  BedWarsPracticeBridgingRecordsEevation,
  BedWarsPracticeMode,
  BedWarsPrivateGameSettings,
  BedWarsResourcesCollected,
  BedWarsSettings,
  BedWarsSlumber,
  BedWarsSlumberMinion,
  BedWarsSlumberPhase,
  BedWarsSlumberPhaseThree,
  BedWarsSlumberQuest,
  BedWarsSlumberQuestGamblerGeorge,
  BedWarsSlumberQuestItem,
  BedWarsSlumberQuestNPC,
  BedWarsSlumberQuestNPCSBoolean,
  BedWarsSlumberQuestNPCSNumber,
  BedWarsSlumberQuestObjective,
  BedWarsSlumberRoom,
  BedWarsSlumberSandman,
  BedWarsTwoFour,
  BlitzSurvivalGames,
  BlitzSurvivalGamesKit,
  BlockingDead,
  Booster,
  BowSpleef,
  BuildBattle,
  BuildBattleLastWin,
  BuildBattleVotes,
  CaptureTheWool,
  Challenge,
  Challenges,
  Color,
  CopsAndCrims,
  CopsAndCrimsGamemode,
  CopsAndCrimsGun,
  DragonWars,
  DrawTheirThing,
  Dropper,
  DropperMap,
  Dtt,
  Duels,
  DuelsBridge,
  DuelsGamemode,
  DuelsMegaWalls,
  DuelsOP,
  DuelsSkyWars,
  DuelsUHC,
  EasterSimulator,
  Emblem,
  EmblemColors,
  EnderSpleef,
  FarmHunt,
  FootBall,
  GalaxyWars,
  Game,
  GameAchievements,
  GameChallenges,
  GameCounts,
  GameQuests,
  GrinchSimulator,
  Guild,
  GuildAchievements,
  GuildMember,
  GuildRank,
  HalloweenSimulator,
  HideAndSeek,
  HoleInTheWall,
  House,
  HypixelSports,
  ItemBytes,
  LawnMoower,
  Leaderboard,
  LeaderboardSettings,
  MegaWalls,
  MegaWallsKitStats,
  MegaWallsModeStats,
  MiniWalls,
  MurderMystery,
  MurderMysteryDescent,
  MurderMysteryDescentItem,
  MurderMysteryFavorites,
  MurderMysteryGamemode,
  MurderMysteryKnifeSkinPrestige,
  MurderMysteryKnifeSkinPrestigeXp,
  MurderMysteryMap,
  OneInTheQuiver,
  OneTimeAchievement,
  PVPRun,
  Paintball,
  PartyGames,
  PartyGamesGame,
  Pit,
  PitInventoryItem,
  Player,
  PlayerAchievements,
  PlayerAchievementsRewards,
  PlayerAchievementsTotem,
  PlayerAdventRewards,
  PlayerAdventRewardsDay,
  PlayerCosmetics,
  PlayerCosmeticsPet,
  PlayerCosmeticsPets,
  PlayerCosmeticsPetsConsumables,
  PlayerGifting,
  PlayerHousing,
  PlayerHousingGivenCookies,
  PlayerHousingPlayerSettings,
  PlayerParkour,
  PlayerQuest,
  PlayerQuestCompletion,
  PlayerQuestCompletions,
  PlayerQuests,
  PlayerRankPurchase,
  PlayerRewards,
  PlayerRewardsMonthlyCrate,
  PlayerScorpiusBribe,
  PlayerSeasonalChristmasYear,
  PlayerSeasonalChristmasYearAdventRewards,
  PlayerSeasonalChristmasYearLeveling,
  PlayerSocialMedia,
  PlayerStats,
  PlayerTourney,
  PlayerTourneyData,
  Quakecraft,
  QuakecraftMode,
  Quest,
  QuestObjective,
  Quests,
  RPG16,
  RecentGame,
  SantaSays,
  SantaSimulator,
  ScubaSimulator,
  SheepWars,
  SimonSays,
  SkyBlockAuction,
  SkyBlockAuctionBid,
  SkyBlockAuctionInfo,
  SkyBlockBaseAuction,
  SkyBlockBaseAuctionInfo,
  SkyBlockBazaar,
  SkyBlockBazaarProduct,
  SkyBlockBazaarProductOrder,
  SkyBlockBazaarQuickStatus,
  SkyBlockBingo,
  SkyBlockBingoGoal,
  SkyBlockCollection,
  SkyBlockCollectionTier,
  SkyBlockCollections,
  SkyBlockElection,
  SkyBlockElectionCandidate,
  SkyBlockElectionCandidatePerk,
  SkyBlockElectionData,
  SkyBlockFireSale,
  SkyBlockGarden,
  SkyBlockGardenActiveVisitor,
  SkyBlockGardenActiveVisitorRequirement,
  SkyBlockGardenComposter,
  SkyBlockGardenComposterUpgrades,
  SkyBlockGardenCropMilestones,
  SkyBlockGardenCropsUpgrades,
  SkyBlockGardenVisitors,
  SkyBlockInventoryItem,
  SkyBlockInventoryItemAttribute,
  SkyBlockInventoryItemEnchantment,
  SkyBlockInventoryItemRune,
  SkyBlockItem,
  SkyBlockMember,
  SkyBlockMemberAccessoryBag,
  SkyBlockMemberAccessoryBagTuning,
  SkyBlockMemberAccessoryBagTuningSlot,
  SkyBlockMemberBestiary,
  SkyBlockMemberChocolateFactory,
  SkyBlockMemberChocolateFactoryEggs,
  SkyBlockMemberChocolateFactoryEmployees,
  SkyBlockMemberChocolateFactoryHitmen,
  SkyBlockMemberChocolateFactoryTimeTower,
  SkyBlockMemberChocolateFactoryUpgrades,
  SkyBlockMemberCrimsonIsle,
  SkyBlockMemberCrimsonIsleAbiphone,
  SkyBlockMemberCrimsonIsleDojo,
  SkyBlockMemberCrimsonIsleDojoMinigame,
  SkyBlockMemberCrimsonIsleKuudra,
  SkyBlockMemberCrimsonIsleKuudraPartyFinder,
  SkyBlockMemberCrimsonIsleMatriarch,
  SkyBlockMemberCrimsonIsleTrophyFish,
  SkyBlockMemberCrimsonIsleTrophyFishCaught,
  SkyBlockMemberCrimsonIsleTrophyFishFish,
  SkyBlockMemberCurrencies,
  SkyBlockMemberDungeons,
  SkyBlockMemberDungeonsClasses,
  SkyBlockMemberDungeonsFloor,
  SkyBlockMemberDungeonsFloorRun,
  SkyBlockMemberDungeonsMode,
  SkyBlockMemberDungeonsTreasureRun,
  SkyBlockMemberDungeonsTreasuresChest,
  SkyBlockMemberFairySouls,
  SkyBlockMemberInventories,
  SkyBlockMemberInventoriesArmor,
  SkyBlockMemberInventoriesArmorDecoded,
  SkyBlockMemberInventoriesBackpack,
  SkyBlockMemberInventoriesBackpackDecoded,
  SkyBlockMemberInventoriesBackpacks,
  SkyBlockMemberInventoriesBags,
  SkyBlockMemberInventoriesBagsTalisman,
  SkyBlockMemberInventoriesBagsTalismanDecoded,
  SkyBlockMemberInventoriesBaseInventory,
  SkyBlockMemberInventoriesEquipment,
  SkyBlockMemberInventoriesEquipmentDecoded,
  SkyBlockMemberInventoriesInventory,
  SkyBlockMemberInventoriesInventoryDecoded,
  SkyBlockMemberJacobContest,
  SkyBlockMemberJacobContests,
  SkyBlockMemberJacobContestsMedals,
  SkyBlockMemberJacobContestsPerks,
  SkyBlockMemberJacobContestsUniqueBrackets,
  SkyBlockMemberLeveling,
  SkyBlockMemberMining,
  SkyBlockMemberMiningCrystal,
  SkyBlockMemberMiningHotm,
  SkyBlockMemberMiningHotmForge,
  SkyBlockMemberMiningHotmForgeItem,
  SkyBlockMemberMiningPowder,
  SkyBlockMemberMiningPowders,
  SkyBlockMemberObjectives,
  SkyBlockMemberPet,
  SkyBlockMemberPets,
  SkyBlockMemberPetsAutoPetRule,
  SkyBlockMemberPetsAutoPets,
  SkyBlockMemberPetsCare,
  SkyBlockMemberPlayerData,
  SkyBlockMemberPlayerDataActiveEffect,
  SkyBlockMemberPlayerDataMinion,
  SkyBlockMemberPlayerDataMinions,
  SkyBlockMemberPlayerDataSkills,
  SkyBlockMemberPlayerStats,
  SkyBlockMemberPlayerStatsAuctions,
  SkyBlockMemberPlayerStatsAuctionsStats,
  SkyBlockMemberPlayerStatsCandy,
  SkyBlockMemberPlayerStatsEndIsland,
  SkyBlockMemberPlayerStatsEndIslandDragonFight,
  SkyBlockMemberPlayerStatsEndIslandDragonFightDragon,
  SkyBlockMemberPlayerStatsFishing,
  SkyBlockMemberPlayerStatsGifts,
  SkyBlockMemberPlayerStatsMythos,
  SkyBlockMemberPlayerStatsSpookyFestival,
  SkyBlockMemberPlayerStatsWinter,
  SkyBlockMemberProfile,
  SkyBlockMemberQuests,
  SkyBlockMemberQuestsHarp,
  SkyBlockMemberQuestsHarpSong,
  SkyBlockMemberQuestsTrapper,
  SkyBlockMemberRift,
  SkyBlockMemberRiftAccess,
  SkyBlockMemberRiftBlackLagoon,
  SkyBlockMemberRiftCastle,
  SkyBlockMemberRiftDeadCats,
  SkyBlockMemberRiftDreamFarm,
  SkyBlockMemberRiftEnigma,
  SkyBlockMemberRiftGallery,
  SkyBlockMemberRiftGallerySecuredTrophy,
  SkyBlockMemberRiftInventory,
  SkyBlockMemberRiftVillagePlaza,
  SkyBlockMemberRiftVillagePlazaBarry,
  SkyBlockMemberRiftVillagePlazaCowboy,
  SkyBlockMemberRiftVillagePlazaMurder,
  SkyBlockMemberRiftWestVillage,
  SkyBlockMemberRiftWestVillageCrazyKloon,
  SkyBlockMemberRiftWestVillageGlyphs,
  SkyBlockMemberRiftWestVillageKatHouse,
  SkyBlockMemberRiftWestVillageMirrorverse,
  SkyBlockMemberRiftWitherCage,
  SkyBlockMemberRiftWizardTower,
  SkyBlockMemberRiftWyldWoods,
  SkyBlockMemberSlayer,
  SkyBlockMemberSlayerClaimedLevels,
  SkyBlockMemberSlayers,
  SkyBlockMemberSlayersQuest,
  SkyBlockMuseum,
  SkyBlockMuseumItem,
  SkyBlockMuseumMember,
  SkyBlockNews,
  SkyBlockPotionEffect,
  SkyBlockProfile,
  SkyBlockProfileBanking,
  SkyBlockProfileCommunityUpgrades,
  SkyBlockProfileCommunityUpgradesUpgrade,
  SkyBlockProfileCommunityUpgradesUpgraded,
  SkyBlockProfileCommunityUpgradesUpgrading,
  SkyBlockProfilesBankingTransaction,
  SkyBlockSkill,
  SkyBlockSkillLevel,
  SkyBlockSkills,
  SkyWars,
  SkyWarsHeads,
  SkyWarsKillsDeaths,
  SkyWarsKillsDeathsType,
  SkyWarsKitsMythic,
  SkyWarsKitsMythics,
  SkyWarsMega,
  SkyWarsMegaKits,
  SkyWarsMini,
  SkyWarsMode,
  SkyWarsModePerk,
  SkyWarsPrivateGames,
  SkyWarsRanked,
  SkyWarsRankedKits,
  SkyWarsSolo,
  SkyWarsSoloKits,
  SkyWarsSoloKitsAdvanced,
  SkyWarsSoloKitsBasic,
  SkyWarsSoloKitsLab,
  SkyWarsSoloKitsLabAdvanced,
  SkyWarsSoloKitsLabBasic,
  SkyWarsSoloKitsMini,
  SkyWarsSoloKitsTourney,
  SkyWarsSoloKitsTourneyAdvanced,
  SkyWarsSoloKitsTourneyBasic,
  SkyWarsTeams,
  SkyWarsTeamsKits,
  SkyWarsTeamsKitsAttacking,
  SkyWarsTeamsKitsDefending,
  SkyWarsTeamsKitsMining,
  SkyWarsTeamsKitsSupporting,
  SmashHeoresHero,
  SmashHeroes,
  SmashHeroesMode,
  Soccer,
  SpeedUHC,
  SpeedUHCMode,
  Status,
  TNTGames,
  TNTRun,
  TNTTag,
  TNTWizards,
  ThrowOut,
  TieredAchievement,
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
  WoolHunt,
  WoolWars,
  WoolWarsClass,
  Zombies,
  ZombiesMap
};
