import SkyBlockMemberRiftBlackLagoon from './SkyBlockMemberRiftBlackLagoon.js';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyBlockMemberRiftBlackLagoon', () => {
  const data = new SkyBlockMemberRiftBlackLagoon({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyBlockMemberRiftBlackLagoon);
  expectTypeOf(data).toEqualTypeOf<SkyBlockMemberRiftBlackLagoon>();
  expect(data.talkedToEdwin).toBeDefined();
  expectTypeOf(data.talkedToEdwin).toEqualTypeOf<boolean>();
  expect(data.receivedSciencePaper).toBeDefined();
  expectTypeOf(data.receivedSciencePaper).toEqualTypeOf<boolean>();
  expect(data.deliveredSciencePaper).toBeDefined();
  expectTypeOf(data.deliveredSciencePaper).toEqualTypeOf<boolean>();
  expect(data.completedStep).toBeDefined();
  expectTypeOf(data.completedStep).toEqualTypeOf<number>();
});
