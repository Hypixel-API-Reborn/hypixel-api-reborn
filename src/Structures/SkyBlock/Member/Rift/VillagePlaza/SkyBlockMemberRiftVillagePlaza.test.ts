import SkyBlockMemberRiftVillagePlaza from './SkyBlockMemberRiftVillagePlaza.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import type SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import type SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';

test('SkyBlockMemberRiftVillagePlaza', () => {
  const data = new SkyBlockMemberRiftVillagePlaza({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlaza);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlaza>();
  expect(data.murder).toBeDefined();
  expectTypeOf(data.murder).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaMurder>();
  expect(data.barry).toBeDefined();
  expectTypeOf(data.barry).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaBarry>();
  expect(data.cowboy).toBeDefined();
  expectTypeOf(data.cowboy).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaCowboy>();
  expect(data.barterBank).toBeDefined();
  expectTypeOf(data.barterBank).toEqualTypeOf<Record<string, any>>();
  expect(data.lonely).toBeDefined();
  expectTypeOf(data.lonely).toEqualTypeOf<Record<string, any>>();
  expect(data.seraphine).toBeDefined();
  expectTypeOf(data.seraphine).toEqualTypeOf<Record<string, any>>();
  expect(data.gotScammed).toBeDefined();
  expectTypeOf(data.gotScammed).toEqualTypeOf<boolean>();
});
