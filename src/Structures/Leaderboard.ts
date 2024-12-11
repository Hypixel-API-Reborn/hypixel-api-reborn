class Leaderboard {
  path: string;
  prefix: string;
  title: string;
  location: string;
  count: number;
  leaders: string[];
  constructor(data: Record<string, any>) {
    this.path = data?.path || '';
    this.prefix = data?.prefix || '';
    this.title = data?.title || '';
    this.location = data?.location || '0,0,0';
    this.count = data?.count || 0;
    this.leaders = data?.leaders || [];
  }
}

export default Leaderboard;
