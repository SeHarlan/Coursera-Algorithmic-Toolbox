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
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);
        console.log(lcmFast(a, b))
        process.exit();
    }
}

// function lcm(a, b) {
//     for (let i = 1; i <= a * b; i++) {
//         if (i % a === 0 && i % b === 0) return i
//     }
//     return a * b;
// }

function lcmFast(a, b) {
    return (a * b) / gcd(a, b)
}


function gcd(a, b) {
    if (b === 0) return a
    const aPrime = a % b
    return gcd(b, aPrime)
}

// function stressTest() {
//     let bool = true
//     while (bool) {
//         const ranA = (Math.ceil(Math.random() * 20))
//         const ranB = (Math.ceil(Math.random() * 10))

//         const lcmR = lcm(ranA, ranB)
//         const lcmFastR = lcmFast(ranA, ranB)

//         console.log(ranA, ranB)
//         console.log('lcm', lcmR)
//         console.log('lcmFast', lcmFastR)

//         if (lcmR !== lcmFastR) {
//             bool = false
//             console.log('not matched')
//         }
//     }
// }
// stressTest()

module.exports = lcmFast;
