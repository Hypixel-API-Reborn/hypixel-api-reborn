import ItemBytes from './ItemBytes.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ItemBytes', () => {
  const data = new ItemBytes({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(ItemBytes);
  expectTypeOf(data).toEqualTypeOf<ItemBytes>();
  expect(data.bytesBuffer).toBeDefined();
  expect(data.bytesBuffer).toBeInstanceOf(Buffer);
  expectTypeOf(data.bytesBuffer).toEqualTypeOf<Buffer>();
});
