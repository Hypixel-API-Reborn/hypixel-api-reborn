import SkyblockMemberRiftBlackLagoon from './SkyblockMemberRiftBlackLagoon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyblockMemberRiftBlackLagoon', () => {
  const data = new SkyblockMemberRiftBlackLagoon({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockMemberRiftBlackLagoon);
  expectTypeOf(data).toEqualTypeOf<SkyblockMemberRiftBlackLagoon>();
  expect(data.talkedToEdwin).toBeDefined();
  expectTypeOf(data.talkedToEdwin).toEqualTypeOf<boolean>();
  expect(data.receivedSciencePaper).toBeDefined();
  expectTypeOf(data.receivedSciencePaper).toEqualTypeOf<boolean>();
  expect(data.deliveredSciencePaper).toBeDefined();
  expectTypeOf(data.deliveredSciencePaper).toEqualTypeOf<boolean>();
  expect(data.completedStep).toBeDefined();
  expectTypeOf(data.completedStep).toEqualTypeOf<number>();
});
