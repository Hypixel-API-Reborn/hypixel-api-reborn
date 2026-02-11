import type { SkyWarsModeId, SkyWarsPerkId } from '../../../../Types/Player.ts';
declare class SkyWarsModePerk {
    level: number;
    enabled: boolean;
    constructor(data: Record<string, any>, perk: SkyWarsPerkId, mode: SkyWarsModeId);
}
export default SkyWarsModePerk;
//# sourceMappingURL=SkyWarsModePerk.d.ts.map