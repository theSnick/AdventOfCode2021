function depthCheck() {
  let depthInc = 0;
  let prevDepth = null;
  let currDepth = null;
  const data = readFile();

  const depth = data.split("\n");

  for (let i = 0; i < depth.length; i++) {
    currDepth = parseInt(depth[i], 10);

    if (prevDepth && prevDepth < currDepth) {
      depthInc ++;
    }
    
    prevDepth = currDepth;
  }

  return depthInc;
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

console.log(depthCheck());

module.exports = depthCheck;
