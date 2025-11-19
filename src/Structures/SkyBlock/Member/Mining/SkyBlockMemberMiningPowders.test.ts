import SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.js';
import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberMiningPowders', () => {
  const data = new SkyBlockMemberMiningPowders({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningPowders);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningPowders>();
  expect(data.mithril).toBeDefined();
  expect(data.mithril).toBeInstanceOf(SkyBlockMemberMiningPowder);
  expectTypeOf(data.mithril).toEqualTypeOf<SkyBlockMemberMiningPowder>();
  expect(data.gemstone).toBeDefined();
  expect(data.gemstone).toBeInstanceOf(SkyBlockMemberMiningPowder);
  expectTypeOf(data.gemstone).toEqualTypeOf<SkyBlockMemberMiningPowder>();
  expect(data.glacite).toBeDefined();
  expect(data.glacite).toBeInstanceOf(SkyBlockMemberMiningPowder);
  expectTypeOf(data.glacite).toEqualTypeOf<SkyBlockMemberMiningPowder>();
});
