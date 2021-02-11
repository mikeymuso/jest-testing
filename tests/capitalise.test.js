const { capitalise } = require('../index');

test('Capitalises first letter', () => {
  expect(capitalise('word')).toBe('Word');
});
