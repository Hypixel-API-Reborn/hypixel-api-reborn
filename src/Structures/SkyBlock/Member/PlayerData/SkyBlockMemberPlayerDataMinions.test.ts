import SkyBlockMemberPlayerDataMinions from './SkyBlockMemberPlayerDataMinions.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberPlayerDataMinions', () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = new SkyBlockMemberPlayerDataMinions();
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberPlayerDataMinions);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberPlayerDataMinions>();
});
