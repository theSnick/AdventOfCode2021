function powerConsumption(input) {
  const data = readFile(input);
  const line = data.split("\n");

  let values = {};
  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < line[i].length; j++) {
      if (values[j]) {
        values[j].push(line[i].charAt(j));
      } else {
        let tempData = [];
        tempData.push(line[i].charAt(j));
        values[j] = tempData;
      }
    }
  }

  for (var key in values) {
    let ones = 0;
    let zeros = 0;
    
    if (values.hasOwnProperty(key)) {
      let digit = values[key];

      for (let i = 0; i < digit.length; i++) {
        if (digit[i] === '1') {
          ones ++;
        } else {
          zeros ++;
        }
      }
    }

    if (ones > zeros) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  }
  
  gamma = parseInt(gamma, 2);
  epsilon = parseInt(epsilon, 2);

  return gamma * epsilon;
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

console.log(powerConsumption('./input.txt'));

module.exports = {
  powerMethod: powerConsumption,
  fileMethod: readFile
};