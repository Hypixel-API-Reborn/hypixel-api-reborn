class SkyblockElectionCandidatePerk {
  name: string;
  description: string;
  minister: boolean;
  constructor(data: Record<string, any>) {
    this.name = data?.name || 'UNKNOWN';
    this.description = data?.description || 'UNKNOWN';
    this.minister = data?.minister || false;
  }
}

export default SkyblockElectionCandidatePerk;
