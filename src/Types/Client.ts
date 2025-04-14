/* v8 ignore next 10000 */

export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  rateLimit?: 'AUTO' | 'NONE';
  silent?: boolean;
  checkForUpdates?: boolean;
  checkForUpdatesInterval?: number;
}
