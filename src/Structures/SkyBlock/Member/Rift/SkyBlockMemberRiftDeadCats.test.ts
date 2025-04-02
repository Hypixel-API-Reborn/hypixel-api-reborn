import SkyBlockMemberRiftDeadCats from './SkyBlockMemberRiftDeadCats.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberPet from '../Pets/SkyBlockMemberPet.js';

test('SkyBlockMemberRiftDeadCats', () => {
  const data = new SkyBlockMemberRiftDeadCats({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftDeadCats);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftDeadCats>();
  expect(data.talkedToJacquelle).toBeDefined();
  expectTypeOf(data.talkedToJacquelle).toEqualTypeOf<boolean>();
  expect(data.pickedUpDetector).toBeDefined();
  expectTypeOf(data.pickedUpDetector).toEqualTypeOf<boolean>();
  expect(data.foundCats).toBeDefined();
  expectTypeOf(data.foundCats).toEqualTypeOf<string[]>();
  expect(data.unlockedPet).toBeDefined();
  expectTypeOf(data.unlockedPet).toEqualTypeOf<boolean>();
  expect(data.montezuma).toBeDefined();
  expectTypeOf(data.montezuma).toEqualTypeOf<SkyBlockMemberPet>();
});
