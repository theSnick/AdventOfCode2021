function horizontalPos() {
  const data = readFile();
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

function readFile() {
  const fs = require('fs')

  try {
    const data = fs.readFileSync('./input.txt', 'utf8');
    return data;
  } catch (err) {
    return err;
  }
}

console.log(horizontalPos());

module.exports = {
  posMethod: horizontalPos,
  fileMethod: readFile
};