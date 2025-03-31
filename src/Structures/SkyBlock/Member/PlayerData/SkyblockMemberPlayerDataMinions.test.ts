import SkyblockMemberPlayerDataMinions from './SkyblockMemberPlayerDataMinions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberPlayerDataMinions', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyblockMemberPlayerDataMinions();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberPlayerDataMinions);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberPlayerDataMinions>();
});
