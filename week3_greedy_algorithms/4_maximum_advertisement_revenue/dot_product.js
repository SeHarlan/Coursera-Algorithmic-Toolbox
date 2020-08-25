// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const count = parseInt(line.toString().split(' ')[0], 10);
    let profits, clicks

    rl.on('line', line => {
        if (!profits) {
            profits = line.toString().split(' ').map(Number);
        } else if (!clicks) {
            clicks = line.toString().split(' ').map(Number);
            console.log(dotProduct(profits, clicks))
            process.exit()
        }
    });
});


function dotProduct(profits, clicks) {
    const sortedProfits = sort(profits)
    const sortedClicks = sort(clicks)
    let total = 0

    sortedProfits.forEach((profit, i) => {
        total += profit * sortedClicks[i]
    })

    return total
}


function sort(array) {
    let sortedCount = array.length
    if (sortedCount <= 1) return array

    while (sortedCount > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            if (sortedCount <= 0) return array

            if (array[i] < array[i + 1]) {
                const curr = array[i]
                const next = array[i + 1]
                array[i] = next
                array[i + 1] = curr

                sortedCount = array.length
            }
            sortedCount += -1

        }
    }
    return array
}

module.exports = dotProduct;
