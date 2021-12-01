const depthCheck = require('./part1');
const readFile = require('./part1');

test('successful file read', () => {
  expect(readFile()).toBeDefined();
});

test('is depth truthy', () => {
  expect(depthCheck()).toBeDefined();
});

test('not negative', () => {
  expect(depthCheck()).toBeGreaterThan(0);
})