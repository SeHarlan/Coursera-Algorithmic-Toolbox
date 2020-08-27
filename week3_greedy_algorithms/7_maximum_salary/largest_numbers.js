// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const count = parseInt(line.toString().split(' ')[0], 10);

    rl.on('line', line => {
        const integers = line.toString().split(' ').map(Number);
        console.log(maxSalary(integers))
        process.exit()
    });
});


function maxSalary(numbers) {

    const stringIntegers = numbers.map(n => {
        return String(n).split('')
    });
    const sortedInts = sort(stringIntegers)

    return sortedInts.flat().join().replace(/,/g, '')
}


function sort(array) {
    let sortedCount = array.length
    if (sortedCount <= 1) return array

    while (sortedCount > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            if (sortedCount <= 0) return array

            const number1 = Number(array[i][0])
            const number2 = Number(array[i + 1][0])

            if (number1 === number2) {

                let num1b = Number(array[i][1])
                let num2b = Number(array[i + 1][1])

                if (!num1b && num1b !== 0) num1b = number1
                if (!num2b && num2b !== 0) num2b = number2

                if (num1b === num2b) {

                    let num1c = Number(array[i][2])
                    let num2c = Number(array[i + 1][2])

                    if (!num1c && num1c !== 0) num1c = num1b
                    if (!num2c && num2c !== 0) num2c = num2b

                    if (num1c === num2c) {

                        let num1d = Number(array[i][3])
                        let num2d = Number(array[i + 1][3])

                        if (!num1d && num1d !== 0) num1d = num1c
                        if (!num2d && num2d !== 0) num2d = num2c

                        if (num1d < num2d) {
                            const curr = array[i]
                            const next = array[i + 1]
                            array[i] = next
                            array[i + 1] = curr
                            sortedCount = array.length
                        }
                    } else if (num1c < num2c) {
                        const curr = array[i]
                        const next = array[i + 1]
                        array[i] = next
                        array[i + 1] = curr
                        sortedCount = array.length
                    }
                } else if (num1b < num2b) {
                    const curr = array[i]
                    const next = array[i + 1]
                    array[i] = next
                    array[i + 1] = curr
                    sortedCount = array.length
                }
            } else if (number1 < number2) {
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

module.exports = maxSalary;
