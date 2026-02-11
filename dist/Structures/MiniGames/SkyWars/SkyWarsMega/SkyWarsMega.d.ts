import SkyWarsMegaKits from './SkyWarsMegaKits.ts';
import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.js';
declare class SkyWarsMega extends SkyWarsMode {
    doubles: SkyWarsMode;
    doublesNormal: SkyWarsMode;
    normal: SkyWarsMode;
    kits: SkyWarsMegaKits;
    rusher: SkyWarsModePerk;
    miningExpertise: SkyWarsModePerk;
    enderMastery: SkyWarsModePerk;
    blazingArrows: SkyWarsModePerk;
    arrowRecovery: SkyWarsModePerk;
    juggernaut: SkyWarsModePerk;
    tank: SkyWarsModePerk;
    nourishment: SkyWarsModePerk;
    notoriety: SkyWarsModePerk;
    instantSmelting: SkyWarsModePerk;
    marksmanship: SkyWarsModePerk;
    environmentalExpert: SkyWarsModePerk;
    bridger: SkyWarsModePerk;
    luckyCharm: SkyWarsModePerk;
    blackMagic: SkyWarsModePerk;
    necromancer: SkyWarsModePerk;
    telekinesis: SkyWarsModePerk;
    constructor(data: Record<string, any>);
}
export default SkyWarsMega;
//# sourceMappingURL=SkyWarsMega.d.ts.map