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
declare class SkyBlockMemberRift {
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
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberRift;
//# sourceMappingURL=SkyBlockMemberRift.d.ts.map