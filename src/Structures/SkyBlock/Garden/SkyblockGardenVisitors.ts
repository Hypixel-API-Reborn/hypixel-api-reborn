class SkyblockGardenVisitors {
  visited: Record<string, number>;
  completed: Record<string, number>;
  totalCompleted: number;
  uniqueNpcsServed: number;
  constructor(data: Record<string, any>) {
    this.visited = data?.visits || {};
    this.completed = data?.completed || {};
    this.totalCompleted = data?.total_completed || 0;
    this.uniqueNpcsServed = data?.unique_npcs_served || 0;
  }
}

export default SkyblockGardenVisitors;
