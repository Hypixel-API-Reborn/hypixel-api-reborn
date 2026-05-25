export const ClientRateLimitOptions = ['AUTO', 'NONE'] as const;
export type ClientRateLimitOption = (typeof ClientRateLimitOptions)[number];
export interface ClientOptions {
  cache?: boolean;
  cacheTime?: number;
  cacheMaxKeys?: number;
  cacheCheckPeriod?: number;
  rateLimit?: ClientRateLimitOption;
  silent?: boolean;
  checkForUpdates?: boolean;
  checkForUpdatesInterval?: number;
}
