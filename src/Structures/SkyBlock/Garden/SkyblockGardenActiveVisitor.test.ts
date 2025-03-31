import SkyblockGardenActiveVisitor from './SkyblockGardenActiveVisitor.js';
import SkyblockGardenActiveVisitorRequirement from './SkyblockGardenActiveVisitorRequirement.js';
import { expect, expectTypeOf, test } from 'vitest';
import type { VisitorStatus } from '../../../Types/Skyblock.js';

test('SkyblockGardenActiveVisitor', () => {
  const data = new SkyblockGardenActiveVisitor({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGardenActiveVisitor);
  expectTypeOf(data).toEqualTypeOf<SkyblockGardenActiveVisitor>();
  expect(data.visitor).toBeDefined();
  expectTypeOf(data.visitor).toEqualTypeOf<string>();
  expect(data.requirements).toBeDefined();
  expectTypeOf(data.requirements).toEqualTypeOf<SkyblockGardenActiveVisitorRequirement[]>();
  expect(data.status).toBeDefined();
  expectTypeOf(data.status).toEqualTypeOf<VisitorStatus | 'UNKNOWN'>();
  expect(data.position).toBeDefined();
  expectTypeOf(data.position).toEqualTypeOf<number>();
  expect(data.toString).toBeDefined();
  expectTypeOf(data.toString).toEqualTypeOf<() => string>();
  expect(data.toString()).toBeDefined();
  expect(data.toString()).toEqual(data.visitor);
  expectTypeOf(data.toString()).toEqualTypeOf<string>();
});
