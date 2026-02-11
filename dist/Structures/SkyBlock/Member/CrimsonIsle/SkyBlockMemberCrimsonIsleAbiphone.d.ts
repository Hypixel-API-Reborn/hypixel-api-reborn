import type { AbiphoneContact, AbiphoneContactSort, CrimsonIsleRingtone, RawAbiphoneData } from '../../../../Types/SkyBlock.js';
declare class SkyBlockMemberCrimsonIsleAbiphone {
    contactData: Record<string, RawAbiphoneData>;
    activeContacts: AbiphoneContact[];
    ringtone: CrimsonIsleRingtone;
    sort: AbiphoneContactSort | 'UNKNOWN';
    games: Record<string, number>;
    operatorChip: Record<string, number>;
    trioContactAddons: number;
    hasUsedSiriusPersonalPhoneNumberItem: boolean;
    lastDyeCalledYear: number;
    constructor(data: Record<string, any>);
}
export default SkyBlockMemberCrimsonIsleAbiphone;
//# sourceMappingURL=SkyBlockMemberCrimsonIsleAbiphone.d.ts.map