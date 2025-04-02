import SkyBlockMemberRiftVillagePlazaBarry from './SkyBlockMemberRiftVillagePlazaBarry.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftVillagePlazaBarry', () => {
  const data = new SkyBlockMemberRiftVillagePlazaBarry({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftVillagePlazaBarry);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftVillagePlazaBarry>();
  expect(data.firstTalkToBarry).toBeDefined();
  expectTypeOf(data.firstTalkToBarry).toEqualTypeOf<boolean>();
  expect(data.convinced).toBeDefined();
  expectTypeOf(data.convinced).toEqualTypeOf<boolean>();
  expect(data.receivedReward).toBeDefined();
  expectTypeOf(data.receivedReward).toEqualTypeOf<boolean>();
});
