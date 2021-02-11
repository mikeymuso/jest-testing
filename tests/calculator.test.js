const { calculator } = require('../index');

test('Math obj: add', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('Math obj: subtract', () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test('Math obj: multiply', () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test('Math obj: divide', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
