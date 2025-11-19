import GuildRank from './GuildRank.js';
import { expect, expectTypeOf, test } from 'vitest';

test('GuildRank', () => {
  const data = new GuildRank({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(GuildRank);
  expectTypeOf(data).toEqualTypeOf<GuildRank>();
  expect(data.name).toBeDefined();
  expectTypeOf(data.name).toEqualTypeOf<string>();
  expect(data.default).toBeDefined();
  expectTypeOf(data.default).toEqualTypeOf<boolean>();
  expect(data.tag).toBeDefined();
  expectTypeOf(data.tag).toEqualTypeOf<string | null>();
  expect(data.createdAtTimestamp).toBeDefined();
  expectTypeOf(data.createdAtTimestamp).toEqualTypeOf<number | null>();
  expect(data.createdAt).toBeDefined();
  expectTypeOf(data.createdAt).toEqualTypeOf<Date | null>();
  expect(data.priority).toBeDefined();
  expect(data.priority).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.priority).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toBe(data.name);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
