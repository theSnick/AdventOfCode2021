function depthCheck() {
  let depthInc = 0;
  let prevSum = null;
  let currSum = 0;
  const data = readFile();

  const depth = data.split("\n");

  for (let i = 0; i < depth.length; i++) {
    currSum = parseInt(depth[i], 10) + parseInt(depth[i+1], 10) + parseInt(depth[i+2], 10);
    
    if (prevSum && prevSum < currSum){
      depthInc ++;
    }
    prevSum = currSum;
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
