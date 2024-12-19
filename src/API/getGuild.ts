import Client from '../Client.js';
import Endpoint from '../Private/Endpoint.js';
import Guild from '../Structures/Guild/Guild.js';
import RequestData from '../Private/RequestData.js';
import type { GuildFetchOptions } from '../Types/API.js';
import type { RequestOptions } from '../Types/Requests.js';

class getGuild extends Endpoint {
  override readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  override async execute(
    searchParameter: GuildFetchOptions,
    query: string,
    options?: RequestOptions
  ): Promise<Guild | null | RequestData> {
    if (!query) throw new Error(this.client.errors.NO_GUILD_QUERY);
    if ('id' === searchParameter && !this.client.functions.isGuildID(query)) {
      throw new Error(this.client.errors.INVALID_GUILD_ID);
    }
    const isPlayerQuery = 'player' === searchParameter;
    if (isPlayerQuery) query = await this.client.requestHandler.toUUID(query);
    if (!['id', 'name', 'player'].includes(searchParameter)) {
      throw new Error(this.client.errors.INVALID_GUILD_SEARCH_PARAMETER);
    }
    const res = await this.client.requestHandler.request(`/guild?${searchParameter}=${encodeURI(query)}`, options);
    if (res.options.raw) return res;
    if (!res.data.guild && 'player' !== searchParameter) {
      throw new Error(this.client.errors.GUILD_DOES_NOT_EXIST);
    }
    return res.data.guild ? new Guild(res.data.guild, isPlayerQuery ? query : undefined) : null;
  }
}

export default getGuild;
