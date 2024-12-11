import ArenaBrawlMode from './ArenaBrawlMode.js';
import type { ArenaBrawlRunes } from '../../../Types/Player.js';

class ArenaBrawl {
  coins: number;
  coinsSpent: number;
  wins: number;
  keys: number;
  chests: number;
  rune: ArenaBrawlRunes | 'None';
  '1v1': ArenaBrawlMode;
  '2v2': ArenaBrawlMode;
  '4v4': ArenaBrawlMode;
  constructor(data: Record<string, any>) {
    this.coins = data?.coins || data?.tokens || 0;
    this.coinsSpent = data?.coins_spent || 0;
    this.wins = data?.wins || 0;
    this.keys = data?.keys || 0;
    this.chests = data?.magical_chest || 0;
    this.rune = data?.active_rune || 'None';
    this['1v1'] = new ArenaBrawlMode(data, '1v1');
    this['2v2'] = new ArenaBrawlMode(data, '2v2');
    this['4v4'] = new ArenaBrawlMode(data, '4v4');
  }
}

export default ArenaBrawl;
