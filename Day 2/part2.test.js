const part2 = require('./part2');
const horizontalPos = part2.posMethod;
const readFile = part2.fileMethod;

test('successful file read', () => {
  expect(readFile('./test-input.txt')).toBeDefined();
});

test('is defined', () => {
  expect(horizontalPos('./test-input.txt')).toBeDefined();
});

test('test example input', () => {
  expect(horizontalPos('./test-input.txt')).toEqual(900);
});
