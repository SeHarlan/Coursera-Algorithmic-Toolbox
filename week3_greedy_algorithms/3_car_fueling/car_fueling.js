// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
  const distance = parseInt(line.toString().split(' ')[0], 10)

  let tank, stopCount, stops

  rl.on('line', line => {
    if (!tank) {
      tank = parseInt(line.toString().split(' ')[0], 10)
    } else if (!stopCount) {
      stopCount = parseInt(line.toString().split(' ')[0], 10)
    } else {
      stops = line.toString().split(' ').map(Number)
      console.log(func(distance, tank, stops))
      process.exit()
    }
  })
})



function func(distance, tank, stops) {
  const path = [0, ...stops, distance]
  let count = 0
  let startIndex = 0
  let distanceTraveled = distance

  while (distance > 0) {
    for (let i = startIndex; i <= path.length; i++) {
      if (path[i] - path[startIndex] > tank) {
        if (startIndex === i - 1) return -1

        distanceTraveled = path[i - 1] - path[startIndex]
        startIndex = i - 1
        count++
        break;
      }
    }
    distance = distance - distanceTraveled
  }
  return count
}
module.exports = func