import SkyWarsMegaKits from "./SkyWarsMegaKits.js";
import SkyWarsMode from "../SkyWarsMode/SkyWarsMode.js";
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.js';
class SkyWarsMega extends SkyWarsMode {
    doubles;
    doublesNormal;
    normal;
    kits;
    rusher;
    miningExpertise;
    enderMastery;
    blazingArrows;
    arrowRecovery;
    juggernaut;
    tank;
    nourishment;
    notoriety;
    instantSmelting;
    marksmanship;
    environmentalExpert;
    bridger;
    luckyCharm;
    blackMagic;
    necromancer;
    telekinesis;
    constructor(data) {
        super(data, 'mega');
        this.doubles = new SkyWarsMode(data, 'mega_doubles');
        this.doublesNormal = new SkyWarsMode(data, 'mega_doubles_normal');
        this.normal = new SkyWarsMode(data, 'mega_normal');
        this.kits = new SkyWarsMegaKits(data);
        this.rusher = new SkyWarsModePerk(data, 'rusher', 'mega');
        this.miningExpertise = new SkyWarsModePerk(data, 'mining_expertise', 'mega');
        this.enderMastery = new SkyWarsModePerk(data, 'ender_mastery', 'mega');
        this.blazingArrows = new SkyWarsModePerk(data, 'blazing_arrows', 'mega');
        this.arrowRecovery = new SkyWarsModePerk(data, 'arrow_recovery', 'mega');
        this.juggernaut = new SkyWarsModePerk(data, 'juggernaut', 'mega');
        this.tank = new SkyWarsModePerk(data, 'tank', 'mega');
        this.nourishment = new SkyWarsModePerk(data, 'nourishment', 'mega');
        this.notoriety = new SkyWarsModePerk(data, 'notoriety', 'mega');
        this.instantSmelting = new SkyWarsModePerk(data, 'instant_smelting', 'mega');
        this.marksmanship = new SkyWarsModePerk(data, 'marksmanship', 'mega');
        this.environmentalExpert = new SkyWarsModePerk(data, 'environmental_expert', 'mega');
        this.bridger = new SkyWarsModePerk(data, 'bridger', 'mega');
        this.luckyCharm = new SkyWarsModePerk(data, 'lucky_charm', 'mega');
        this.blackMagic = new SkyWarsModePerk(data, 'black_magic', 'mega');
        this.necromancer = new SkyWarsModePerk(data, 'necromancer', 'mega');
        this.telekinesis = new SkyWarsModePerk(data, 'telekinesis', 'mega');
    }
}
export default SkyWarsMega;
//# sourceMappingURL=SkyWarsMega.js.map