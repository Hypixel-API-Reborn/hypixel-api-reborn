import SkyBlockMemberRiftAccess from './SkyBlockMemberRiftAccess.js';
import SkyBlockMemberRiftBlackLagoon from './SkyBlockMemberRiftBlackLagoon.js';
import SkyBlockMemberRiftCastle from './SkyBlockMemberRiftCastle.js';
import SkyBlockMemberRiftDeadCats from './SkyBlockMemberRiftDeadCats.js';
import SkyBlockMemberRiftDreamFarm from './SkyBlockMemberRiftDreamFarm.js';
import SkyBlockMemberRiftEnigma from './SkyBlockMemberRiftEnigma.js';
import SkyBlockMemberRiftGallery from './SkyBlockMemberRiftGallery.js';
import SkyBlockMemberRiftInventory from './SkyBlockMemberRiftInventory.js';
import SkyBlockMemberRiftVillagePlaza from './VillagePlaza/SkyBlockMemberRiftVillagePlaza.js';
import SkyBlockMemberRiftWestVillage from './WestVillage/SkyBlockMemberRiftWestVillage.js';
import SkyBlockMemberRiftWitherCage from './SkyBlockMemberRiftWitherCage.js';
import SkyBlockMemberRiftWizardTower from './SkyBlockMemberRiftWizardTower.js';

class SkyBlockMemberRift {
  villagePlaza: SkyBlockMemberRiftVillagePlaza;
  witherCage: SkyBlockMemberRiftWitherCage;
  blackLagoon: SkyBlockMemberRiftBlackLagoon;
  deadCats: SkyBlockMemberRiftDeadCats;
  wizardTower: SkyBlockMemberRiftWizardTower;
  enigma: SkyBlockMemberRiftEnigma;
  gallery: SkyBlockMemberRiftGallery;
  lifetimePurchasedBoundaries: string[];
  westVillage: SkyBlockMemberRiftWestVillage;
  castle: SkyBlockMemberRiftCastle;
  access: SkyBlockMemberRiftAccess;
  dreamFarm: SkyBlockMemberRiftDreamFarm;
  inventory: SkyBlockMemberRiftInventory;
  constructor(data: Record<string, any>) {
    this.villagePlaza = new SkyBlockMemberRiftVillagePlaza(data?.village_plaza || {});
    this.witherCage = new SkyBlockMemberRiftWitherCage(data?.wither_cage || {});
    this.blackLagoon = new SkyBlockMemberRiftBlackLagoon(data?.black_lagoon || {});
    this.deadCats = new SkyBlockMemberRiftDeadCats(data?.dead_cats || {});
    this.wizardTower = new SkyBlockMemberRiftWizardTower(data?.wizard_tower || {});
    this.enigma = new SkyBlockMemberRiftEnigma(data?.enigma || {});
    this.gallery = new SkyBlockMemberRiftGallery(data?.gallery || {});
    this.lifetimePurchasedBoundaries = data?.lifetime_purchased_boundaries || [];
    this.westVillage = new SkyBlockMemberRiftWestVillage(data?.west_village || {});
    this.castle = new SkyBlockMemberRiftCastle(data?.castle || {});
    this.access = new SkyBlockMemberRiftAccess(data?.access || {});
    this.dreamFarm = new SkyBlockMemberRiftDreamFarm(data?.dreamfarm || {});
    this.inventory = new SkyBlockMemberRiftInventory(data?.inventory || {});
  }
}

export default SkyBlockMemberRift;
