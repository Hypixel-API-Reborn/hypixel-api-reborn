/* v8 ignore next 10000 */
/* eslint-disable @stylistic/max-len  */
/* eslint-disable import/no-anonymous-default-export */

import Client from './Client.ts';
import Errors from './Errors.ts';
import HypixelAPIRebornError from './Private/HypixelAPIRebornError.ts';

import Achievements from './Structures/Static/Achievements/Achievements.ts';
import Arcade from './Structures/MiniGames/Arcade/Arcade.ts';
import ArcadeOptions from './Structures/MiniGames/Arcade/ArcadeOptions.ts';
import ArenaBrawl from './Structures/MiniGames/ArenaBrawl/ArenaBrawl.ts';
import ArenaBrawlMode from './Structures/MiniGames/ArenaBrawl/ArenaBrawlMode.ts';
import BaseAchievement from './Structures/Static/Achievements/BaseAchievement.ts';
import BaseKillDeathsType from './Structures/MiniGames/Shared/BaseKillDeathsType.ts';
import BaseSkyWarsMode from './Structures/MiniGames/SkyWars/SkyWarsMode/BaseSkyWarsMode.ts';
import BedWars from './Structures/MiniGames/BedWars/BedWars.ts';
import BedWarsBeds from './Structures/MiniGames/BedWars/BedWarsBeds.ts';
import BedWarsBoxes from './Structures/MiniGames/BedWars/BedWarsBoxes.ts';
import BedWarsChallenge from './Structures/MiniGames/BedWars/BedWarsChallenges/BedWarsChallenge.ts';
import BedWarsChallenges from './Structures/MiniGames/BedWars/BedWarsChallenges/BedWarsChallenges.ts';
import BedWarsEightOne from './Structures/MiniGames/BedWars/BedWarsEightOne.ts';
import BedWarsEightTwo from './Structures/MiniGames/BedWars/BedWarsEightTwo.ts';
import BedWarsFavorites from './Structures/MiniGames/BedWars/BedWarsFavorites.ts';
import BedWarsFigurines from './Structures/MiniGames/BedWars/BedWarsFigurines.ts';
import BedWarsFourFour from './Structures/MiniGames/BedWars/BedWarsFourFour.ts';
import BedWarsFourThree from './Structures/MiniGames/BedWars/BedWarsFourThree.ts';
import BedWarsItemsPurchased from './Structures/MiniGames/BedWars/BedWarsItemsPurchased.ts';
import BedWarsKillsDeaths from './Structures/MiniGames/BedWars/BedWarsKillsDeaths/BedWarsKillsDeaths.ts';
import BedWarsKillsDeathsType from './Structures/MiniGames/BedWars/BedWarsKillsDeaths/BedWarsKillsDeathsType.ts';
import BedWarsMode from './Structures/MiniGames/BedWars/BedWarsMode.ts';
import BedWarsPractice from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPractice.ts';
import BedWarsPracticeBridging from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridging.ts';
import BedWarsPracticeBridgingRecords from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecords.ts';
import BedWarsPracticeBridgingRecordsDistance from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecordsDistance.ts';
import BedWarsPracticeBridgingRecordsElevation from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeBridgingRecords/BedWarsPracticeBridgingRecordsElevation.ts';
import BedWarsPracticeMode from './Structures/MiniGames/BedWars/BedWarsPractice/BedWarsPracticeMode.ts';
import BedWarsPrivateGameSettings from './Structures/MiniGames/BedWars/BedWarsPrivateGameSettings.ts';
import BedWarsResourcesCollected from './Structures/MiniGames/BedWars/BedWarsResourcesCollected.ts';
import BedWarsSettings from './Structures/MiniGames/BedWars/BedWarsSettings.ts';
import BedWarsSlumber from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumber.ts';
import BedWarsSlumberMinion from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberMinion.ts';
import BedWarsSlumberPhase from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberPhase.ts';
import BedWarsSlumberPhaseThree from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberPhaseThree.ts';
import BedWarsSlumberQuest from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuest.ts';
import BedWarsSlumberQuestGamblerGeorge from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestGamblerGeorge.ts';
import BedWarsSlumberQuestItem from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestItem.ts';
import BedWarsSlumberQuestNPC from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPC.ts';
import BedWarsSlumberQuestNPCSBoolean from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPCSBoolean.ts';
import BedWarsSlumberQuestNPCSNumber from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestNPCSNumber.ts';
import BedWarsSlumberQuestObjective from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberQuest/BedWarsSlumberQuestObjective.ts';
import BedWarsSlumberRoom from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberRoom.ts';
import BedWarsSlumberSandman from './Structures/MiniGames/BedWars/BedWarsSlumber/BedWarsSlumberSandman.ts';
import BedWarsTwoFour from './Structures/MiniGames/BedWars/BedWarsTwoFour.ts';
import BlitzSurvivalGames from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGames.ts';
import BlitzSurvivalGamesData from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesData.ts';
import BlitzSurvivalGamesKit from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesKit.ts';
import BlitzSurvivalGamesPrivateGames from './Structures/MiniGames/BlitzSurvivalGames/BlitzSurvivalGamesPrivateGames.ts';
import BlockingDead from './Structures/MiniGames/Arcade/BlockingDead.ts';
import Booster from './Structures/Boosters/Booster.ts';
import BowSpleef from './Structures/MiniGames/TNTGames/BowSpleef.ts';
import BuildBattle from './Structures/MiniGames/BuildBattle/BuildBattle.ts';
import BuildBattleLastWin from './Structures/MiniGames/BuildBattle/BuildBattleLastWin.ts';
import BuildBattleVotes from './Structures/MiniGames/BuildBattle/BuildBattleVotes.ts';
import CaptureTheWool from './Structures/MiniGames/WoolGames/CaptureTheWool/CaptureTheWool.ts';
import CaptureTheWoolSettings from './Structures/MiniGames/WoolGames/CaptureTheWool/CaptureTheWoolSettings.ts';
import Challenge from './Structures/Static/Challenge.ts';
import Challenges from './Structures/Static/Challenges.ts';
import Color from './Structures/Color.ts';
import CopsAndCrims from './Structures/MiniGames/CopsAndCrims/CopsAndCrims.ts';
import CopsAndCrimsGamemode from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGamemode.ts';
import CopsAndCrimsGun from './Structures/MiniGames/CopsAndCrims/CopsAndCrimsGun.ts';
import DragonWars from './Structures/MiniGames/Arcade/DragonWars.ts';
import DrawTheirThing from './Structures/MiniGames/Arcade/DrawTheirThing.ts';
import Dropper from './Structures/MiniGames/Arcade/Dropper/Dropper.ts';
import DropperMap from './Structures/MiniGames/Arcade/Dropper/DropperMap.ts';
import Dtt from './Structures/MiniGames/Arcade/Dtt.ts';
import Duels from './Structures/MiniGames/Duels/Duels.ts';
import DuelsBedWars from './Structures/MiniGames/Duels/Mode/DuelsBedWars.ts';
import DuelsBlitz from './Structures/MiniGames/Duels/Mode/DuelsBlitz.ts';
import DuelsBow from './Structures/MiniGames/Duels/Mode/DuelsBow.ts';
import DuelsBridge from './Structures/MiniGames/Duels/Mode/Bridge/DuelsBridge.ts';
import DuelsBridgeMode from './Structures/MiniGames/Duels/Mode/Bridge/DuelsBridgeMode.ts';
import DuelsClassic from './Structures/MiniGames/Duels/Mode/DuelsClassic.ts';
import DuelsCombo from './Structures/MiniGames/Duels/Mode/DuelsCombo.ts';
import DuelsMegaWalls from './Structures/MiniGames/Duels/Mode/DuelsMegaWalls.ts';
import DuelsMode from './Structures/MiniGames/Duels/Mode/DuelsMode.ts';
import DuelsModeFull from './Structures/MiniGames/Duels/Mode/DuelsModeFull.ts';
import DuelsOP from './Structures/MiniGames/Duels/Mode/DuelsOP.ts';
import DuelsOdyssey from './Structures/MiniGames/Duels/DuelsOdyssey.ts';
import DuelsOptions from './Structures/MiniGames/Duels/DuelsOptions.ts';
import DuelsPotion from './Structures/MiniGames/Duels/Mode/DuelsPotion.ts';
import DuelsPrivateGames from './Structures/MiniGames/Duels/DuelsPrivateGames.ts';
import DuelsSkyWars from './Structures/MiniGames/Duels/Mode/DuelsSkyWars.ts';
import DuelsSumo from './Structures/MiniGames/Duels/Mode/DuelsSumo.ts';
import DuelsUHC from './Structures/MiniGames/Duels/Mode/DuelsUHC.ts';
import EasterSimulator from './Structures/MiniGames/Arcade/EasterSimulator.ts';
import Emblem from './Structures/MiniGames/Shared/Emblem/Emblem.ts';
import EmblemColors from './Structures/MiniGames/Shared/Emblem/EmblemColors.ts';
import EnderSpleef from './Structures/MiniGames/Arcade/EnderSpleef.ts';
import FarmHunt from './Structures/MiniGames/Arcade/FarmHunt.ts';
import FootBall from './Structures/MiniGames/Arcade/FootBall.ts';
import GalaxyWars from './Structures/MiniGames/Arcade/GalaxyWars.ts';
import Game from './Structures/Game.ts';
import GameAchievements from './Structures/Static/Achievements/GameAchievements.ts';
import GameChallenges from './Structures/Static/GameChallenges.ts';
import GameCounts from './Structures/Static/GameCounts/GameCounts.ts';
import GameCountsArcade from './Structures/Static/GameCounts/Arcade/GameCountsArcade.ts';
import GameCountsArcadeModes from './Structures/Static/GameCounts/Arcade/GameCountsArcadeModes.ts';
import GameCountsBasicModes from './Structures/Static/GameCounts/GameCountsBasicModes.ts';
import GameCountsBattleGround from './Structures/Static/GameCounts/BattleGround/GameCountsBattleGround.ts';
import GameCountsBattleGroundModes from './Structures/Static/GameCounts/BattleGround/GameCountsBattleGroundModes.ts';
import GameCountsBedWars from './Structures/Static/GameCounts/BedWars/GameCountsBedWars.ts';
import GameCountsBedWarsModes from './Structures/Static/GameCounts/BedWars/GameCountsBedWarsModes.ts';
import GameCountsBuildBattle from './Structures/Static/GameCounts/BuildBattle/GameCountsBuildBattle.ts';
import GameCountsBuildBattleModes from './Structures/Static/GameCounts/BuildBattle/GameCountsBuildBattleModes.ts';
import GameCountsDuels from './Structures/Static/GameCounts/Duels/GameCountsDuels.ts';
import GameCountsDuelsModes from './Structures/Static/GameCounts/Duels/GameCountsDuelsModes.ts';
import GameCountsGames from './Structures/Static/GameCounts/GameCountsGames.ts';
import GameCountsGeneric from './Structures/Static/GameCounts/GameCountsGeneric.ts';
import GameCountsLegacy from './Structures/Static/GameCounts/Legacy/GameCountsLegacy.ts';
import GameCountsLegacyModes from './Structures/Static/GameCounts/Legacy/GameCountsLegacyModes.ts';
import GameCountsMCGO from './Structures/Static/GameCounts/MCGO/GameCountsMCGO.ts';
import GameCountsMCGOModes from './Structures/Static/GameCounts/MCGO/GameCountsMCGOModes.ts';
import GameCountsMurderMystery from './Structures/Static/GameCounts/MurderMystery/GameCountsMurderMystery.ts';
import GameCountsMurderMysteryModes from './Structures/Static/GameCounts/MurderMystery/GameCountsMurderMysteryModes.ts';
import GameCountsPit from './Structures/Static/GameCounts/Pit/GameCountsPit.ts';
import GameCountsPitModes from './Structures/Static/GameCounts/Pit/GameCountsPitModes.ts';
import GameCountsReplay from './Structures/Static/GameCounts/Replay/GameCountsReplay.ts';
import GameCountsReplayModes from './Structures/Static/GameCounts/Replay/GameCountsReplayModes.ts';
import GameCountsSkyBlock from './Structures/Static/GameCounts/SkyBlock/GameCountsSkyBlock.ts';
import GameCountsSkyBlockModes from './Structures/Static/GameCounts/SkyBlock/GameCountsSkyBlockModes.ts';
import GameCountsSkyWars from './Structures/Static/GameCounts/SkyWars/GameCountsSkyWars.ts';
import GameCountsSkyWarsModes from './Structures/Static/GameCounts/SkyWars/GameCountsSkyWarsModes.ts';
import GameCountsSpeedUHC from './Structures/Static/GameCounts/SpeedUHC/GameCountsSpeedUHC.ts';
import GameCountsSuperSmash from './Structures/Static/GameCounts/SuperSmash/GameCountsSuperSmash.ts';
import GameCountsSuperSmashModes from './Structures/Static/GameCounts/SuperSmash/GameCountsSuperSmashModes.ts';
import GameCountsSurvivalGames from './Structures/Static/GameCounts/SurvivalGames/GameCountsSurvivalGames.ts';
import GameCountsTNTGames from './Structures/Static/GameCounts/TNTGames/GameCountsTNTGames.ts';
import GameCountsTNTGamesModes from './Structures/Static/GameCounts/TNTGames/GameCountsTNTGamesModes.ts';
import GameCountsUHC from './Structures/Static/GameCounts/UHC/GameCountsUHC.ts';
import GameCountsUHCModes from './Structures/Static/GameCounts/UHC/GameCountsUHCModes.ts';
import GameCountsWalls3 from './Structures/Static/GameCounts/Walls3/GameCountsWalls3.ts';
import GameCountsWalls3Modes from './Structures/Static/GameCounts/Walls3/GameCountsWalls3Modes.ts';
import GameCountsWoolGames from './Structures/Static/GameCounts/WoolGames/GameCountsWoolGames.ts';
import GameCountsWoolGamesModes from './Structures/Static/GameCounts/WoolGames/GameCountsWoolGamesModes.ts';
import GameQuests from './Structures/Static/GameQuests.ts';
import GenericDuelsMode from './Structures/MiniGames/Duels/Mode/GenericDuelsMode.ts';
import GrinchSimulator from './Structures/MiniGames/Arcade/GrinchSimulator.ts';
import Guild from './Structures/Guild/Guild.ts';
import GuildAchievements from './Structures/Static/Achievements/GuildAchievements.ts';
import GuildMember from './Structures/Guild/GuildMember.ts';
import GuildRank from './Structures/Guild/GuildRank.ts';
import HalloweenSimulator from './Structures/MiniGames/Arcade/HalloweenSimulator.ts';
import HideAndSeek from './Structures/MiniGames/Arcade/HideAndSeek.ts';
import HoleInTheWall from './Structures/MiniGames/Arcade/HoleInTheWall.ts';
import House from './Structures/House.ts';
import HypixelSports from './Structures/MiniGames/Arcade/HypixelSports.ts';
import InventoryLayout from './Structures/MiniGames/Shared/InventoryLayout.ts';
import ItemBytes from './Structures/ItemBytes.ts';
import LawnMoower from './Structures/MiniGames/Arcade/PartyGames/LawnMoower.ts';
import Leaderboard from './Structures/Leaderboard.ts';
import LeaderboardSettings from './Structures/MiniGames/Shared/LeaderboardSettings.ts';
import MegaWalls from './Structures/MiniGames/MegaWalls/MegaWalls.ts';
import MegaWallsKitStats from './Structures/MiniGames/MegaWalls/MegaWallsKitStats.ts';
import MegaWallsModeStats from './Structures/MiniGames/MegaWalls/MegaWallsModeStats.ts';
import MiniWalls from './Structures/MiniGames/Arcade/MiniWalls.ts';
import MurderMystery from './Structures/MiniGames/MurderMystery/MurderMystery.ts';
import MurderMysteryDescent from './Structures/MiniGames/MurderMystery/MurderMysteryDescent.ts';
import MurderMysteryDescentItem from './Structures/MiniGames/MurderMystery/MurderMysteryDescentItem.ts';
import MurderMysteryFavorites from './Structures/MiniGames/MurderMystery/MurderMysteryFavorites.ts';
import MurderMysteryGamemode from './Structures/MiniGames/MurderMystery/MurderMysteryGamemode.ts';
import MurderMysteryKnifeSkinPrestige from './Structures/MiniGames/MurderMystery/MurderMysteryKnifeSkinPrestige.ts';
import MurderMysteryKnifeSkinPrestigeXp from './Structures/MiniGames/MurderMystery/MurderMysteryKnifeSkinPrestigeXp.ts';
import MurderMysteryMap from './Structures/MiniGames/MurderMystery/MurderMysteryMap.ts';
import OneInTheQuiver from './Structures/MiniGames/Arcade/OneInTheQuiver.ts';
import OneTimeAchievement from './Structures/Static/Achievements/OneTimeAchievement.ts';
import PVPRun from './Structures/MiniGames/TNTGames/PVPRun.ts';
import Paintball from './Structures/MiniGames/Paintball.ts';
import PartyGames from './Structures/MiniGames/Arcade/PartyGames/PartyGames.ts';
import PartyGamesGame from './Structures/MiniGames/Arcade/PartyGames/PartyGamesGame.ts';
import Pit from './Structures/MiniGames/Pit/Pit.ts';
import PitInventoryItem from './Structures/MiniGames/Pit/PitInventoryItem.ts';
import Player from './Structures/Player/Player.ts';
import PlayerAchievements from './Structures/Player/PlayerAchievements/PlayerAchievements.ts';
import PlayerAchievementsRewards from './Structures/Player/PlayerAchievements/PlayerAchievementsRewards.ts';
import PlayerAchievementsTotem from './Structures/Player/PlayerAchievements/PlayerAchievementsTotem.ts';
import PlayerAdventRewards from './Structures/Player/PlayerAdventRewards/PlayerAdventRewards.ts';
import PlayerAdventRewardsDay from './Structures/Player/PlayerAdventRewards/PlayerAdventRewardsDay.ts';
import PlayerCosmetics from './Structures/Player/PlayerCosmetics/PlayerCosmetics.ts';
import PlayerCosmeticsPet from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPet.ts';
import PlayerCosmeticsPets from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPets.ts';
import PlayerCosmeticsPetsConsumables from './Structures/Player/PlayerCosmetics/Pets/PlayerCosmeticsPetsConsumables.ts';
import PlayerGifting from './Structures/Player/PlayerGifting.ts';
import PlayerHousing from './Structures/Player/PlayerHousing/PlayerHousing.ts';
import PlayerHousingGivenCookies from './Structures/Player/PlayerHousing/PlayerHousingGivenCookies.ts';
import PlayerHousingPlayerSettings from './Structures/Player/PlayerHousing/PlayerHousingPlayerSettings.ts';
import PlayerParkour from './Structures/Player/PlayerParkour.ts';
import PlayerQuest from './Structures/Player/PlayerQuests/PlayerQuest.ts';
import PlayerQuestCompletion from './Structures/Player/PlayerQuests/PlayerQuestCompletion.ts';
import PlayerQuestCompletions from './Structures/Player/PlayerQuests/PlayerQuestCompletions.ts';
import PlayerQuests from './Structures/Player/PlayerQuests/PlayerQuests.ts';
import PlayerRankPurchase from './Structures/Player/PlayerRankPurchase.ts';
import PlayerRewards from './Structures/Player/PlayerRewards/PlayerRewards.ts';
import PlayerRewardsMonthlyCrate from './Structures/Player/PlayerRewards/PlayerRewardsMonthlyCrate.ts';
import PlayerScorpiusBribe from './Structures/Player/PlayerScorpiusBribe.ts';
import PlayerSeasonalChristmasYear from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYear.ts';
import PlayerSeasonalChristmasYearAdventRewards from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYearAdventRewards.ts';
import PlayerSeasonalChristmasYearLeveling from './Structures/Player/PlayerSeasonal/Christmas/PlayerSeasonalChristmasYearLeveling.ts';
import PlayerSocialMedia from './Structures/Player/PlayerSocialMedia.ts';
import PlayerStats from './Structures/Player/PlayerStats.ts';
import PlayerTourney from './Structures/Player/PlayerTourney/PlayerTourney.ts';
import PlayerTourneyData from './Structures/Player/PlayerTourney/PlayerTourneyData.ts';
import Quakecraft from './Structures/MiniGames/Quakecraft/Quakecraft.ts';
import QuakecraftMode from './Structures/MiniGames/Quakecraft/QuakecraftMode.ts';
import Quest from './Structures/Static/Quest.ts';
import QuestObjective from './Structures/Static/QuestObjective.ts';
import Quests from './Structures/Static/Quests.ts';
import RPG16 from './Structures/MiniGames/Arcade/PartyGames/RPG16.ts';
import RawSkyBlockInventoryItem from './Structures/SkyBlock/Inventory/RawSkyBlockInventoryItem.ts';
import RecentGame from './Structures/RecentGame.ts';
import SantaSays from './Structures/MiniGames/Arcade/SantaSays.ts';
import SantaSimulator from './Structures/MiniGames/Arcade/SantaSimulator.ts';
import ScubaSimulator from './Structures/MiniGames/Arcade/ScubaSimulator.ts';
import SheepWars from './Structures/MiniGames/WoolGames/SheepWars/SheepWars.ts';
import SheepWarsLayout from './Structures/MiniGames/WoolGames/SheepWars/SheepWarsLayout.ts';
import SimonSays from './Structures/MiniGames/Arcade/SimonSays.ts';
import SkyBlockAuction from './Structures/SkyBlock/Auctions/SkyBlockAuction.ts';
import SkyBlockAuctionBid from './Structures/SkyBlock/Auctions/SkyBlockAuctionBid.ts';
import SkyBlockAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockAuctionInfo.ts';
import SkyBlockBaseAuction from './Structures/SkyBlock/Auctions/SkyBlockBaseAuction.ts';
import SkyBlockBaseAuctionInfo from './Structures/SkyBlock/Auctions/SkyBlockBaseAuctionInfo.ts';
import SkyBlockBazaar from './Structures/SkyBlock/Bazaar/SkyBlockBazaar.ts';
import SkyBlockBazaarProduct from './Structures/SkyBlock/Bazaar/SkyBlockBazaarProduct.ts';
import SkyBlockBazaarProductOrder from './Structures/SkyBlock/Bazaar/SkyBlockBazaarProductOrder.ts';
import SkyBlockBazaarQuickStatus from './Structures/SkyBlock/Bazaar/SkyBlockBazaarQuickStatus.ts';
import SkyBlockBingo from './Structures/SkyBlock/Bingo/SkyBlockBingo.ts';
import SkyBlockBingoGoal from './Structures/SkyBlock/Bingo/SkyBlockBingoGoal.ts';
import SkyBlockCollection from './Structures/SkyBlock/Collections/SkyBlockCollection.ts';
import SkyBlockCollectionTier from './Structures/SkyBlock/Collections/SkyBlockCollectionTier.ts';
import SkyBlockCollections from './Structures/SkyBlock/Collections/SkyBlockCollections.ts';
import SkyBlockElection from './Structures/SkyBlock/Election/SkyBlockElection.ts';
import SkyBlockElectionCandidate from './Structures/SkyBlock/Election/SkyBlockElectionCandidate.ts';
import SkyBlockElectionCandidatePerk from './Structures/SkyBlock/Election/SkyBlockElectionCandidatePerk.ts';
import SkyBlockElectionData from './Structures/SkyBlock/Election/SkyBlockElectionData.ts';
import SkyBlockFireSale from './Structures/SkyBlock/FireSale/SkyBlockFireSale.ts';
import SkyBlockGarden from './Structures/SkyBlock/Garden/SkyBlockGarden.ts';
import SkyBlockGardenActiveVisitor from './Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitor.ts';
import SkyBlockGardenActiveVisitorRequirement from './Structures/SkyBlock/Garden/SkyBlockGardenActiveVisitorRequirement.ts';
import SkyBlockGardenComposter from './Structures/SkyBlock/Garden/SkyBlockGardenComposter.ts';
import SkyBlockGardenComposterUpgrades from './Structures/SkyBlock/Garden/SkyBlockGardenComposterUpgrades.ts';
import SkyBlockGardenCropMilestones from './Structures/SkyBlock/Garden/SkyBlockGardenCropMilestones.ts';
import SkyBlockGardenCropsUpgrades from './Structures/SkyBlock/Garden/SkyBlockGardenCropsUpgrades.ts';
import SkyBlockGardenVisitors from './Structures/SkyBlock/Garden/SkyBlockGardenVisitors.ts';
import SkyBlockInventoryItem from './Structures/SkyBlock/Inventory/SkyBlockInventoryItem.ts';
import SkyBlockInventoryItemAttribute from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemAttribute.ts';
import SkyBlockInventoryItemEnchantment from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemEnchantment.ts';
import SkyBlockInventoryItemRune from './Structures/SkyBlock/Inventory/SkyBlockInventoryItemRune.ts';
import SkyBlockItem from './Structures/SkyBlock/SkyBlockItem.ts';
import SkyBlockMember from './Structures/SkyBlock/Member/SkyBlockMember.ts';
import SkyBlockMemberAccessoryBag from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBag.ts';
import SkyBlockMemberAccessoryBagTuning from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBagTuning.ts';
import SkyBlockMemberAccessoryBagTuningSlot from './Structures/SkyBlock/Member/AccessoryBag/SkyBlockMemberAccessoryBagTuningSlot.ts';
import SkyBlockMemberBestiary from './Structures/SkyBlock/Member/Bestiary/SkyBlockMemberBestiary.ts';
import SkyBlockMemberChocolateFactory from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactory.ts';
import SkyBlockMemberChocolateFactoryEggs from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryEggs.ts';
import SkyBlockMemberChocolateFactoryEmployees from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryEmployees.ts';
import SkyBlockMemberChocolateFactoryHitmen from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryHitmen.ts';
import SkyBlockMemberChocolateFactoryTimeTower from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryTimeTower.ts';
import SkyBlockMemberChocolateFactoryUpgrades from './Structures/SkyBlock/Member/ChocolateFactory/SkyBlockMemberChocolateFactoryUpgrades.ts';
import SkyBlockMemberCrimsonIsle from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsle.ts';
import SkyBlockMemberCrimsonIsleAbiphone from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleAbiphone.ts';
import SkyBlockMemberCrimsonIsleDojo from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleDojo.ts';
import SkyBlockMemberCrimsonIsleDojoMinigame from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleDojoMinigame.ts';
import SkyBlockMemberCrimsonIsleKuudra from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleKuudra.ts';
import SkyBlockMemberCrimsonIsleKuudraPartyFinder from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleKuudraPartyFinder.ts';
import SkyBlockMemberCrimsonIsleMatriarch from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleMatriarch.ts';
import SkyBlockMemberCrimsonIsleTrophyFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFish.ts';
import SkyBlockMemberCrimsonIsleTrophyFishCaught from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFishCaught.ts';
import SkyBlockMemberCrimsonIsleTrophyFishFish from './Structures/SkyBlock/Member/CrimsonIsle/SkyBlockMemberCrimsonIsleTrophyFish/SkyBlockMemberCrimsonIsleTrophyFishFish.ts';
import SkyBlockMemberCurrencies from './Structures/SkyBlock/Member/SkyBlockMemberCurrencies.ts';
import SkyBlockMemberDungeons from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeons.ts';
import SkyBlockMemberDungeonsClasses from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsClasses.ts';
import SkyBlockMemberDungeonsFloor from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsFloor.ts';
import SkyBlockMemberDungeonsFloorRun from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsFloorRun.ts';
import SkyBlockMemberDungeonsMode from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsMode.ts';
import SkyBlockMemberDungeonsTreasureRun from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsTreasureRun.ts';
import SkyBlockMemberDungeonsTreasuresChest from './Structures/SkyBlock/Member/Dungeons/SkyBlockMemberDungeonsTreasuresChest.ts';
import SkyBlockMemberFairySouls from './Structures/SkyBlock/Member/SkyBlockMemberFairySouls.ts';
import SkyBlockMemberGarden from './Structures/SkyBlock/Member/Garden/SkyBlockMemberGarden.ts';
import SkyBlockMemberInventories from './Structures/SkyBlock/Member/Inventories/SkyBlockMemberInventories.ts';
import SkyBlockMemberInventoriesArmor from './Structures/SkyBlock/Member/Inventories/Armor/SkyBlockMemberInventoriesArmor.ts';
import SkyBlockMemberInventoriesArmorDecoded from './Structures/SkyBlock/Member/Inventories/Armor/SkyBlockMemberInventoriesArmorDecoded.ts';
import SkyBlockMemberInventoriesBackpack from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpack.ts';
import SkyBlockMemberInventoriesBackpackDecoded from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpackDecoded.ts';
import SkyBlockMemberInventoriesBackpacks from './Structures/SkyBlock/Member/Inventories/Backpacks/SkyBlockMemberInventoriesBackpacks.ts';
import SkyBlockMemberInventoriesBags from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBags.ts';
import SkyBlockMemberInventoriesBagsTalisman from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBagsTalisman.ts';
import SkyBlockMemberInventoriesBagsTalismanDecoded from './Structures/SkyBlock/Member/Inventories/Bags/SkyBlockMemberInventoriesBagsTalismanDecoded.ts';
import SkyBlockMemberInventoriesBaseInventory from './Structures/SkyBlock/Member/Inventories/SkyBlockMemberInventoriesBaseInventory.ts';
import SkyBlockMemberInventoriesEquipment from './Structures/SkyBlock/Member/Inventories/Equipment/SkyBlockMemberInventoriesEquipment.ts';
import SkyBlockMemberInventoriesEquipmentDecoded from './Structures/SkyBlock/Member/Inventories/Equipment/SkyBlockMemberInventoriesEquipmentDecoded.ts';
import SkyBlockMemberInventoriesInventory from './Structures/SkyBlock/Member/Inventories/Inventory/SkyBlockMemberInventoriesInventory.ts';
import SkyBlockMemberInventoriesInventoryDecoded from './Structures/SkyBlock/Member/Inventories/Inventory/SkyBlockMemberInventoriesInventoryDecoded.ts';
import SkyBlockMemberInventoriesWardrobe from './Structures/SkyBlock/Member/Inventories/Wardrobe/SkyBlockMemberInventoriesWardrobe.ts';
import SkyBlockMemberInventoriesWardrobeSlot from './Structures/SkyBlock/Member/Inventories/Wardrobe/SkyBlockMemberInventoriesWardrobeSlot.ts';
import SkyBlockMemberJacobContest from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContest.ts';
import SkyBlockMemberJacobContests from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContests.ts';
import SkyBlockMemberJacobContestsMedals from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsMedals.ts';
import SkyBlockMemberJacobContestsPerks from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsPerks.ts';
import SkyBlockMemberJacobContestsUniqueBrackets from './Structures/SkyBlock/Member/JacobContests/SkyBlockMemberJacobContestsUniqueBrackets.ts';
import SkyBlockMemberLeveling from './Structures/SkyBlock/Member/SkyBlockMemberLeveling.ts';
import SkyBlockMemberMining from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMining.ts';
import SkyBlockMemberMiningCrystal from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningCrystal.ts';
import SkyBlockMemberMiningHotm from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotm.ts';
import SkyBlockMemberMiningHotmForge from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotmForge.ts';
import SkyBlockMemberMiningHotmForgeItem from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningHotmForgeItem.ts';
import SkyBlockMemberMiningPowder from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningPowder.ts';
import SkyBlockMemberMiningPowders from './Structures/SkyBlock/Member/Mining/SkyBlockMemberMiningPowders.ts';
import SkyBlockMemberObjectives from './Structures/SkyBlock/Member/SkyBlockMemberObjectives.ts';
import SkyBlockMemberPet from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPet.ts';
import SkyBlockMemberPets from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPets.ts';
import SkyBlockMemberPetsAutoPetRule from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsAutoPetRule.ts';
import SkyBlockMemberPetsAutoPets from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsAutoPets.ts';
import SkyBlockMemberPetsCare from './Structures/SkyBlock/Member/Pets/SkyBlockMemberPetsCare.ts';
import SkyBlockMemberPlayerData from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerData.ts';
import SkyBlockMemberPlayerDataActiveEffect from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataActiveEffect.ts';
import SkyBlockMemberPlayerDataMinion from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataMinion.ts';
import SkyBlockMemberPlayerDataMinions from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataMinions.ts';
import SkyBlockMemberPlayerDataSkills from './Structures/SkyBlock/Member/PlayerData/SkyBlockMemberPlayerDataSkills.ts';
import SkyBlockMemberPlayerStats from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStats.ts';
import SkyBlockMemberPlayerStatsAuctions from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsAuctions.ts';
import SkyBlockMemberPlayerStatsAuctionsStats from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsAuctionsStats.ts';
import SkyBlockMemberPlayerStatsCandy from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsCandy.ts';
import SkyBlockMemberPlayerStatsEndIsland from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIsland.ts';
import SkyBlockMemberPlayerStatsEndIslandDragonFight from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIslandDragonFight.ts';
import SkyBlockMemberPlayerStatsEndIslandDragonFightDragon from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsEndIslandDragonFightDragon.ts';
import SkyBlockMemberPlayerStatsFishing from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsFishing.ts';
import SkyBlockMemberPlayerStatsGifts from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsGifts.ts';
import SkyBlockMemberPlayerStatsMythos from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsMythos.ts';
import SkyBlockMemberPlayerStatsPets from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsPets.ts';
import SkyBlockMemberPlayerStatsRift from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsRift.ts';
import SkyBlockMemberPlayerStatsSpookyFestival from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsSpookyFestival.ts';
import SkyBlockMemberPlayerStatsWinter from './Structures/SkyBlock/Member/PlayerStats/SkyBlockMemberPlayerStatsWinter.ts';
import SkyBlockMemberProfile from './Structures/SkyBlock/Member/SkyBlockMemberProfile.ts';
import SkyBlockMemberQuests from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuests.ts';
import SkyBlockMemberQuestsHarp from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsHarp.ts';
import SkyBlockMemberQuestsHarpSong from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsHarpSong.ts';
import SkyBlockMemberQuestsTrapper from './Structures/SkyBlock/Member/Quests/SkyBlockMemberQuestsTrapper.ts';
import SkyBlockMemberRift from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRift.ts';
import SkyBlockMemberRiftAccess from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftAccess.ts';
import SkyBlockMemberRiftBlackLagoon from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftBlackLagoon.ts';
import SkyBlockMemberRiftCastle from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftCastle.ts';
import SkyBlockMemberRiftDeadCats from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftDeadCats.ts';
import SkyBlockMemberRiftDreamFarm from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftDreamFarm.ts';
import SkyBlockMemberRiftEnigma from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftEnigma.ts';
import SkyBlockMemberRiftGallery from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftGallery.ts';
import SkyBlockMemberRiftGallerySecuredTrophy from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftGallerySecuredTrophy.ts';
import SkyBlockMemberRiftInventory from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftInventory.ts';
import SkyBlockMemberRiftVillagePlaza from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlaza.ts';
import SkyBlockMemberRiftVillagePlazaBarry from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaBarry.ts';
import SkyBlockMemberRiftVillagePlazaCowboy from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaCowboy.ts';
import SkyBlockMemberRiftVillagePlazaMurder from './Structures/SkyBlock/Member/Rift/VillagePlaza/SkyBlockMemberRiftVillagePlazaMurder.ts';
import SkyBlockMemberRiftWestVillage from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillage.ts';
import SkyBlockMemberRiftWestVillageCrazyKloon from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageCrazyKloon.ts';
import SkyBlockMemberRiftWestVillageGlyphs from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageGlyphs.ts';
import SkyBlockMemberRiftWestVillageKatHouse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageKatHouse.ts';
import SkyBlockMemberRiftWestVillageMirrorverse from './Structures/SkyBlock/Member/Rift/WestVillage/SkyBlockMemberRiftWestVillageMirrorverse.ts';
import SkyBlockMemberRiftWitherCage from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWitherCage.ts';
import SkyBlockMemberRiftWizardTower from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWizardTower.ts';
import SkyBlockMemberRiftWyldWoods from './Structures/SkyBlock/Member/Rift/SkyBlockMemberRiftWyldWoods.ts';
import SkyBlockMemberSkillTree from './Structures/SkyBlock/Member/SkillTree/SkyBlockMemberSkillTree.ts';
import SkyBlockMemberSkillTrees from './Structures/SkyBlock/Member/SkillTree/SkyBlockMemberSkillTrees.ts';
import SkyBlockMemberSlayer from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayer.ts';
import SkyBlockMemberSlayerClaimedLevels from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayerClaimedLevels.ts';
import SkyBlockMemberSlayers from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayers.ts';
import SkyBlockMemberSlayersQuest from './Structures/SkyBlock/Member/Slayers/SkyBlockMemberSlayersQuest.ts';
import SkyBlockMuseum from './Structures/SkyBlock/Museum/SkyBlockMuseum.ts';
import SkyBlockMuseumItem from './Structures/SkyBlock/Museum/SkyBlockMuseumItem.ts';
import SkyBlockMuseumMember from './Structures/SkyBlock/Museum/SkyBlockMuseumMember.ts';
import SkyBlockNews from './Structures/SkyBlock/News/SkyBlockNews.ts';
import SkyBlockPotionEffect from './Structures/SkyBlock/Potion/SkyBlockPotionEffect.ts';
import SkyBlockProfile from './Structures/SkyBlock/Profile/SkyBlockProfile.ts';
import SkyBlockProfileBanking from './Structures/SkyBlock/Profile/Banking/SkyBlockProfileBanking.ts';
import SkyBlockProfileBankingTransaction from './Structures/SkyBlock/Profile/Banking/SkyBlockProfileBankingTransaction.ts';
import SkyBlockProfileCommunityUpgrades from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgrades.ts';
import SkyBlockProfileCommunityUpgradesUpgrade from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgrade.ts';
import SkyBlockProfileCommunityUpgradesUpgraded from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgraded.ts';
import SkyBlockProfileCommunityUpgradesUpgrading from './Structures/SkyBlock/Profile/CommunityUpgrades/SkyBlockProfileCommunityUpgradesUpgrading.ts';
import SkyBlockSkill from './Structures/SkyBlock/Skills/SkyBlockSkill.ts';
import SkyBlockSkillLevel from './Structures/SkyBlock/Skills/SkyBlockSkillLevel.ts';
import SkyBlockSkills from './Structures/SkyBlock/Skills/SkyBlockSkills.ts';
import SkyWars from './Structures/MiniGames/SkyWars/SkyWars.ts';
import SkyWarsHeads from './Structures/MiniGames/SkyWars/SkyWarsHeads.ts';
import SkyWarsKillsDeaths from './Structures/MiniGames/SkyWars/SkyWarsKillsDeaths.ts';
import SkyWarsKillsDeathsType from './Structures/MiniGames/SkyWars/SkyWarsKillsDeathsType.ts';
import SkyWarsKitsMythic from './Structures/MiniGames/SkyWars/SkyWarsKitsMythics/SkyWarsKitsMythic.ts';
import SkyWarsKitsMythics from './Structures/MiniGames/SkyWars/SkyWarsKitsMythics/SkyWarsKitsMythics.ts';
import SkyWarsMega from './Structures/MiniGames/SkyWars/SkyWarsMega/SkyWarsMega.ts';
import SkyWarsMegaKits from './Structures/MiniGames/SkyWars/SkyWarsMega/SkyWarsMegaKits.ts';
import SkyWarsMini from './Structures/MiniGames/SkyWars/SkyWarsMini.ts';
import SkyWarsMode from './Structures/MiniGames/SkyWars/SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from './Structures/MiniGames/SkyWars/SkyWarsMode/SkyWarsModePerk.ts';
import SkyWarsPrivateGames from './Structures/MiniGames/SkyWars/SkyWarsPrivateGames.ts';
import SkyWarsRanked from './Structures/MiniGames/SkyWars/SkyWarsRanked/SkyWarsRanked.ts';
import SkyWarsRankedKits from './Structures/MiniGames/SkyWars/SkyWarsRanked/SkyWarsRankedKits.ts';
import SkyWarsSolo from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSolo.ts';
import SkyWarsSoloKits from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKits.ts';
import SkyWarsSoloKitsAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsAdvanced.ts';
import SkyWarsSoloKitsBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsBasic.ts';
import SkyWarsSoloKitsLab from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLab.ts';
import SkyWarsSoloKitsLabAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLabAdvanced.ts';
import SkyWarsSoloKitsLabBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsLab/SkyWarsSoloKitsLabBasic.ts';
import SkyWarsSoloKitsMini from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsMini.ts';
import SkyWarsSoloKitsTourney from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourney.ts';
import SkyWarsSoloKitsTourneyAdvanced from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourneyAdvanced.ts';
import SkyWarsSoloKitsTourneyBasic from './Structures/MiniGames/SkyWars/SkyWarsSolo/SkyWarsSoloKits/SkyWarsSoloKitsTourney/SkyWarsSoloKitsTourneyBasic.ts';
import SkyWarsTeams from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeams.ts';
import SkyWarsTeamsKits from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKits.ts';
import SkyWarsTeamsKitsAttacking from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsAttacking.ts';
import SkyWarsTeamsKitsDefending from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsDefending.ts';
import SkyWarsTeamsKitsMining from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsMining.ts';
import SkyWarsTeamsKitsSupporting from './Structures/MiniGames/SkyWars/SkyWarsTeams/SkyWarsTeamsKits/SkyWarsTeamsKitsSupporting.ts';
import SmashHeroes from './Structures/MiniGames/SmashHeroes/SmashHeroes.ts';
import SmashHeroesMode from './Structures/MiniGames/SmashHeroes/SmashHeroesMode.ts';
import SmashHerosHero from './Structures/MiniGames/SmashHeroes/SmashHerosHero.ts';
import Soccer from './Structures/MiniGames/Arcade/Soccer.ts';
import SpeedUHC from './Structures/MiniGames/SpeedUHC/SpeedUHC.ts';
import SpeedUHCMode from './Structures/MiniGames/SpeedUHC/SpeedUHCMode.ts';
import Status from './Structures/Status.ts';
import TNTGames from './Structures/MiniGames/TNTGames/TNTGames.ts';
import TNTRun from './Structures/MiniGames/TNTGames/TNTRun.ts';
import TNTTag from './Structures/MiniGames/TNTGames/TNTTag.ts';
import TNTWizards from './Structures/MiniGames/TNTGames/TNTWizards.ts';
import ThrowOut from './Structures/MiniGames/Arcade/ThrowOut.ts';
import TieredAchievement from './Structures/Static/Achievements/TieredAchievement.ts';
import TurboKartRacers from './Structures/MiniGames/TurboKartRacers/TurboKartRacers.ts';
import TurboKartRacersMap from './Structures/MiniGames/TurboKartRacers/TurboKartRacersMap.ts';
import UHC from './Structures/MiniGames/UHC/UHC.ts';
import UHCGamemode from './Structures/MiniGames/UHC/UHCGamemode.ts';
import VampireZ from './Structures/MiniGames/VampireZ/VampireZ.ts';
import VampireZRole from './Structures/MiniGames/VampireZ/VampireZRole.ts';
import Walls from './Structures/MiniGames/Walls.ts';
import Warlords from './Structures/MiniGames/Warlords/Warlords.ts';
import WarlordsClass from './Structures/MiniGames/Warlords/WarlordsClass.ts';
import WatchdogStats from './Structures/WatchdogStats.ts';
import WoolGames from './Structures/MiniGames/WoolGames/WoolGames.ts';
import WoolGamesPrivateGames from './Structures/MiniGames/WoolGames/WoolGamesPrivateGames.ts';
import WoolGamesProgression from './Structures/MiniGames/WoolGames/WoolGamesProgression.ts';
import WoolHunt from './Structures/MiniGames/Arcade/WoolHunt.ts';
import WoolWars from './Structures/MiniGames/WoolGames/WoolWars/WoolWars.ts';
import WoolWarsClass from './Structures/MiniGames/WoolGames/WoolWars/WoolWarsClass.ts';
import WoolWarsSettings from './Structures/MiniGames/WoolGames/WoolWars/WoolWarsSettings.ts';
import Zombies from './Structures/MiniGames/Arcade/Zombies/Zombies.ts';
import ZombiesMap from './Structures/MiniGames/Arcade/Zombies/ZombiesMap.ts';
import ZombiesMapMode from './Structures/MiniGames/Arcade/Zombies/ZombiesMapMode.ts';

