import Client from '../Client.js';
import RateLimit from './RateLimit.js';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';

test('RateLimit (None)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { rateLimit: 'NONE' });
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.rateLimit).toBeDefined();
  expectTypeOf(client.rateLimit).toEqualTypeOf<RateLimit>();

  expect(client.rateLimit.requests).toBe(0);
  expectTypeOf(client.rateLimit.requests).toEqualTypeOf<number>();
  expect(client.rateLimit.limit).toBe(0);
  expectTypeOf(client.rateLimit.limit).toEqualTypeOf<number>();
  expect(client.rateLimit.initialized).toBe(false);
  expectTypeOf(client.rateLimit.initialized).toEqualTypeOf<boolean>();

  expect(client.rateLimit.sync).toBeDefined();
  expectTypeOf(client.rateLimit.sync).toBeFunction();
  expect(() => client.rateLimit.sync()).not.toThrow();

  expect(client.rateLimit.reset).toBeDefined();
  expectTypeOf(client.rateLimit.reset).toBeFunction();
  expect(() => client.rateLimit.reset()).not.toThrow();

  expect(client.rateLimit.initialize).toBeDefined();
  expectTypeOf(client.rateLimit.initialize).toBeFunction();
  expect(() => client.rateLimit.initialize()).not.toThrow();

  client.destroy();
});

test('RateLimit (Auto)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { rateLimit: 'NONE' });
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.rateLimit).toBeDefined();
  expectTypeOf(client.rateLimit).toEqualTypeOf<RateLimit>();
  await client.rateLimit.initialize();

  expect(client.rateLimit.requests).greaterThan(0);
  expectTypeOf(client.rateLimit.requests).toEqualTypeOf<number>();
  expect(client.rateLimit.limit).toBe(300);
  expectTypeOf(client.rateLimit.limit).toEqualTypeOf<number>();
  expect(client.rateLimit.initialized).toBe(true);
  expectTypeOf(client.rateLimit.initialized).toEqualTypeOf<boolean>();

  expect(client.rateLimit.sync).toBeDefined();
  expectTypeOf(client.rateLimit.sync).toBeFunction();
  expect(() => client.rateLimit.sync()).not.toThrow();

  expect(client.rateLimit.reset).toBeDefined();
  expectTypeOf(client.rateLimit.reset).toBeFunction();
  expect(() => client.rateLimit.reset()).not.toThrow();

  expect(client.rateLimit.initialize).toBeDefined();
  expectTypeOf(client.rateLimit.initialize).toBeFunction();
  expect(() => client.rateLimit.initialize()).not.toThrow();

  client.destroy();
});

test('Ratelimit (Sync)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  client.updater.currentVersion = '1.0.0';
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    headers: new Headers({ 'ratelimit-limit': '30', 'ratelimit-remaining': '27' })
  } as any);
  expect(() => client.rateLimit.sync()).not.toThrowError();
  await client.rateLimit.sync();
  expect(client.rateLimit.requests).toBe(3);
  expect(client.rateLimit.limit).toBe(30);
  vi.restoreAllMocks();
  client.destroy();
});

test('Ratelimit (Bad Sync Data)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  client.updater.currentVersion = '1.0.0';
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    headers: new Headers({ hello: '100' })
  } as any);
  expect(() => client.rateLimit.sync()).rejects.toThrowError(client.errors.RATE_LIMIT_INIT_ERROR);
  vi.restoreAllMocks();
  client.destroy();
});
