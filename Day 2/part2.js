function position(input) {
  const data = readFile(input);
  const line = data.split("\n");
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < line.length; i++) {
    let move = line[i].split(' ');
    if (move[0] === 'forward'){
      horizontal += parseInt(move[1], 10);
      depth += aim * parseInt(move[1], 10);
    } else if (move[0] === 'down') {
      aim += parseInt(move[1], 10);
    } else if (move[0] === 'up') {
      aim -= parseInt(move[1], 10);
    }
  }

  return horizontal*depth;
}

function readFile(input) {
  const fs = require('fs')

  try {
    const data = fs.readFileSync(input, 'utf8');
    return data;
  } catch (err) {
    return err;
  }
}

console.log(position('./input.txt'));

module.exports = {
  posMethod: position,
  fileMethod: readFile
};