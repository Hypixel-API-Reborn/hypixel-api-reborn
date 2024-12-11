import Romanize from './Romanize.js';
import { expect, test } from 'vitest';

test('Romanize', () => {
  expect(Romanize('2')).toBe('II');
  expect(Romanize(128)).toBe('CXXVIII');
  expect(Romanize(500)).toBe('D');
  expect(Romanize('7')).toBe('VII');
});
