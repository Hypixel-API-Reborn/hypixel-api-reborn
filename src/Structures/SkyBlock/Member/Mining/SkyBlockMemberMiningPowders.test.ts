import SkyBlockMemberMiningPowders from './SkyBlockMemberMiningPowders.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyBlockMemberMiningPowder from './SkyBlockMemberMiningPowder.js';

test('SkyBlockMemberMiningPowders', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberMiningPowders();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberMiningPowders);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberMiningPowders>();
  expect(data.mithril).toBeDefined();
  expectTypeOf(data.mithril).toEqualTypeOf<SkyBlockMemberMiningPowder>();
  expect(data.gemstone).toBeDefined();
  expectTypeOf(data.gemstone).toEqualTypeOf<SkyBlockMemberMiningPowder>();
  expect(data.glacite).toBeDefined();
  expectTypeOf(data.glacite).toEqualTypeOf<SkyBlockMemberMiningPowder>();
});
