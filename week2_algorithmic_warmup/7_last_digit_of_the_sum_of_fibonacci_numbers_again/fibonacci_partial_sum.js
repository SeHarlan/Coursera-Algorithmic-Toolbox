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
        const n = parseInt(line.toString().split(' ')[1], 10);

        console.log(getPartFibSum(m, n));
        process.exit();
    }
}

function getPartFibSumN(m, n) {
    if (n <= 1) return n
    if (m === 1) return fibLD(n + 2) - 1

    let a = 0;
    let b = 1;
    let c;
    let sum = 0

    for (let i = 2; i <= n; i++) {
        c = (a + b) % 10;
        a = b
        b = c

        if (i >= m) sum = sum + c;
    }
    return sum % 10
}

function getPartFibSum(m, n) {
    if (n <= 1) return n

    const from = m % 60
    const to = from + ((n - from) % 60)

    let sum = 0

    for (let i = from; i < to + 1; i++) {
        sum = sum + fibLD(i)
    }
    return sum % 10
}

function fibLD(n) {
    const fib = [0, 1]
    for (let i = 1; i < n; i++) {
        fib.push((fib[i - 1] + fib[i]) % 10)
    }
    return fib[n]
}

// function stressTest() {
//     let bool = true
//     while (bool) {
//         const ranA = (Math.ceil(Math.random() * 100))
//         const ranB = (Math.ceil(Math.random() * 5000))
//         console.log('================')
//         console.log(ranA)
//         console.log(ranB)

//         const getPartFibSumNR = getPartFibSumN(ranA, ranB)
//         const getPartFibSumR = getPartFibSum(ranA, ranB)

//         console.log('getPartFibSumNaiveR', getPartFibSumNR)
//         console.log('getPartFibSumR', getPartFibSumR)

//         if (getPartFibSumNR !== getPartFibSumR) {
//             bool = false
//             console.log('!!!!!!not matched!!!!!!!!')
//         }
//     }
// }
// stressTest()

module.exports = getPartFibSum;
