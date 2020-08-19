// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    let maxValue = 0
    const indexArray = values.map((value, i) => {
        return {
            index: i,
            calculatedValue: value / weights[i]
        }
    })

    const sortedArray = sort(indexArray)

    sortedArray.forEach(({ index }) => {
        if (capacity === 0) return maxValue

        const weight = weights[index]
        const value = values[index]
        const maxWeight = capacity - weight

        if (maxWeight >= 0) {
            capacity = maxWeight
            maxValue += value
        } else {
            const newWeight = maxWeight + weight
            const newValue = (value * (newWeight / weight))
            capacity = capacity - newWeight
            maxValue += Number(newValue.toFixed(4))
        }
    })
    return maxValue
}


function sort(array) {
    let sortedCount = array.length
    if (sortedCount <= 1) return array

    while (sortedCount > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            if (sortedCount <= 0) return array

            if (array[i].calculatedValue < array[i + 1].calculatedValue) {
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

module.exports = max;
