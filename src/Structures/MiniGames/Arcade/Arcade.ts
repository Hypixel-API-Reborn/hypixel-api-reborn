import BlockingDead from './BlockingDead.js';
import BountyHunters from './BountyHunters.js';
import DragonWars from './DragonWars.js';
import Dropper from './Dropper.js';
import EnderSpleef from './EnderSpleef.js';
import FarmHunt from './FarmHunt.js';
import Football from './Football.js';
import GalaxyWars from './GalaxyWars.js';
import HideAndSeek from './HideAndSeek.js';
import HoleInTheWall from './HoleInTheWall.js';
import HypixelSays from './HypixelSays.js';
import MiniWalls from './MiniWalls.js';
import PartyGames from './PartyGames.js';
import PixelParty from './PixelParty.js';
import ThrowOut from './ThrowOut.js';
import Zombies from './Zombies.js';
import { monthAB, weekAB } from '../../../Utils/Oscillation.js';

class Arcade {
  coins: number;
  weeklyCoins: number;
  monthlyCoins: number;
  hintsDisabled: boolean;
  flashDisabled: boolean;
  blockingDead: BlockingDead;
  bountyHunters: BountyHunters;
  dragonWars: DragonWars;
  dropper: Dropper;
  enderSpleef: EnderSpleef;
  farmHunt: FarmHunt;
  football: Football;
  galaxyWars: GalaxyWars;
  hideAndSeek: HideAndSeek;
  holeInTheWall: HoleInTheWall;
  hypixelSays: HypixelSays;
  miniWalls: MiniWalls;
  partyGames: PartyGames;
  pixelParty: PixelParty;
  throwOut: ThrowOut;
  zombies: Zombies;
  constructor(data: Record<string, any> = {}) {
    this.coins = data?.coins || data?.tokens || 0;
    this.weeklyCoins = parseInt(data?.[`weekly_coins_${weekAB()}`] || 0, 10);
    this.monthlyCoins = parseInt(data?.[`monthly_coins_${monthAB()}`] || 0, 10);
    this.hintsDisabled = !data?.hints;
    this.flashDisabled = !data?.flash;
    this.blockingDead = new BlockingDead(data);
    this.bountyHunters = new BountyHunters(data);
    this.dragonWars = new DragonWars(data);
    this.dropper = new Dropper(data?.dropper);
    this.enderSpleef = new EnderSpleef(data);
    this.farmHunt = new FarmHunt(data);
    this.football = new Football(data);
    this.galaxyWars = new GalaxyWars(data);
    this.hideAndSeek = new HideAndSeek(data);
    this.holeInTheWall = new HoleInTheWall(data);
    this.hypixelSays = new HypixelSays(data);
    this.miniWalls = new MiniWalls(data);
    this.partyGames = new PartyGames(data);
    this.pixelParty = new PixelParty(data);
    this.throwOut = new ThrowOut(data);
    this.zombies = new Zombies(data);
  }
}

export default Arcade;
