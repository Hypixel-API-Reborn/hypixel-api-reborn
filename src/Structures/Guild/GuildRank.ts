class GuildRank {
  name: string;
  default: boolean;
  tag: string | null;
  createdAtTimestamp: number | null;
  createdAt: Date | null;
  priority: number;
  constructor(data: Record<string, any>) {
    this.name = data.name || '';
    this.default = data.default || false;
    this.tag = data.tag || null;
    this.createdAtTimestamp = data.created || data.createdAtTimestamp || null;
    this.createdAt = this.createdAtTimestamp ? new Date(this.createdAtTimestamp) : null;
    this.priority = data?.priority || 0;
  }

  toString(): string {
    return this.name;
  }
}

export default GuildRank;
