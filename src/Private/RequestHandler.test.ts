import Client from '../Client.js';
import Errors from '../Errors.js';
import RequestHandler from './RequestHandler.js';
import { MowojangProfile } from 'mowojang';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';

test('RequestHandler', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler).toBeDefined();
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.requestHandler.getProfile).toBeDefined();
  expectTypeOf(client.requestHandler.getProfile).toBeFunction();
  const data = await client.requestHandler.getProfile('pixelic');
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<MowojangProfile>();
  expect(data.UUID).toBe('14727faefbdc4aff848cd2713eb9939e');
  expect(data.UUID).toBeDefined();
  expectTypeOf(data.UUID).toEqualTypeOf<string>();
  expect(data.username).toBe('Pixelic');
  expect(data.username).toBeDefined();
  expectTypeOf(data.username).toEqualTypeOf<string>();
  client.destroy();
});

test('RequestHandler (Invalid API Key)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 403,
    json: () => Promise.resolve({ success: false })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(Errors.INVALID_API_KEY);
  vi.restoreAllMocks();
  client.destroy();
});

test('RequestHandler (400 Bad Request)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 400,
    json: () => Promise.resolve({ success: false, cause: 'meow' })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(
    Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, 'meow')
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('RequestHandler (400 Bad Request No Cause)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 400,
    json: () => Promise.resolve({ success: false })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(
    Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, 'UNKNOWN')
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('RequestHandler (Unprocessable Entity)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 422,
    json: () => Promise.resolve({ success: false })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(Errors.UNEXPECTED_ERROR);
  vi.restoreAllMocks();
  client.destroy();
});

test('RequestHandler (Rate Limited)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 429,
    json: () => Promise.resolve({ success: false })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(Errors.RATE_LIMIT_EXCEEDED);
  vi.restoreAllMocks();
  client.destroy();
});
