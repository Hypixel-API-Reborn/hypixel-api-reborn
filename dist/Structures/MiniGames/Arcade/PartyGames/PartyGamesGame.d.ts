import type { ArcadePartyGamesGame } from '../../../../Types/Player.js';
declare class PartyGamesGame {
    bestScore: number;
    bestTime: number;
    kills: number;
    roundWins: number;
    totalScore: number;
    constructor(data: Record<string, any>, game: ArcadePartyGamesGame);
}
export default PartyGamesGame;
//# sourceMappingURL=PartyGamesGame.d.ts.map