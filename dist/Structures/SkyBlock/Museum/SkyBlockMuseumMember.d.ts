import SkyBlockMuseumItem from './SkyBlockMuseumItem.js';
declare class SkyBlockMuseumMember {
    value: number;
    appraisal: boolean;
    rawItems: Record<string, any>;
    getItems: () => Promise<SkyBlockMuseumItem[]>;
    constructor(data: Record<string, any>);
}
export default SkyBlockMuseumMember;
//# sourceMappingURL=SkyBlockMuseumMember.d.ts.map