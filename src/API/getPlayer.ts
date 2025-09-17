import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.ts';
import Guild from '../Structures/Guild/Guild.js';
import House from '../Structures/House.js';
import Player from '../Structures/Player/Player.js';
import RecentGame from '../Structures/RecentGame.js';
import RequestData from '../Private/RequestData.js';
import type { PlayerRequestOptions } from '../Types/API.js';

class getPlayer extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(query: string, options?: PlayerRequestOptions): Promise<Player | RequestData> {
    if (!query) throw new Error(Errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/player?uuid=${query}`, options);
    if (res.options.raw) return res;
    if (query && !res.data.player) throw new Error(Errors.PLAYER_HAS_NEVER_LOGGED);
    return new Player(res.data.player, {
      guild: options?.guild ? ((await this.client.getGuild('player', query)) as Guild) : null,
      houses: options?.houses ? ((await this.client.getPlayerHouses(query)) as House[]) : null,
      recentGames: options?.recentGames ? ((await this.client.getRecentGames(query)) as RecentGame[]) : null
    });
  }
}

export default getPlayer;
