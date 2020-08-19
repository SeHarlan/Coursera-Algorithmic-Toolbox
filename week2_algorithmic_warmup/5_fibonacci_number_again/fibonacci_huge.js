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

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function getPisanoPeriod(m) {
    if (m < 2) return m

    let a = 0;
    let b = 1;
    let c;
    for (let i = 0; i < m * m; i++) {
        c = (a + b) % m;
        a = b
        b = c
        if (a === 0 && b === 1) return i + 1;
    }
}

function getFibMod(n, m) {
    const remainder = n % getPisanoPeriod(m)

    let a = 0;
    let b = 1;
    let c = remainder

    for (let i = 1; i < remainder; i++) {
        c = (a + b) % m;
        a = b
        b = c
    }
    return c
}

module.exports = getFibMod;
