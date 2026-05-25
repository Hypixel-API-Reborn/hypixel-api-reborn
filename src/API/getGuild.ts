import Endpoint from '../Private/Endpoint.js';
import Errors from '../Errors.js';
import Guild from '../Structures/Guild/Guild.js';
import HypixelAPIRebornError from '../Private/HypixelAPIRebornError.ts';
import RequestData from '../Private/RequestData.js';
import type { GuildFetchOption } from '../Types/API.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGuild extends Endpoint {
  override async execute(
    searchParameter: GuildFetchOption,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
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
    if (res.options.raw) return res;
    if (!res.data.guild && searchParameter !== 'player') {
      throw new HypixelAPIRebornError(Errors.GUILD_DOES_NOT_EXIST);
    }
    return res.data.guild ? new Guild(res.data.guild, isPlayerQuery ? query : undefined) : null;
  }
}

export default getGuild;
