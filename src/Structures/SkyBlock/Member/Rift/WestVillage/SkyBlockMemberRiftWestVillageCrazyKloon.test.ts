import SkyBlockMemberRiftWestVillageCrazyKloon from './SkyBlockMemberRiftWestVillageCrazyKloon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftWestVillageCrazyKloon', () => {
  const data = new SkyBlockMemberRiftWestVillageCrazyKloon({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftWestVillageCrazyKloon);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftWestVillageCrazyKloon>();
  expect(data.selectedColors).toBeDefined();
  expectTypeOf(data.selectedColors).toEqualTypeOf<Record<string, string>>();
  expect(data.talked).toBeDefined();
  expectTypeOf(data.talked).toEqualTypeOf<boolean>();
  expect(data.hackedTerminals).toBeDefined();
  expectTypeOf(data.hackedTerminals).toEqualTypeOf<string[]>();
  expect(data.questComplete).toBeDefined();
  expectTypeOf(data.questComplete).toEqualTypeOf<boolean>();
});
