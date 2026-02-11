import BedWarsBoxes from './BedWarsBoxes.js';
import BedWarsEightOne from "./BedWarsEightOne.js";
import BedWarsEightTwo from "./BedWarsEightTwo.js";
import BedWarsFavorites from './BedWarsFavorites.js';
import BedWarsFigurines from './BedWarsFigurines.js';
import BedWarsFourFour from "./BedWarsFourFour.js";
import BedWarsFourThree from "./BedWarsFourThree.js";
import BedWarsMode from './BedWarsMode.js';
import BedWarsPrivateGameSettings from './BedWarsPrivateGameSettings.js';
import BedWarsSettings from './BedWarsSettings.js';
import BedWarsSlumber from "./BedWarsSlumber/BedWarsSlumber.js";
import BedWarsTwoFour from "./BedWarsTwoFour.js";
import { BedWarsPrestiges } from '../../../Utils/Constants.js';
class BedWars extends BedWarsMode {
    experience;
    level;
    prestige;
    activeBedDestroy;
    activeDeathCry;
    activeGlyph;
    activeIslandTopper;
    activeKillEffect;
    activeKillMessages;
    activeNPCSkin;
    activeProjectileTrail;
    activeSprays;
    activeVictoryDance;
    activeWoodType;
    activeStartingWeapon;
    tokens;
    firstJoin7;
    glyphStorage;
    packages;
    quickbuyPrivacy;
    seenBetaMenu;
    selectedUltimate;
    shopSort;
    shopSortEnableOwnedFirst;
    spookyOpenAch;
    sprayGlyphField;
    sprayStorage;
    understandsResourceBank;
    understandsStreaks;
    updateBook;
    boxes;
    favorites;
    figurines;
    privateGameSettings;
    settings;
    eightOne;
    eightTwo;
    fourThree;
    fourFour;
    twoFour;
    castle;
    slumber;
    constructor(data) {
        super(data);
        this.experience = data?.Experience || 0;
        this.level = BedWars.getLevel(this.experience);
        this.prestige = BedWars.getPrestige(this.level);
        this.activeBedDestroy = data?.activeBedDestroy || 'UNKNOWN';
        this.activeDeathCry = data?.activeDeathCry || 'UNKNOWN';
        this.activeGlyph = data?.activeGlyph || 'UNKNOWN';
        this.activeIslandTopper = data?.activeIslandTopper || 'UNKNOWN';
        this.activeKillEffect = data?.activeKillEffect || 'UNKNOWN';
        this.activeKillMessages = data?.activeKillMessages || 'UNKNOWN';
        this.activeNPCSkin = data?.activeNPCSkin || 'UNKNOWN';
        this.activeProjectileTrail = data?.activeProjectileTrail || 'UNKNOWN';
        this.activeSprays = data?.activeSprays || 'UNKNOWN';
        this.activeVictoryDance = data?.activeVictoryDance || 'UNKNOWN';
        this.activeWoodType = data?.activeWoodType || 'UNKNOWN';
        this.activeStartingWeapon = data?.active_starting_weapon || 'UNKNOWN';
        this.tokens = data?.tokens || data?.coins || 0;
        this.firstJoin7 = data?.first_join_7 || false;
        this.glyphStorage = (data?.glyph_storage_new || '').split(',');
        this.packages = data?.packages || [];
        this.quickbuyPrivacy = data?.quickbuy_privacy || 'NONE';
        this.seenBetaMenu = data?.seen_beta_menu || false;
        this.selectedUltimate = data?.selected_ultimate || 'UNKNOWN';
        this.shopSort = data?.shop_sort || 'UNKNOWN';
        this.shopSortEnableOwnedFirst = data?.shop_sort_enable_owned_first || false;
        this.spookyOpenAch = data?.spooky_open_ach || 0;
        this.sprayGlyphField = (data?.spray_glyph_field || '').split(',');
        this.sprayStorage = (data?.spray_storage_new || '').split(',');
        this.understandsResourceBank = data?.understands_resource_bank || false;
        this.understandsStreaks = data?.understands_streaks || false;
        this.updateBook = data?.updatebook_bedwars || 'UNKNOWN';
        this.boxes = new BedWarsBoxes(data);
        this.favorites = new BedWarsFavorites(data);
        this.figurines = new BedWarsFigurines(data?.figurines || {});
        this.privateGameSettings = new BedWarsPrivateGameSettings(data?.privategames || {});
        this.settings = new BedWarsSettings(data?.settings || {});
        this.eightOne = new BedWarsEightOne(data);
        this.eightTwo = new BedWarsEightTwo(data);
        this.fourThree = new BedWarsFourThree(data);
        this.fourFour = new BedWarsFourFour(data);
        this.twoFour = new BedWarsTwoFour(data);
        this.castle = new BedWarsMode(data, 'castle');
        this.slumber = new BedWarsSlumber(data?.slumber || {});
    }
    static getPrestige(level) {
        return ((BedWarsPrestiges.slice()
            .reverse()
            .find((t) => level >= t.requirement) || BedWarsPrestiges[0])?.prestige || 'Stone');
    }
    static getLevel(xp) {
        let level = Math.floor(xp / 487000) * 100;
        xp = xp % 487000;
        if (xp < 500)
            return level + xp / 500;
        level++;
        if (xp < 1500)
            return level + (xp - 500) / 1000;
        level++;
        if (xp < 3500)
            return level + (xp - 1500) / 2000;
        level++;
        if (xp < 7000)
            return level + (xp - 3500) / 3500;
        level++;
        xp -= 7000;
        return level + xp / 5000;
    }
}
export default BedWars;
//# sourceMappingURL=BedWars.js.map