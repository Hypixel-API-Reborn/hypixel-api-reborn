import BaseSkyWarsMode from "../../SkyWarsMode/BaseSkyWarsMode.js";
class SkyWarsSoloKitsAdvanced {
    farmer;
    enchanter;
    hunter;
    knight;
    armorer;
    cannoneer;
    pyro;
    salmon;
    zookeeper;
    enderman;
    slime;
    pigRider;
    sloth;
    jester;
    guardian;
    engineer;
    magician;
    constructor(data) {
        this.farmer = new BaseSkyWarsMode(data, 'kit_advanced_solo_farmer');
        this.enchanter = new BaseSkyWarsMode(data, 'kit_advanced_solo_enchanter');
        this.hunter = new BaseSkyWarsMode(data, 'kit_advanced_solo_hunter');
        this.knight = new BaseSkyWarsMode(data, 'kit_advanced_solo_knight');
        this.armorer = new BaseSkyWarsMode(data, 'kit_advanced_solo_armorer');
        this.cannoneer = new BaseSkyWarsMode(data, 'kit_advanced_solo_cannoneer');
        this.pyro = new BaseSkyWarsMode(data, 'kit_advanced_solo_pyro');
        this.salmon = new BaseSkyWarsMode(data, 'kit_advanced_solo_salmon');
        this.zookeeper = new BaseSkyWarsMode(data, 'kit_advanced_solo_zookeeper');
        this.enderman = new BaseSkyWarsMode(data, 'kit_advanced_solo_enderman');
        this.slime = new BaseSkyWarsMode(data, 'kit_advanced_solo_slime');
        this.pigRider = new BaseSkyWarsMode(data, 'kit_advanced_solo_pig-rider');
        this.sloth = new BaseSkyWarsMode(data, 'kit_advanced_solo_sloth');
        this.jester = new BaseSkyWarsMode(data, 'kit_advanced_solo_jester');
        this.guardian = new BaseSkyWarsMode(data, 'kit_advanced_solo_guardian');
        this.engineer = new BaseSkyWarsMode(data, 'kit_advanced_solo_engineer');
        this.magician = new BaseSkyWarsMode(data, 'kit_advanced_solo_magician');
    }
}
export default SkyWarsSoloKitsAdvanced;
//# sourceMappingURL=SkyWarsSoloKitsAdvanced.js.map