const part1 = require('./part1');
const horizontalPos = part1.posMethod;
const readFile = part1.fileMethod;

test('successful file read', () => {
  expect(readFile('./test-input.txt')).toBeDefined();
});

test('is defined', () => {
  expect(horizontalPos('./test-input.txt')).toBeDefined();
});

test('test example input', () => {
  expect(horizontalPos('./test-input.txt')).toEqual(150);
});
