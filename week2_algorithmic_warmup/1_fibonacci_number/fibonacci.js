// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    const fib = [0, 1]
    for (let i = 1; i < n; i++) {
        fib.push(fib[i - 1] + fib[i])
    }
    return fib[n]
}

module.exports = fib;
