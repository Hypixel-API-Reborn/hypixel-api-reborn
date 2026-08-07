import Client from '../Client.js';
import Errors from '../Errors.js';
import HypixelAPIRebornError from './HypixelAPIRebornError.js';
import RawRequestData from './RawRequestData.ts';
import type { MowojangProfile } from 'mowojang';
import type { RequestOptions } from '../Types/Requests.js';

class RequestHandler {
  private BASE_URL: string;
  constructor(private readonly client: Client) {
    this.client = client;
    this.BASE_URL = 'https://api.hypixel.net/v2';
  }

  setBaseURL(url: string = 'https://api.hypixel.net/v2'): this {
    if (!url.startsWith('http') || !url.includes('://')) throw new HypixelAPIRebornError(Errors.INVALID_BASE_URL);
    if (url.endsWith('/')) throw new HypixelAPIRebornError(Errors.INVALID_BASE_URL_SLASH);
    this.BASE_URL = url;
    return this;
  }

  getUserAgent() {
    return `Hypixel-API-Reborn/v${
      this.client.updater.currentVersion
    } (https://npmjs.com/package/hypixel-api-reborn github:Hypixel-API-Reborn/hypixel-api-reborn)`;
  }

  async request(endpoint: string, options?: RequestOptions): Promise<RawRequestData> {
    options = { noCache: options?.noCache ?? false, noCacheCheck: options?.noCacheCheck ?? false };
    if (!options.noCacheCheck && this.client.cacheHandler.has(endpoint)) {
      const data = this.client.cacheHandler.get(endpoint);
      data.cached = true;
      return data;
    }
    const res = await fetch(this.BASE_URL + endpoint, {
      headers: { 'API-Key': this.client.key, 'User-Agent': this.getUserAgent() }
    });
    if (res.status >= 500 && res.status < 528) {
      throw new HypixelAPIRebornError(
        Errors.ERROR_STATUSTEXT.replace(/{statustext}/, `Server Error : ${res.status} ${res.statusText}`)
      );
    }
    const parsedRes = (await res.json()) as Record<string, any>;
    if (res.status === 400) {
      throw new HypixelAPIRebornError(
        Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, parsedRes.cause || 'UNKNOWN')
      );
    }
    if (res.status === 403) throw new HypixelAPIRebornError(Errors.INVALID_API_KEY);
    if (res.status === 422) throw new HypixelAPIRebornError(Errors.UNEXPECTED_ERROR);
    if (
      res.status === 429 &&
      parsedRes.cause === 'You have already looked up this player too recently, please try again shortly'
    ) {
      throw new HypixelAPIRebornError(Errors.RECENT_REQUEST);
    }
    if (res.status === 429) throw new HypixelAPIRebornError(Errors.RATE_LIMIT_EXCEEDED);
    if (res.status !== 200) {
      throw new HypixelAPIRebornError(Errors.ERROR_STATUSTEXT.replace(/{statustext}/, res.statusText));
    }
    if (!parsedRes.success && !endpoint.startsWith('/housing')) {
      throw new HypixelAPIRebornError(Errors.SOMETHING_WENT_WRONG.replace(/{cause}/, res.statusText));
    }
    const requestData = new RawRequestData(parsedRes, res.headers, {
      status: res.status,
      options,
      url: endpoint,
      cached: false
    });
    if (options.noCache) return requestData;
    if (this.client.options.cache) {
      this.client.cacheHandler.set(endpoint, requestData);
    }
    return requestData;
  }

  async getProfile(input: string): Promise<MowojangProfile> {
    if (!input) throw new HypixelAPIRebornError(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
    if (typeof input !== 'string') throw new HypixelAPIRebornError(Errors.UUID_NICKNAME_MUST_BE_A_STRING);
    const profile = await this.client.mowojang.getProfile(input);
    if (profile.data === null) throw new HypixelAPIRebornError(Errors.PLAYER_DOES_NOT_EXIST);
    return profile.data;
  }

  async fetchExternalData(url: string): Promise<RawRequestData> {
    if (this.client.cacheHandler.has(url)) {
      const data = this.client.cacheHandler.get(url);
      data.cached = true;
      return data;
    }
    const res = await fetch(url, { headers: { 'User-Agent': this.getUserAgent() } });
    const parsedRes = await res.json();
    const requestData = new RawRequestData(parsedRes, res.headers, {
      status: res.status,
      options: { noCache: false },
      url,
      cached: false
    });
    if (this.client.options.cache) this.client.cacheHandler.set(url, requestData);
    return requestData;
  }
}

export default RequestHandler;
