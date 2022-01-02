function depthCheck(input) {
  let depthInc = 0;
  let prevDepth = null;
  let currDepth = null;
  const data = readFile(input);

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

function readFile(input) {
  const fs = require('fs')

  try {
    const data = fs.readFileSync(input, 'utf8');
    return data;
  } catch (err) {
    return err;
  }
}

console.log(depthCheck('./input.txt'));

module.exports = depthCheck;
