const depthCheck = require('./part1');
const readFile = require('./part1');

test('successful file read', () => {
  expect(readFile('./test-input.txt')).toBeDefined();
});

test('is depth truthy', () => {
  expect(depthCheck('./test-input.txt')).toBeDefined();
});

test('not negative', () => {
  expect(depthCheck('./test-input.txt')).toBeGreaterThan(0);
});

test('test example input', () => {
  expect(depthCheck('./test-input.txt')).toEqual(7);
});