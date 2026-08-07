import type { Client as MowojangClient } from 'mowojang';

export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  silent?: boolean;
  checkForUpdates?: boolean;
  checkForUpdatesInterval?: number;
  mowojang?: MowojangClient;
}
