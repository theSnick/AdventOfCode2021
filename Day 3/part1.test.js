const part1 = require('./part1');
const powerConsumption = part1.powerMethod;
const readFile = part1.fileMethod;

test('successful file read', () => {
  expect(readFile('./test-input.txt')).toBeDefined();
});

test('is defined', () => {
  expect(powerConsumption('./test-input.txt')).toBeDefined();
});

test('test example input', () => {
  expect(powerConsumption('./test-input.txt')).toEqual(198);
});
