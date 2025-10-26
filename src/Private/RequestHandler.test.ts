import Client from '../Client.js';
import Errors from '../Errors.ts';
import RequestHandler from './RequestHandler.js';
import { defaultRequestData } from '../../vitest.setup.js';
import { expect, expectTypeOf, test, vi } from 'vitest';

test('RequestHandler', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler).toBeDefined();
  expectTypeOf(client.requestHandler).toEqualTypeOf<RequestHandler>();

  expect(client.requestHandler.toUUID).toBeDefined();
  expectTypeOf(client.requestHandler.toUUID).toBeFunction();
  const data = await client.requestHandler.toUUID('pixelic');
  expect(data).toBe('14727faefbdc4aff848cd2713eb9939e');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.requestHandler.toUUID()).rejects.toThrowError(Errors.NO_NICKNAME_UUID);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  await expect(() => client.requestHandler.toUUID(-1)).rejects.toThrowError(Errors.UUID_NICKNAME_MUST_BE_A_STRING);

  client.destroy();
});

test('RequestHandler (Invalid API Key)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
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
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
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
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  client.requestHandler.setBaseURL(process.env.HYPIXEL_URL);
  expect(client.requestHandler.request).toBeDefined();
  expectTypeOf(client.requestHandler.request).toBeFunction();
  vi.spyOn(global, 'fetch').mockResolvedValue({
    ...defaultRequestData,
    status: 400,
    json: () => Promise.resolve({ success: false })
  } as any);
  await expect(() => client.requestHandler.request('/boosters')).rejects.toThrowError(
    Errors.ERROR_CODE_CAUSE.replace(/{code}/, '400 Bad Request').replace(/{cause}/, 'Unknown')
  );
  vi.restoreAllMocks();
  client.destroy();
});

test('RequestHandler (Unprocessable Entity)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
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
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
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
