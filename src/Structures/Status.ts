import Game from './Game.js';

class Status {
  online: boolean;
  game: Game | null;
  mode: string | null;
  map: string | null;
  constructor(data: Record<string, any>) {
    this.online = data?.online || false;
    this.game = data.gameType ? new Game(data.gameType) : null;
    this.mode = data?.mode || null;
    this.map = data?.map || null;
  }

  toString(): 'Online' | 'Offline' {
    return this.online ? 'Online' : 'Offline';
  }
}

export default Status;
