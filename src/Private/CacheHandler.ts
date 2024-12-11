import Client from '../Client.js';
import NodeCache from 'node-cache';

class CacheHandler {
  readonly client: Client;
  declare cache: NodeCache;
  constructor(client: Client) {
    this.client = client;
    this.cache = new NodeCache({
      stdTTL: this.client.options.cacheTime,
      maxKeys: this.client.options.cacheMaxKeys,
      checkperiod: this.client.options.cacheCheckPeriod
    });
  }

  set(key: string, value: any): any {
    return this.cache.set(key, value);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  get(key: string): any {
    return this.cache.get(key);
  }

  keys(): string[] {
    return this.cache.keys();
  }

  size(): number {
    return this.cache.keys().length;
  }

  clear(): void {
    this.cache.flushAll();
  }
}

export default CacheHandler;
