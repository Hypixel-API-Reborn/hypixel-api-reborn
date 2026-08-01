import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import Guild from '../Structures/Guild/Guild.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.js';
import RequestData from '../Private/RequestData.ts';
import type { GuildFetchOption } from '../Types/API.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGuild extends Endpoint {
  override async execute(
    searchParameter: GuildFetchOption,
    query: string,
    options?: RequestOptions
  ): Promise<RequestData<Guild | null>> {
    if (!query) throw new HypixelAPIRebornError(Errors.NO_GUILD_QUERY);
    if (searchParameter === 'id' && !this.client.functions.isGuildID(query)) {
      throw new HypixelAPIRebornError(Errors.INVALID_GUILD_ID);
    }
    const isPlayerQuery = searchParameter === 'player';
    if (isPlayerQuery) query = await this.client.requestHandler.toUUID(query);
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new HypixelAPIRebornError(Errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
    const res = await this.client.requestHandler.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (!res.rawData.guild && searchParameter !== 'player') {
      throw new HypixelAPIRebornError(Errors.GUILD_DOES_NOT_EXIST);
    }
    return new RequestData<Guild | null>(
      res.rawData.guild ? new Guild(res.rawData.guild, isPlayerQuery ? query : undefined) : null,
      res
    );
  }
}

export default getGuild;
