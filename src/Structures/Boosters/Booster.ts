import Game from '../Game.js';
import type RequestData from '../../Private/RequestData.ts';
import type { BoosterType } from '../../Types/Booster.js';

export function parseType(data: Record<string, any>): BoosterType {
  if (data.stacked === true) return 'STACKED';
  if (!data.stacked) return 'QUEUED';
  return 'ACTIVE';
}

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
    this.purchaser = data.purchaserUuid;
    this.amount = data.amount;
    this.originalLength = data.originalLength;
    this.remaining = data.length;
    this.activatedTimestamp = data.dateActivated;
    this.activated = new Date(data.dateActivated);
    this.game = new Game(data.gameType);
    this.isActive = Array.isArray(data.stacked);
    this.type = parseType(data);
    this.stackers = Array.isArray(data.stacked) ? Array.from(data.stacked) : [];
    this.expired = data.length < 0;
  }

  toString(): string {
    return `${this.purchaser}'s booster in ${this.game}`;
  }

  isRaw(): this is RequestData {
    return false;
  }
}

export default Booster;
