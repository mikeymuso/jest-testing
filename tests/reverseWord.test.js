const { reverse } = require('../index');

test('Reverse word', () => {
  expect(reverse('word')).toBe('drow');
});
