class DropperMap {
  bestTime: number;
  completions: number;
  constructor(data: Record<string, any>) {
    this.bestTime = data?.best_time || 0;
    this.completions = data?.completions || 0;
  }
}

export default DropperMap;
