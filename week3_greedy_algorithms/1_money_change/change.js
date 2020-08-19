// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  if (line !== "\n") {
    const m = parseInt(line.toString().split(' ')[0], 10);

    console.log(getChange(m));
    process.exit();
  }
}

function getChange(m) {
  let coins = 0;
  while (m > 0) {
    if (m >= 10) {
      m = m - 10
    } else if (m >= 5) {
      m = m - 5
    } else {
      m = m - 1
    }
    coins++;
  }
  return coins
}

module.exports = getChange