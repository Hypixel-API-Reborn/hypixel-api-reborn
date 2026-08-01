import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import Player from '../Structures/Player/Player.js';
import RequestData from '../Private/RequestData.js';
import type { PlayerRequestOptions } from '../Types/API.js';

class getPlayer extends Endpoint {
  override async execute(query: string, options?: PlayerRequestOptions): Promise<RequestData<Player>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_NICKNAME_UUID);
    query = await this.client.requestHandler.toUUID(query);
    const res = await this.client.requestHandler.request(`/player?uuid=${query}`, options);
    if (query && !res.rawData.player) throw new HypixelAPIRebornError(Errors.PLAYER_HAS_NEVER_LOGGED);
    return new RequestData<Player>(
      new Player(res.rawData.player, {
        guild: options?.guild ? (await this.client.getGuild('player', query)).parsed : null,
        houses: options?.houses ? (await this.client.getPlayerHouses(query)).parsed : null,
        recentGames: options?.recentGames ? (await this.client.getRecentGames(query)).parsed : null
      }),
      res
    );
  }
}

export default getPlayer;
