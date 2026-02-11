declare class GuildRank {
    name: string;
    default: boolean;
    tag: string | null;
    createdAtTimestamp: number | null;
    createdAt: Date | null;
    priority: number;
    constructor(data: Record<string, any>);
    toString(): string;
}
export default GuildRank;
//# sourceMappingURL=GuildRank.d.ts.map