export * from './Types/index.ts';
export * from './Utils/index.ts';

export {
  Client,
  Errors,
  HypixelAPIRebornError,
  Achievements,
  Arcade,
  ArcadeOptions,
  ArenaBrawl,
  ArenaBrawlMode,
  BaseAchievement,
  BaseKillDeathsType,
  BaseSkyWarsMode,
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
  BedWarsPracticeBridgingRecordsElevation,
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
  BlitzSurvivalGamesData,
  BlitzSurvivalGamesKit,
  BlitzSurvivalGamesPrivateGames,
  BlockingDead,
  Booster,
  BowSpleef,
  BuildBattle,
  BuildBattleLastWin,
  BuildBattleVotes,
  CaptureTheWool,
  CaptureTheWoolSettings,
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
  DuelsBedWars,
  DuelsBlitz,
  DuelsBow,
  DuelsBridge,
  DuelsBridgeMode,
  DuelsClassic,
  DuelsCombo,
  DuelsMegaWalls,
  DuelsMode,
  DuelsModeFull,
  DuelsOP,
  DuelsOdyssey,
  DuelsOptions,
  DuelsPotion,
  DuelsPrivateGames,
  DuelsSkyWars,
  DuelsSumo,
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
  GameCountsArcade,
  GameCountsArcadeModes,
  GameCountsBasicModes,
  GameCountsBattleGround,
  GameCountsBattleGroundModes,
  GameCountsBedWars,
  GameCountsBedWarsModes,
  GameCountsBuildBattle,
  GameCountsBuildBattleModes,
  GameCountsDuels,
  GameCountsDuelsModes,
  GameCountsGames,
  GameCountsGeneric,
  GameCountsLegacy,
  GameCountsLegacyModes,
  GameCountsMCGO,
  GameCountsMCGOModes,
  GameCountsMurderMystery,
  GameCountsMurderMysteryModes,
  GameCountsPit,
  GameCountsPitModes,
  GameCountsReplay,
  GameCountsReplayModes,
  GameCountsSkyBlock,
  GameCountsSkyBlockModes,
  GameCountsSkyWars,
  GameCountsSkyWarsModes,
  GameCountsSpeedUHC,
  GameCountsSuperSmash,
  GameCountsSuperSmashModes,
  GameCountsSurvivalGames,
  GameCountsTNTGames,
  GameCountsTNTGamesModes,
  GameCountsUHC,
  GameCountsUHCModes,
  GameCountsWalls3,
  GameCountsWalls3Modes,
  GameCountsWoolGames,
  GameCountsWoolGamesModes,
  GameQuests,
  GenericDuelsMode,
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
  InventoryLayout,
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
  RawSkyBlockInventoryItem,
  RecentGame,
  SantaSays,
  SantaSimulator,
  ScubaSimulator,
  SheepWars,
  SheepWarsLayout,
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
  SkyBlockMemberGarden,
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
  SkyBlockMemberInventoriesWardrobe,
  SkyBlockMemberInventoriesWardrobeSlot,
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
  SkyBlockMemberPlayerStatsPets,
  SkyBlockMemberPlayerStatsRift,
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
  SkyBlockMemberSkillTree,
  SkyBlockMemberSkillTrees,
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
  SkyBlockProfileBankingTransaction,
  SkyBlockProfileCommunityUpgrades,
  SkyBlockProfileCommunityUpgradesUpgrade,
  SkyBlockProfileCommunityUpgradesUpgraded,
  SkyBlockProfileCommunityUpgradesUpgrading,
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
  SmashHeroes,
  SmashHeroesMode,
  SmashHerosHero,
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
  WoolGamesPrivateGames,
  WoolGamesProgression,
  WoolHunt,
  WoolWars,
  WoolWarsClass,
  WoolWarsSettings,
  Zombies,
  ZombiesMap,
  ZombiesMapMode
};

