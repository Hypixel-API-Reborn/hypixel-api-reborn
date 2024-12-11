import CacheHandler from './Private/CacheHandler.js';
import Client from './Client.js';
import Errors from './Errors.js';
import RequestHandler from './Private/RequestHandler.js';
import Updater from './Private/Updater.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { ClientOptions } from './Types/Client.js';
const errors = new Errors();

test('Client (No Key)', () => {
  expect(() => new Client('')).toThrowError(errors.NO_API_KEY);
});

test('Client (No Options)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expect(client).toBeInstanceOf(Client);
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.key).toBe(process.env.HYPIXEL_KEY ?? '');
  expectTypeOf(client.key).toBeString();

  expect(client.options).toBeDefined();
  expectTypeOf(client.options).toEqualTypeOf<ClientOptions>();

  expect(client.options.cache).toBeDefined();
  expect(client.options.cache).toBe(true);
  expect(client.options.cache).toBeTruthy();

  expect(client.options.cacheTime).toBeDefined();
  expectTypeOf(client.options.cacheTime).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheTime).toBe(300);

  expect(client.options.cacheMaxKeys).toBeDefined();
  expectTypeOf(client.options.cacheMaxKeys).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheMaxKeys).toBe(-1);

  expect(client.options.cacheCheckPeriod).toBeDefined();
  expectTypeOf(client.options.cacheCheckPeriod).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheCheckPeriod).toBe(180);

  expect(client.options.rateLimit).toBeDefined();
  expectTypeOf(client.options.rateLimit).toEqualTypeOf<'AUTO' | 'NONE' | undefined>();
  expect(client.options.rateLimit).toBe('AUTO');

  expect(client.options.silent).toBeDefined();
  expectTypeOf(client.options.silent).toEqualTypeOf<boolean | undefined>();
  expect(client.options.silent).toBe(false);
  expect(client.options.silent).toBeFalsy();

  expect(client.options.checkForUpdates).toBeDefined();
  expect(client.options.checkForUpdates).toBeTruthy();
  expect(client.options.checkForUpdates).toBe(true);

  expect(client.options.checkForUpdatesInterval).toBeDefined();
  expectTypeOf(client.options.checkForUpdatesInterval).toEqualTypeOf<number | undefined>();
  expect(client.options.checkForUpdatesInterval).toBe(60);

  expect(client.requestHandler).toBeDefined();
  expect(client.requestHandler).toBeInstanceOf(RequestHandler);
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.cacheHandler).toBeDefined();
  expect(client.cacheHandler).toBeInstanceOf(CacheHandler);
  expectTypeOf(client.cacheHandler).toEqualTypeOf<CacheHandler>();

  expect(client.updater).toBeDefined();
  expect(client.updater).toBeInstanceOf(Updater);
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  expect(client.errors).toBeDefined();
  expect(client.errors).toBeInstanceOf(Errors);
  expectTypeOf(client.errors).toEqualTypeOf<Errors>();

  client.destroy();
});

test('Client (Options)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', {
    cache: false,
    cacheTime: 600,
    cacheMaxKeys: 100,
    cacheCheckPeriod: 300,
    rateLimit: 'NONE',
    silent: true,
    checkForUpdates: false,
    checkForUpdatesInterval: 120
  });
  expect(client).toBeDefined();
  expect(client).toBeInstanceOf(Client);
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.key).toBe(process.env.HYPIXEL_KEY ?? '');
  expectTypeOf(client.key).toBeString();

  expect(client.options).toBeDefined();
  expectTypeOf(client.options).toEqualTypeOf<ClientOptions>();

  expect(client.options.cache).toBeDefined();
  expect(client.options.cache).toBe(false);
  expect(client.options.cache).toBeFalsy();

  expect(client.options.cacheTime).toBeDefined();
  expectTypeOf(client.options.cacheTime).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheTime).toBe(600);

  expect(client.options.cacheMaxKeys).toBeDefined();
  expectTypeOf(client.options.cacheMaxKeys).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheMaxKeys).toBe(100);

  expect(client.options.cacheCheckPeriod).toBeDefined();
  expectTypeOf(client.options.cacheCheckPeriod).toEqualTypeOf<number | undefined>();
  expect(client.options.cacheCheckPeriod).toBe(300);

  expect(client.options.rateLimit).toBeDefined();
  expectTypeOf(client.options.rateLimit).toEqualTypeOf<'AUTO' | 'NONE' | undefined>();
  expect(client.options.rateLimit).toBe('NONE');

  expect(client.options.silent).toBeDefined();
  expectTypeOf(client.options.silent).toEqualTypeOf<boolean | undefined>();
  expect(client.options.silent).toBe(true);
  expect(client.options.silent).toBeTruthy();

  expect(client.options.checkForUpdates).toBeDefined();
  expect(client.options.checkForUpdates).toBeFalsy();
  expect(client.options.checkForUpdates).toBe(false);

  expect(client.options.checkForUpdatesInterval).toBeDefined();
  expectTypeOf(client.options.checkForUpdatesInterval).toEqualTypeOf<number | undefined>();
  expect(client.options.checkForUpdatesInterval).toBe(120);

  expect(client.requestHandler).toBeDefined();
  expect(client.requestHandler).toBeInstanceOf(RequestHandler);
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.cacheHandler).toBeDefined();
  expect(client.cacheHandler).toBeInstanceOf(CacheHandler);
  expectTypeOf(client.cacheHandler).toEqualTypeOf<CacheHandler>();

  expect(client.updater).toBeDefined();
  expect(client.updater).toBeInstanceOf(Updater);
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  expect(client.errors).toBeDefined();
  expect(client.errors).toBeInstanceOf(Errors);
  expectTypeOf(client.errors).toEqualTypeOf<Errors>();

  client.destroy();
});
