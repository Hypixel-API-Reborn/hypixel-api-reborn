import SkyBlockGardenActiveVisitor from './SkyBlockGardenActiveVisitor.js';
import SkyBlockGardenComposter from './SkyBlockGardenComposter.js';
import SkyBlockGardenCropMilestones from './SkyBlockGardenCropMilestones.js';
import SkyBlockGardenCropsUpgrades from './SkyBlockGardenCropsUpgrades.js';
import SkyBlockGardenVisitors from './SkyBlockGardenVisitors.js';
import { getLevelByXp } from '../../../Utils/SkyBlockUtils.js';
class SkyBlockGarden {
    level;
    barnSkin;
    unlockedBarnSkins;
    unlockedPlots;
    visitors;
    currentVisitors;
    cropMilestones;
    composter;
    cropUpgrades;
    constructor(data) {
        this.level = getLevelByXp(data?.garden_experience, { type: 'garden' });
        this.barnSkin = data?.selected_barn_skin || 'UNKNOWN';
        this.unlockedBarnSkins = data?.unlocked_barn_skins || [];
        this.unlockedPlots = data?.unlocked_plots_ids || [];
        this.visitors = new SkyBlockGardenVisitors(data?.commission_data || {});
        this.currentVisitors = Object.keys(data?.active_commissions || {}).map((visitor) => new SkyBlockGardenActiveVisitor(data?.active_commissions?.[visitor], visitor));
        this.cropMilestones = new SkyBlockGardenCropMilestones(data?.resources_collected || {});
        this.composter = new SkyBlockGardenComposter(data?.composter_data || {});
        this.cropUpgrades = new SkyBlockGardenCropsUpgrades(data?.crop_upgrade_levels || {});
    }
    toString() {
        return this.level.level;
    }
    isRaw() {
        return false;
    }
}
export default SkyBlockGarden;
//# sourceMappingURL=SkyBlockGarden.js.map