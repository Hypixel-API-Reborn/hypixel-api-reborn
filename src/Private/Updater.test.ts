import Client from '../Client.js';
import Errors from '../Errors.js';
import Updater from './Updater.js';
import packageJSON from '../../package.json' with { type: 'json' };
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test } from 'vitest';
import { vi } from 'vitest';

test('Updater', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.updater).toBeDefined();
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  expect(client.updater.currentVersion).toBe(packageJSON.version);
  expect(client.updater.latestVersion).toBe('0.0.0');

  expect(client.updater.checkForUpdates).toBeDefined();
  expectTypeOf(client.updater.checkForUpdates).toBeFunction();
  expect(() => client.updater.checkForUpdates()).not.toThrow();

  expect(client.updater.getLatestVersion).toBeDefined();
  expectTypeOf(client.updater.getLatestVersion).toBeFunction();
  expect(() => client.updater.getLatestVersion()).not.toThrow();

  expect(client.updater.compareVersions).toBeDefined();
  expectTypeOf(client.updater.compareVersions).toBeFunction();
  expect(() => client.updater.compareVersions('1.0.0', '1.0.0')).not.toThrow();
  expect(client.updater.compareVersions('1.0.0', '1.0.0')).toBe(false);
  expect(client.updater.compareVersions('1.0.0', '1.0.1')).toBe(true);
  expect(client.updater.compareVersions('1.0.1', '1.0.0')).toBe(false);
  expect(client.updater.compareVersions('meow', '1.0.0')).toBe(false);

  client.destroy();
});

test('Updater (getLatestVersion)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () => Promise.resolve({ 'dist-tags': { latest: '1.0.0' } })
  } as any);
  const data = await client.updater.getLatestVersion();
  expect(data).toBe('1.0.0');
  vi.restoreAllMocks();
  client.destroy();
});

test('Updater (getLatestVersion error)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 404,
    json: () => Promise.resolve({ 'dist-tags': { latest: '1.0.0' } })
  } as any);
  await expect(() => client.updater.getLatestVersion()).rejects.toThrowError(Errors.UPDATER_REQUEST_NOT_OK);
  vi.restoreAllMocks();
  client.destroy();
});

test('Updater (check version)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  const consoleLogSpy = vi.spyOn(console, 'log');
  client.updater.currentVersion = '1.0.0';
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    json: () => Promise.resolve({ 'dist-tags': { latest: packageJSON.version } })
  } as any);
  await client.updater.checkForUpdates();
  expect(consoleLogSpy).toHaveBeenCalledWith(
    `New version of hypixel-api-reborn is available! Current version: 1.0.0, Latest version: ${packageJSON.version}`
  );
  vi.restoreAllMocks();
  client.destroy();
});
