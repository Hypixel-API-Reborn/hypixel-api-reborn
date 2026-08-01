import CaptureTheWool from './CaptureTheWool/CaptureTheWool.js';
import LeaderboardSettings from '../Shared/LeaderboardSettings.js';
import SheepWars from './SheepWars/SheepWars.js';
import WoolGamesPrivateGames from './WoolGamesPrivateGames.js';
import WoolGamesProgression from './WoolGamesProgression.js';
import WoolWars from './WoolWars/WoolWars.js';
import type {
  WoolGamesLeaderboardSettingsMode,
  WoolGamesPackage,
  WoolGamesPackageBarrier,
  WoolGamesPackageCage,
  WoolGamesPackageDeathCry,
  WoolGamesPackageGlyph,
  WoolGamesPackageHat,
  WoolGamesPackageKillMessage,
  WoolGamesPackageProjectileTrail
} from '../../../Types/Player.js';

class WoolGames {
  coins: number;
  packages: WoolGamesPackage[];
  privateGames: WoolGamesPrivateGames;
  progression: WoolGamesProgression;
  selectedCage: WoolGamesPackageCage | 'UNKNOWN';
  selectedKillMessages: WoolGamesPackageKillMessage | 'UNKNOWN';
  selectedHat: WoolGamesPackageHat | 'UNKNOWN';
  selectedGlyph: WoolGamesPackageGlyph | 'UNKNOWN';
  selectedDeathCry: WoolGamesPackageDeathCry | 'UNKNOWN';
  selectedBarrier: WoolGamesPackageBarrier | 'UNKNOWN';
  selectedProjectileTrail: WoolGamesPackageProjectileTrail | 'UNKNOWN';
  playtime: number;
  leaderboardSettings: LeaderboardSettings<WoolGamesLeaderboardSettingsMode>;
  woolWars: WoolWars;
  captureTheWool: CaptureTheWool;
  sheepWars: SheepWars;
  constructor(data: Record<string, any>) {
    this.coins = data?.tokens ?? data?.coins ?? 0;
    this.packages = data?.packages ?? [];
    this.privateGames = new WoolGamesPrivateGames(data?.privategames ?? {});
    this.progression = new WoolGamesProgression(data?.progression ?? {});
    this.selectedCage = data?.cage ?? 'UNKNOWN';
    this.selectedKillMessages = data?.killmessages ?? 'UNKNOWN';
    this.selectedHat = data?.hat ?? 'UNKNOWN';
    this.selectedGlyph = data?.glyph ?? 'UNKNOWN';
    this.selectedDeathCry = data?.deathcry ?? 'UNKNOWN';
    this.selectedBarrier = data?.barrier ?? 'UNKNOWN';
    this.selectedProjectileTrail = data?.projectiletrail ?? 'UNKNOWN';
    this.playtime = data?.playtime ?? 0;
    this.leaderboardSettings = new LeaderboardSettings<WoolGamesLeaderboardSettingsMode>(
      data?.leaderboardSettings ?? {}
    );
    this.woolWars = new WoolWars(data?.wool_wars);
    this.captureTheWool = new CaptureTheWool(data?.capture_the_wool);
    this.sheepWars = new SheepWars(data?.sheep_wars);
  }
}

export default WoolGames;
