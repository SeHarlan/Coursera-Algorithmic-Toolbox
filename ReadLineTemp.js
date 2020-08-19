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
    const n = parseInt(line.toString().split(' ')[0], 10);
    const m = parseInt(line.toString().split(' ')[1], 10);

    console.log(func(n, m));
    process.exit();
  }
}

function func() {

}

module.exports = func