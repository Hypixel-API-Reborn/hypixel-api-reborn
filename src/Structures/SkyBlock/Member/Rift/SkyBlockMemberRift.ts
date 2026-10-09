import SkyBlockMemberRiftAccess from './SkyBlockMemberRiftAccess.ts';
import SkyBlockMemberRiftBlackLagoon from './SkyBlockMemberRiftBlackLagoon.ts';
import SkyBlockMemberRiftCastle from './SkyBlockMemberRiftCastle.ts';
import SkyBlockMemberRiftDeadCats from './SkyBlockMemberRiftDeadCats.ts';
import SkyBlockMemberRiftDreamFarm from './SkyBlockMemberRiftDreamFarm.ts';
import SkyBlockMemberRiftEnigma from './SkyBlockMemberRiftEnigma.ts';
import SkyBlockMemberRiftGallery from './SkyBlockMemberRiftGallery.ts';
import SkyBlockMemberRiftInventory from './SkyBlockMemberRiftInventory.ts';
import SkyBlockMemberRiftVillagePlaza from './VillagePlaza/SkyBlockMemberRiftVillagePlaza.ts';
import SkyBlockMemberRiftWestVillage from './WestVillage/SkyBlockMemberRiftWestVillage.ts';
import SkyBlockMemberRiftWitherCage from './SkyBlockMemberRiftWitherCage.ts';
import SkyBlockMemberRiftWizardTower from './SkyBlockMemberRiftWizardTower.ts';

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
    this.villagePlaza = new SkyBlockMemberRiftVillagePlaza(data?.village_plaza ?? {});
    this.witherCage = new SkyBlockMemberRiftWitherCage(data?.wither_cage ?? {});
    this.blackLagoon = new SkyBlockMemberRiftBlackLagoon(data?.black_lagoon ?? {});
    this.deadCats = new SkyBlockMemberRiftDeadCats(data?.dead_cats ?? {});
    this.wizardTower = new SkyBlockMemberRiftWizardTower(data?.wizard_tower ?? {});
    this.enigma = new SkyBlockMemberRiftEnigma(data?.enigma ?? {});
    this.gallery = new SkyBlockMemberRiftGallery(data?.gallery ?? {});
    this.lifetimePurchasedBoundaries = data?.lifetime_purchased_boundaries ?? [];
    this.westVillage = new SkyBlockMemberRiftWestVillage(data?.west_village ?? {});
    this.castle = new SkyBlockMemberRiftCastle(data?.castle ?? {});
    this.access = new SkyBlockMemberRiftAccess(data?.access ?? {});
    this.dreamFarm = new SkyBlockMemberRiftDreamFarm(data?.dreamfarm ?? {});
    this.inventory = new SkyBlockMemberRiftInventory(data?.inventory ?? {});
  }
}

export default SkyBlockMemberRift;
