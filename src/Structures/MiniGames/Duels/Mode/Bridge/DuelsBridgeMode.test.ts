import DuelsBridgeMode from './DuelsBridgeMode.js';
import { expect, expectTypeOf, test } from 'vitest';

test('DuelsBridgeMode', () => {
  const data = new DuelsBridgeMode({ stats: 'meow' }, 'bridge');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(DuelsBridgeMode);
  expectTypeOf(data).toEqualTypeOf<DuelsBridgeMode>();
  expect(data.goals).toBeDefined();
  expect(data.goals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goals).toEqualTypeOf<number>();
});
