import SkyBlockMemberPlayerDataMinion from './SkyBlockMemberPlayerDataMinion.js';
import type { SkyBlockMinion } from '../../../../Types/SkyBlock.js';

class SkyBlockMemberPlayerDataMinions {
  acacia: SkyBlockMemberPlayerDataMinion;
  birch: SkyBlockMemberPlayerDataMinion;
  blaze: SkyBlockMemberPlayerDataMinion;
  cactus: SkyBlockMemberPlayerDataMinion;
  carrot: SkyBlockMemberPlayerDataMinion;
  cavespider: SkyBlockMemberPlayerDataMinion;
  chicken: SkyBlockMemberPlayerDataMinion;
  clay: SkyBlockMemberPlayerDataMinion;
  coal: SkyBlockMemberPlayerDataMinion;
  cobblestone: SkyBlockMemberPlayerDataMinion;
  cocoa: SkyBlockMemberPlayerDataMinion;
  cow: SkyBlockMemberPlayerDataMinion;
  creeper: SkyBlockMemberPlayerDataMinion;
  darkOak: SkyBlockMemberPlayerDataMinion;
  diamond: SkyBlockMemberPlayerDataMinion;
  emerald: SkyBlockMemberPlayerDataMinion;
  enderman: SkyBlockMemberPlayerDataMinion;
  enderStone: SkyBlockMemberPlayerDataMinion;
  fishing: SkyBlockMemberPlayerDataMinion;
  flower: SkyBlockMemberPlayerDataMinion;
  ghast: SkyBlockMemberPlayerDataMinion;
  glowstone: SkyBlockMemberPlayerDataMinion;
  gold: SkyBlockMemberPlayerDataMinion;
  gravel: SkyBlockMemberPlayerDataMinion;
  hardStone: SkyBlockMemberPlayerDataMinion;
  ice: SkyBlockMemberPlayerDataMinion;
  inferno: SkyBlockMemberPlayerDataMinion;
  iron: SkyBlockMemberPlayerDataMinion;
  jungle: SkyBlockMemberPlayerDataMinion;
  lapis: SkyBlockMemberPlayerDataMinion;
  magmaCube: SkyBlockMemberPlayerDataMinion;
  melon: SkyBlockMemberPlayerDataMinion;
  mithril: SkyBlockMemberPlayerDataMinion;
  mushroom: SkyBlockMemberPlayerDataMinion;
  mycelium: SkyBlockMemberPlayerDataMinion;
  netherWart: SkyBlockMemberPlayerDataMinion;
  oak: SkyBlockMemberPlayerDataMinion;
  obsidian: SkyBlockMemberPlayerDataMinion;
  pig: SkyBlockMemberPlayerDataMinion;
  potato: SkyBlockMemberPlayerDataMinion;
  pumpkin: SkyBlockMemberPlayerDataMinion;
  quartz: SkyBlockMemberPlayerDataMinion;
  rabbit: SkyBlockMemberPlayerDataMinion;
  redstone: SkyBlockMemberPlayerDataMinion;
  redSand: SkyBlockMemberPlayerDataMinion;
  revenant: SkyBlockMemberPlayerDataMinion;
  sand: SkyBlockMemberPlayerDataMinion;
  sheep: SkyBlockMemberPlayerDataMinion;
  skeleton: SkyBlockMemberPlayerDataMinion;
  slime: SkyBlockMemberPlayerDataMinion;
  snow: SkyBlockMemberPlayerDataMinion;
  spider: SkyBlockMemberPlayerDataMinion;
  spruce: SkyBlockMemberPlayerDataMinion;
  sugarCane: SkyBlockMemberPlayerDataMinion;
  tarantula: SkyBlockMemberPlayerDataMinion;
  vampire: SkyBlockMemberPlayerDataMinion;
  voidling: SkyBlockMemberPlayerDataMinion;
  wheat: SkyBlockMemberPlayerDataMinion;
  zombie: SkyBlockMemberPlayerDataMinion;
  constructor(data: SkyBlockMinion[]) {
    this.acacia = new SkyBlockMemberPlayerDataMinion(data || [], 'ACACIA');
    this.birch = new SkyBlockMemberPlayerDataMinion(data || [], 'BIRCH');
    this.blaze = new SkyBlockMemberPlayerDataMinion(data || [], 'BLAZE');
    this.cactus = new SkyBlockMemberPlayerDataMinion(data || [], 'CACTUS');
    this.carrot = new SkyBlockMemberPlayerDataMinion(data || [], 'CARROT');
    this.cavespider = new SkyBlockMemberPlayerDataMinion(data || [], 'CAVESPIDER');
    this.chicken = new SkyBlockMemberPlayerDataMinion(data || [], 'CHICKEN');
    this.clay = new SkyBlockMemberPlayerDataMinion(data || [], 'CLAY');
    this.coal = new SkyBlockMemberPlayerDataMinion(data || [], 'COAL');
    this.cobblestone = new SkyBlockMemberPlayerDataMinion(data || [], 'COBBLESTONE');
    this.cocoa = new SkyBlockMemberPlayerDataMinion(data || [], 'COCOA');
    this.cow = new SkyBlockMemberPlayerDataMinion(data || [], 'COW');
    this.creeper = new SkyBlockMemberPlayerDataMinion(data || [], 'CREEPER');
    this.darkOak = new SkyBlockMemberPlayerDataMinion(data || [], 'DARK_OAK');
    this.diamond = new SkyBlockMemberPlayerDataMinion(data || [], 'DIAMOND');
    this.emerald = new SkyBlockMemberPlayerDataMinion(data || [], 'EMERALD');
    this.enderman = new SkyBlockMemberPlayerDataMinion(data || [], 'ENDERMAN');
    this.enderStone = new SkyBlockMemberPlayerDataMinion(data || [], 'ENDER_STONE');
    this.fishing = new SkyBlockMemberPlayerDataMinion(data || [], 'FISHING');
    this.flower = new SkyBlockMemberPlayerDataMinion(data || [], 'FLOWER');
    this.ghast = new SkyBlockMemberPlayerDataMinion(data || [], 'GHAST');
    this.glowstone = new SkyBlockMemberPlayerDataMinion(data || [], 'GLOWSTONE');
    this.gold = new SkyBlockMemberPlayerDataMinion(data || [], 'GOLD');
    this.gravel = new SkyBlockMemberPlayerDataMinion(data || [], 'GRAVEL');
    this.hardStone = new SkyBlockMemberPlayerDataMinion(data || [], 'HARD_STONE');
    this.ice = new SkyBlockMemberPlayerDataMinion(data || [], 'ICE');
    this.inferno = new SkyBlockMemberPlayerDataMinion(data || [], 'INFERNO');
    this.iron = new SkyBlockMemberPlayerDataMinion(data || [], 'IRON');
    this.jungle = new SkyBlockMemberPlayerDataMinion(data || [], 'JUNGLE');
    this.lapis = new SkyBlockMemberPlayerDataMinion(data || [], 'LAPIS');
    this.magmaCube = new SkyBlockMemberPlayerDataMinion(data || [], 'MAGMA_CUBE');
    this.melon = new SkyBlockMemberPlayerDataMinion(data || [], 'MELON');
    this.mithril = new SkyBlockMemberPlayerDataMinion(data || [], 'MITHRIL');
    this.mushroom = new SkyBlockMemberPlayerDataMinion(data || [], 'MUSHROOM');
    this.mycelium = new SkyBlockMemberPlayerDataMinion(data || [], 'MYCELIUM');
    this.netherWart = new SkyBlockMemberPlayerDataMinion(data || [], 'NETHER_WARTS');
    this.oak = new SkyBlockMemberPlayerDataMinion(data || [], 'OAK');
    this.obsidian = new SkyBlockMemberPlayerDataMinion(data || [], 'OBSIDIAN');
    this.pig = new SkyBlockMemberPlayerDataMinion(data || [], 'PIG');
    this.potato = new SkyBlockMemberPlayerDataMinion(data || [], 'POTATO');
    this.pumpkin = new SkyBlockMemberPlayerDataMinion(data || [], 'PUMPKIN');
    this.quartz = new SkyBlockMemberPlayerDataMinion(data || [], 'QUARTZ');
    this.rabbit = new SkyBlockMemberPlayerDataMinion(data || [], 'RABBIT');
    this.redstone = new SkyBlockMemberPlayerDataMinion(data || [], 'REDSTONE');
    this.redSand = new SkyBlockMemberPlayerDataMinion(data || [], 'RED_SAND');
    this.revenant = new SkyBlockMemberPlayerDataMinion(data || [], 'REVENANT');
    this.sand = new SkyBlockMemberPlayerDataMinion(data || [], 'SAND');
    this.sheep = new SkyBlockMemberPlayerDataMinion(data || [], 'SHEEP');
    this.skeleton = new SkyBlockMemberPlayerDataMinion(data || [], 'SKELETON');
    this.slime = new SkyBlockMemberPlayerDataMinion(data || [], 'SLIME');
    this.snow = new SkyBlockMemberPlayerDataMinion(data || [], 'SNOW');
    this.spider = new SkyBlockMemberPlayerDataMinion(data || [], 'SPIDER');
    this.spruce = new SkyBlockMemberPlayerDataMinion(data || [], 'SPRUCE');
    this.sugarCane = new SkyBlockMemberPlayerDataMinion(data || [], 'SUGAR_CANE');
    this.tarantula = new SkyBlockMemberPlayerDataMinion(data || [], 'TARANTULA');
    this.vampire = new SkyBlockMemberPlayerDataMinion(data || [], 'VAMPIRE');
    this.voidling = new SkyBlockMemberPlayerDataMinion(data || [], 'VOIDLING');
    this.wheat = new SkyBlockMemberPlayerDataMinion(data || [], 'WHEAT');
    this.zombie = new SkyBlockMemberPlayerDataMinion(data || [], 'ZOMBIE');
  }
}

export default SkyBlockMemberPlayerDataMinions;
