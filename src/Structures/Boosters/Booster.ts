import Game from '../Game.js';
import type RequestData from '../../Private/RequestData.js';
import type { BoosterType } from '../../Types/Booster.js';

class Booster {
  purchaser: string;
  amount: number;
  originalLength: number;
  remaining: number;
  activatedTimestamp: number;
  activated: Date;
  game: Game;
  isActive: boolean;
  type: BoosterType;
  stackers: string[];
  expired: boolean;
  constructor(data: Record<string, any>) {
    this.purchaser = data.purchaserUuid || 'UNKNOWN';
    this.amount = data.amount || 0;
    this.originalLength = data.originalLength || 0;
    this.remaining = data.length || 0;
    this.activatedTimestamp = data.dateActivated || 0;
    this.activated = new Date(data.dateActivated);
    this.game = new Game(data.gameType);
    this.isActive = Array.isArray(data.stacked);
    this.type = Booster.parseType(data);
    this.stackers = Array.isArray(data.stacked) ? Array.from(data.stacked) : [];
    this.expired = data.length < 0;
  }

  toString(): string {
    return `${this.purchaser}'s booster in ${this.game}`;
  }

  isRaw(): this is RequestData {
    return false;
  }

  static parseType(data: Record<string, any>): BoosterType {
    if (data.stacked === true) return 'STACKED';
    if (data.stacked === false) return 'QUEUED';
    return 'ACTIVE';
  }
}

export default Booster;
