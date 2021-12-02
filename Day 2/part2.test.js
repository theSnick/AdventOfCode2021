const part2 = require('./part2');
const horizontalPos = part2.posMethod;
const readFile = part2.fileMethod;

test('successful file read', () => {
  expect(readFile()).toBeDefined();
});

test('is defined', () => {
  expect(horizontalPos()).toBeDefined();
});
