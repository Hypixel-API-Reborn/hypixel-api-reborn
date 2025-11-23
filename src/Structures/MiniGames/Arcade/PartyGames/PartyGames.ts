import LawnMoower from './LawnMoower.js';
import PartyGamesGame from './PartyGamesGame.js';
import RPG16 from './RPG16.js';

class PartyGames {
  animalSlaughter: PartyGamesGame;
  anvilSpleef: PartyGamesGame;
  avalanche: PartyGamesGame;
  bombardment: PartyGamesGame;
  cannonPainting: PartyGamesGame;
  chickenRings: PartyGamesGame;
  dive: PartyGamesGame;
  fireLeapers: PartyGamesGame;
  frozenFloor: PartyGamesGame;
  highGround: PartyGamesGame;
  hoeHoeHoe: PartyGamesGame;
  jigsawRush: PartyGamesGame;
  jungleJump: PartyGamesGame;
  labEscape: PartyGamesGame;
  lawnMoower: LawnMoower;
  minecartRacing: PartyGamesGame;
  pigFishing: PartyGamesGame;
  pigJousting: PartyGamesGame;
  rpg16: RPG16;
  shootingRange: PartyGamesGame;
  spiderMaze: PartyGamesGame;
  superSheep: PartyGamesGame;
  theFloorIsLava: PartyGamesGame;
  trampolinio: PartyGamesGame;
  volcano: PartyGamesGame;
  workshop: PartyGamesGame;
  constructor(data: Record<string, any>) {
    this.animalSlaughter = new PartyGamesGame(data, 'animal_slaughter');
    this.anvilSpleef = new PartyGamesGame(data, 'anvil_spleef');
    this.avalanche = new PartyGamesGame(data, 'avalanche');
    this.bombardment = new PartyGamesGame(data, 'bombardment');
    this.cannonPainting = new PartyGamesGame(data, 'cannon_painting');
    this.chickenRings = new PartyGamesGame(data, 'chicken_rings');
    this.dive = new PartyGamesGame(data, 'dive');
    this.fireLeapers = new PartyGamesGame(data, 'fire_leapers');
    this.frozenFloor = new PartyGamesGame(data, 'frozen_floor');
    this.highGround = new PartyGamesGame(data, 'high_ground');
    this.hoeHoeHoe = new PartyGamesGame(data, 'hoe_hoe_hoe');
    this.jigsawRush = new PartyGamesGame(data, 'jigsaw_rush');
    this.jungleJump = new PartyGamesGame(data, 'jungle_jump');
    this.labEscape = new PartyGamesGame(data, 'lab_escape');
    this.lawnMoower = new LawnMoower(data);
    this.minecartRacing = new PartyGamesGame(data, 'minecart_racing');
    this.pigFishing = new PartyGamesGame(data, 'pig_fishing');
    this.pigJousting = new PartyGamesGame(data, 'pig_jousting');
    this.rpg16 = new RPG16(data);
    this.shootingRange = new PartyGamesGame(data, 'shooting_range');
    this.spiderMaze = new PartyGamesGame(data, 'spider_maze');
    this.superSheep = new PartyGamesGame(data, 'super_sheep');
    this.theFloorIsLava = new PartyGamesGame(data, 'the_floor_is_lava');
    this.trampolinio = new PartyGamesGame(data, 'trampolinio');
    this.volcano = new PartyGamesGame(data, 'volcano');
    this.workshop = new PartyGamesGame(data, 'workshop');
  }
}

export default PartyGames;
