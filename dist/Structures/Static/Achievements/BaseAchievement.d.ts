declare class BaseAchievement {
    codeName: string;
    name: string;
    description: string;
    secret: boolean;
    legacy: boolean;
    constructor(achievementName: string, data: Record<string, any>);
    toString(): string;
}
export default BaseAchievement;
//# sourceMappingURL=BaseAchievement.d.ts.map