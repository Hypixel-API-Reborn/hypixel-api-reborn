import Perk from './Perk.js';

class Candidate {
  name: string;
  keyBenefit: string;
  perk: Perk | null;
  perks: Perk[] | null;
  isMayor: boolean;
  isMinister: boolean;
  votesReceived: number;
  constructor(data: Record<string, any>, isMayor: boolean = false, isMinister = false) {
    this.name = data.name;
    this.keyBenefit = data.key;
    this.perk = data.perk?.[0] ? new Perk(data.perk[0]) : null;
    this.perks = data.perks ? data.perks.map((x: any) => new Perk(x)) : null;
    this.isMayor = isMayor || false;
    this.isMinister = isMinister || false;
    this.votesReceived = parseInt(data.votes, 10);
  }

  toString(): string {
    return this.name;
  }
}

export default Candidate;
