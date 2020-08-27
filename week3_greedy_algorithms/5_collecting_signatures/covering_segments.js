// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const itemsCount = parseInt(line.toString().split(' ')[0], 10);
    const segments = [];
    let count = 0;

    rl.on('line', line => {
        const pair = readLine(line);
        segments.push(pair)

        if (++count >= itemsCount) {
            const { marks, length } = coveringSegments(segments)
            console.log(length);
            console.log(marks.toString().replace(/,/g, ' '))
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function coveringSegments(segments) {
    const sortedSegments = sort(segments)
    // console.log(sortedSegments)

    let currSegment = sortedSegments[0]

    const marks = []

    sortedSegments.forEach(segment => {
        if (segment[0] <= currSegment[1]) {
            const currSegStart = segment[0] > currSegment[0] ? segment[0] : currSegment[0]
            const currSegEnd = segment[1] < currSegment[1] ? segment[1] : currSegment[1]
            currSegment = [currSegStart, currSegEnd]
        } else {
            marks.push(currSegment[1])
            currSegment = segment
        }
    })

    marks.push(currSegment[1])

    return {
        marks,
        length: marks.length
    }
}
function sort(array) {
    let sortedCount = array.length
    if (sortedCount <= 1) return array

    while (sortedCount > 0) {
        for (let i = 0; i < array.length - 1; i++) {
            if (sortedCount <= 0) return array

            if (array[i][0] > array[i + 1][0]) {
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

module.exports = coveringSegments;
