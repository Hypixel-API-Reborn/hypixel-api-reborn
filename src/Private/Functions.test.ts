import Client from '../Client.js';
import Functions from './Functions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Functions', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();
  expect(client.functions).toBeDefined();
  expectTypeOf(client.functions).toEqualTypeOf<Functions>();

  expect(client.functions.isUUID).toBeDefined();
  const valid = [
    'add71246c46e455c8345c129ea6f146c',
    '17ec71b4e5fa467481344b319a2958c3',
    '37501e7512b845ab8796e2baf9e9677a'
  ];
  const dashs = [
    'add71246-c46e-455c-8345-c129ea6f146c',
    '1ac8f319-1ac8-4c44-93ac-fcae2848cd9f',
    '337a48bf-57e9-44eb-8acb-83b885936e83'
  ];
  const Invalid = ['invalid', 'hello why are you here?', ''];

  valid.forEach((uuid) => {
    expect(client.functions.isUUID(uuid)).toBe(true);
    expectTypeOf(client.functions.isUUID(uuid)).toBeBoolean();
  });

  dashs.forEach((uuid) => {
    expect(client.functions.isUUID(uuid)).toBe(true);
    expectTypeOf(client.functions.isUUID(uuid)).toBeBoolean();
  });

  Invalid.forEach((uuid) => {
    expect(client.functions.isUUID(uuid)).toBe(false);
    expectTypeOf(client.functions.isUUID(uuid)).toBeBoolean();
  });

  expect(client.functions.isGuildID).toBeDefined();

  const ids = ['5b8dd8cb0cf24573ab84c9ad', '656618008ea8c9dca6f3668d', '5ba94ed50cf2cc24cf043706'];
  const idsInvalid = ['invalid', 'hello why are you here?', ''];

  ids.forEach((id) => {
    expect(client.functions.isGuildID(id)).toBe(true);
    expectTypeOf(client.functions.isGuildID(id)).toBeBoolean();
  });

  idsInvalid.forEach((id) => {
    expect(client.functions.isGuildID(id)).toBe(false);
    expectTypeOf(client.functions.isGuildID(id)).toBeBoolean();
  });
});
