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

        console.log(getFibSum(n));
        process.exit();
    }
}

function getFibSum(n) {
    if (n <= 1) return n

    const remainder = (n) % 60
    return (fib(remainder + 2) + 9) % 10
}

function getFibSumNaive(n) {
    if (n <= 1) return n

    let a = 0;
    let b = 1;
    let c
    let sum = 1

    for (let i = 2; i <= n; i++) {
        c = (a + b) % 10;
        sum = (sum + c) % 10;
        a = b
        b = c
    }
    return sum
}

function fib(n) {
    const fib = [0, 1]
    for (let i = 1; i < n; i++) {
        fib.push((fib[i - 1] + fib[i]) % 10)
    }
    return fib[n]
}

// function stressTest() {
//     let bool = true
//     while (bool) {
//         const ranA = (Math.ceil(Math.random() * 500))

//         const getFibSumNaiveR = getFibSumNaive(ranA)
//         const getFibSumR = getFibSum(ranA)

//         console.log(ranA)
//         console.log('getFibSumNaive', getFibSumNaiveR)
//         console.log('getFibSum', getFibSumR)

//         if (getFibSumR !== getFibSumNaiveR) {
//             bool = false
//             console.log('!!!!!!not matched!!!!!!!!')
//         }
//     }
// }
// stressTest()

module.exports = getFibSum;
