const { decipher } = require('../index');

test('Decipher text: standard', () => {
  expect(decipher('abc', 1)).toBe('bcd');
});

test('Decipher text: moving more characters', () => {
  expect(decipher('abc', 3)).toBe('def');
});

test('Decipher text: letter-wrapping', () => {
  expect(decipher('xyz', 1)).toBe('yza');
});

test('Decipher text: same case', () => {
  expect(decipher('abc', 0)).toBe('abc');
});

test('Decipher text: punctuation', () => {
  expect(decipher('a,bc!', 1)).toBe('b,cd!');
});
