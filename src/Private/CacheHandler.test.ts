import CacheHandler from './CacheHandler.js';
import Client from '../Client.js';
import NodeCache from 'node-cache';
import { expect, expectTypeOf, test } from 'vitest';

test('CacheHandler', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.cacheHandler).toBeDefined();
  expectTypeOf(client.cacheHandler).toEqualTypeOf<CacheHandler>();

  expect(client.cacheHandler.cache).toBeDefined();
  expectTypeOf(client.cacheHandler.cache).toEqualTypeOf<NodeCache>();

  expect(client.cacheHandler.set).toBeDefined();
  expectTypeOf(client.cacheHandler.set).toBeFunction();
  expect(() => client.cacheHandler.set('test', 'value')).not.toThrow();

  expect(client.cacheHandler.get).toBeDefined();
  expectTypeOf(client.cacheHandler.get).toBeFunction();
  expect(() => client.cacheHandler.has('test')).not.toThrow();
  expect(client.cacheHandler.has('test')).toBe(true);

  expect(client.cacheHandler.get).toBeDefined();
  expectTypeOf(client.cacheHandler.get).toBeFunction();
  expect(() => client.cacheHandler.get('test')).not.toThrow();
  expect(client.cacheHandler.get('test')).toBe('value');

  expect(client.cacheHandler.keys).toBeDefined();
  expectTypeOf(client.cacheHandler.keys).toBeFunction();
  expect(() => client.cacheHandler.keys()).not.toThrow();
  expect(client.cacheHandler.keys()).toEqual(['test']);
  expectTypeOf(client.cacheHandler.keys()).toEqualTypeOf<string[]>();

  expect(client.cacheHandler.size).toBeDefined();
  expectTypeOf(client.cacheHandler.size).toBeFunction();
  expect(() => client.cacheHandler.size()).not.toThrow();
  expect(client.cacheHandler.size()).toBe(1);
  expectTypeOf(client.cacheHandler.size()).toEqualTypeOf<number>();

  expect(client.cacheHandler.clear).toBeDefined();
  expectTypeOf(client.cacheHandler.clear).toBeFunction();
  expect(() => client.cacheHandler.clear()).not.toThrow();
  expect(client.cacheHandler.size()).toBe(0);

  client.destroy();
});
