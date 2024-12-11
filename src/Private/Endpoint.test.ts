import Client from '../Client.js';
import Endpoint from './Endpoint.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Endpoint', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  const endpoint = new Endpoint(client);

  expect(endpoint).toBeDefined();
  expectTypeOf(endpoint).toEqualTypeOf<Endpoint>();

  expect(endpoint.client).toBeDefined();
  expectTypeOf(endpoint.client).toEqualTypeOf<Client>();

  expect(endpoint.execute).toBeDefined();
  expectTypeOf(endpoint.execute).toBeFunction();
  expect(() => endpoint.execute()).toThrowError(client.errors.NOT_IMPLEMENTED);

  client.destroy();
});
