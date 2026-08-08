import type { DuelsTitleName, DuelsTitleParsed } from '../Types/Player.js';
export declare function Romanize(num: number | string): string;
export declare function ParseModeBefore(mode?: string): string;
export declare function ParseModeAfter(mode?: string): string;
export declare function ParseModeBeforeAfter(mode?: string): string;
export declare const DuelsDivisionsRequirements: Record<DuelsTitleName, {
    req: number;
    step: number;
    max: number;
}>;
export declare function getDuelsTitle(score: number, isAllModes?: boolean): DuelsTitleParsed;
//# sourceMappingURL=stringUtils.d.ts.map