import SeasonBingoTier from './SeasonBingoTier.js';

class SeasonBingo {
  easy: SeasonBingoTier | null;
  medium: SeasonBingoTier | null;
  hard: SeasonBingoTier | null;
  constructor(data: Record<string, any>) {
    this.easy = data.easy ? new SeasonBingoTier(data.easy) : null;
    this.medium = data.medium ? new SeasonBingoTier(data.medium) : null;
    this.hard = data.hard ? new SeasonBingoTier(data.hard) : null;
  }
}

export default SeasonBingo;
