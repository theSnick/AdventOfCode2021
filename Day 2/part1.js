function horizontalPos(input) {
  const data = readFile(input);
  const line = data.split("\n");

  let horizontal = 0;
  let vertical = 0;

  for (let i = 0; i < line.length; i++) {
    let move = line[i].split(' ');
    if (move[0] === 'forward'){
      horizontal += parseInt(move[1], 10);
    } else if (move[0] === 'down') {
      vertical += parseInt(move[1], 10);
    } else if (move[0] === 'up') {
      vertical -= parseInt(move[1], 10);
    }
  }

  return horizontal*vertical;
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

console.log(horizontalPos('./input.txt'));

module.exports = {
  posMethod: horizontalPos,
  fileMethod: readFile
};