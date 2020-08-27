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

    const { parts, count } = diffSummands(m)

    process.stdout.write(`${count}\n${parts}\n`, () => {
      process.exit();
    })

  }
}

function diffSummands(m) {

  const parts = []
  let counter = 1

  while (m) {
    const attempt = m - counter

    if (attempt < 0) {
      const failedAttempt = parts.pop()
      m += failedAttempt
    } else if (attempt >= 0 && !parts.includes(counter)) {
      parts.push(counter)
      m = attempt
      counter++
    } else if (parts.includes(counter)) {
      counter++
    }
  }

  return { parts: parts.toString().replace(/,/g, ' '), count: parts.length }
}

module.exports = diffSummands