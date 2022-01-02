function lifeSupportRating(input) {
  const data = readFile(input);
  const line = data.split("\n");

  let oxygen;
  let co2;

  function loop(x, line, common) {
    console.log(common);
    if (line.length === 1){
      if (common === 'most') {
        oxygen = line[0];
      } else {
        co2 = line[0];
      }
      return
    }
    // do stuff
    let ones = 0;
    let zeros = 0;

    for (let i = 0; i < line.length; i++) {
      if (line[i].charAt(x) === '1') {
        ones ++;
      } else {
        zeros ++;
      }
    }

    let newData = [];
    if (common === 'most') {
      if (ones >= zeros) {
        for (let i = 0; i < line.length; i++) {
          if (line[i].charAt(x) === '1') {
            newData.push(line[i]);
          }
        }
      } else {
        for (let i = 0; i < line.length; i++) {
          if (line[i].charAt(x) === '0') {
            newData.push(line[i]);
          }
        }
      }
    } else if (common === 'least') {
      if (ones >= zeros) {
        for (let i = 0; i < line.length; i++) {
          if (line[i].charAt(x) === '0') {
            newData.push(line[i]);
          }
        }
      } else {
        for (let i = 0; i < line.length; i++) {
          if (line[i].charAt(x) === '1') {
            newData.push(line[i]);
          }
        }
      }
    }
    
    loop(x + 1, newData, common); // the recursive call
  }

  loop(0, line, 'most');
  loop(0, line, 'least');

  oxygen = parseInt(oxygen, 2);
  co2 = parseInt(co2, 2);

  return oxygen * co2;
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

console.log(lifeSupportRating('./input.txt'));

module.exports = {
  supportMethod: lifeSupportRating,
  fileMethod: readFile
};