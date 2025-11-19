import SkyBlockMemberRiftVillagePlaza from './SkyBlockMemberRiftVillagePlaza.js';
import SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import SkyBlockMemberRiftVillagePlazaCowboy from './SkyBlockMemberRiftVillagePlazaCowboy.js';
import SkyBlockMemberRiftVillagePlazaMurder from './SkyBlockMemberRiftVillagePlazaMurder.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftVillagePlaza', () => {
  const data = new SkyBlockMemberRiftVillagePlaza({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlaza);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlaza>();
  expect(data.murder).toBeDefined();
  expect(data.murder).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaMurder);
  expectTypeOf(data.murder).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaMurder>();
  expect(data.barry).toBeDefined();
  expect(data.barry).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaBarry);
  expectTypeOf(data.barry).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaBarry>();
  expect(data.cowboy).toBeDefined();
  expect(data.cowboy).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaCowboy);
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
