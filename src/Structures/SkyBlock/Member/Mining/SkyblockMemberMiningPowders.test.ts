import SkyblockMemberMiningPowders from './SkyblockMemberMiningPowders.js';
import { expect, expectTypeOf, test } from 'vitest';
import type SkyblockMemberMiningPowder from './SkyblockMemberMiningPowder.js';

test('SkyblockMemberMiningPowders', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberMiningPowders();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberMiningPowders);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberMiningPowders>();
  expect(data.mithril).toBeDefined();
  expectTypeOf(data.mithril).toEqualTypeOf<SkyblockMemberMiningPowder>();
  expect(data.gemstone).toBeDefined();
  expectTypeOf(data.gemstone).toEqualTypeOf<SkyblockMemberMiningPowder>();
  expect(data.glacite).toBeDefined();
  expectTypeOf(data.glacite).toEqualTypeOf<SkyblockMemberMiningPowder>();
});
