import ArenaBrawlMode from './ArenaBrawlMode.js';
import type { ArenaBrawlRunes } from '../../../Types/Player.js';
declare class ArenaBrawl {
    coins: number;
    coinsSpent: number;
    wins: number;
    keys: number;
    chests: number;
    rune: ArenaBrawlRunes | 'None';
    '1v1': ArenaBrawlMode;
    '2v2': ArenaBrawlMode;
    '4v4': ArenaBrawlMode;
    constructor(data: Record<string, any>);
}
export default ArenaBrawl;
//# sourceMappingURL=ArenaBrawl.d.ts.map