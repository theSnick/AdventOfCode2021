const part1 = require('./part1');
const horizontalPos = part1.posMethod;
const readFile = part1.fileMethod;

test('successful file read', () => {
  expect(readFile()).toBeDefined();
});

test('is defined', () => {
  expect(horizontalPos()).toBeDefined();
});