export default {
  Client,
  Errors,
  HypixelAPIRebornError,
  Achievements,
  Arcade,
  ArcadeOptions,
  ArenaBrawl,
  ArenaBrawlMode,
  BaseAchievement,
  BaseKillDeathsType,
  BaseSkyWarsMode,
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
  BedWarsPracticeBridgingRecordsElevation,
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
  BlitzSurvivalGamesData,
  BlitzSurvivalGamesKit,
  BlitzSurvivalGamesPrivateGames,
  BlockingDead,
  Booster,
  BowSpleef,
  BuildBattle,
  BuildBattleLastWin,
  BuildBattleVotes,
  CaptureTheWool,
  CaptureTheWoolSettings,
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
  DuelsBedWars,
  DuelsBlitz,
  DuelsBow,
  DuelsBridge,
  DuelsBridgeMode,
  DuelsClassic,
  DuelsCombo,
  DuelsMegaWalls,
  DuelsMode,
  DuelsModeFull,
  DuelsOP,
  DuelsOdyssey,
  DuelsOptions,
  DuelsPotion,
  DuelsPrivateGames,
  DuelsSkyWars,
  DuelsSumo,
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
  GameCountsArcade,
  GameCountsArcadeModes,
  GameCountsBasicModes,
  GameCountsBattleGround,
  GameCountsBattleGroundModes,
  GameCountsBedWars,
  GameCountsBedWarsModes,
  GameCountsBuildBattle,
  GameCountsBuildBattleModes,
  GameCountsDuels,
  GameCountsDuelsModes,
  GameCountsGames,
  GameCountsGeneric,
  GameCountsLegacy,
  GameCountsLegacyModes,
  GameCountsMCGO,
  GameCountsMCGOModes,
  GameCountsMurderMystery,
  GameCountsMurderMysteryModes,
  GameCountsPit,
  GameCountsPitModes,
  GameCountsReplay,
  GameCountsReplayModes,
  GameCountsSkyBlock,
  GameCountsSkyBlockModes,
  GameCountsSkyWars,
  GameCountsSkyWarsModes,
  GameCountsSpeedUHC,
  GameCountsSuperSmash,
  GameCountsSuperSmashModes,
  GameCountsSurvivalGames,
  GameCountsTNTGames,
  GameCountsTNTGamesModes,
  GameCountsUHC,
  GameCountsUHCModes,
  GameCountsWalls3,
  GameCountsWalls3Modes,
  GameCountsWoolGames,
  GameCountsWoolGamesModes,
  GameQuests,
  GenericDuelsMode,
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
  InventoryLayout,
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
  RawSkyBlockInventoryItem,
  RecentGame,
  SantaSays,
  SantaSimulator,
  ScubaSimulator,
  SheepWars,
  SheepWarsLayout,
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
  SkyBlockMemberGarden,
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
  SkyBlockMemberInventoriesWardrobe,
  SkyBlockMemberInventoriesWardrobeSlot,
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
  SkyBlockMemberPlayerStatsPets,
  SkyBlockMemberPlayerStatsRift,
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
  SkyBlockMemberSkillTree,
  SkyBlockMemberSkillTrees,
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
  SkyBlockProfileBankingTransaction,
  SkyBlockProfileCommunityUpgrades,
  SkyBlockProfileCommunityUpgradesUpgrade,
  SkyBlockProfileCommunityUpgradesUpgraded,
  SkyBlockProfileCommunityUpgradesUpgrading,
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
  SmashHeroes,
  SmashHeroesMode,
  SmashHerosHero,
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
  WoolGamesPrivateGames,
  WoolGamesProgression,
  WoolHunt,
  WoolWars,
  WoolWarsClass,
  WoolWarsSettings,
  Zombies,
  ZombiesMap,
  ZombiesMapMode
};
