// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine(line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
    let maxIndex1, maxIndex2

    arr.forEach((num, index) => {
        if (num > arr[maxIndex1] || !maxIndex1) maxIndex1 = index
    })

    arr.forEach((num, index) => {
        if (index === maxIndex1) return
        if (num > arr[maxIndex2] || !maxIndex2) maxIndex2 = index
    })

    const sum = arr[maxIndex1] * arr[maxIndex2]

    return sum
}

module.exports = max;
