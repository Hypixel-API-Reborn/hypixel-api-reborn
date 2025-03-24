import SkyblockMemberRiftAccess from './SkyblockMemberRiftAccess.js';
import SkyblockMemberRiftBlackLagoon from './SkyblockMemberRiftBlackLagoon.js';
import SkyblockMemberRiftCastle from './SkyblockMemberRiftCastle.js';
import SkyblockMemberRiftDeadCats from './SkyblockMemberRiftDeadCats.js';
import SkyblockMemberRiftDreamFarm from './SkyblockMemberRiftDreamFarm.js';
import SkyblockMemberRiftEnigma from './SkyblockMemberRiftEnigma.js';
import SkyblockMemberRiftGallery from './SkyblockMemberRiftGallery.js';
import SkyblockMemberRiftInventory from './SkyblockMemberRiftInventory.js';
import SkyblockMemberRiftVillagePlaza from './VillagePlaza/SkyblockMemberRiftVillagePlaza.js';
import SkyblockMemberRiftWestVillage from './WestVillage/SkyblockMemberRiftWestVillage.js';
import SkyblockMemberRiftWitherCage from './SkyblockMemberRiftWitherCage.js';
import SkyblockMemberRiftWizardTower from './SkyblockMemberRiftWizardTower.js';

class SkyblockMemberRift {
  villagePlaza: SkyblockMemberRiftVillagePlaza;
  witherCage: SkyblockMemberRiftWitherCage;
  blackLagoon: SkyblockMemberRiftBlackLagoon;
  deadCats: SkyblockMemberRiftDeadCats;
  wizardTower: SkyblockMemberRiftWizardTower;
  enigma: SkyblockMemberRiftEnigma;
  gallery: SkyblockMemberRiftGallery;
  lifetimePurchasedBoundaries: string[];
  westVillage: SkyblockMemberRiftWestVillage;
  castle: SkyblockMemberRiftCastle;
  access: SkyblockMemberRiftAccess;
  dreamFarm: SkyblockMemberRiftDreamFarm;
  inventory: SkyblockMemberRiftInventory;
  constructor(data: Record<string, any>) {
    this.villagePlaza = new SkyblockMemberRiftVillagePlaza(data?.village_plaza || {});
    this.witherCage = new SkyblockMemberRiftWitherCage(data?.wither_cage || {});
    this.blackLagoon = new SkyblockMemberRiftBlackLagoon(data?.black_lagoon || {});
    this.deadCats = new SkyblockMemberRiftDeadCats(data?.dead_cats || {});
    this.wizardTower = new SkyblockMemberRiftWizardTower(data?.wizard_tower || {});
    this.enigma = new SkyblockMemberRiftEnigma(data?.enigma || {});
    this.gallery = new SkyblockMemberRiftGallery(data?.gallery || {});
    this.lifetimePurchasedBoundaries = data?.lifetime_purchased_boundaries || [];
    this.westVillage = new SkyblockMemberRiftWestVillage(data?.west_village || {});
    this.castle = new SkyblockMemberRiftCastle(data?.castle || {});
    this.access = new SkyblockMemberRiftAccess(data?.access || {});
    this.dreamFarm = new SkyblockMemberRiftDreamFarm(data?.dreamfarm || {});
    this.inventory = new SkyblockMemberRiftInventory(data?.inventory || {});
  }
}

export default SkyblockMemberRift;
