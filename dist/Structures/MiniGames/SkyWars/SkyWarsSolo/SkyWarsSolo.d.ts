import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.ts';
import SkyWarsSoloKits from './SkyWarsSoloKits/SkyWarsSoloKits.js';
declare class SkyWarsSolo extends SkyWarsMode {
    normal: SkyWarsMode;
    insane: SkyWarsMode;
    lab: SkyWarsMode;
    kits: SkyWarsSoloKits;
    enderMastery: SkyWarsModePerk;
    arrowRecovery: SkyWarsModePerk;
    miningExpertise: SkyWarsModePerk;
    blazingArrows: SkyWarsModePerk;
    instantSmelting: SkyWarsModePerk;
    resistanceBoost: SkyWarsModePerk;
    speedBoost: SkyWarsModePerk;
    bulldozer: SkyWarsModePerk;
    marksmanship: SkyWarsModePerk;
    juggernaut: SkyWarsModePerk;
    knowledge: SkyWarsModePerk;
    fat: SkyWarsModePerk;
    nourishment: SkyWarsModePerk;
    annoy: SkyWarsModePerk;
    revenge: SkyWarsModePerk;
    luckyCharm: SkyWarsModePerk;
    bridger: SkyWarsModePerk;
    environmentalExpert: SkyWarsModePerk;
    necromancer: SkyWarsModePerk;
    blackMagic: SkyWarsModePerk;
    robbery: SkyWarsModePerk;
    frost: SkyWarsModePerk;
    barbarian: SkyWarsModePerk;
    savior: SkyWarsModePerk;
    constructor(data: Record<string, any>);
}
export default SkyWarsSolo;
//# sourceMappingURL=SkyWarsSolo.d.ts.map