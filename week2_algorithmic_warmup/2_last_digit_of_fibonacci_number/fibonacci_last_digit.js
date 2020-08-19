// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    const n = parseInt(line, 10)
    console.log(fib(n));
    process.exit();
}

function fib(n) {
    const fib = [0, 1]
    for (let i = 1; i < n; i++) {
        fib.push((fib[i - 1] + fib[i]) % 10)
    }
    return fib[n]
}

module.exports = fib;
