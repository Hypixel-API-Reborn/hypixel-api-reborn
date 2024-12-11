class DropperMap {
  bestTime: number;
  completions: number;
  constructor(data: Record<string, any>, mapName: string) {
    this.bestTime = data?.[mapName]?.best_time || 0;
    this.completions = data?.[mapName]?.completions || 0;
  }
}

export default DropperMap;
