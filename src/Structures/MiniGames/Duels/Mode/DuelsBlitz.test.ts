import DuelsBlitz from './DuelsBlitz.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { DuelsModeBlitzKitId } from '../../../../Types/index.js';

test('DuelsBlitz', () => {
  const data = new DuelsBlitz({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsBlitz);
  expectTypeOf(data).toEqualTypeOf<DuelsBlitz>();
  expect(data.selectedKit).toBeDefined();
  expectTypeOf(data.selectedKit).toEqualTypeOf<DuelsModeBlitzKitId | 'UNKNOWN'>();
});
