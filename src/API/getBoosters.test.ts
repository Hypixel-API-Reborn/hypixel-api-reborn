import Booster from '../Structures/Boosters/Booster.js';
import Client from '../Client.js';
import Game from '../Structures/Game.js';
import RequestData from '../Private/RequestData.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { GameCode, GameID, GameString } from '../Types/Game.js';

test('getBoosters (raw)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  const data = await client.getBoosters({ raw: true });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(RequestData);
  expectTypeOf(data).toEqualTypeOf<Booster[] | RequestData>();
  client.destroy();
});

test('getBoosters', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getBoosters();
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<Booster[] | RequestData>();
  data = data as Booster[];
  data.forEach((booster: Booster) => {
    expect(booster).toBeDefined();
    expect(booster).toBeInstanceOf(Booster);
    expectTypeOf(booster).toEqualTypeOf<Booster>();
    expect(booster.purchaser).toBeDefined();
    expectTypeOf(booster.purchaser).toEqualTypeOf<string>();
    expect(booster.amount).toBeDefined();
    expectTypeOf(booster.amount).toEqualTypeOf<number>();
    expect(booster.originalLength).toBeDefined();
    expectTypeOf(booster.originalLength).toEqualTypeOf<number>();
    expect(booster.remaining).toBeDefined();
    expectTypeOf(booster.remaining).toEqualTypeOf<number>();
    expect(booster.activatedTimestamp).toBeDefined();
    expectTypeOf(booster.activatedTimestamp).toEqualTypeOf<number>();
    expect(booster.activated).toBeDefined();
    expectTypeOf(booster.activated).toEqualTypeOf<Date>();
    expect(booster.game).toBeDefined();
    expectTypeOf(booster.game).toEqualTypeOf<Game>();
    expect(booster.game).toBeDefined();
    expectTypeOf(booster.game).toEqualTypeOf<Game>();
    expect(booster.game.game).toBeDefined();
    expectTypeOf(booster.game.game).toEqualTypeOf<GameID | GameCode>();
    expect(booster.game.id).toBeDefined();
    expectTypeOf(booster.game.id).toEqualTypeOf<GameID | null>();
    expect(booster.game.code).toBeDefined();
    expectTypeOf(booster.game.code).toEqualTypeOf<GameCode | null>();
    expect(booster.game.name).toBeDefined();
    expectTypeOf(booster.game.name).toEqualTypeOf<GameString | null>();
    expect(booster.game.found).toBeDefined();
    expectTypeOf(booster.game.found).toEqualTypeOf<boolean>();
    expect(booster.game.toString()).toBeDefined();
    expect(booster.game.toString()).toBe(booster.game.name);
    expectTypeOf(booster.game.toString()).toEqualTypeOf<GameString | null>();
    expect(Game.IDS).toBeDefined();
    expectTypeOf(Game.IDS).toEqualTypeOf<GameID[]>();
    expect(Game.CODES).toBeDefined();
    expectTypeOf(Game.CODES).toEqualTypeOf<GameCode[]>();
    expect(Game.NAMES).toBeDefined();
    expectTypeOf(Game.NAMES).toEqualTypeOf<GameString[]>();
    expect(booster.isActive).toBeDefined();
    expectTypeOf(booster.isActive).toEqualTypeOf<boolean>();
    expect(booster.type).toBeDefined();
    expectTypeOf(booster.type).toEqualTypeOf<'STACKED' | 'QUEUED' | 'ACTIVE'>();
    expect(booster.stackers).toBeDefined();
    expectTypeOf(booster.stackers).toEqualTypeOf<string[]>();
    expect(booster.expired).toBeDefined();
    expectTypeOf(booster.expired).toEqualTypeOf<boolean>();
    expect(booster.toString()).toBeDefined();
    expectTypeOf(booster.toString()).toEqualTypeOf<string>();
  });
  client.destroy();
});