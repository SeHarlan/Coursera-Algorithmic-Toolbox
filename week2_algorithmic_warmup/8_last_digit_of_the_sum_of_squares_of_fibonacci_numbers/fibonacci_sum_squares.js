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

        console.log(getFibSumSq(n));
        process.exit();
    }
}

function getFibSumSqN(n) {
    if (n <= 1) return n

    let a = 0;
    let b = 1;
    let c

    for (let i = 2; i <= n; i++) {
        c = ((a) + (b)) % 10;
        a = b
        b = c
    }
    return (b * (a + b)) % 10
}

function getFibSumSq(n) {
    if (n <= 1) return n

    const remainder = n % 60

    if (remainder <= 1) return remainder

    let a = 0;
    let b = 1;
    let c;

    for (let i = 2; i <= remainder; i++) {
        c = ((a) + (b)) % 10;
        a = b
        b = c
    }
    return (b * (a + b)) % 10
}

// function stressTest() {
//     let bool = true
//     while (bool) {
//         const ranA = (Math.ceil(Math.random() * 500))

//         const getFibSumSqNaiveR = getFibSumSqN(ranA)
//         const getFibSumSqR = getFibSumSq(ranA)

//         console.log(ranA)
//         console.log('getFibSumNaive', getFibSumSqNaiveR)
//         console.log('getFibSum', getFibSumSqR)

//         if (getFibSumSqNaiveR !== getFibSumSqR) {
//             bool = false
//             console.log('!!!!!!not matched!!!!!!!!')
//         }
//     }
// }
// stressTest()

module.exports = getFibSumSq;
