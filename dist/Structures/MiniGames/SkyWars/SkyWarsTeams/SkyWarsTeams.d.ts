import SkyWarsMode from '../SkyWarsMode/SkyWarsMode.ts';
import SkyWarsModePerk from '../SkyWarsMode/SkyWarsModePerk.ts';
import SkyWarsTeamsKits from './SkyWarsTeamsKits/SkyWarsTeamsKits.ts';
declare class SkyWarsTeams extends SkyWarsMode {
    normal: SkyWarsMode;
    insane: SkyWarsMode;
    kits: SkyWarsTeamsKits;
    instantSmelting: SkyWarsModePerk;
    enderMastery: SkyWarsModePerk;
    resistanceBoost: SkyWarsModePerk;
    miningExpertise: SkyWarsModePerk;
    juggernaut: SkyWarsModePerk;
    blazingArrows: SkyWarsModePerk;
    arrowRecovery: SkyWarsModePerk;
    speedBoost: SkyWarsModePerk;
    fat: SkyWarsModePerk;
    nourishment: SkyWarsModePerk;
    knowledge: SkyWarsModePerk;
    savior: SkyWarsModePerk;
    marksmanship: SkyWarsModePerk;
    bridger: SkyWarsModePerk;
    luckyCharm: SkyWarsModePerk;
    necromancer: SkyWarsModePerk;
    blackMagic: SkyWarsModePerk;
    environmentalExpert: SkyWarsModePerk;
    robbery: SkyWarsModePerk;
    frost: SkyWarsModePerk;
    annoyOMite: SkyWarsModePerk;
    bulldozer: SkyWarsModePerk;
    barbarian: SkyWarsModePerk;
    constructor(data: Record<string, any>);
}
export default SkyWarsTeams;
//# sourceMappingURL=SkyWarsTeams.d.ts.map