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

function func(n, m) {

}

module.exports = func

// //multi line
// rl.once('line', line => {
//   const distance = parseInt(line.toString().split(' ')[0], 10)

//   let tank, stopCount, stops

//   rl.on('line', line => {
//     if (!tank) {
//       tank = parseInt(line.toString().split(' ')[0], 10)
//     } else if (!stopCount) {
//       stopCount = parseInt(line.toString().split(' ')[0], 10)
//     } else {
//       stops = line.toString().split(' ').map(Number)
//       console.log(func(distance, tank, stops))
//       process.exit()
//     }
//   })
// })