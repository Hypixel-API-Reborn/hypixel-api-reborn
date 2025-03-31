import SkyblockMemberRiftVillagePlaza from './SkyblockMemberRiftVillagePlaza.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberRiftVillagePlazaBarry from './SkyblockMemberRiftVillagePlazaBarry.js';
import type SkyblockMemberRiftVillagePlazaCowboy from './SkyblockMemberRiftVillagePlazaCowboy.js';
import type SkyblockMemberRiftVillagePlazaMurder from './SkyblockMemberRiftVillagePlazaMurder.js';

test('SkyblockMemberRiftVillagePlaza', () => {
  const data = new SkyblockMemberRiftVillagePlaza({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftVillagePlaza);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftVillagePlaza>();
  expect(data.murder).toBeDefined();
  expectTypeOf(data.murder).toEqualTypeOf<SkyblockMemberRiftVillagePlazaMurder>();
  expect(data.barry).toBeDefined();
  expectTypeOf(data.barry).toEqualTypeOf<SkyblockMemberRiftVillagePlazaBarry>();
  expect(data.cowboy).toBeDefined();
  expectTypeOf(data.cowboy).toEqualTypeOf<SkyblockMemberRiftVillagePlazaCowboy>();
  expect(data.barterBank).toBeDefined();
  expectTypeOf(data.barterBank).toEqualTypeOf<Record<string, any>>();
  expect(data.lonely).toBeDefined();
  expectTypeOf(data.lonely).toEqualTypeOf<Record<string, any>>();
  expect(data.seraphine).toBeDefined();
  expectTypeOf(data.seraphine).toEqualTypeOf<Record<string, any>>();
  expect(data.gotScammed).toBeDefined();
  expectTypeOf(data.gotScammed).toEqualTypeOf<boolean>();
});
