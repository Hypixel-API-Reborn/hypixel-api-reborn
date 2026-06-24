import SkyBlockInventoryItem from './SkyBlockInventoryItem.ts';
declare class RawSkyBlockInventoryItem {
    base64: string | null;
    constructor(data: Record<string, any>);
    decodeData(): Promise<SkyBlockInventoryItem | null>;
}
export default RawSkyBlockInventoryItem;
//# sourceMappingURL=RawSkyBlockInventoryItem.d.ts.map